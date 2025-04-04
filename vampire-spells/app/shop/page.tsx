"use client"

import { Button } from "@/components/ui/button"
import { ShoppingCart, Sparkles } from "lucide-react"
import { useState } from "react"
import { useCart } from "@/components/cart-provider"
import { SiteHeader } from "@/components/site-header"
import { toast } from "@/components/ui/use-toast"
import { Toaster } from "@/components/ui/toaster"
import Image from "next/image"

const products = [
  {
    id: "amethyst-crystal",
    name: "Amethyst Crystal",
    price: 24.99,
    image: "https://images.unsplash.com/photo-1596516109370-29001ec8ec36?q=80&w=500&auto=format&fit=crop",
    description: "Enhances psychic abilities and protects against negative energies.",
    category: "Crystals",
  },
  {
    id: "clear-quartz",
    name: "Clear Quartz Point",
    price: 19.99,
    image: "https://images.unsplash.com/photo-1615486511484-92e172cc4fe0?q=80&w=500&auto=format&fit=crop",
    description: "Amplifies energy and thought. The most versatile healing stone.",
    category: "Crystals",
  },
  {
    id: "black-tourmaline",
    name: "Black Tourmaline",
    price: 15.99,
    image: "https://images.unsplash.com/photo-1617999584443-b196729a18a8?q=80&w=500&auto=format&fit=crop",
    description: "Powerful protection against negative energies and electromagnetic fields.",
    category: "Crystals",
  },
  {
    id: "selenite-wand",
    name: "Selenite Wand",
    price: 18.5,
    image: "https://images.unsplash.com/photo-1621279897234-9495620749ff?q=80&w=500&auto=format&fit=crop",
    description: "Cleanses and charges other crystals. Brings mental clarity.",
    category: "Wands",
  },
  {
    id: "sage-bundle",
    name: "White Sage Bundle",
    price: 12.99,
    image: "https://images.unsplash.com/photo-1600267488073-948799c81944?q=80&w=500&auto=format&fit=crop",
    description: "Used for cleansing spaces of negative energy.",
    category: "Herbs",
  },
  {
    id: "ritual-candles",
    name: "Ritual Candles Set",
    price: 29.99,
    image: "https://images.unsplash.com/photo-1603251579431-8041402bdeda?q=80&w=500&auto=format&fit=crop",
    description: "Set of 7 colored candles for various magical workings.",
    category: "Candles",
  },
  {
    id: "pentacle-altar",
    name: "Pentacle Altar Tile",
    price: 35.0,
    image: "https://images.unsplash.com/photo-1635016288720-c52507b9a717?q=80&w=500&auto=format&fit=crop",
    description: "Wooden pentacle altar tile for focusing energy during rituals.",
    category: "Altar Tools",
  },
  {
    id: "cauldron",
    name: "Cast Iron Cauldron",
    price: 45.99,
    image: "https://images.unsplash.com/photo-1635016288720-c52507b9a717?q=80&w=500&auto=format&fit=crop",
    description: "Small cast iron cauldron for burning herbs and incense.",
    category: "Altar Tools",
  },
  {
    id: "tarot-deck",
    name: "Witch's Tarot Deck",
    price: 32.99,
    image: "https://images.unsplash.com/photo-1633098216394-b5b36a66891a?q=80&w=500&auto=format&fit=crop",
    description: "78-card tarot deck with guidebook for divination.",
    category: "Divination",
  },
  {
    id: "book-shadows",
    name: "Leather Book of Shadows",
    price: 49.99,
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=500&auto=format&fit=crop",
    description: "Handcrafted leather journal for recording spells and rituals.",
    category: "Books",
  },
  {
    id: "crystal-grid",
    name: "Sacred Geometry Crystal Grid",
    price: 28.5,
    image: "https://images.unsplash.com/photo-1622541863045-b4b099ca9a35?q=80&w=500&auto=format&fit=crop",
    description: "Wooden crystal grid for amplifying intentions and crystal work.",
    category: "Altar Tools",
  },
  {
    id: "protection-bundle",
    name: "Protection Spell Kit",
    price: 59.99,
    image: "https://images.unsplash.com/photo-1514733670139-4d87a1941d55?q=80&w=500&auto=format&fit=crop",
    description: "Complete kit with all ingredients needed for protection spells.",
    category: "Spell Kits",
  },
]

export default function ShopPage() {
  const categories = ["All", ...Array.from(new Set(products.map((product) => product.category)))]
  const [activeCategory, setActiveCategory] = useState("All")
  const { addItem } = useCart()

  const filteredProducts =
    activeCategory === "All" ? products : products.filter((product) => product.category === activeCategory)

  const handleAddToCart = (product: (typeof products)[0]) => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
    })

    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart.`,
      duration: 3000,
    })
  }

  return (
    <div className="min-h-screen bg-black/90 text-white">
      <SiteHeader />

      <main className="container mx-auto px-4 py-10">
        <div className="flex items-center justify-center mb-10">
          <div className="h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent w-full max-w-xs"></div>
          <h2 className="px-4 text-2xl font-cinzel font-semibold text-purple-300 flex items-center">
            <Sparkles className="h-5 w-5 mr-2 text-purple-400" />
            Magical Shop
            <Sparkles className="h-5 w-5 ml-2 text-purple-400" />
          </h2>
          <div className="h-px bg-gradient-to-r from-purple-500 via-purple-500 to-transparent w-full max-w-xs"></div>
        </div>

        <div className="flex flex-wrap gap-4 mb-8 justify-center">
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "ghost"}
              className={`rounded-full ${activeCategory === category ? "bg-purple-700 hover:bg-purple-600" : "hover:bg-purple-900/20 hover:text-purple-300"}`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-gray-900/80 rounded-lg overflow-hidden border border-purple-900/30 hover:border-purple-500/70 transition group card-hover"
            >
              <div className="aspect-square relative overflow-hidden bg-gray-800">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  unoptimized
                />
                <div className="absolute top-0 right-0 p-2 z-10">
                  <span className="px-3 py-1 text-xs rounded-full bg-purple-900/80 text-purple-100 backdrop-blur-sm border border-purple-800/50">
                    {product.category}
                  </span>
                </div>
              </div>
              <div className="p-5">
                <div className="flex justify-between items-start">
                  <h2 className="text-lg font-cinzel font-semibold group-hover:text-purple-400 transition">
                    {product.name}
                  </h2>
                  <span className="font-bold text-purple-400">${product.price.toFixed(2)}</span>
                </div>
                <p className="text-gray-400 mt-2 text-sm">{product.description}</p>
                <Button
                  className="w-full mt-4 flex items-center justify-center gap-2 bg-purple-700 hover:bg-purple-600"
                  onClick={() => handleAddToCart(product)}
                >
                  <ShoppingCart size={16} />
                  Add to Cart
                </Button>
              </div>
            </div>
          ))}
        </div>
      </main>
      <Toaster />
    </div>
  )
}

