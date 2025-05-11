"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Download, Printer } from "lucide-react"
import SectionHeading from "./section-heading"

export default function Resume() {
  const [isViewMode, setIsViewMode] = useState(false)

  const toggleViewMode = () => {
    setIsViewMode(!isViewMode)
  }

  const handleDownloadCV = () => {
    // Create a link element
    const link = document.createElement("a")
    link.href = "/edgar-mahlare-cv.html"
    link.download = "Kgope-Edgar-Mahlare-CV.html"
    link.target = "_blank" // Add this to ensure it opens in a new tab if download fails
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const handlePrintCV = () => {
    // Open the CV in a new window and print it
    const printWindow = window.open("/edgar-mahlare-cv.html", "_blank")
    if (printWindow) {
      printWindow.onload = () => {
        printWindow.print()
      }
    }
  }

  return (
    <section id="resume" className="py-20 bg-green-forest/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="My Resume"
          highlightedWord="Resume"
          description="Front-End UI Developer with expertise in creating responsive, user-centric web interfaces"
        />

        <div className="flex flex-wrap justify-center mb-8 gap-4">
          <Button onClick={toggleViewMode} className="gradient-bg text-white hover-lift">
            {isViewMode ? "Hide Resume" : "View Resume"}
          </Button>
          <Button
            onClick={handleDownloadCV}
            variant="outline"
            className="border-green-forest hover:border-green-mint hover:text-green-mint"
          >
            <Download className="mr-2 h-4 w-4" /> Download CV
          </Button>
          <Button onClick={handlePrintCV} variant="outline" className="hover-lift border-primary hover:bg-primary/10">
            <Printer className="mr-2 h-4 w-4" /> Print CV
          </Button>
        </div>

        {isViewMode && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-black/50 border border-green-forest rounded-lg p-8 max-w-4xl mx-auto"
          >
            <div className="flex flex-col md:flex-row justify-between mb-8">
              <div>
                <h2 className="text-3xl font-bold gradient-text">KGOPE EDGAR MAHLARE</h2>
                <h3 className="text-xl text-green-mint mt-2">FRONT END UI DEVELOPER</h3>
              </div>
              <div className="mt-4 md:mt-0 text-right">
                <p className="text-gray-300">📱 +27 81 472 0477</p>
                <p className="text-gray-300">✉️ kgopemahlare@gmail.com</p>
                <p className="text-gray-300">🌐 https://vo-jaydee-edgar-creators-website.vercel.app/</p>
                <p className="text-gray-300">📍 53A Thabo Mbeki, Polokwane</p>
              </div>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-bold mb-4 border-b border-green-forest pb-2">SUMMARY</h3>
              <p className="text-gray-300">
                A passionate and self-motivated Front-End Developer with a creative eye and a solid foundation in HTML,
                CSS, JavaScript, and React. Proven ability to design responsive, user-centric web interfaces with clean,
                maintainable code. Combines technical skills with a background in customer service, graphic design, and
                brand development to deliver complete digital experiences. Eager to grow in the tech industry and
                contribute to forward-thinking development teams.
              </p>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-bold mb-4 border-b border-green-forest pb-2">SKILLS</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                <div className="bg-green-forest/20 rounded p-2 text-center">HTML5</div>
                <div className="bg-green-forest/20 rounded p-2 text-center">CSS3</div>
                <div className="bg-green-forest/20 rounded p-2 text-center">JavaScript (ES6+)</div>
                <div className="bg-green-forest/20 rounded p-2 text-center">React.js</div>
                <div className="bg-green-forest/20 rounded p-2 text-center">Tailwind CSS</div>
                <div className="bg-green-forest/20 rounded p-2 text-center">Figma</div>
                <div className="bg-green-forest/20 rounded p-2 text-center">Git</div>
                <div className="bg-green-forest/20 rounded p-2 text-center">GitHub</div>
                <div className="bg-green-forest/20 rounded p-2 text-center">Vercel</div>
                <div className="bg-green-forest/20 rounded p-2 text-center">Chrome DevTools</div>
                <div className="bg-green-forest/20 rounded p-2 text-center">Responsive Web</div>
                <div className="bg-green-forest/20 rounded p-2 text-center">Fast Learner</div>
                <div className="bg-green-forest/20 rounded p-2 text-center">Creative Thinker</div>
                <div className="bg-green-forest/20 rounded p-2 text-center">Problem Solver</div>
                <div className="bg-green-forest/20 rounded p-2 text-center">Detail-Oriented</div>
                <div className="bg-green-forest/20 rounded p-2 text-center">Team Collaboration</div>
              </div>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-bold mb-4 border-b border-green-forest pb-2">LANGUAGES</h3>
              <div className="flex space-x-8">
                <div>
                  <p className="text-gray-300">ENGLISH</p>
                  <div className="w-32 h-2 bg-gray-700 rounded-full mt-1">
                    <div className="h-full bg-gradient-to-r from-green-forest to-green-lime rounded-full w-full"></div>
                  </div>
                  <p className="text-gray-400 text-sm mt-1">Advanced</p>
                </div>
                <div>
                  <p className="text-gray-300">SEPEDI</p>
                  <div className="w-32 h-2 bg-gray-700 rounded-full mt-1">
                    <div className="h-full bg-gradient-to-r from-green-forest to-green-lime rounded-full w-full"></div>
                  </div>
                  <p className="text-gray-400 text-sm mt-1">Advanced</p>
                </div>
              </div>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-bold mb-4 border-b border-green-forest pb-2">EDUCATION</h3>
              <div className="mb-4">
                <div className="flex justify-between">
                  <h4 className="font-bold text-green-mint">S.T. Gregories College</h4>
                  <p className="text-gray-400">02/2025 - 12/2027</p>
                </div>
                <p className="text-gray-300">National Senior Certificate</p>
              </div>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-bold mb-4 border-b border-green-forest pb-2">EXPERIENCE</h3>

              <div className="mb-6">
                <div className="flex justify-between">
                  <h4 className="font-bold text-green-mint">IIE Rosebank College</h4>
                  <p className="text-gray-400">Polokwane, South Africa</p>
                </div>
                <div className="flex justify-between">
                  <p className="text-gray-300">Software developer</p>
                  <p className="text-gray-400">2023</p>
                </div>
                <ul className="list-disc pl-5 mt-2 text-gray-300">
                  <li>Note key learnings, experience and skills gained relevant to the job.</li>
                </ul>
              </div>

              <div className="mb-6">
                <div className="flex justify-between">
                  <h4 className="font-bold text-green-mint">Self taught</h4>
                  <p className="text-gray-400">Freelance</p>
                </div>
                <div className="flex justify-between">
                  <p className="text-gray-300">UI/UX design, Front end developer</p>
                  <p className="text-gray-400">2022 - Present</p>
                </div>
                <ul className="list-disc pl-5 mt-2 text-gray-300">
                  <li>I taught myself front-end development through Coursera and hands-on projects.</li>
                  <li>Along the way, I built real-world skills in:</li>
                  <li>HTML & CSS – Clean, semantic layouts and responsive styling</li>
                  <li>JavaScript – Interactive functionality using modern ES6+</li>
                  <li>React.js – Component-based UI with hooks and state management</li>
                  <li>Tailwind CSS – Fast, responsive design using utility-first classes</li>
                  <li>Figma – UI/UX design, wireframing, and prototyping</li>
                  <li>Git & GitHub – Version control and collaborative workflows</li>
                  <li>Vercel – Fast, optimized site deployment</li>
                  <li>Debugging – Strong problem-solving using DevTools</li>
                  <li>Developed a personal portfolio showcasing projects in design and front-end development</li>
                  <li>Integrated responsive design and optimized performance for mobile and desktop</li>
                  <li>Portfolio: https://vo-jaydee-edgar-creators-website.vercel.app/</li>
                </ul>
              </div>

              <div className="mb-6">
                <div className="flex justify-between">
                  <h4 className="font-bold text-green-mint">Jaydee X Clothing</h4>
                  <p className="text-gray-400">Location</p>
                </div>
                <div className="flex justify-between">
                  <p className="text-gray-300">Graphic Designer & Brand Manager</p>
                  <p className="text-gray-400">12/2023 - Present</p>
                </div>
                <ul className="list-disc pl-5 mt-2 text-gray-300">
                  <li>Designed promotional graphics, logos, and marketing content</li>
                  <li>Managed customer inquiries through digital platforms</li>
                  <li>Collaborated with developers to align branding across web interfaces</li>
                  <li>Designed and built a promotional site for a clothing brand</li>
                  <li>Focused on aesthetics and smooth user experience</li>
                  <li>Created a dynamic product showcase with animations, responsive layout, and modular code</li>
                </ul>
              </div>
            </div>

            <div className="text-center mt-12">
              <div className="inline-block rounded-full w-16 h-16 bg-green-forest/30 flex items-center justify-center text-2xl font-bold text-green-mint">
                KEM
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  )
}
