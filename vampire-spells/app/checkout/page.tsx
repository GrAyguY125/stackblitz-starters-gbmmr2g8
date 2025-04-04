"use client"

import type React from "react"

import { SiteHeader } from "@/components/site-header"
import { useCart } from "@/components/cart-provider"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { Loader2, Sparkles } from "lucide-react"
import Image from "next/image"

export default function CheckoutPage() {
  const { items, subtotal, clearCart } = useCart()
  const router = useRouter()
  const [loading, setLoading] = useState(false)

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    country: "US",
    cardNumber: "",
    cardName: "",
    expiry: "",
    cvc: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    // In a real app, this would connect to Stripe API
    // For demo purposes, we'll simulate a successful payment
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000))

      // Clear cart after successful checkout
      clearCart()

      // Redirect to success page
      router.push("/checkout/success")
    } catch (error) {
      console.error("Payment failed:", error)
      setLoading(false)
    }
  }

  if (items.length === 0) {
    router.push("/shop")
    return null
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
              Checkout
              <Sparkles className="h-5 w-5 ml-2 text-purple-400" />
            </h1>
            <div className="h-px bg-gradient-to-r from-purple-500 via-purple-500 to-transparent w-full max-w-xs"></div>
          </div>

          <div className="grid md:grid-cols-5 gap-8">
            <div className="md:col-span-3">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="bg-gray-900/80 rounded-lg border border-purple-900/30 p-6 magic-border">
                  <h2 className="text-xl font-cinzel font-semibold mb-4 text-purple-400">Shipping Information</h2>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                        className="bg-gray-800/80 border-gray-700"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                        className="bg-gray-800/80 border-gray-700"
                      />
                    </div>
                  </div>

                  <div className="space-y-2 mt-4">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="bg-gray-800/80 border-gray-700"
                    />
                  </div>

                  <div className="space-y-2 mt-4">
                    <Label htmlFor="address">Address</Label>
                    <Textarea
                      id="address"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      required
                      className="bg-gray-800/80 border-gray-700"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4 mt-4">
                    <div className="space-y-2">
                      <Label htmlFor="city">City</Label>
                      <Input
                        id="city"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        required
                        className="bg-gray-800/80 border-gray-700"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="state">State/Province</Label>
                      <Input
                        id="state"
                        name="state"
                        value={formData.state}
                        onChange={handleChange}
                        required
                        className="bg-gray-800/80 border-gray-700"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mt-4">
                    <div className="space-y-2">
                      <Label htmlFor="zipCode">ZIP/Postal Code</Label>
                      <Input
                        id="zipCode"
                        name="zipCode"
                        value={formData.zipCode}
                        onChange={handleChange}
                        required
                        className="bg-gray-800/80 border-gray-700"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="country">Country</Label>
                      <Select defaultValue="US">
                        <SelectTrigger className="bg-gray-800/80 border-gray-700">
                          <SelectValue placeholder="Select country" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="US">United States</SelectItem>
                          <SelectItem value="CA">Canada</SelectItem>
                          <SelectItem value="UK">United Kingdom</SelectItem>
                          <SelectItem value="AU">Australia</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-900/80 rounded-lg border border-purple-900/30 p-6 magic-border">
                  <h2 className="text-xl font-cinzel font-semibold mb-4 text-purple-400">Payment Information</h2>

                  <div className="space-y-2">
                    <Label htmlFor="cardNumber">Card Number</Label>
                    <Input
                      id="cardNumber"
                      name="cardNumber"
                      value={formData.cardNumber}
                      onChange={handleChange}
                      placeholder="4242 4242 4242 4242"
                      required
                      className="bg-gray-800/80 border-gray-700"
                    />
                  </div>

                  <div className="space-y-2 mt-4">
                    <Label htmlFor="cardName">Name on Card</Label>
                    <Input
                      id="cardName"
                      name="cardName"
                      value={formData.cardName}
                      onChange={handleChange}
                      required
                      className="bg-gray-800/80 border-gray-700"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4 mt-4">
                    <div className="space-y-2">
                      <Label htmlFor="expiry">Expiry Date</Label>
                      <Input
                        id="expiry"
                        name="expiry"
                        value={formData.expiry}
                        onChange={handleChange}
                        placeholder="MM/YY"
                        required
                        className="bg-gray-800/80 border-gray-700"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="cvc">CVC</Label>
                      <Input
                        id="cvc"
                        name="cvc"
                        value={formData.cvc}
                        onChange={handleChange}
                        placeholder="123"
                        required
                        className="bg-gray-800/80 border-gray-700"
                      />
                    </div>
                  </div>
                </div>

                <Button type="submit" className="w-full bg-purple-700 hover:bg-purple-600" disabled={loading}>
                  {loading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Processing...
                    </>
                  ) : (
                    `Pay $${subtotal.toFixed(2)}`
                  )}
                </Button>
              </form>
            </div>

            <div className="md:col-span-2">
              <div className="bg-gray-900/80 rounded-lg border border-purple-900/30 p-6 sticky top-6 magic-border">
                <h2 className="text-xl font-cinzel font-semibold mb-4 text-purple-400">Order Summary</h2>

                <div className="space-y-4 mb-6">
                  {items.map((item) => (
                    <div key={item.id} className="flex gap-3">
                      <div className="w-12 h-12 relative rounded flex-shrink-0 overflow-hidden">
                        <Image
                          src={item.image || "/placeholder.svg"}
                          alt={item.name}
                          fill
                          className="object-cover"
                          unoptimized
                        />
                      </div>
                      <div className="flex-1">
                        <p className="font-medium">{item.name}</p>
                        <div className="flex justify-between text-sm text-gray-400">
                          <span>Qty: {item.quantity}</span>
                          <span>${(item.price * item.quantity).toFixed(2)}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="border-t border-purple-900/30 pt-4">
                  <div className="flex justify-between mb-2">
                    <span>Subtotal</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between mb-2">
                    <span>Shipping</span>
                    <span>Free</span>
                  </div>
                  <div className="flex justify-between font-bold text-lg mt-4 text-purple-300">
                    <span>Total</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

