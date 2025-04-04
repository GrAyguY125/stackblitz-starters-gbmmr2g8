"use client"

import { useState } from "react"
import { X } from "lucide-react"

type Toast = {
  id: string
  title?: string
  description?: string
  duration?: number
}

// This is a simplified toaster for demonstration
export function Toaster() {
  const [toasts, setToasts] = useState<Toast[]>([])

  // In a real implementation, this would listen to a toast store
  // For this demo, we're keeping it simple

  return (
    <div className="fixed bottom-0 right-0 p-4 z-50 flex flex-col gap-2">
      {toasts.map((toast) => (
        <div
          key={toast.id}
          className="bg-gray-800 border border-gray-700 rounded-lg shadow-lg p-4 max-w-sm w-full flex gap-3"
        >
          <div className="flex-1">
            {toast.title && <h3 className="font-medium text-white">{toast.title}</h3>}
            {toast.description && <p className="text-gray-300 text-sm">{toast.description}</p>}
          </div>
          <button className="text-gray-400 hover:text-white">
            <X size={16} />
            <span className="sr-only">Close</span>
          </button>
        </div>
      ))}
    </div>
  )
}

