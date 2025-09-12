import ContactForm from "@/components/contact-form"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact Us | Jaydee Edgar Creators",
  description: "Get in touch with Jaydee Edgar Creators for your creative project needs",
}

export default function ContactPage() {
  return (
    <main className="pt-20">
      <ContactForm />
    </main>
  )
}
