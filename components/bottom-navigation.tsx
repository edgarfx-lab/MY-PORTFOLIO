"use client"

import type React from "react"

import { useRouter, usePathname } from "next/navigation"
import { Home, CreditCard, ArrowUpDown, Target, BarChart3 } from "lucide-react"
import { cn } from "@/lib/utils"

export default function BottomNavigation() {
  const router = useRouter()
  const pathname = usePathname()

  const navItems = [
    { icon: Home, label: "Home", path: "/dashboard" },
    { icon: CreditCard, label: "Cards", path: "/virtual-cards" },
    { icon: ArrowUpDown, label: "Payments", path: "/payments" },
    { icon: Target, label: "Goals", path: "/goals" },
    { icon: BarChart3, label: "Insights", path: "/budgeting" },
  ]

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 py-2 px-4 shadow-lg">
      <div className="flex justify-between items-center">
        {navItems.map((item) => (
          <NavItem
            key={item.path}
            icon={item.icon}
            label={item.label}
            isActive={pathname === item.path}
            onClick={() => router.push(item.path)}
          />
        ))}
      </div>
    </div>
  )
}

function NavItem({
  icon: Icon,
  label,
  isActive = false,
  onClick,
}: {
  icon: React.ElementType
  label: string
  isActive?: boolean
  onClick: () => void
}) {
  return (
    <button className="flex flex-col items-center" onClick={onClick}>
      <div className={cn("p-1 rounded-full transition-colors", isActive ? "text-[#0F5132]" : "text-gray-500")}>
        <Icon className="h-6 w-6" />
      </div>
      <span className={cn("text-xs mt-1 transition-colors", isActive ? "text-[#0F5132] font-medium" : "text-gray-500")}>
        {label}
      </span>
    </button>
  )
}

