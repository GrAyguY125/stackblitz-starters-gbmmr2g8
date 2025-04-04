import Link from "next/link"
import { ArrowLeft, Play, Sparkles } from "lucide-react"
import { spells } from "@/data/spells"
import { Button } from "@/components/ui/button"
import { notFound } from "next/navigation"
import { SiteHeader } from "@/components/site-header"

export default function SpellPage({ params }: { params: { id: string } }) {
  const spell = spells.find((s) => s.id === params.id)

  if (!spell) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-black/90 text-white">
      <SiteHeader />

      <main className="container mx-auto px-4 py-10">
        <div className="max-w-4xl mx-auto">
          <Link href="/" className="inline-flex items-center text-purple-400 hover:text-purple-300 transition mb-6">
            <ArrowLeft size={16} className="mr-2" />
            Back to all spells
          </Link>

          <div className="flex items-center gap-3 mb-4">
            <span className="px-3 py-1 text-xs rounded-full bg-purple-900/80 text-purple-100 backdrop-blur-sm border border-purple-800/50">
              Spell
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-cinzel font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600 mb-6">
            {spell.name}
          </h1>

          <div className="aspect-video bg-gray-900 rounded-lg mb-8 relative overflow-hidden glow-effect">
            <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${spell.image})` }} />
            <div className="absolute inset-0 flex items-center justify-center">
              <Button
                variant="outline"
                size="icon"
                className="w-16 h-16 rounded-full bg-purple-900/50 border-purple-500 text-white hover:bg-purple-800/70 animate-pulse-glow"
              >
                <Play size={30} className="ml-1" />
              </Button>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-900/80 p-6 rounded-lg border border-purple-900/30 magic-border">
              <h2 className="text-xl font-cinzel font-semibold mb-4 text-purple-400 flex items-center">
                <Sparkles className="h-4 w-4 mr-2" />
                Required Items
              </h2>
              <ul className="space-y-3">
                {spell.items.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="inline-block w-2 h-2 rounded-full bg-purple-500 mt-2 mr-3"></span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gray-900/80 p-6 rounded-lg border border-purple-900/30 magic-border">
              <h2 className="text-xl font-cinzel font-semibold mb-4 text-purple-400 flex items-center">
                <Sparkles className="h-4 w-4 mr-2" />
                Incantation
              </h2>
              <div className="italic text-purple-200 border-l-2 border-purple-500 pl-4 py-2">"{spell.incantation}"</div>

              <div className="mt-6">
                <h3 className="font-medium mb-2">Pronunciation:</h3>
                <p className="text-gray-400">{spell.pronunciation}</p>
              </div>
            </div>
          </div>

          <div className="mt-8 bg-gray-900/80 p-6 rounded-lg border border-purple-900/30 magic-border">
            <h2 className="text-xl font-cinzel font-semibold mb-4 text-purple-400 flex items-center">
              <Sparkles className="h-4 w-4 mr-2" />
              About this Spell
            </h2>
            <p className="text-gray-300 leading-relaxed">{spell.description}</p>

            <div className="mt-6">
              <h3 className="font-medium mb-2">Used by:</h3>
              <div className="flex flex-wrap gap-2">
                {spell.usedBy.map((witch, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-purple-900/40 rounded-full text-sm border border-purple-800/30"
                  >
                    {witch}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-6">
              <h3 className="font-medium mb-2">Effects:</h3>
              <p className="text-gray-400">{spell.effects}</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

