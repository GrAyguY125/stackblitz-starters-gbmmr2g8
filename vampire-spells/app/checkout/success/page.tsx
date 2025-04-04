"use client"

import { SiteHeader } from "@/components/site-header"
import { Button } from "@/components/ui/button"
import { CheckCircle, Sparkles } from "lucide-react"
import { useRouter } from "next/navigation"

export default function SuccessPage() {
  const router = useRouter()
  const orderNumber = `ORD-${Math.floor(100000 + Math.random() * 900000)}`

  return (
    <div className="min-h-screen bg-black/90 text-white">
      <SiteHeader />
      <main className="container mx-auto px-4 py-10">
        <div className="max-w-md mx-auto text-center">
          <div className="flex justify-center mb-6">
            <CheckCircle className="h-16 w-16 text-green-500 animate-pulse-glow" />
          </div>

          <div className="flex items-center justify-center mb-6">
            <div className="h-px bg-gradient-to-r from-transparent via-green-500 to-transparent w-full max-w-xs"></div>
            <h1 className="px-4 text-3xl font-cinzel font-semibold text-green-300 flex items-center">
              <Sparkles className="h-5 w-5 mr-2 text-green-400" />
              Order Confirmed!
              <Sparkles className="h-5 w-5 ml-2 text-green-400" />
            </h1>
            <div className="h-px bg-gradient-to-r from-green-500 via-green-500 to-transparent w-full max-w-xs"></div>
          </div>

          <p className="text-gray-400 mb-6">
            Thank you for your purchase. We've sent a confirmation email with your order details.
          </p>

          <div className="bg-gray-900/80 rounded-lg border border-green-900/30 p-6 mb-6 magic-border">
            <p className="text-sm text-gray-400 mb-2">Order Number</p>
            <p className="font-bold text-lg">{orderNumber}</p>
          </div>

          <p className="text-gray-400 mb-8">Your magical items will be shipped within 2-3 business days.</p>

          <div className="flex flex-col gap-4">
            <Button onClick={() => router.push("/shop")} className="bg-purple-700 hover:bg-purple-600">
              Continue Shopping
            </Button>
            <Button
              variant="outline"
              onClick={() => router.push("/")}
              className="border-purple-800/50 hover:bg-purple-900/50 hover:text-purple-300"
            >
              Return to Spells
            </Button>
          </div>
        </div>
      </main>
    </div>
  )
}

