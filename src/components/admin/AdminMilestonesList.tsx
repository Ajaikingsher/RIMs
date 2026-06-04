"use client"

import { useState, useEffect } from "react"
import { Landmark, Edit2, Trash2, Plus, GripVertical, Loader2 } from "lucide-react"
import { deleteMilestone, updateMilestoneOrder } from "@/lib/supabase/actions"
import AdminMilestonesForm from "./AdminMilestonesForm"
import { Button } from "@/components/ui/button"
import ConfirmModal from "./ConfirmModal"
import { toast } from "sonner"
import Image from "next/image"

// DND imports
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  DragEndEvent
} from '@dnd-kit/core'
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
  useSortable
} from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'

// --- Sortable Item Component ---
function SortableMilestoneItem({ milestone, onEdit, onDelete }: { 
  milestone: any, 
  onEdit: (m: any) => void, 
  onDelete: (id: string) => void
}) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging
  } = useSortable({ id: milestone.id })

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    zIndex: isDragging ? 1 : 0,
    opacity: isDragging ? 0.5 : 1,
  }

  return (
    <div 
      ref={setNodeRef} 
      style={style}
      {...attributes}
      {...listeners}
      className={`bg-white rounded-xl border ${isDragging ? 'border-secondary shadow-lg scale-[1.02]' : 'border-gray-200'} p-4 shadow-sm flex items-center gap-4 group transition-all cursor-grab active:cursor-grabbing`}
    >
      <div className="p-2 text-gray-300 group-hover:text-secondary transition-colors">
        <GripVertical className="w-5 h-5" />
      </div>
      
      <div className="w-16 h-12 relative rounded-lg overflow-hidden shrink-0 border border-gray-100 bg-gray-50">
        <Image 
          fill
          src={milestone.image} 
          alt={milestone.title} 
          className="object-cover"
        />
      </div>

      <div className="flex-grow min-w-0">
        <h3 className="font-heading font-bold text-primary truncate">{milestone.title}</h3>
        <p className="text-sm text-gray-500 line-clamp-1">{milestone.description}</p>
      </div>

      <div className="flex gap-2">
        <Button 
          variant="outline" 
          size="sm" 
          className="rounded-lg h-9 w-9 p-0 border-gray-200 hover:bg-gray-50"
          onClick={(e) => {
            e.stopPropagation()
            onEdit(milestone)
          }}
        >
          <Edit2 className="w-4 h-4 text-gray-600" />
        </Button>
        <Button 
          variant="destructive" 
          size="sm" 
          className="rounded-lg h-9 w-9 p-0 bg-red-50 border-red-100 hover:bg-red-100"
          onClick={(e) => {
            e.stopPropagation()
            onDelete(milestone.id)
          }}
        >
          <Trash2 className="w-4 h-4 text-red-600" />
        </Button>
      </div>
    </div>
  )
}

// --- Main Component ---
export default function AdminMilestonesList({ initialMilestones }: { initialMilestones: any[] }) {
  const [milestones, setMilestones] = useState(initialMilestones)
  const [isFormOpen, setIsFormOpen] = useState(false)
  const [editingMilestone, setEditingMilestone] = useState<any>(null)
  const [deleteId, setDeleteId] = useState<string | null>(null)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    setMilestones(initialMilestones)
  }, [initialMilestones])

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 8,
      },
    }),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  )

  const handleDragEnd = async (event: DragEndEvent) => {
    const { active, over } = event

    if (over && active.id !== over.id) {
      setMilestones((items) => {
        const oldIndex = items.findIndex((item) => item.id === active.id)
        const newIndex = items.findIndex((item) => item.id === over.id)
        const newItems = arrayMove(items, oldIndex, newIndex)
        
        const orderUpdate = newItems.map((item, index) => ({
          id: item.id,
          order: index
        }))

        updateMilestoneOrder(orderUpdate).catch(() => {
          toast.error("Failed to save order")
          setMilestones(items)
        })

        return newItems
      })
      toast.success("Order updated")
    }
  }

  const handleEdit = (milestone: any) => {
    setEditingMilestone(milestone)
    setIsFormOpen(true)
  }

  const handleDeleteRequest = (id: string) => {
    setDeleteId(id)
  }

  const handleConfirmDelete = async () => {
    if (!deleteId) return
    setIsDeleting(true)
    try {
      await deleteMilestone(deleteId)
      setMilestones(milestones.filter(m => m.id !== deleteId))
      toast.success("Slide removed")
    } catch (err) {
      toast.error("Failed to remove slide")
    } finally {
      setIsDeleting(false)
      setDeleteId(null)
    }
  }

  const handleClose = () => {
    setIsFormOpen(false)
    setEditingMilestone(null)
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between bg-white p-4 rounded-2xl border border-gray-200 shadow-sm">
        <div className="text-sm text-gray-500">
          <span className="font-semibold text-primary">{milestones.length}</span> Slides. Drag to reorder.
        </div>
        <Button 
          onClick={() => setIsFormOpen(true)}
          className="bg-secondary hover:bg-secondary/90 text-white gap-2 rounded-full px-6"
        >
          <Plus className="w-4 h-4" /> Add New Slide
        </Button>
      </div>

      {isFormOpen && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
          <AdminMilestonesForm initialData={editingMilestone} onClose={handleClose} />
        </div>
      )}

      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragEnd={handleDragEnd}
      >
        <SortableContext
          items={milestones.map(m => m.id)}
          strategy={verticalListSortingStrategy}
        >
          <div className="grid grid-cols-1 gap-4">
            {milestones.length === 0 ? (
              <div className="bg-white rounded-2xl border border-dashed border-gray-300 p-12 text-center">
                <Landmark className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                <p className="text-gray-500 font-medium">No slideshow milestones found.</p>
              </div>
            ) : (
              milestones.map((milestone) => (
                <SortableMilestoneItem 
                  key={milestone.id} 
                  milestone={milestone} 
                  onEdit={handleEdit} 
                  onDelete={handleDeleteRequest} 
                />
              ))
            )}
          </div>
        </SortableContext>
      </DndContext>

      <ConfirmModal
        isOpen={!!deleteId}
        onClose={() => setDeleteId(null)}
        onConfirm={handleConfirmDelete}
        loading={isDeleting}
        title="Remove Slide"
        message="Are you sure you want to remove this slide from the slideshow?"
      />
    </div>
  )
}
