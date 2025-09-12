import Image from "next/image"

interface NedbankLogoProps {
  className?: string
  variant?: "full" | "icon-only"
  size?: "small" | "medium" | "large"
  color?: "white" | "default"
}

export default function NedbankLogo({
  className = "",
  variant = "full",
  size = "medium",
  color = "white",
}: NedbankLogoProps) {
  const sizeMap = {
    small: variant === "full" ? "h-6" : "h-6 w-6",
    medium: variant === "full" ? "h-8" : "h-8 w-8",
    large: variant === "full" ? "h-12" : "h-12 w-12",
  }

  // For the SVG version (for flexibility with colors)
  if (variant === "icon-only") {
    return (
      <div className={`${sizeMap[size]} ${className}`}>
        <svg viewBox="0 0 100 100" className="h-full w-full" fill={color === "white" ? "white" : "#00573F"}>
          <path d="M50 0L100 30V70L50 100L0 70V30L50 0ZM50 20L15 40V60L50 80L85 60V40L50 20Z" />
          <path d="M65 40L35 60V40L65 40Z" />
          <path d="M35 40L65 60V40L35 40Z" />
        </svg>
      </div>
    )
  }

  // For the full logo (image version)
  return (
    <div className={`relative ${sizeMap[size]} ${className}`}>
      <Image src="/images/nedbank-logo.png" alt="Nedbank Logo" fill className="object-contain" />
    </div>
  )
}

