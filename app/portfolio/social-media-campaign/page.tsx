import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, CheckCircle, Instagram, Facebook, Twitter, Youtube, MessageCircle } from "lucide-react"

export default function SocialMediaCampaignPage() {
  // Campaign platforms
  const platforms = [
    {
      name: "Instagram",
      icon: Instagram,
      metrics: "45K+ impressions, 12K+ engagements",
      content: "Stories, Reels, and carousel posts featuring product demonstrations and user testimonials",
    },
    {
      name: "Facebook",
      icon: Facebook,
      metrics: "38K+ impressions, 8.5K+ engagements",
      content: "Video ads, carousel posts, and community engagement through comments and shares",
    },
    {
      name: "Twitter",
      icon: Twitter,
      metrics: "52K+ impressions, 15K+ engagements",
      content: "Trending hashtag campaign, GIFs, and interactive polls to drive conversation",
    },
    {
      name: "YouTube",
      icon: Youtube,
      metrics: "120K+ views, 15K+ watch hours",
      content: "Product tutorials, behind-the-scenes content, and influencer collaborations",
    },
    {
      name: "TikTok",
      icon: MessageCircle,
      metrics: "250K+ views, 35K+ engagements",
      content: "Viral challenges, trending sounds, and user-generated content campaign",
    },
  ]

  // Campaign results
  const results = [
    "32% increase in brand awareness",
    "45% growth in social media following",
    "28% increase in website traffic",
    "18% boost in conversion rate",
    "3.2x return on ad spend",
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
            Social Media <span className="gradient-text">Campaign</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl">
            An integrated social media campaign across multiple platforms with animated content and coordinated
            messaging to boost brand awareness for a lifestyle product launch.
          </p>
        </div>

        {/* Featured image */}
        <div className="mb-16 relative rounded-lg overflow-hidden bg-[#d3e9f3] p-8">
          <div className="aspect-video relative">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/R-Gy6hWh8PhtvWVWXqq4mfyqf7YvzenW.png"
              alt="Social Media Campaign"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>

        {/* Campaign overview */}
        <div className="mb-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-bold mb-6">Campaign Overview</h2>
            <p className="text-gray-300 mb-4">
              This comprehensive social media campaign was developed for a lifestyle brand launching a new product line.
              The client needed to create buzz across multiple platforms while maintaining a consistent brand message.
            </p>
            <p className="text-gray-300 mb-4">
              We designed a coordinated strategy that leveraged the unique strengths of each social media platform while
              ensuring a cohesive brand experience. The campaign included custom graphics, animated content, influencer
              partnerships, and interactive elements to maximize engagement.
            </p>
            <p className="text-gray-300">
              By tailoring content for each platform while maintaining consistent branding, we were able to reach
              diverse audience segments and significantly increase brand awareness and product interest.
            </p>
          </div>
          <div className="bg-black/50 border border-gray-800 rounded-lg p-6">
            <h3 className="text-xl font-bold mb-4">Campaign Highlights</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-primary mr-2 mt-0.5" />
                <span>Cross-platform strategy with platform-specific content</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-primary mr-2 mt-0.5" />
                <span>Custom animated graphics and video content</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-primary mr-2 mt-0.5" />
                <span>Influencer partnerships with 15+ content creators</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-primary mr-2 mt-0.5" />
                <span>Interactive elements including polls, quizzes, and contests</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-primary mr-2 mt-0.5" />
                <span>Coordinated hashtag strategy across platforms</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-primary mr-2 mt-0.5" />
                <span>Targeted paid advertising to complement organic reach</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Platform breakdown */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8">Platform Strategy</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {platforms.map((platform, index) => (
              <div
                key={index}
                className="bg-black/50 border border-gray-800 rounded-lg p-6 hover:border-primary/50 transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-full gradient-bg flex items-center justify-center mr-3">
                    <platform.icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-xl font-bold">{platform.name}</h3>
                </div>
                <p className="text-gray-400 mb-3">{platform.content}</p>
                <div className="mt-4 pt-4 border-t border-gray-800">
                  <p className="text-sm font-medium text-primary">{platform.metrics}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Content examples */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8">Campaign Content</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-black/50 border border-gray-800 rounded-lg overflow-hidden">
              <div className="aspect-square relative">
                <Image
                  src="/placeholder.svg?height=600&width=600&text=Instagram+Content"
                  alt="Instagram Content"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="font-bold">Instagram Stories</h3>
              </div>
            </div>
            <div className="bg-black/50 border border-gray-800 rounded-lg overflow-hidden">
              <div className="aspect-square relative">
                <Image
                  src="/placeholder.svg?height=600&width=600&text=Facebook+Ad"
                  alt="Facebook Ad"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="font-bold">Facebook Carousel Ad</h3>
              </div>
            </div>
            <div className="bg-black/50 border border-gray-800 rounded-lg overflow-hidden">
              <div className="aspect-square relative">
                <Image
                  src="/placeholder.svg?height=600&width=600&text=TikTok+Challenge"
                  alt="TikTok Challenge"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="font-bold">TikTok Challenge</h3>
              </div>
            </div>
          </div>
        </div>

        {/* Campaign timeline */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6">Campaign Timeline</h2>
          <div className="relative">
            {/* Timeline */}
            <div className="absolute left-0 md:left-1/2 h-full w-1 bg-gradient-to-b from-purple-500 to-pink-500 transform -translate-x-1/2"></div>

            {/* Timeline items */}
            <div className="space-y-12 relative">
              {/* Item 1 */}
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/2 md:pr-12 md:text-right mb-4 md:mb-0">
                  <h3 className="text-xl font-bold">Strategy & Planning</h3>
                  <p className="text-gray-400">
                    Research, competitor analysis, and development of campaign strategy and messaging.
                  </p>
                </div>
                <div className="md:w-1/2 md:pl-12 relative">
                  <div className="absolute left-0 md:left-0 top-0 w-6 h-6 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 transform -translate-x-1/2"></div>
                </div>
              </div>

              {/* Item 2 */}
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/2 md:pr-12 relative md:text-right order-2 md:order-1">
                  <div className="absolute left-0 md:left-0 top-0 w-6 h-6 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 transform -translate-x-1/2"></div>
                </div>
                <div className="md:w-1/2 md:pl-12 mb-4 md:mb-0 order-1 md:order-2">
                  <h3 className="text-xl font-bold">Content Creation</h3>
                  <p className="text-gray-400">
                    Development of platform-specific content, graphics, animations, and video production.
                  </p>
                </div>
              </div>

              {/* Item 3 */}
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/2 md:pr-12 md:text-right mb-4 md:mb-0">
                  <h3 className="text-xl font-bold">Influencer Outreach</h3>
                  <p className="text-gray-400">
                    Identification and partnership with relevant influencers across platforms.
                  </p>
                </div>
                <div className="md:w-1/2 md:pl-12 relative">
                  <div className="absolute left-0 md:left-0 top-0 w-6 h-6 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 transform -translate-x-1/2"></div>
                </div>
              </div>

              {/* Item 4 */}
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/2 md:pr-12 relative md:text-right order-2 md:order-1">
                  <div className="absolute left-0 md:left-0 top-0 w-6 h-6 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 transform -translate-x-1/2"></div>
                </div>
                <div className="md:w-1/2 md:pl-12 mb-4 md:mb-0 order-1 md:order-2">
                  <h3 className="text-xl font-bold">Campaign Launch</h3>
                  <p className="text-gray-400">
                    Coordinated rollout across all platforms with initial paid promotion boost.
                  </p>
                </div>
              </div>

              {/* Item 5 */}
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/2 md:pr-12 md:text-right mb-4 md:mb-0">
                  <h3 className="text-xl font-bold">Ongoing Optimization</h3>
                  <p className="text-gray-400">
                    Real-time monitoring, content adjustments, and ad spend optimization based on performance.
                  </p>
                </div>
                <div className="md:w-1/2 md:pl-12 relative">
                  <div className="absolute left-0 md:left-0 top-0 w-6 h-6 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 transform -translate-x-1/2"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Results and testimonial */}
        <div className="mt-16 bg-black/30 border border-gray-800 rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-6">Campaign Results</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <p className="text-gray-300 mb-4">
                The integrated social media campaign delivered exceptional results, exceeding the client's expectations
                across all key performance indicators:
              </p>
              <ul className="space-y-2 text-gray-300">
                {results.map((result, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary mr-2 mt-0.5" />
                    <span>{result}</span>
                  </li>
                ))}
              </ul>
              <p className="text-gray-300 mt-4">
                The campaign successfully established the brand's presence across multiple social media platforms and
                created significant buzz around the product launch.
              </p>
            </div>
            <div className="bg-black/50 border border-gray-800 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4">Client Testimonial</h3>
              <blockquote className="text-gray-300 italic">
                "The social media campaign created by Jaydee Edgar Creators transformed our product launch. Their
                strategic approach to each platform and creative content development resulted in engagement levels we
                hadn't thought possible. The team's ability to adapt in real-time to what was working best helped us
                maximize our ROI and truly connect with our target audience."
              </blockquote>
              <div className="mt-4 flex items-center">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold">
                  SM
                </div>
                <div className="ml-3">
                  <p className="font-bold">Sarah Mitchell</p>
                  <p className="text-sm text-gray-400">Marketing Director, Urban Lifestyle Brands</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
