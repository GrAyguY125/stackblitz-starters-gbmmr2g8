"use client"

import { useSearchParams } from "next/navigation"
import { SiteHeader } from "@/components/site-header"
import { spells } from "@/data/spells"
import Link from "next/link"
import { Sparkles, SearchIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"

export default function SearchPage() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const query = searchParams.get("q") || ""

  // Filter spells based on search query
  const filteredSpells = spells.filter((spell) => {
    const searchContent = [
      spell.name,
      spell.description,
      spell.incantation,
      ...spell.items,
      ...spell.usedBy,
      spell.effects,
    ]
      .join(" ")
      .toLowerCase()

    return searchContent.includes(query.toLowerCase())
  })

  return (
    <div className="min-h-screen bg-black/90 text-white">
      <SiteHeader />

      <main className="container mx-auto px-4 py-10">
        <div className="flex items-center justify-center mb-10">
          <div className="h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent w-full max-w-xs"></div>
          <h2 className="px-4 text-2xl font-cinzel font-semibold text-purple-300 flex items-center">
            <SearchIcon className="h-5 w-5 mr-2 text-purple-400" />
            Search Results
            <Sparkles className="h-5 w-5 ml-2 text-purple-400" />
          </h2>
          <div className="h-px bg-gradient-to-r from-purple-500 via-purple-500 to-transparent w-full max-w-xs"></div>
        </div>

        {query ? (
          <>
            <p className="text-center text-gray-400 mb-8">
              {filteredSpells.length === 0
                ? "No spells found matching your search."
                : `Found ${filteredSpells.length} spell${filteredSpells.length !== 1 ? "s" : ""} for "${query}"`}
            </p>

            {filteredSpells.length === 0 ? (
              <div className="text-center">
                <p className="text-gray-400 mb-6">Try searching for different terms or browse our collection.</p>
                <Button onClick={() => router.push("/")} className="bg-purple-700 hover:bg-purple-600">
                  Browse All Spells
                </Button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredSpells.map((spell) => (
                  <Link
                    key={spell.id}
                    href={`/spell/${spell.id}`}
                    className="bg-gray-900/80 rounded-lg overflow-hidden border border-purple-900/30 hover:border-purple-500/70 transition group card-hover"
                  >
                    <div className="aspect-video bg-gray-800 relative overflow-hidden">
                      <div
                        className="absolute inset-0 bg-cover bg-center"
                        style={{ backgroundImage: `url(${spell.image})` }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent"></div>
                      <div className="absolute bottom-0 left-0 p-4">
                        <span className="px-3 py-1 text-xs rounded-full bg-purple-900/80 text-purple-100 backdrop-blur-sm border border-purple-800/50">
                          Spell
                        </span>
                      </div>
                    </div>
                    <div className="p-5">
                      <h2 className="text-xl font-cinzel font-semibold group-hover:text-purple-400 transition">
                        {spell.name}
                      </h2>
                      <p className="text-gray-400 mt-2 line-clamp-2">{spell.description}</p>
                      <div className="mt-4 pt-3 border-t border-purple-900/20 flex justify-between items-center">
                        <div className="text-xs text-purple-300/70">View spell details</div>
                        <div className="text-purple-400 text-sm font-medium">→</div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </>
        ) : (
          <div className="text-center">
            <p className="text-gray-400 mb-6">Enter a search term to find spells.</p>
            <Button onClick={() => router.push("/")} className="bg-purple-700 hover:bg-purple-600">
              Browse All Spells
            </Button>
          </div>
        )}
      </main>
    </div>
  )
}

