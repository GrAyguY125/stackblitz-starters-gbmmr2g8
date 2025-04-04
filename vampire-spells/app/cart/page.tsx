"use client"

import { SiteHeader } from "@/components/site-header"
import { useCart } from "@/components/cart-provider"
import { Button } from "@/components/ui/button"
import { Minus, Plus, Trash2, Sparkles } from "lucide-react"
import { useRouter } from "next/navigation"
import Image from "next/image"

export default function CartPage() {
  const { items, removeItem, updateQuantity, subtotal, itemCount } = useCart()
  const router = useRouter()

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-black/90 text-white">
        <SiteHeader />
        <main className="container mx-auto px-4 py-10">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="text-3xl font-cinzel font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600 mb-6">
              Your Cart
            </h1>
            <p className="text-gray-400 mb-8">Your cart is empty</p>
            <Button onClick={() => router.push("/shop")} className="bg-purple-700 hover:bg-purple-600">
              Continue Shopping
            </Button>
          </div>
        </main>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-black/90 text-white">
      <SiteHeader />
      <main className="container mx-auto px-4 py-10">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center mb-10">
            <div className="h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent w-full max-w-xs"></div>
            <h1 className="px-4 text-3xl font-cinzel font-semibold text-purple-300 flex items-center">
              <Sparkles className="h-5 w-5 mr-2 text-purple-400" />
              Your Cart
              <Sparkles className="h-5 w-5 ml-2 text-purple-400" />
            </h1>
            <div className="h-px bg-gradient-to-r from-purple-500 via-purple-500 to-transparent w-full max-w-xs"></div>
          </div>

          <div className="bg-gray-900/80 rounded-lg border border-purple-900/30 overflow-hidden mb-6 magic-border">
            <div className="p-6">
              <div className="grid gap-6">
                {items.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center gap-4 py-4 border-b border-purple-900/20 last:border-0"
                  >
                    <div className="w-16 h-16 relative rounded overflow-hidden">
                      <Image
                        src={item.image || "/placeholder.svg"}
                        alt={item.name}
                        fill
                        className="object-cover"
                        unoptimized
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium font-cinzel">{item.name}</h3>
                      <p className="text-purple-300 text-sm">${item.price.toFixed(2)}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-8 w-8 border-purple-800/50 hover:bg-purple-900/50 hover:text-purple-300"
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        disabled={item.quantity <= 1}
                      >
                        <Minus className="h-3 w-3" />
                        <span className="sr-only">Decrease quantity</span>
                      </Button>
                      <span className="w-8 text-center">{item.quantity}</span>
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-8 w-8 border-purple-800/50 hover:bg-purple-900/50 hover:text-purple-300"
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      >
                        <Plus className="h-3 w-3" />
                        <span className="sr-only">Increase quantity</span>
                      </Button>
                    </div>
                    <div className="text-right font-medium w-20 text-purple-300">
                      ${(item.price * item.quantity).toFixed(2)}
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="text-gray-400 hover:text-purple-300 hover:bg-purple-900/20"
                      onClick={() => removeItem(item.id)}
                    >
                      <Trash2 className="h-4 w-4" />
                      <span className="sr-only">Remove item</span>
                    </Button>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gray-800/80 p-6 backdrop-blur-sm">
              <div className="flex justify-between mb-2">
                <span>Subtotal ({itemCount} items)</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between mb-4">
                <span>Shipping</span>
                <span>Calculated at checkout</span>
              </div>
              <div className="flex justify-between text-lg font-bold text-purple-300">
                <span>Total</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
            </div>
          </div>

          <div className="flex justify-between">
            <Button
              variant="outline"
              onClick={() => router.push("/shop")}
              className="border-purple-800/50 hover:bg-purple-900/50 hover:text-purple-300"
            >
              Continue Shopping
            </Button>
            <Button onClick={() => router.push("/checkout")} className="bg-purple-700 hover:bg-purple-600">
              Proceed to Checkout
            </Button>
          </div>
        </div>
      </main>
    </div>
  )
}

