"use client"

import { useState, useEffect } from "react"
import { Users, Edit2, Trash2, Plus, GripVertical, Loader2, Eye, EyeOff } from "lucide-react"
import { deleteLeadership, updateLeadershipOrder, toggleLeadershipVisibility } from "@/lib/supabase/actions"
import AdminLeadershipForm from "./AdminLeadershipForm"
import { Button } from "@/components/ui/button"
import ConfirmModal from "./ConfirmModal"
import { toast } from "sonner"

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
function SortableLeaderItem({ leader, onEdit, onDelete, onToggleVisibility }: { 
  leader: any, 
  onEdit: (l: any) => void, 
  onDelete: (id: string) => void,
  onToggleVisibility: (id: string, current: boolean) => void
}) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging
  } = useSortable({ id: leader.id })

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
      
      <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center text-secondary font-bold shrink-0 border border-secondary/10">
        {leader.name[0]}
      </div>

      <div className="flex-grow">
        <h3 className="font-heading font-bold text-primary">{leader.name}</h3>
        <p className="text-sm text-gray-500">{leader.role}</p>
      </div>

      <div className="flex gap-2">
        <Button 
          variant="outline" 
          size="sm" 
          className={`rounded-lg h-9 w-9 p-0 border-gray-200 ${leader.isVisible ? 'text-secondary hover:text-secondary' : 'text-gray-400 hover:text-gray-500'}`}
          onClick={(e) => {
            e.stopPropagation()
            onToggleVisibility(leader.id, leader.isVisible)
          }}
          title={leader.isVisible ? "Visible in public" : "Hidden in public"}
        >
          {leader.isVisible ? <Eye className="w-4 h-4" /> : <EyeOff className="w-4 h-4" />}
        </Button>
        <Button 
          variant="outline" 
          size="sm" 
          className="rounded-lg h-9 w-9 p-0 border-gray-200 hover:bg-gray-50"
          onClick={(e) => {
            e.stopPropagation()
            onEdit(leader)
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
            onDelete(leader.id)
          }}
        >
          <Trash2 className="w-4 h-4 text-red-600" />
        </Button>
      </div>
    </div>
  )
}

// --- Main Component ---
export default function AdminLeadershipList({ initialLeadership }: { initialLeadership: any[] }) {
  const [leadership, setLeadership] = useState(initialLeadership)
  const [isFormOpen, setIsFormOpen] = useState(false)
  const [editingLeader, setEditingLeader] = useState<any>(null)
  const [deleteId, setDeleteId] = useState<string | null>(null)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    setLeadership(initialLeadership)
  }, [initialLeadership])

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
      setLeadership((items) => {
        const oldIndex = items.findIndex((item) => item.id === active.id)
        const newIndex = items.findIndex((item) => item.id === over.id)
        const newItems = arrayMove(items, oldIndex, newIndex)
        
        const orderUpdate = newItems.map((item, index) => ({
          id: item.id,
          order: index
        }))

        updateLeadershipOrder(orderUpdate).catch(() => {
          toast.error("Failed to save order")
          setLeadership(items)
        })

        return newItems
      })
      toast.success("Order updated")
    }
  }

  const handleEdit = (leader: any) => {
    setEditingLeader(leader)
    setIsFormOpen(true)
  }

  const handleDeleteRequest = (id: string) => {
    setDeleteId(id)
  }

  const handleConfirmDelete = async () => {
    if (!deleteId) return
    setIsDeleting(true)
    try {
      await deleteLeadership(deleteId)
      setLeadership(leadership.filter(l => l.id !== deleteId))
      toast.success("Team member removed")
    } catch (err) {
      toast.error("Failed to remove team member")
    } finally {
      setIsDeleting(false)
      setDeleteId(null)
    }
  }

  const handleToggleVisibility = async (id: string, current: boolean) => {
    const nextValue = !current
    
    // Optimistic update
    setLeadership(items => items.map(l => 
      l.id === id ? { ...l, isVisible: nextValue } : l
    ))

    try {
      await toggleLeadershipVisibility(id, nextValue)
      toast.success(nextValue ? "Member is now visible" : "Member is now hidden")
    } catch (err) {
      toast.error("Failed to update visibility")
      // Revert on error
      setLeadership(items => items.map(l => 
        l.id === id ? { ...l, isVisible: current } : l
      ))
    }
  }

  const handleClose = () => {
    setIsFormOpen(false)
    setEditingLeader(null)
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between bg-white p-4 rounded-2xl border border-gray-200 shadow-sm">
        <div className="text-sm text-gray-500">
          <span className="font-semibold text-primary">{leadership.length}</span> Members. Drag to reorder.
        </div>
        <Button 
          onClick={() => setIsFormOpen(true)}
          className="bg-secondary hover:bg-secondary/90 text-white gap-2 rounded-full px-6"
        >
          <Plus className="w-4 h-4" /> Add Team Member
        </Button>
      </div>

      {isFormOpen && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
          <AdminLeadershipForm initialData={editingLeader} onClose={handleClose} />
        </div>
      )}

      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragEnd={handleDragEnd}
      >
        <SortableContext
          items={leadership.map(l => l.id)}
          strategy={verticalListSortingStrategy}
        >
          <div className="grid grid-cols-1 gap-4">
            {leadership.length === 0 ? (
              <div className="bg-white rounded-2xl border border-dashed border-gray-300 p-12 text-center">
                <Users className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                <p className="text-gray-500 font-medium">No team members found.</p>
              </div>
            ) : (
              leadership.map((leader) => (
                <SortableLeaderItem 
                  key={leader.id} 
                  leader={leader} 
                  onEdit={handleEdit} 
                  onDelete={handleDeleteRequest} 
                  onToggleVisibility={handleToggleVisibility}
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
        title="Remove Team Member"
        message="Are you sure you want to remove this person from the leadership team?"
      />
    </div>
  )
}
