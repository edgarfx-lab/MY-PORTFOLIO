import Image from "next/image"
import Link from "next/link"

interface LogoProps {
  className?: string
  showText?: boolean
}

export default function Logo({ className = "", showText = true }: LogoProps) {
  return (
    <Link href="/" className={`flex items-center ${className}`}>
      <div className="relative flex items-center">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/E_20250301_120816_0000-WZLVqeKyPxSdMgwqXiO44YtEajwxze.png"
          alt="Jaydee Edgar Creators Logo"
          width={showText ? 120 : 40}
          height={showText ? 60 : 40}
          className="object-contain"
          priority
        />
      </div>
    </Link>
  )
}
