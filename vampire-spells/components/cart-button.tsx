"use client"

import { ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useCart } from "@/components/cart-provider"
import { useRouter } from "next/navigation"
import { Badge } from "@/components/ui/badge"

export function CartButton() {
  const { itemCount } = useCart()
  const router = useRouter()

  return (
    <Button
      variant="ghost"
      size="icon"
      className="relative hover:bg-purple-900/20"
      onClick={() => router.push("/cart")}
    >
      <ShoppingCart className="h-5 w-5 text-purple-300" />
      {itemCount > 0 && (
        <Badge className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 bg-purple-600 animate-pulse-glow">
          {itemCount}
        </Badge>
      )}
      <span className="sr-only">Shopping cart</span>
    </Button>
  )
}

