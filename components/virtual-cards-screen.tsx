"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import {
  ArrowLeft,
  Plus,
  CreditCard,
  Eye,
  EyeOff,
  Lock,
  ShoppingBag,
  Plane,
  Coffee,
  Wifi,
  Settings,
  ChevronRight,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import BottomNavigation from "@/components/bottom-navigation"
import NedbankLogo from "@/components/nedbank-logo"

export default function VirtualCardsScreen() {
  const router = useRouter()
  const [showCardDetails, setShowCardDetails] = useState(false)

  const virtualCards = [
    {
      id: 1,
      name: "Shopping Card",
      number: "4519 •••• •••• 3267",
      expiry: "05/27",
      cvv: "•••",
      balance: 5000,
      limit: 10000,
      isActive: true,
      category: "Shopping",
      icon: ShoppingBag,
      color: "bg-gradient-to-r from-green-600 to-green-800",
    },
    {
      id: 2,
      name: "Travel Card",
      number: "5241 •••• •••• 7890",
      expiry: "08/26",
      cvv: "•••",
      balance: 15000,
      limit: 25000,
      isActive: true,
      category: "Travel",
      icon: Plane,
      color: "bg-gradient-to-r from-blue-600 to-blue-800",
    },
    {
      id: 3,
      name: "Subscriptions",
      number: "4519 •••• •••• 1234",
      expiry: "12/25",
      cvv: "•••",
      balance: 2500,
      limit: 5000,
      isActive: false,
      category: "Entertainment",
      icon: Wifi,
      color: "bg-gradient-to-r from-purple-600 to-purple-800",
    },
  ]

  const [selectedCard, setSelectedCard] = useState<number | null>(null)

  const transactions = [
    {
      id: 1,
      merchant: "Amazon",
      date: "Today",
      amount: -1250.75,
      category: "Shopping",
    },
    {
      id: 2,
      merchant: "Netflix",
      date: "Apr 5",
      amount: -159.0,
      category: "Entertainment",
    },
    {
      id: 3,
      merchant: "Uber",
      date: "Apr 3",
      amount: -85.5,
      category: "Transport",
    },
  ]

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
              onClick={() => {
                if (selectedCard !== null) {
                  setSelectedCard(null)
                } else {
                  router.push("/dashboard")
                }
              }}
            >
              <ArrowLeft className="h-6 w-6" />
            </Button>
            <NedbankLogo variant="icon-only" size="small" className="mr-2" />
            <h1 className="text-xl font-medium">Virtual Cards Hub</h1>
          </div>
          {selectedCard === null && (
            <Button size="sm" className="bg-white text-[#0F5132] hover:bg-green-50">
              <Plus className="h-4 w-4 mr-1" /> New Card
            </Button>
          )}
        </div>
      </header>

      {selectedCard === null ? (
        <>
          {/* Cards List */}
          <div className="p-4 space-y-4">
            <div className="flex justify-between items-center">
              <h2 className="text-lg font-bold text-gray-800">Your Virtual Cards</h2>
              <button onClick={() => setShowCardDetails(!showCardDetails)} className="text-gray-500">
                {showCardDetails ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
              </button>
            </div>

            <div className="space-y-4">
              {virtualCards.map((card) => (
                <div
                  key={card.id}
                  className="rounded-xl overflow-hidden shadow-md cursor-pointer"
                  onClick={() => setSelectedCard(card.id)}
                >
                  <div className={`${card.color} p-4 text-white`}>
                    <div className="flex justify-between items-start mb-6">
                      <div>
                        <p className="text-xs text-white/70">Virtual Card</p>
                        <h3 className="font-bold">{card.name}</h3>
                      </div>
                      <div className={`p-2 rounded-full bg-white/10 ${!card.isActive && "bg-red-500/20"}`}>
                        <card.icon className="h-5 w-5" />
                      </div>
                    </div>

                    <p className="font-mono mb-2">{showCardDetails ? card.number : card.number.replace(/•/g, "•")}</p>

                    <div className="flex justify-between items-center">
                      <div>
                        <p className="text-xs text-white/70">Expiry</p>
                        <p className="font-mono">{card.expiry}</p>
                      </div>
                      <div>
                        <p className="text-xs text-white/70">CVV</p>
                        <p className="font-mono">{showCardDetails ? card.cvv.replace(/•/g, "123") : card.cvv}</p>
                      </div>
                      <div className="flex items-center">
                        {!card.isActive && <Badge className="bg-red-500 text-white">Locked</Badge>}
                      </div>
                    </div>
                  </div>

                  <div className="bg-white p-3">
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="text-xs text-gray-500">Available Balance</p>
                        <p className="font-bold text-gray-800">R{card.balance.toLocaleString()}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-xs text-gray-500">Spending Limit</p>
                        <p className="font-medium text-gray-600">R{card.limit.toLocaleString()}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <Card className="border-gray-100 shadow-sm">
                <CardContent className="p-4">
                  <div className="flex items-start">
                    <div className="bg-green-100 p-2 rounded-full mr-3">
                      <CreditCard className="h-5 w-5 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-800">Virtual Card Benefits</h3>
                      <ul className="text-sm text-gray-600 mt-2 space-y-2">
                        <li className="flex items-start">
                          <span className="text-[#0F5132] mr-2">•</span>
                          Create separate cards for different spending categories
                        </li>
                        <li className="flex items-start">
                          <span className="text-[#0F5132] mr-2">•</span>
                          Lock/unlock cards instantly for added security
                        </li>
                        <li className="flex items-start">
                          <span className="text-[#0F5132] mr-2">•</span>
                          Set spending limits for better budget control
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </>
      ) : (
        <>
          {/* Card Detail View */}
          {virtualCards
            .filter((card) => card.id === selectedCard)
            .map((card) => (
              <div key={card.id} className="p-4 space-y-4">
                <div className="rounded-xl overflow-hidden shadow-md">
                  <div className={`${card.color} p-4 text-white`}>
                    <div className="flex justify-between items-start mb-6">
                      <div>
                        <p className="text-xs text-white/70">Virtual Card</p>
                        <h3 className="font-bold">{card.name}</h3>
                      </div>
                      <div className={`p-2 rounded-full bg-white/10 ${!card.isActive && "bg-red-500/20"}`}>
                        <card.icon className="h-5 w-5" />
                      </div>
                    </div>

                    <p className="font-mono mb-2">
                      {showCardDetails ? card.number.replace(/•/g, "1234") : card.number}
                    </p>

                    <div className="flex justify-between items-center">
                      <div>
                        <p className="text-xs text-white/70">Expiry</p>
                        <p className="font-mono">{card.expiry}</p>
                      </div>
                      <div>
                        <p className="text-xs text-white/70">CVV</p>
                        <p className="font-mono">{showCardDetails ? card.cvv.replace(/•/g, "123") : card.cvv}</p>
                      </div>
                      <button
                        onClick={(e) => {
                          e.stopPropagation()
                          setShowCardDetails(!showCardDetails)
                        }}
                        className="text-white p-2 rounded-full bg-white/10"
                      >
                        {showCardDetails ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                      </button>
                    </div>
                  </div>

                  <div className="bg-white p-3">
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="text-xs text-gray-500">Available Balance</p>
                        <p className="font-bold text-gray-800">R{card.balance.toLocaleString()}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-xs text-gray-500">Spending Limit</p>
                        <p className="font-medium text-gray-600">R{card.limit.toLocaleString()}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <Card className="border-gray-100 shadow-sm">
                  <CardContent className="p-4 space-y-4">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center">
                        <Lock className="h-5 w-5 text-gray-600 mr-2" />
                        <span className="font-medium text-gray-800">Card Status</span>
                      </div>
                      <Switch checked={card.isActive} className="data-[state=checked]:bg-[#0F5132]" />
                    </div>

                    <div className="flex justify-between items-center pt-2">
                      <div className="flex items-center">
                        <Wifi className="h-5 w-5 text-gray-600 mr-2" />
                        <span className="font-medium text-gray-800">Online Transactions</span>
                      </div>
                      <Switch checked={true} className="data-[state=checked]:bg-[#0F5132]" />
                    </div>

                    <div className="flex justify-between items-center pt-2">
                      <div className="flex items-center">
                        <ShoppingBag className="h-5 w-5 text-gray-600 mr-2" />
                        <span className="font-medium text-gray-800">In-store Purchases</span>
                      </div>
                      <Switch checked={true} className="data-[state=checked]:bg-[#0F5132]" />
                    </div>
                  </CardContent>
                </Card>

                <Tabs defaultValue="transactions" className="w-full">
                  <TabsList className="grid w-full grid-cols-2 bg-gray-100">
                    <TabsTrigger
                      value="transactions"
                      className="data-[state=active]:bg-white data-[state=active]:text-[#0F5132]"
                    >
                      Transactions
                    </TabsTrigger>
                    <TabsTrigger
                      value="settings"
                      className="data-[state=active]:bg-white data-[state=active]:text-[#0F5132]"
                    >
                      Settings
                    </TabsTrigger>
                  </TabsList>
                  <TabsContent value="transactions" className="mt-4 space-y-3">
                    {transactions.map((transaction) => (
                      <div
                        key={transaction.id}
                        className="flex justify-between items-center p-3 rounded-lg border border-gray-100 shadow-sm bg-white"
                      >
                        <div className="flex items-center">
                          <div className="p-2 rounded-full bg-gray-100 mr-3">
                            <ShoppingBag className="h-5 w-5 text-gray-600" />
                          </div>
                          <div>
                            <p className="font-medium text-gray-800">{transaction.merchant}</p>
                            <p className="text-xs text-gray-500">
                              {transaction.date} • {transaction.category}
                            </p>
                          </div>
                        </div>
                        <p className="font-medium text-gray-800">R{Math.abs(transaction.amount).toFixed(2)}</p>
                      </div>
                    ))}

                    <Button variant="outline" className="w-full border-gray-200 text-gray-700 hover:bg-gray-50">
                      View All Transactions
                    </Button>
                  </TabsContent>
                  <TabsContent value="settings" className="mt-4 space-y-3">
                    <Card className="border-gray-100 shadow-sm">
                      <CardContent className="p-0">
                        <button className="w-full flex justify-between items-center p-4 hover:bg-gray-50 transition-colors">
                          <div className="flex items-center">
                            <div className="bg-gray-100 p-2 rounded-full mr-3">
                              <Settings className="h-5 w-5 text-gray-600" />
                            </div>
                            <span className="font-medium text-gray-800">Spending Limits</span>
                          </div>
                          <ChevronRight className="h-5 w-5 text-gray-400" />
                        </button>

                        <div className="w-full h-px bg-gray-100" />

                        <button className="w-full flex justify-between items-center p-4 hover:bg-gray-50 transition-colors">
                          <div className="flex items-center">
                            <div className="bg-gray-100 p-2 rounded-full mr-3">
                              <Coffee className="h-5 w-5 text-gray-600" />
                            </div>
                            <span className="font-medium text-gray-800">Merchant Categories</span>
                          </div>
                          <ChevronRight className="h-5 w-5 text-gray-400" />
                        </button>

                        <div className="w-full h-px bg-gray-100" />

                        <button className="w-full flex justify-between items-center p-4 hover:bg-gray-50 transition-colors">
                          <div className="flex items-center">
                            <div className="bg-gray-100 p-2 rounded-full mr-3">
                              <CreditCard className="h-5 w-5 text-gray-600" />
                            </div>
                            <span className="font-medium text-gray-800">Card Details</span>
                          </div>
                          <ChevronRight className="h-5 w-5 text-gray-400" />
                        </button>
                      </CardContent>
                    </Card>

                    <Button variant="destructive" className="w-full">
                      Delete Virtual Card
                    </Button>
                  </TabsContent>
                </Tabs>
              </div>
            ))}
        </>
      )}

      <BottomNavigation />
    </div>
  )
}

