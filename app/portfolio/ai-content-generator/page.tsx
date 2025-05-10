import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, CheckCircle, Zap, Sparkles, Target, Repeat, BarChart, Lock } from "lucide-react"

export default function AIContentGeneratorPage() {
  // Tool features
  const features = [
    {
      title: "Brand-Aligned Content",
      description: "Generates content that adheres to brand voice, tone, and style guidelines.",
      icon: Sparkles,
    },
    {
      title: "Multi-Format Output",
      description: "Creates content for blogs, social media, emails, product descriptions, and more.",
      icon: Zap,
    },
    {
      title: "Audience Targeting",
      description: "Tailors content to specific audience segments and buyer personas.",
      icon: Target,
    },
    {
      title: "Content Variations",
      description: "Produces multiple versions of content for A/B testing and optimization.",
      icon: Repeat,
    },
    {
      title: "Performance Analytics",
      description: "Tracks content performance and provides insights for improvement.",
      icon: BarChart,
    },
    {
      title: "Secure & Private",
      description: "Ensures data privacy and security with enterprise-grade protection.",
      icon: Lock,
    },
  ]

  // Content types
  const contentTypes = [
    {
      type: "Blog Posts",
      examples: [
        "How to Maximize Your Marketing ROI",
        "5 Trends Reshaping the Industry in 2025",
        "The Ultimate Guide to Customer Retention",
      ],
    },
    {
      type: "Social Media",
      examples: ["Engagement-focused posts", "Platform-specific content", "Trending hashtag suggestions"],
    },
    {
      type: "Email Campaigns",
      examples: ["Welcome sequences", "Promotional emails", "Re-engagement campaigns"],
    },
    {
      type: "Product Descriptions",
      examples: ["Feature-benefit focused", "SEO-optimized", "Conversion-oriented"],
    },
    {
      type: "Ad Copy",
      examples: ["PPC campaigns", "Display ads", "Social media ads"],
    },
  ]

  // Results
  const results = [
    "75% reduction in content creation time",
    "68% increase in content output volume",
    "42% improvement in engagement metrics",
    "35% higher conversion rates from AI-generated copy",
    "Consistent brand voice across all channels",
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
            AI Content <span className="gradient-text">Generator</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl">
            An advanced AI-powered tool that generates high-quality marketing copy, product descriptions, and social
            media content based on brand guidelines and target audience profiles.
          </p>
        </div>

        {/* Featured image */}
        <div className="mb-16 relative rounded-lg overflow-hidden">
          <div className="aspect-video relative">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-proxy.avif-41nTooBDGrA8W2TyveleJE0U5kEJq9.jpeg"
              alt="AI Content Generator"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* Project overview */}
        <div className="mb-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-bold mb-6">Project Overview</h2>
            <p className="text-gray-300 mb-4">
              The AI Content Generator was developed to help marketing teams and content creators produce high-quality,
              on-brand content at scale. By leveraging advanced natural language processing and machine learning
              algorithms, the tool can generate various types of marketing content while maintaining brand consistency.
            </p>
            <p className="text-gray-300 mb-4">
              The system was trained on thousands of successful marketing campaigns and brand-specific content to
              understand effective messaging patterns and brand voice characteristics. It can adapt to different
              audience segments, content formats, and marketing objectives.
            </p>
            <p className="text-gray-300">
              What sets this tool apart is its ability to not just generate generic content, but to create highly
              tailored content that aligns with specific brand guidelines and resonates with target audiences,
              significantly reducing the time and resources needed for content creation.
            </p>
          </div>
          <div className="bg-black/50 border border-gray-800 rounded-lg p-6">
            <h3 className="text-xl font-bold mb-4">How It Works</h3>
            <ol className="space-y-4 text-gray-300">
              <li className="flex">
                <span className="flex-shrink-0 w-6 h-6 rounded-full gradient-bg flex items-center justify-center mr-3 text-white font-bold">
                  1
                </span>
                <div>
                  <p className="font-medium">Brand Profile Setup</p>
                  <p className="text-gray-400 text-sm">
                    Upload brand guidelines, voice examples, and target audience profiles.
                  </p>
                </div>
              </li>
              <li className="flex">
                <span className="flex-shrink-0 w-6 h-6 rounded-full gradient-bg flex items-center justify-center mr-3 text-white font-bold">
                  2
                </span>
                <div>
                  <p className="font-medium">Content Request</p>
                  <p className="text-gray-400 text-sm">
                    Specify content type, topic, length, and target audience segment.
                  </p>
                </div>
              </li>
              <li className="flex">
                <span className="flex-shrink-0 w-6 h-6 rounded-full gradient-bg flex items-center justify-center mr-3 text-white font-bold">
                  3
                </span>
                <div>
                  <p className="font-medium">AI Generation</p>
                  <p className="text-gray-400 text-sm">
                    Advanced algorithms create multiple content variations based on inputs.
                  </p>
                </div>
              </li>
              <li className="flex">
                <span className="flex-shrink-0 w-6 h-6 rounded-full gradient-bg flex items-center justify-center mr-3 text-white font-bold">
                  4
                </span>
                <div>
                  <p className="font-medium">Review & Refine</p>
                  <p className="text-gray-400 text-sm">
                    Edit generated content and provide feedback to improve future outputs.
                  </p>
                </div>
              </li>
              <li className="flex">
                <span className="flex-shrink-0 w-6 h-6 rounded-full gradient-bg flex items-center justify-center mr-3 text-white font-bold">
                  5
                </span>
                <div>
                  <p className="font-medium">Publish & Analyze</p>
                  <p className="text-gray-400 text-sm">
                    Deploy content and track performance metrics to optimize future generation.
                  </p>
                </div>
              </li>
            </ol>
          </div>
        </div>

        {/* Key features */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-black/50 border border-gray-800 rounded-lg p-6 hover:border-primary/50 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-full gradient-bg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Content examples */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8">Content Types</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {contentTypes.map((content, index) => (
              <div key={index} className="bg-black/50 border border-gray-800 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4 gradient-text">{content.type}</h3>
                <ul className="space-y-2">
                  {content.examples.map((example, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300">{example}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Interface screenshots */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8">Tool Interface</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-black/50 border border-gray-800 rounded-lg overflow-hidden">
              <div className="aspect-video relative">
                <Image
                  src="/placeholder.svg?height=600&width=800&text=Dashboard+Interface"
                  alt="Dashboard Interface"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="font-bold">Dashboard Interface</h3>
              </div>
            </div>
            <div className="bg-black/50 border border-gray-800 rounded-lg overflow-hidden">
              <div className="aspect-video relative">
                <Image
                  src="/placeholder.svg?height=600&width=800&text=Content+Generator"
                  alt="Content Generator"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="font-bold">Content Generator</h3>
              </div>
            </div>
            <div className="bg-black/50 border border-gray-800 rounded-lg overflow-hidden">
              <div className="aspect-video relative">
                <Image
                  src="/placeholder.svg?height=600&width=800&text=Analytics+View"
                  alt="Analytics View"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="font-bold">Analytics View</h3>
              </div>
            </div>
            <div className="bg-black/50 border border-gray-800 rounded-lg overflow-hidden">
              <div className="aspect-video relative">
                <Image
                  src="/placeholder.svg?height=600&width=800&text=Brand+Profile+Setup"
                  alt="Brand Profile Setup"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="font-bold">Brand Profile Setup</h3>
              </div>
            </div>
          </div>
        </div>

        {/* Technical details */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6">Technical Implementation</h2>
          <div className="bg-black/50 border border-gray-800 rounded-lg p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4">Technology Stack</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary mr-2 mt-0.5" />
                    <span className="text-gray-300">GPT-4 and custom fine-tuned language models</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary mr-2 mt-0.5" />
                    <span className="text-gray-300">React.js and Next.js frontend</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary mr-2 mt-0.5" />
                    <span className="text-gray-300">Node.js and Express backend</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary mr-2 mt-0.5" />
                    <span className="text-gray-300">MongoDB for data storage</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary mr-2 mt-0.5" />
                    <span className="text-gray-300">Redis for caching and performance</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary mr-2 mt-0.5" />
                    <span className="text-gray-300">AWS infrastructure with auto-scaling</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">AI Implementation</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary mr-2 mt-0.5" />
                    <span className="text-gray-300">Custom model fine-tuning on brand-specific content</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary mr-2 mt-0.5" />
                    <span className="text-gray-300">Natural Language Understanding for content analysis</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary mr-2 mt-0.5" />
                    <span className="text-gray-300">Sentiment analysis for audience targeting</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary mr-2 mt-0.5" />
                    <span className="text-gray-300">Reinforcement learning from user feedback</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary mr-2 mt-0.5" />
                    <span className="text-gray-300">Content performance prediction algorithms</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary mr-2 mt-0.5" />
                    <span className="text-gray-300">Multi-language support with localization</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Results and testimonial */}
        <div className="mt-16 bg-black/30 border border-gray-800 rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-6">Results & Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <p className="text-gray-300 mb-4">
                The AI Content Generator has transformed content creation workflows for our clients, delivering
                significant improvements in efficiency and effectiveness:
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
                The tool continues to evolve with regular updates and improvements based on user feedback and advances
                in AI technology.
              </p>
            </div>
            <div className="bg-black/50 border border-gray-800 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4">Client Testimonial</h3>
              <blockquote className="text-gray-300 italic">
                "The AI Content Generator has revolutionized how our marketing team operates. We've been able to scale
                our content production by 4x while maintaining our brand voice and actually improving engagement
                metrics. What used to take days now takes minutes, allowing our creative team to focus on strategy
                rather than repetitive writing tasks."
              </blockquote>
              <div className="mt-4 flex items-center">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold">
                  AR
                </div>
                <div className="ml-3">
                  <p className="font-bold">Alex Rodriguez</p>
                  <p className="text-sm text-gray-400">VP of Marketing, Global Brands Inc.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
