import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, CheckCircle } from "lucide-react"

export default function CRMSolutionPage() {
  // CRM features
  const crmFeatures = [
    {
      title: "Customer Management",
      description: "Comprehensive customer profiles with contact information, interaction history, and custom fields.",
    },
    {
      title: "Advanced Analytics",
      description: "Interactive dashboards with real-time data visualization and customizable reports.",
    },
    {
      title: "Sales Pipeline",
      description: "Visual sales pipeline management with drag-and-drop functionality and stage tracking.",
    },
    {
      title: "Task Management",
      description: "Integrated task management system with reminders, assignments, and progress tracking.",
    },
    {
      title: "Email Integration",
      description: "Seamless email integration with templates, tracking, and automated follow-ups.",
    },
    {
      title: "Mobile Access",
      description: "Responsive design with dedicated mobile apps for iOS and Android.",
    },
  ]

  // Technical specifications
  const techSpecs = [
    "React.js & Next.js frontend",
    "Node.js backend with Express",
    "PostgreSQL database",
    "GraphQL API",
    "JWT authentication",
    "Role-based access control",
    "Real-time updates with WebSockets",
    "Automated data backup",
    "GDPR compliance features",
    "Two-factor authentication",
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
            Custom <span className="gradient-text">CRM Solution</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl">
            A bespoke customer relationship management system built for a financial services company, featuring
            comprehensive analytics and data visualization.
          </p>
        </div>

        {/* Featured image */}
        <div className="mb-16 relative rounded-lg overflow-hidden bg-white p-4">
          <div className="aspect-video relative">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/01-2-GuPKdfsqyOQ70NjmouQcpioTt1wuSm.png"
              alt="CRM Dashboard"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>

        {/* Project overview */}
        <div className="mb-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-bold mb-6">Project Overview</h2>
            <p className="text-gray-300 mb-4">
              This custom CRM solution was developed for a financial services company that needed a tailored system to
              manage their client relationships, track sales opportunities, and analyze performance data.
            </p>
            <p className="text-gray-300 mb-4">
              The client's existing off-the-shelf CRM lacked the specific features needed for their industry and
              couldn't integrate with their proprietary systems. We developed a completely custom solution that
              addressed all their requirements while providing an intuitive, modern user interface.
            </p>
            <p className="text-gray-300">
              The result is a powerful yet user-friendly CRM that has streamlined their operations, improved data
              visibility, and contributed to a 35% increase in sales conversion rates.
            </p>
          </div>
          <div className="bg-black/50 border border-gray-800 rounded-lg p-6">
            <h3 className="text-xl font-bold mb-4">Technical Specifications</h3>
            <ul className="space-y-2">
              {techSpecs.map((spec, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-primary mr-2 mt-0.5" />
                  <span>{spec}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* CRM features */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {crmFeatures.map((feature, index) => (
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

        {/* Dashboard screenshots */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8">System Screenshots</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-4 rounded-lg">
              <div className="aspect-video relative">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/01-2-GuPKdfsqyOQ70NjmouQcpioTt1wuSm.png"
                  alt="Analytics Dashboard"
                  fill
                  className="object-contain"
                />
              </div>
              <p className="text-center mt-2 text-gray-300">Analytics Dashboard</p>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <div className="aspect-video relative">
                <Image
                  src="/placeholder.svg?height=600&width=800&text=Customer+Profile+View"
                  alt="Customer Profile View"
                  fill
                  className="object-contain"
                />
              </div>
              <p className="text-center mt-2 text-gray-300">Customer Profile View</p>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <div className="aspect-video relative">
                <Image
                  src="/placeholder.svg?height=600&width=800&text=Sales+Pipeline"
                  alt="Sales Pipeline"
                  fill
                  className="object-contain"
                />
              </div>
              <p className="text-center mt-2 text-gray-300">Sales Pipeline</p>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <div className="aspect-video relative">
                <Image
                  src="/placeholder.svg?height=600&width=800&text=Mobile+App+View"
                  alt="Mobile App View"
                  fill
                  className="object-contain"
                />
              </div>
              <p className="text-center mt-2 text-gray-300">Mobile App View</p>
            </div>
          </div>
        </div>

        {/* Development process */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6">Development Process</h2>
          <div className="relative">
            {/* Timeline */}
            <div className="absolute left-0 md:left-1/2 h-full w-1 bg-gradient-to-b from-purple-500 to-pink-500 transform -translate-x-1/2"></div>

            {/* Timeline items */}
            <div className="space-y-12 relative">
              {/* Item 1 */}
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/2 md:pr-12 md:text-right mb-4 md:mb-0">
                  <h3 className="text-xl font-bold">Discovery & Requirements</h3>
                  <p className="text-gray-400">
                    Extensive stakeholder interviews and workflow analysis to identify key requirements and pain points.
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
                  <h3 className="text-xl font-bold">UX/UI Design</h3>
                  <p className="text-gray-400">
                    Collaborative design process with wireframes, prototypes, and user testing to ensure an intuitive
                    interface.
                  </p>
                </div>
              </div>

              {/* Item 3 */}
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/2 md:pr-12 md:text-right mb-4 md:mb-0">
                  <h3 className="text-xl font-bold">Development</h3>
                  <p className="text-gray-400">
                    Agile development process with two-week sprints and regular client demos to ensure alignment with
                    requirements.
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
                  <h3 className="text-xl font-bold">Testing & Deployment</h3>
                  <p className="text-gray-400">
                    Comprehensive testing, data migration, and phased rollout to ensure a smooth transition from the
                    legacy system.
                  </p>
                </div>
              </div>

              {/* Item 5 */}
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/2 md:pr-12 md:text-right mb-4 md:mb-0">
                  <h3 className="text-xl font-bold">Training & Support</h3>
                  <p className="text-gray-400">
                    Custom training programs for different user roles and ongoing support with regular updates and
                    enhancements.
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
          <h2 className="text-2xl font-bold mb-6">Results & Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <p className="text-gray-300 mb-4">
                Since implementing the custom CRM solution, the client has experienced significant improvements in their
                operations and business outcomes:
              </p>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-primary mr-2 mt-0.5" />
                  <span>35% increase in sales conversion rates</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-primary mr-2 mt-0.5" />
                  <span>42% reduction in time spent on administrative tasks</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-primary mr-2 mt-0.5" />
                  <span>28% improvement in customer retention</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-primary mr-2 mt-0.5" />
                  <span>Seamless integration with existing financial systems</span>
                </li>
              </ul>
            </div>
            <div className="bg-black/50 border border-gray-800 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4">Client Testimonial</h3>
              <blockquote className="text-gray-300 italic">
                "The custom CRM solution developed by Jaydee Edgar Creators has transformed how we manage our client
                relationships. The intuitive interface and powerful analytics have given us insights we never had
                before, and the system has scaled perfectly with our growing business. The team's attention to detail
                and understanding of our industry made all the difference."
              </blockquote>
              <div className="mt-4 flex items-center">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold">
                  JD
                </div>
                <div className="ml-3">
                  <p className="font-bold">James Donovan</p>
                  <p className="text-sm text-gray-400">CTO, Financial Services Inc.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
