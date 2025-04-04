"use client"

import type React from "react"

import Link from "next/link"
import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { CartButton } from "@/components/cart-button"
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { useState, useEffect } from "react"

export function SiteHeader() {
  const pathname = usePathname()
  const router = useRouter()
  const searchParams = useSearchParams()
  const [searchQuery, setSearchQuery] = useState(searchParams.get("q") || "")

  // Update search query when URL changes
  useEffect(() => {
    setSearchQuery(searchParams.get("q") || "")
  }, [searchParams])

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery)}`)
    }
  }

  return (
    <header className="border-b border-purple-900/30 bg-black/60 backdrop-blur-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between mb-4">
          <Link href="/" className="title-gradient text-4xl md:text-5xl">
            Salem's Legacy
          </Link>
          <CartButton />
        </div>
        <p className="text-center text-purple-300 mt-2 font-medium tracking-wider">Master Witchcraft</p>
        <div className="relative max-w-md mx-auto mt-6">
          <form onSubmit={handleSearch}>
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-purple-400" size={18} />
            <Input
              type="search"
              placeholder="Search spells..."
              className="pl-10 bg-gray-900/60 border-purple-800/50 text-white focus:ring-purple-500 focus:border-purple-500 rounded-full"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </form>
        </div>
        <nav className="flex justify-center gap-6 mt-6">
          <Link
            href="/"
            className={
              pathname === "/"
                ? "text-purple-400 font-medium border-b-2 border-purple-500 pb-1"
                : "text-gray-400 hover:text-purple-400 transition pb-1 border-b-2 border-transparent hover:border-purple-500/50"
            }
          >
            All Spells
          </Link>
          <Link
            href="/shop"
            className={
              pathname === "/shop" || pathname.startsWith("/shop/")
                ? "text-purple-400 font-medium border-b-2 border-purple-500 pb-1"
                : "text-gray-400 hover:text-purple-400 transition pb-1 border-b-2 border-transparent hover:border-purple-500/50"
            }
          >
            Shop
          </Link>
          <Link
            href="/customer-service"
            className={
              pathname === "/customer-service"
                ? "text-purple-400 font-medium border-b-2 border-purple-500 pb-1"
                : "text-gray-400 hover:text-purple-400 transition pb-1 border-b-2 border-transparent hover:border-purple-500/50"
            }
          >
            Customer Service
          </Link>
        </nav>
      </div>
    </header>
  )
}

