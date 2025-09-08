"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { ArrowLeft, Plus, Home, Car, Plane, Briefcase, Gift, Sparkles, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import BottomNavigation from "@/components/bottom-navigation"
// Import the Nedbank logo component at the top of the file
import NedbankLogo from "@/components/nedbank-logo"

export default function GoalsScreen() {
  const router = useRouter()

  const goals = [
    {
      id: 1,
      name: "Holiday Fund",
      icon: Plane,
      target: 25000,
      current: 15750,
      deadline: "December 2025",
      color: "bg-blue-100",
      iconColor: "text-blue-600",
    },
    {
      id: 2,
      name: "Emergency Fund",
      icon: Sparkles,
      target: 50000,
      current: 32500,
      deadline: "Ongoing",
      color: "bg-purple-100",
      iconColor: "text-purple-600",
    },
    {
      id: 3,
      name: "New Car",
      icon: Car,
      target: 120000,
      current: 45000,
      deadline: "June 2026",
      color: "bg-green-100",
      iconColor: "text-green-600",
    },
  ]

  const goalCategories = [
    { id: 1, name: "Home", icon: Home, color: "bg-orange-100", iconColor: "text-orange-600" },
    { id: 2, name: "Car", icon: Car, color: "bg-green-100", iconColor: "text-green-600" },
    { id: 3, name: "Travel", icon: Plane, color: "bg-blue-100", iconColor: "text-blue-600" },
    { id: 4, name: "Education", icon: Briefcase, color: "bg-red-100", iconColor: "text-red-600" },
    { id: 5, name: "Gift", icon: Gift, color: "bg-pink-100", iconColor: "text-pink-600" },
    { id: 6, name: "Other", icon: Plus, color: "bg-gray-100", iconColor: "text-gray-600" },
  ]

  const [selectedGoal, setSelectedGoal] = useState<number | null>(null)

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col pb-20">
      {/* Header */}
      <header className="bg-gradient-to-r from-[#0F5132] to-[#004225] text-white p-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Button
              variant="ghost"
              size="icon"
              className="text-white mr-2 hover:bg-white/10"
              onClick={() => router.push("/dashboard")}
            >
              <ArrowLeft className="h-6 w-6" />
            </Button>
            <NedbankLogo variant="icon-only" size="small" className="mr-2" />
            <h1 className="text-xl font-medium">Smart Goals Tracker</h1>
          </div>
          <Button size="sm" className="bg-white text-[#0F5132] hover:bg-green-50" onClick={() => setSelectedGoal(null)}>
            <Plus className="h-4 w-4 mr-1" /> New Goal
          </Button>
        </div>
      </header>

      {selectedGoal === null ? (
        <>
          {/* Goals List */}
          <div className="p-4 space-y-4">
            <h2 className="text-lg font-bold text-gray-800">Your Goals</h2>

            {goals.map((goal) => (
              <Card
                key={goal.id}
                className="border-gray-100 shadow-sm hover:shadow-md transition-shadow"
                onClick={() => setSelectedGoal(goal.id)}
              >
                <CardContent className="p-4">
                  <div className="flex items-start">
                    <div className={`${goal.color} p-3 rounded-full mr-4`}>
                      <goal.icon className={`h-6 w-6 ${goal.iconColor}`} />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-1">
                        <h3 className="font-medium text-gray-800">{goal.name}</h3>
                        <span className="text-sm font-medium text-[#0F5132]">
                          {Math.round((goal.current / goal.target) * 100)}%
                        </span>
                      </div>
                      <div className="flex items-center text-sm text-gray-500 mb-2">
                        <Calendar className="h-4 w-4 mr-1" />
                        <span>{goal.deadline}</span>
                      </div>
                      <Progress
                        value={(goal.current / goal.target) * 100}
                        className="h-2 bg-gray-200"
                        indicatorClassName="bg-[#0F5132]"
                      />
                      <div className="flex justify-between mt-2 text-sm">
                        <span className="text-gray-500">R{goal.current.toLocaleString()}</span>
                        <span className="text-gray-500">R{goal.target.toLocaleString()}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}

            {/* AI Tips */}
            <div className="mt-6">
              <div className="flex justify-between items-center mb-3">
                <h2 className="text-lg font-bold text-gray-800">Smart Tips</h2>
                <Badge className="bg-[#0F5132] hover:bg-[#0F5132]/90">AI Powered</Badge>
              </div>

              <Card className="border-gray-100 shadow-sm bg-gradient-to-r from-green-50 to-green-100">
                <CardContent className="p-4">
                  <div className="flex items-start">
                    <div className="bg-white p-2 rounded-full mr-3 shadow-sm">
                      <Sparkles className="h-5 w-5 text-[#0F5132]" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-800">Boost your Holiday Fund</h3>
                      <p className="text-sm text-gray-600 mt-1">
                        Setting up a recurring transfer of R500 per week could help you reach your Holiday Fund goal 2
                        months earlier.
                      </p>
                      <Button variant="link" className="p-0 h-auto text-[#0F5132] mt-1">
                        Set up now
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </>
      ) : (
        <>
          {/* Goal Detail View */}
          {goals
            .filter((goal) => goal.id === selectedGoal)
            .map((goal) => (
              <div key={goal.id} className="p-4 space-y-4">
                <Card className="border-gray-100 shadow-sm">
                  <CardContent className="p-4">
                    <div className="flex items-center mb-4">
                      <div className={`${goal.color} p-3 rounded-full mr-3`}>
                        <goal.icon className={`h-6 w-6 ${goal.iconColor}`} />
                      </div>
                      <div>
                        <h2 className="text-xl font-bold text-gray-800">{goal.name}</h2>
                        <p className="text-sm text-gray-500">Target date: {goal.deadline}</p>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm text-gray-500">Progress</span>
                          <span className="text-sm font-medium text-[#0F5132]">
                            {Math.round((goal.current / goal.target) * 100)}%
                          </span>
                        </div>
                        <Progress
                          value={(goal.current / goal.target) * 100}
                          className="h-3 bg-gray-200"
                          indicatorClassName="bg-[#0F5132]"
                        />
                      </div>

                      <div className="flex justify-between items-center">
                        <div>
                          <p className="text-sm text-gray-500">Current amount</p>
                          <p className="text-xl font-bold text-gray-800">R{goal.current.toLocaleString()}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-sm text-gray-500">Target amount</p>
                          <p className="text-xl font-bold text-gray-800">R{goal.target.toLocaleString()}</p>
                        </div>
                      </div>

                      <div className="pt-2">
                        <p className="text-sm text-gray-500 mb-2">Estimated completion</p>
                        <div className="flex items-center bg-green-50 p-3 rounded-lg">
                          <Calendar className="h-5 w-5 text-[#0F5132] mr-2" />
                          <p className="text-sm font-medium text-gray-800">On track to complete by {goal.deadline}</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <div className="space-y-3">
                  <h3 className="text-lg font-bold text-gray-800">Contribution Options</h3>

                  <Card className="border-gray-100 shadow-sm">
                    <CardContent className="p-4">
                      <div className="flex justify-between items-center">
                        <div className="flex items-center">
                          <div className="bg-green-100 p-2 rounded-full mr-3">
                            <Plus className="h-5 w-5 text-green-600" />
                          </div>
                          <div>
                            <h4 className="font-medium text-gray-800">One-time contribution</h4>
                            <p className="text-sm text-gray-500">Add funds immediately</p>
                          </div>
                        </div>
                        <Button variant="outline" className="border-[#0F5132] text-[#0F5132] hover:bg-green-50">
                          Add
                        </Button>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-gray-100 shadow-sm">
                    <CardContent className="p-4">
                      <div className="flex justify-between items-center">
                        <div className="flex items-center">
                          <div className="bg-blue-100 p-2 rounded-full mr-3">
                            <Calendar className="h-5 w-5 text-blue-600" />
                          </div>
                          <div>
                            <h4 className="font-medium text-gray-800">Recurring contribution</h4>
                            <p className="text-sm text-gray-500">Set up automatic transfers</p>
                          </div>
                        </div>
                        <Button variant="outline" className="border-[#0F5132] text-[#0F5132] hover:bg-green-50">
                          Setup
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div className="pt-2">
                  <h3 className="text-lg font-bold text-gray-800 mb-3">AI Insights</h3>

                  <Card className="border-gray-100 shadow-sm bg-gradient-to-r from-green-50 to-green-100">
                    <CardContent className="p-4">
                      <div className="space-y-3">
                        <div className="flex items-start">
                          <div className="bg-white p-2 rounded-full mr-3 shadow-sm">
                            <Sparkles className="h-5 w-5 text-[#0F5132]" />
                          </div>
                          <p className="text-sm text-gray-700">
                            Based on your spending patterns, you could save an additional R750 per month by reducing
                            dining out expenses.
                          </p>
                        </div>

                        <div className="flex items-start">
                          <div className="bg-white p-2 rounded-full mr-3 shadow-sm">
                            <Sparkles className="h-5 w-5 text-[#0F5132]" />
                          </div>
                          <p className="text-sm text-gray-700">
                            Increasing your monthly contribution by R500 would help you reach your goal 3 months
                            earlier.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div className="flex space-x-3 pt-4">
                  <Button
                    variant="outline"
                    className="flex-1 border-gray-300 text-gray-700 hover:bg-gray-50"
                    onClick={() => setSelectedGoal(null)}
                  >
                    Back to Goals
                  </Button>
                  <Button className="flex-1 bg-[#0F5132] hover:bg-[#0F5132]/90 text-white">Edit Goal</Button>
                </div>
              </div>
            ))}
        </>
      )}

      <BottomNavigation />
    </div>
  )
}

