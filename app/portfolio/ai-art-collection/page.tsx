import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

export default function AIArtCollectionPage() {
  // Sample AI artwork collection
  const artworks = [
    {
      id: 1,
      title: "Fluid Waves",
      description: "Dynamic flowing patterns in orange and teal, creating a sense of movement and depth.",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/th.jpg-trc2ymPtEosapNimHot54uXtr2TwKv.jpeg",
    },
    {
      id: 2,
      title: "Abstract Composition",
      description: "AI-generated abstract composition with geometric elements.",
      image: "/placeholder.svg?height=600&width=800&text=Abstract+Composition",
    },
    {
      id: 3,
      title: "Digital Landscape",
      description: "AI interpretation of natural landscapes with surreal elements.",
      image: "/placeholder.svg?height=600&width=800&text=Digital+Landscape",
    },
    {
      id: 4,
      title: "Fractal Patterns",
      description: "Complex fractal patterns generated through AI algorithms.",
      image: "/placeholder.svg?height=600&width=800&text=Fractal+Patterns",
    },
  ]

  return (
    <main className="pt-20 pb-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <Link href="/#portfolio">
            <Button variant="outline" className="mb-6">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Portfolio
            </Button>
          </Link>

          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            AI-Generated <span className="gradient-text">Art Collection</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl">
            A series of AI-generated artwork created for a digital art exhibition, featuring dynamic fluid patterns and
            vibrant color palettes.
          </p>
        </div>

        {/* Featured artwork */}
        <div className="mb-16 relative rounded-lg overflow-hidden">
          <div className="aspect-[21/9] relative">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/th.jpg-trc2ymPtEosapNimHot54uXtr2TwKv.jpeg"
              alt="Fluid Waves - Featured AI Artwork"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end">
            <div className="p-6 md:p-10">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">Fluid Waves</h2>
              <p className="text-gray-200 max-w-2xl">
                The centerpiece of our AI art collection, featuring dynamic flowing patterns in orange and teal,
                creating a sense of movement and depth.
              </p>
            </div>
          </div>
        </div>

        {/* Collection grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {artworks.map((artwork) => (
            <div key={artwork.id} className="bg-black/50 border border-gray-800 rounded-lg overflow-hidden">
              <div className="aspect-video relative">
                <Image src={artwork.image || "/placeholder.svg"} alt={artwork.title} fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{artwork.title}</h3>
                <p className="text-gray-400">{artwork.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Project details */}
        <div className="mt-16 bg-black/30 border border-gray-800 rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-6">About This Project</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <p className="text-gray-300 mb-4">
                This collection of AI-generated artwork was created using state-of-the-art machine learning algorithms
                and neural networks. Each piece is unique and represents the intersection of technology and creativity.
              </p>
              <p className="text-gray-300 mb-4">
                The collection explores themes of fluidity, movement, and the organic nature of digital creation. By
                training our AI models on various artistic styles and natural patterns, we've created pieces that blur
                the line between human and machine creativity.
              </p>
              <p className="text-gray-300">
                These artworks have been featured in digital exhibitions and are available as limited edition prints and
                NFTs.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Project Details</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-400">Client:</span>
                  <span className="text-white">Digital Art Gallery</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Date:</span>
                  <span className="text-white">March 2025</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Technologies:</span>
                  <span className="text-white">Stable Diffusion, Midjourney, DALL-E</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Category:</span>
                  <span className="text-white">AI Creations</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
