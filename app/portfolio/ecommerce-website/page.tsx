import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

export default function EcommerceWebsitePage() {
  // Features of the e-commerce website
  const features = [
    {
      title: "Responsive Design",
      description: "Fully responsive layout that works seamlessly across all devices and screen sizes.",
    },
    {
      title: "Product Filtering",
      description: "Advanced filtering system allowing customers to find products by category, price, and attributes.",
    },
    {
      title: "Secure Checkout",
      description: "Multi-step checkout process with integrated payment gateways and security features.",
    },
    {
      title: "Order Tracking",
      description: "Real-time order tracking system allowing customers to monitor their purchases.",
    },
    {
      title: "Customer Accounts",
      description: "User account system with order history, saved addresses, and wishlist functionality.",
    },
    {
      title: "Admin Dashboard",
      description: "Comprehensive admin panel for inventory management, order processing, and analytics.",
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
            E-commerce <span className="gradient-text">Website</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl">
            A fully responsive e-commerce platform with custom product filtering, checkout process, and order tracking
            system.
          </p>
        </div>

        {/* Featured image */}
        <div className="mb-16 relative rounded-lg overflow-hidden">
          <div className="aspect-[21/9] relative">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ecommerce-website-checklist-b-.jpg-xajfEX5QO0WBUCSr8dmI4fLQaf5p2a.jpeg"
              alt="E-commerce Website"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end">
            <div className="p-6 md:p-10">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">Complete E-commerce Solution</h2>
              <p className="text-gray-200 max-w-2xl">
                A comprehensive online shopping platform designed to provide a seamless experience from browsing to
                checkout and delivery.
              </p>
            </div>
          </div>
        </div>

        {/* Features grid */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-black/50 border border-gray-800 rounded-lg p-6 hover:border-primary/50 transition-all duration-300"
              >
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Screenshots */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8">Website Screenshots</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-black/50 border border-gray-800 rounded-lg overflow-hidden">
              <div className="aspect-video relative">
                <Image
                  src="/placeholder.svg?height=600&width=800&text=Homepage"
                  alt="Homepage"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="font-bold">Homepage</h3>
              </div>
            </div>
            <div className="bg-black/50 border border-gray-800 rounded-lg overflow-hidden">
              <div className="aspect-video relative">
                <Image
                  src="/placeholder.svg?height=600&width=800&text=Product+Page"
                  alt="Product Page"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="font-bold">Product Page</h3>
              </div>
            </div>
            <div className="bg-black/50 border border-gray-800 rounded-lg overflow-hidden">
              <div className="aspect-video relative">
                <Image
                  src="/placeholder.svg?height=600&width=800&text=Shopping+Cart"
                  alt="Shopping Cart"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="font-bold">Shopping Cart</h3>
              </div>
            </div>
            <div className="bg-black/50 border border-gray-800 rounded-lg overflow-hidden">
              <div className="aspect-video relative">
                <Image
                  src="/placeholder.svg?height=600&width=800&text=Checkout+Process"
                  alt="Checkout Process"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="font-bold">Checkout Process</h3>
              </div>
            </div>
          </div>
        </div>

        {/* Project details */}
        <div className="mt-16 bg-black/30 border border-gray-800 rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-6">About This Project</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <p className="text-gray-300 mb-4">
                This e-commerce website was developed for a retail client looking to expand their business online. The
                platform was built with a focus on user experience, performance, and conversion optimization.
              </p>
              <p className="text-gray-300 mb-4">
                We implemented a responsive design that adapts to all screen sizes, ensuring a consistent shopping
                experience across devices. The custom product filtering system allows customers to quickly find what
                they're looking for, while the streamlined checkout process minimizes cart abandonment.
              </p>
              <p className="text-gray-300">
                The backend includes a comprehensive admin dashboard for inventory management, order processing, and
                customer data analysis, giving the client full control over their online store.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Project Details</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-400">Client:</span>
                  <span className="text-white">Fashion Retailer</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Date:</span>
                  <span className="text-white">January 2025</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Technologies:</span>
                  <span className="text-white">React, Next.js, Tailwind CSS, Stripe</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Category:</span>
                  <span className="text-white">Web Design</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
