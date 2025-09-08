"use client"

import type React from "react"

import { useState } from "react"
import {
  ArrowLeft,
  CreditCard,
  PiggyBank,
  BarChart3,
  Receipt,
  Wallet,
  MessageSquare,
  Moon,
  Fingerprint,
  Mic,
  QrCode,
  Bell,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import { Badge } from "@/components/ui/badge"
import { useRouter } from "next/navigation"
import BottomNavigation from "@/components/bottom-navigation"

export default function FeaturesScreen() {
  const router = useRouter()
  const [darkMode, setDarkMode] = useState(false)

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col pb-20">
      {/* Header */}
      <header className="bg-green-700 text-white p-4 flex items-center">
        <Button variant="ghost" size="icon" className="text-white mr-2" onClick={() => router.back()}>
          <ArrowLeft className="h-6 w-6" />
        </Button>
        <h1 className="text-xl font-medium">Features</h1>
      </header>

      <div className="p-4 space-y-6">
        <h2 className="text-xl font-bold text-gray-800">Essential Features</h2>

        <div className="grid grid-cols-1 gap-4">
          <FeatureCard
            icon={CreditCard}
            title="Card Management"
            description="Freeze, unfreeze, or reissue your cards with a single tap"
            iconColor="text-blue-600"
            bgColor="bg-blue-100"
          />

          <FeatureCard
            icon={PiggyBank}
            title="Savings Goals"
            description="Set up and track your savings goals with visual progress indicators"
            iconColor="text-green-600"
            bgColor="bg-green-100"
          />

          <FeatureCard
            icon={Receipt}
            title="Bill Payments"
            description="Pay bills, buy airtime and data bundles in seconds"
            iconColor="text-purple-600"
            bgColor="bg-purple-100"
          />

          <FeatureCard
            icon={Wallet}
            title="Instant Transfers"
            description="Send money to anyone, anytime with just a few taps"
            iconColor="text-orange-600"
            bgColor="bg-orange-100"
          />
        </div>

        <h2 className="text-xl font-bold text-gray-800 mt-8">Innovative Features</h2>

        <div className="grid grid-cols-1 gap-4">
          <FeatureCard
            icon={MessageSquare}
            title="AI Financial Assistant"
            description="Get personalized financial advice and quick help with your banking needs"
            iconColor="text-indigo-600"
            bgColor="bg-indigo-100"
            isNew
          />

          <FeatureCard
            icon={BarChart3}
            title="Spending Insights"
            description="Track your spending habits with smart alerts and monthly trends"
            iconColor="text-teal-600"
            bgColor="bg-teal-100"
          />

          <FeatureCard
            icon={QrCode}
            title="QR Code Payments"
            description="Make contactless payments quickly and securely with QR codes"
            iconColor="text-red-600"
            bgColor="bg-red-100"
            isNew
          />

          <FeatureCard
            icon={Mic}
            title="Voice Commands"
            description="Perform basic banking tasks using voice commands"
            iconColor="text-pink-600"
            bgColor="bg-pink-100"
            isNew
          />
        </div>

        <div className="bg-white rounded-lg border border-gray-200 p-4 mt-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="bg-gray-100 p-2 rounded-full mr-3">
                <Moon className="h-5 w-5 text-gray-700" />
              </div>
              <div>
                <h3 className="font-medium text-gray-800">Dark Mode</h3>
                <p className="text-sm text-gray-500">Switch to dark theme for low-light environments</p>
              </div>
            </div>
            <Switch checked={darkMode} onCheckedChange={setDarkMode} className="data-[state=checked]:bg-green-600" />
          </div>
        </div>

        <div className="bg-white rounded-lg border border-gray-200 p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="bg-gray-100 p-2 rounded-full mr-3">
                <Fingerprint className="h-5 w-5 text-gray-700" />
              </div>
              <div>
                <h3 className="font-medium text-gray-800">Biometric Authentication</h3>
                <p className="text-sm text-gray-500">Use fingerprint or Face ID for secure access</p>
              </div>
            </div>
            <Switch checked={true} className="data-[state=checked]:bg-green-600" />
          </div>
        </div>

        <div className="bg-white rounded-lg border border-gray-200 p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="bg-gray-100 p-2 rounded-full mr-3">
                <Bell className="h-5 w-5 text-gray-700" />
              </div>
              <div>
                <h3 className="font-medium text-gray-800">Smart Notifications</h3>
                <p className="text-sm text-gray-500">Get alerts for important account activities</p>
              </div>
            </div>
            <Switch checked={true} className="data-[state=checked]:bg-green-600" />
          </div>
        </div>
      </div>

      <BottomNavigation />
    </div>
  )
}

function FeatureCard({
  icon: Icon,
  title,
  description,
  iconColor,
  bgColor,
  isNew = false,
}: {
  icon: React.ElementType
  title: string
  description: string
  iconColor: string
  bgColor: string
  isNew?: boolean
}) {
  return (
    <Card className="border-gray-200">
      <CardContent className="p-4">
        <div className="flex items-start">
          <div className={`${bgColor} p-3 rounded-lg mr-4`}>
            <Icon className={`h-6 w-6 ${iconColor}`} />
          </div>
          <div className="flex-1">
            <div className="flex items-center mb-1">
              <h3 className="text-lg font-medium text-gray-800 mr-2">{title}</h3>
              {isNew && <Badge className="bg-green-100 text-green-800 hover:bg-green-200">New</Badge>}
            </div>
            <p className="text-sm text-gray-600">{description}</p>
          </div>
          <Button variant="ghost" size="icon" className="text-gray-400">
            <ArrowLeft className="h-5 w-5 rotate-180" />
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

