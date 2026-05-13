"use client"

import { useState, useEffect } from "react"
import { Calendar, MapPin, Edit2, Trash2, Plus, Star, GripVertical } from "lucide-react"
import { deleteEvent, updateEventOrder } from "@/lib/supabase/actions"
import AdminEventForm from "./AdminEventForm"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import ConfirmModal from "./ConfirmModal"
import { toast } from "sonner"
import { format } from "date-fns"


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
function SortableEventItem({ event, onEdit, onDelete }: { 
  event: any, 
  onEdit: (e: any) => void, 
  onDelete: (id: string) => void 
}) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging
  } = useSortable({ id: event.id })

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
      className={`bg-white rounded-2xl border ${isDragging ? 'border-secondary shadow-xl scale-[1.02] rotate-1' : 'border-gray-200'} shadow-sm overflow-hidden flex flex-col md:flex-row group transition-all cursor-grab active:cursor-grabbing`}
    >
      {/* Drag Handle Indicator */}
      <div 
        className="flex w-10 items-center justify-center bg-gray-50 border-r border-gray-100 group-hover:bg-gray-100 transition-colors shrink-0"
      >
        <GripVertical className="w-5 h-5 text-gray-400" />
      </div>


      <div className="w-full md:w-56 h-auto relative bg-gray-50 shrink-0 flex items-center justify-center p-2">
        {event.images?.[0] ? (
          <img src={event.images[0].url} alt={event.title} className="w-full h-auto rounded-lg shadow-sm" />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <Calendar className="w-10 h-10 text-gray-300" />
          </div>
        )}
        {event.featured && (
          <div className="absolute top-3 left-3 bg-secondary text-white text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded flex items-center gap-1 shadow-lg">
            <Star className="w-3 h-3 fill-white" /> Featured
          </div>
        )}
      </div>

      <div className="flex-grow p-6 flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-bold text-secondary uppercase tracking-wider">{event.category}</span>
            <span className="text-xs text-gray-400 font-medium">{format(new Date(event.date), 'dd/MM/yyyy')}</span>
          </div>

          <h3 className="text-xl font-heading font-bold text-primary mb-2">{event.title}</h3>
          <div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-4">
            <span className="flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-secondary" />
              {event.location}
            </span>
          </div>
          <p className="text-sm text-gray-600 line-clamp-2">{event.description}</p>
        </div>

        <div className="flex justify-end gap-3 mt-6 pt-6 border-t border-gray-50">
          <Button 
            variant="outline" 
            size="sm" 
            className="rounded-lg gap-2 text-gray-600 border-gray-200 hover:bg-gray-50"
            onClick={() => onEdit(event)}
          >
            <Edit2 className="w-4 h-4" /> Edit
          </Button>
          <Button 
            variant="destructive" 
            size="sm" 
            className="rounded-lg gap-2 bg-red-50 text-red-600 border-red-100 hover:bg-red-100 hover:text-red-700"
            onClick={() => onDelete(event.id)}
          >
            <Trash2 className="w-4 h-4" /> Delete
          </Button>
        </div>
      </div>
    </div>
  )
}

// --- Main Component ---
export default function AdminEventsList({ initialEvents }: { initialEvents: any[] }) {
  const [events, setEvents] = useState(initialEvents)
  const [isFormOpen, setIsFormOpen] = useState(false)
  const [editingEvent, setEditingEvent] = useState<any>(null)
  const [deleteId, setDeleteId] = useState<string | null>(null)
  const [isDeleting, setIsDeleting] = useState(false)

  // Sync state with props when initialEvents change
  useEffect(() => {
    setEvents(initialEvents)
  }, [initialEvents])

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
      setEvents((items) => {
        const oldIndex = items.findIndex((item) => item.id === active.id)
        const newIndex = items.findIndex((item) => item.id === over.id)
        
        const newItems = arrayMove(items, oldIndex, newIndex)
        
        // Prepare data for server update
        const orderUpdate = newItems.map((item, index) => ({
          id: item.id,
          order: index
        }))

        // Call server action to save order
        updateEventOrder(orderUpdate).catch(() => {
          toast.error("Failed to save new order")
          setEvents(items) // Rollback on error
        })

        return newItems
      })
      toast.success("Order updated")
    }
  }

  const handleEdit = (event: any) => {
    setEditingEvent(event)
    setIsFormOpen(true)
  }

  const handleDeleteRequest = (id: string) => {
    setDeleteId(id)
  }

  const handleConfirmDelete = async () => {
    if (!deleteId) return
    setIsDeleting(true)
    try {
      await deleteEvent(deleteId)
      setEvents(events.filter(e => e.id !== deleteId))
      toast.success("Event deleted")
    } catch (err) {
      toast.error("Failed to delete event")
    } finally {
      setIsDeleting(false)
      setDeleteId(null)
    }
  }

  const handleClose = () => {
    setIsFormOpen(false)
    setEditingEvent(null)
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between bg-white p-4 rounded-2xl border border-gray-200 shadow-sm">
        <div className="text-sm text-gray-500">
          <span className="font-semibold text-primary">{events.length}</span> Events Found. Drag the handle <GripVertical className="inline w-4 h-4" /> to reorder.
        </div>
        <Button 
          onClick={() => setIsFormOpen(true)}
          className="bg-secondary hover:bg-secondary/90 text-white gap-2 rounded-full px-6"
        >
          <Plus className="w-4 h-4" /> Add New Event
        </Button>
      </div>

      {isFormOpen && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
          <AdminEventForm 
            initialData={editingEvent} 
            onClose={handleClose} 
          />
        </div>
      )}



      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragEnd={handleDragEnd}
      >
        <SortableContext
          items={events.map(e => e.id)}
          strategy={verticalListSortingStrategy}
        >
          <div className="grid grid-cols-1 gap-6">
            {events.length === 0 ? (
              <div className="bg-white rounded-2xl border border-dashed border-gray-300 p-12 text-center">
                <Calendar className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                <p className="text-gray-500 font-medium">No events found. Start by adding one!</p>
              </div>
            ) : (
              events.map((event) => (
                <SortableEventItem 
                  key={event.id} 
                  event={event} 
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
        title="Delete Event"
        message="Are you sure you want to delete this event? This will remove all associated data and images."
      />
    </div>
  )
}
