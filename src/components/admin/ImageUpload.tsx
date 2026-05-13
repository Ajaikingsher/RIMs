"use client"

import { useState, useEffect, useRef } from "react"
import { CldUploadWidget } from "next-cloudinary"
import { ImagePlus, X, Loader2, GripVertical, Crop } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"

interface ImageUploadProps {
  value: string[]
  onChange: (value: string[]) => void
  onRemove: (value: string) => void
  folder?: string
  maxFiles?: number
  cropping?: boolean
  circularPreview?: boolean
  imagePosition?: string
}



export default function ImageUpload({
  value,
  onChange,
  onRemove,
  folder = "rims/events",
  maxFiles = 10,
  cropping = false,
  circularPreview = false,
  imagePosition
}: ImageUploadProps) {

  const [isMounted, setIsMounted] = useState(false)
  
  // Use a ref to keep track of the most current images to avoid race conditions during batch uploads
  const imagesRef = useRef<string[]>(value)

  useEffect(() => {
    imagesRef.current = value
  }, [value])

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const onUpload = (result: any) => {
    if (result.event === "success") {
      const newUrl = result.info.secure_url
      // Append the new URL to the current list in the ref and trigger the parent update
      const updatedImages = [...imagesRef.current, newUrl]
      imagesRef.current = updatedImages
      onChange(updatedImages)
    }
  }

  if (!isMounted) return null

  return (
    <div className="space-y-4 w-full">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {value.map((url) => (
          <div key={url} className={`relative aspect-square ${circularPreview ? 'rounded-full' : 'rounded-2xl'} overflow-hidden border border-gray-200 group ring-4 ring-white shadow-lg`}>
            <div className="absolute top-2 right-2 z-10 opacity-0 group-hover:opacity-100 transition-opacity">

              <Button 
                type="button" 
                onClick={() => onRemove(url)} 
                variant="destructive" 
                size="icon"
                className="h-8 w-8 rounded-full"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
            <Image
              fill
              className="object-cover"
              alt="Uploaded image"
              src={url}
              style={{ objectPosition: imagePosition || '50% 20%' }}
            />

            {!cropping && (
              <div className="absolute bottom-2 left-2 z-10 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="p-1.5 bg-white/90 backdrop-blur-sm rounded-lg cursor-grab active:cursor-grabbing border border-gray-200">
                  <GripVertical className="h-4 w-4 text-gray-500" />
                </div>
              </div>
            )}
          </div>
        ))}
        
        {value.length < maxFiles && (
          <CldUploadWidget 
            onSuccess={onUpload} 
            signatureEndpoint="/api/admin/cloudinary-sign"
            uploadPreset={process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET}
            options={{
              multiple: maxFiles > 1,
              maxFiles: maxFiles,
              folder: folder,
              clientAllowedFormats: ["jpg", "jpeg", "png", "webp"],
              maxFileSize: 5000000,
              cropping: cropping,
              croppingAspectRatio: 1, // Enforce square for profile images
              showSkipCropButton: false,
              croppingDefaultSelectionRatio: 0.8,
              croppingShowDimensions: true,
            }}
          >
            {({ open }) => {
              const onClick = () => {
                open()
              }

              return (
                <button
                  type="button"
                  onClick={onClick}
                  className="relative aspect-square rounded-2xl border-2 border-dashed border-gray-300 hover:border-secondary hover:bg-secondary/5 transition-all flex flex-col items-center justify-center gap-2 group"
                >
                  <div className="p-3 rounded-full bg-gray-50 group-hover:bg-secondary/10 transition-colors">
                    {cropping ? (
                      <Crop className="h-6 w-6 text-gray-400 group-hover:text-secondary" />
                    ) : (
                      <ImagePlus className="h-6 w-6 text-gray-400 group-hover:text-secondary" />
                    )}
                  </div>
                  <span className="text-sm font-medium text-gray-500 group-hover:text-secondary">
                    {cropping ? "Upload & Crop" : "Add Images"}
                  </span>
                </button>
              )
            }}
          </CldUploadWidget>
        )}
      </div>
      <p className="text-xs text-gray-400 italic">
        {cropping ? "* Crop your image to fit the face perfectly. Square aspect ratio is enforced." : "* Supported formats: JPG, PNG, WebP. Max size: 5MB per image."}
      </p>
    </div>
  )
}
