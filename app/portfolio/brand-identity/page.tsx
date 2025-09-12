import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

export default function BrandIdentityPage() {
  // Brand identity elements
  const brandElements = [
    {
      title: "Logo Design",
      description: "Distinctive and versatile logo that works across all applications and sizes.",
    },
    {
      title: "Color Palette",
      description:
        "Carefully selected gradient color scheme with purple and pink tones that conveys creativity and innovation.",
    },
    {
      title: "Typography",
      description: "Bold, modern typography system with distinctive numerical elements like the '12°' design feature.",
    },
    {
      title: "Business Cards",
      description: "Unique business card designs that incorporate the brand's visual language and gradient elements.",
    },
    {
      title: "Letterhead & Stationery",
      description: "Cohesive stationery system including letterhead, envelopes, and notepads.",
    },
    {
      title: "Brand Guidelines",
      description: "Comprehensive brand guidelines document ensuring consistent application across all touchpoints.",
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
            Corporate Brand <span className="gradient-text">Identity</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl">
            Complete brand identity design for Grate Studio, featuring a modern aesthetic with distinctive gradient
            elements and bold typography.
          </p>
        </div>

        {/* Featured image */}
        <div className="mb-16 relative rounded-lg overflow-hidden">
          <div className="aspect-[21/9] relative bg-gray-200">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/4-CorporateIdentityExamples-GrateStudio-TdBA7Kr2uhwqMSsqd4sVAaOi87N5C8.png"
              alt="Grate Studio Brand Identity"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>

        {/* Brand elements grid */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8">Brand Elements</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {brandElements.map((element, index) => (
              <div
                key={index}
                className="bg-black/50 border border-gray-800 rounded-lg p-6 hover:border-primary/50 transition-all duration-300"
              >
                <h3 className="text-xl font-bold mb-3">{element.title}</h3>
                <p className="text-gray-400">{element.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Brand applications */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8">Brand Applications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg overflow-hidden">
              <div className="aspect-square relative">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/4-CorporateIdentityExamples-GrateStudio-TdBA7Kr2uhwqMSsqd4sVAaOi87N5C8.png"
                  alt="Grate Studio Stationery"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4">The Challenge</h3>
              <p className="text-gray-300 mb-4">
                Grate Studio needed a distinctive brand identity that would set them apart in the competitive design
                industry. They wanted a modern, memorable visual system that would work across digital and print
                applications while conveying their innovative approach.
              </p>

              <h3 className="text-2xl font-bold mb-4 mt-8">Our Approach</h3>
              <p className="text-gray-300 mb-4">
                We developed a bold, contemporary identity centered around a distinctive gradient from purple to pink,
                paired with strong typography and the unique "12°" design element that became a recognizable brand
                feature.
              </p>
              <p className="text-gray-300">
                The system was designed to be flexible yet instantly recognizable, with applications across business
                cards, letterhead, digital platforms, and marketing materials. The result is a cohesive brand identity
                that effectively communicates Grate Studio's creative vision.
              </p>
            </div>
          </div>
        </div>

        {/* Color palette */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8">Color Palette</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="aspect-square rounded-lg bg-gradient-to-r from-purple-300 to-pink-300 flex items-end p-4">
              <div className="bg-black/50 rounded px-2 py-1 text-sm">Primary Gradient</div>
            </div>
            <div className="aspect-square rounded-lg bg-black flex items-end p-4">
              <div className="bg-white/50 rounded px-2 py-1 text-sm text-black">Black</div>
            </div>
            <div className="aspect-square rounded-lg bg-white flex items-end p-4">
              <div className="bg-black/50 rounded px-2 py-1 text-sm">White</div>
            </div>
            <div className="aspect-square rounded-lg bg-gray-300 flex items-end p-4">
              <div className="bg-black/50 rounded px-2 py-1 text-sm">Gray</div>
            </div>
          </div>
        </div>

        {/* Project details */}
        <div className="mt-16 bg-black/30 border border-gray-800 rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-6">Project Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <p className="text-gray-300 mb-4">
                This comprehensive brand identity project for Grate Studio included extensive research,
                conceptualization, and development of a complete visual system. We worked closely with the client to
                understand their vision and translate it into a distinctive brand identity.
              </p>
              <p className="text-gray-300 mb-4">
                The final deliverables included logo files in various formats, a complete stationery system, digital
                assets, and a comprehensive brand guidelines document to ensure consistent application across all
                touchpoints.
              </p>
              <p className="text-gray-300">
                Since implementing their new brand identity, Grate Studio has reported increased brand recognition and
                positive feedback from clients and industry peers.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Project Specifications</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-400">Client:</span>
                  <span className="text-white">Grate Studio</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Date:</span>
                  <span className="text-white">November 2024</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Deliverables:</span>
                  <span className="text-white">Logo, Stationery, Brand Guidelines</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Category:</span>
                  <span className="text-white">Graphic Design</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
