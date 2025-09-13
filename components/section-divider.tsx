import { cn } from "@/lib/utils"

interface SectionDividerProps {
  className?: string
  variant?: "gradient" | "dots" | "wave"
}

export default function SectionDivider({ className, variant = "gradient" }: SectionDividerProps) {
  if (variant === "dots") {
    return (
      <div className={cn("flex justify-center py-8", className)}>
        <div className="flex space-x-2">
          <div className="w-2 h-2 rounded-full bg-green-lime"></div>
          <div className="w-2 h-2 rounded-full bg-green-medium opacity-70"></div>
          <div className="w-2 h-2 rounded-full bg-green-forest opacity-40"></div>
        </div>
      </div>
    )
  }

  if (variant === "wave") {
    return (
      <div className={cn("w-full overflow-hidden", className)}>
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-12 rotate-180">
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="fill-green-forest/50"
          ></path>
        </svg>
      </div>
    )
  }

  // Default gradient divider
  return (
    <div className={cn("py-8 flex justify-center", className)}>
      <div className="w-24 h-1 rounded-full gradient-bg"></div>
    </div>
  )
}
