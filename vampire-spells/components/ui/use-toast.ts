type ToastProps = {
  title?: string
  description?: string
  duration?: number
}

export function toast(props: ToastProps) {
  // This is a simplified version - in a real app, this would be more complex
  console.log("Toast:", props)
  // The actual toast UI is handled by the Toaster component
}

