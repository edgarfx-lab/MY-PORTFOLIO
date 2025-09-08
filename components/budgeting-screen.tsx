"use client"
import { useRouter } from "next/navigation"
import {
  ArrowLeft,
  BarChart3,
  ShoppingBag,
  Car,
  Utensils,
  Wifi,
  Zap,
  Calendar,
  TrendingUp,
  TrendingDown,
  Sparkles,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import BottomNavigation from "@/components/bottom-navigation"
import { cn } from "@/lib/utils"

// Import the Nedbank logo component at the top of the file
import NedbankLogo from "@/components/nedbank-logo"

export default function BudgetingScreen() {
  const router = useRouter()

  const categories = [
    {
      id: 1,
      name: "Groceries",
      icon: ShoppingBag,
      spent: 2450,
      budget: 3500,
      color: "bg-green-100",
      iconColor: "text-green-600",
      trend: "down",
    },
    {
      id: 2,
      name: "Entertainment",
      icon: Wifi,
      spent: 1275,
      budget: 1500,
      color: "bg-purple-100",
      iconColor: "text-purple-600",
      trend: "up",
    },
    {
      id: 3,
      name: "Dining Out",
      icon: Utensils,
      spent: 1850,
      budget: 2000,
      color: "bg-orange-100",
      iconColor: "text-orange-600",
      trend: "up",
    },
    {
      id: 4,
      name: "Transport",
      icon: Car,
      spent: 950,
      budget: 1200,
      color: "bg-blue-100",
      iconColor: "text-blue-600",
      trend: "down",
    },
    {
      id: 5,
      name: "Utilities",
      icon: Zap,
      spent: 1500,
      budget: 1500,
      color: "bg-yellow-100",
      iconColor: "text-yellow-600",
      trend: "same",
    },
  ]

  const insights = [
    {
      id: 1,
      title: "Dining out expenses increased",
      description: "You spent 15% more on dining out compared to last month.",
      icon: TrendingUp,
      color: "bg-red-100",
      iconColor: "text-red-600",
    },
    {
      id: 2,
      title: "Grocery spending optimized",
      description: "You've reduced grocery spending by 8% this month.",
      icon: TrendingDown,
      color: "bg-green-100",
      iconColor: "text-green-600",
    },
    {
      id: 3,
      title: "Subscription audit recommended",
      description: "You have 5 active subscriptions totaling R459/month.",
      icon: Wifi,
      color: "bg-blue-100",
      iconColor: "text-blue-600",
    },
  ]

  const financialWellnessScore = 78

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
            <h1 className="text-xl font-medium">Budgeting Insights</h1>
          </div>
        </div>
      </header>

      {/* Financial Wellness Score */}
      <div className="bg-gradient-to-r from-[#0F5132] to-[#004225] text-white px-4 pt-2 pb-6">
        <div className="flex justify-between items-center mb-1">
          <h2 className="text-sm font-medium text-green-100">Financial Wellness Score</h2>
          <span className="text-xl font-bold">{financialWellnessScore}</span>
        </div>
        <Progress value={financialWellnessScore} className="h-2 bg-green-900" indicatorClassName="bg-green-300" />
        <p className="text-xs text-green-100 mt-2">Your score is better than 65% of Nedbank customers</p>
      </div>

      <div className="bg-white shadow-md rounded-t-xl -mt-4 p-4">
        <Tabs defaultValue="categories" className="w-full">
          <TabsList className="grid w-full grid-cols-3 bg-gray-100">
            <TabsTrigger value="categories" className="data-[state=active]:bg-white data-[state=active]:text-[#0F5132]">
              Categories
            </TabsTrigger>
            <TabsTrigger value="insights" className="data-[state=active]:bg-white data-[state=active]:text-[#0F5132]">
              Insights
            </TabsTrigger>
            <TabsTrigger value="trends" className="data-[state=active]:bg-white data-[state=active]:text-[#0F5132]">
              Trends
            </TabsTrigger>
          </TabsList>

          <TabsContent value="categories" className="mt-4 space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-bold text-gray-800">Spending Categories</h2>
              <div className="flex items-center text-sm text-gray-500">
                <Calendar className="h-4 w-4 mr-1" />
                <span>April 2025</span>
              </div>
            </div>

            <div className="space-y-3">
              {categories.map((category) => (
                <Card key={category.id} className="border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                  <CardContent className="p-4">
                    <div className="flex items-start">
                      <div className={`${category.color} p-3 rounded-full mr-4`}>
                        <category.icon className={`h-5 w-5 ${category.iconColor}`} />
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between items-start mb-1">
                          <h3 className="font-medium text-gray-800">{category.name}</h3>
                          <div className="flex items-center">
                            {category.trend === "up" && <TrendingUp className="h-4 w-4 text-red-500 mr-1" />}
                            {category.trend === "down" && <TrendingDown className="h-4 w-4 text-green-500 mr-1" />}
                            <span className="text-sm font-medium text-gray-700">
                              R{category.spent.toLocaleString()} / R{category.budget.toLocaleString()}
                            </span>
                          </div>
                        </div>
                        <Progress
                          value={(category.spent / category.budget) * 100}
                          className="h-2 bg-gray-200"
                          indicatorClassName={cn(
                            category.spent / category.budget > 0.9 ? "bg-red-500" : "bg-[#0F5132]",
                          )}
                        />
                        <div className="flex justify-between mt-2 text-xs text-gray-500">
                          <span>{Math.round((category.spent / category.budget) * 100)}% of budget</span>
                          <span>R{(category.budget - category.spent).toLocaleString()} remaining</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Button variant="outline" className="w-full border-gray-200 text-[#0F5132]">
              Adjust Budget Categories
            </Button>
          </TabsContent>

          <TabsContent value="insights" className="mt-4 space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-bold text-gray-800">Smart Insights</h2>
              <Badge className="bg-[#0F5132] hover:bg-[#0F5132]/90">AI Powered</Badge>
            </div>

            <div className="space-y-3">
              {insights.map((insight) => (
                <Card key={insight.id} className="border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                  <CardContent className="p-4">
                    <div className="flex items-start">
                      <div className={`${insight.color} p-3 rounded-full mr-4`}>
                        <insight.icon className={`h-5 w-5 ${insight.iconColor}`} />
                      </div>
                      <div>
                        <h3 className="font-medium text-gray-800">{insight.title}</h3>
                        <p className="text-sm text-gray-600 mt-1">{insight.description}</p>
                        <Button variant="link" className="p-0 h-auto text-[#0F5132] mt-1">
                          View Details
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="border-gray-100 shadow-sm bg-gradient-to-r from-green-50 to-green-100">
              <CardContent className="p-4">
                <div className="flex items-start">
                  <div className="bg-white p-2 rounded-full mr-3 shadow-sm">
                    <Sparkles className="h-5 w-5 text-[#0F5132]" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-800">Personalized Recommendation</h3>
                    <p className="text-sm text-gray-700 mt-1">
                      Based on your spending patterns, you could save approximately R850 per month by reducing dining
                      out expenses and redirecting those funds to your Holiday Fund goal.
                    </p>
                    <Button variant="link" className="p-0 h-auto text-[#0F5132] mt-1">
                      Create Savings Plan
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="trends" className="mt-4 space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-bold text-gray-800">Monthly Trends</h2>
              <div className="flex items-center text-sm text-gray-500">
                <Calendar className="h-4 w-4 mr-1" />
                <span>Last 3 Months</span>
              </div>
            </div>

            <Card className="border-gray-100 shadow-sm">
              <CardContent className="p-4">
                <h3 className="font-medium text-gray-800 mb-3">Total Monthly Spending</h3>
                <div className="h-40 bg-gray-100 rounded-lg flex items-center justify-center">
                  <BarChart3 className="h-10 w-10 text-gray-400" />
                </div>
                <p className="text-sm text-gray-500 mt-2 text-center">Chart visualization would appear here</p>
              </CardContent>
            </Card>

            <Card className="border-gray-100 shadow-sm">
              <CardContent className="p-4">
                <h3 className="font-medium text-gray-800 mb-2">Top Spending Categories</h3>
                <div className="space-y-3 mt-4">
                  {categories.slice(0, 3).map((category) => (
                    <div key={category.id} className="flex items-center">
                      <div className={`${category.color} p-2 rounded-full mr-3`}>
                        <category.icon className={`h-4 w-4 ${category.iconColor}`} />
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-medium text-gray-700">{category.name}</span>
                          <span className="text-sm text-gray-600">R{category.spent.toLocaleString()}</span>
                        </div>
                        <Progress
                          value={(category.spent / 5000) * 100}
                          className="h-1.5 mt-1 bg-gray-200"
                          indicatorClassName="bg-[#0F5132]"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Button variant="outline" className="w-full border-gray-200 text-[#0F5132]">
              View Detailed Reports
            </Button>
          </TabsContent>
        </Tabs>
      </div>

      <BottomNavigation />
    </div>
  )
}

