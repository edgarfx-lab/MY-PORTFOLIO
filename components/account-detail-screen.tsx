"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { ArrowLeft, Eye, EyeOff, ArrowUpRight, ArrowDownLeft, Calendar, Shield, Lock, Wifi } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Switch } from "@/components/ui/switch"
import NedbankLogo from "@/components/nedbank-logo"

export default function AccountDetailScreen({ accountId }: { accountId: number }) {
  const router = useRouter()
  const [showDetails, setShowDetails] = useState(true)

  // This would typically come from an API or context
  const accounts = [
    {
      id: 1,
      name: "Private Client",
      balance: 12450.49,
      currency: "R",
      type: "Current",
      cardNumber: "4519 •••• •••• 3267",
      cardExpiry: "05/27",
      cardType: "Visa",
      cardColor: "bg-gradient-to-r from-gray-900 to-gray-700",
      transactions: [
        {
          id: 101,
          merchant: "Woolworths",
          date: "Today",
          amount: -450.75,
          category: "Groceries",
        },
        {
          id: 102,
          merchant: "Uber",
          date: "Apr 2",
          amount: -85.5,
          category: "Transport",
        },
        {
          id: 103,
          merchant: "Pick n Pay",
          date: "Apr 1",
          amount: -320.25,
          category: "Groceries",
        },
        {
          id: 104,
          merchant: "Netflix",
          date: "Mar 28",
          amount: -159.0,
          category: "Entertainment",
        },
        {
          id: 105,
          merchant: "Salary",
          date: "Mar 25",
          amount: 15000.0,
          category: "Income",
        },
      ],
    },
    {
      id: 2,
      name: "MiGoals",
      balance: 3500.75,
      currency: "R",
      type: "Savings",
      cardNumber: "5241 •••• •••• 7890",
      cardExpiry: "08/26",
      cardType: "Mastercard",
      cardColor: "bg-gradient-to-r from-blue-800 to-blue-600",
      transactions: [
        {
          id: 201,
          merchant: "Deposit",
          date: "Apr 5",
          amount: 1000.0,
          category: "Income",
        },
        {
          id: 202,
          merchant: "Transfer",
          date: "Apr 1",
          amount: 500.0,
          category: "Income",
        },
        {
          id: 203,
          merchant: "Withdrawal",
          date: "Mar 15",
          amount: -200.0,
          category: "Transfer",
        },
      ],
    },
    {
      id: 3,
      name: "MyPocket",
      balance: 5000.0,
      currency: "R",
      type: "Savings",
      cardNumber: "4519 •••• •••• 1234",
      cardExpiry: "12/25",
      cardType: "Visa",
      cardColor: "bg-gradient-to-r from-green-800 to-green-600",
      transactions: [
        {
          id: 301,
          merchant: "Netflix",
          date: "Apr 3",
          amount: -159.0,
          category: "Entertainment",
        },
        {
          id: 302,
          merchant: "Salary",
          date: "Mar 25",
          amount: 15000.0,
          category: "Income",
        },
        {
          id: 303,
          merchant: "Transfer",
          date: "Mar 20",
          amount: 1000.0,
          category: "Income",
        },
      ],
    },
  ]

  const account = accounts.find((acc) => acc.id === accountId)

  if (!account) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h2 className="text-xl font-bold text-gray-800">Account not found</h2>
          <Button className="mt-4 bg-[#0F5132] hover:bg-[#0F5132]/90" onClick={() => router.push("/dashboard")}>
            Back to Dashboard
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
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
            <div>
              <h1 className="text-xl font-medium">{account.name}</h1>
              <p className="text-sm text-green-100">{account.type} Account</p>
            </div>
          </div>
          <button onClick={() => setShowDetails(!showDetails)} className="text-white">
            {showDetails ? <Eye className="h-5 w-5" /> : <EyeOff className="h-5 w-5" />}
          </button>
        </div>
      </header>

      <div className="p-4 space-y-6">
        {/* Physical Card */}
        <div className="relative">
          <div className={`${account.cardColor} rounded-xl p-5 shadow-lg`}>
            <div className="flex justify-between items-start mb-8">
              <div>
                <p className="text-white/70 text-xs">Balance</p>
                <p className="text-white text-2xl font-bold">
                  {showDetails ? `${account.currency}${account.balance.toFixed(2)}` : "R••••••"}
                </p>
              </div>
              <NedbankLogo variant="icon-only" size="small" color="white" />
            </div>

            <div className="mb-6">
              <p className="text-white/70 text-xs mb-1">Card Number</p>
              <p className="text-white font-mono text-lg">{showDetails ? account.cardNumber : "•••• •••• •••• ••••"}</p>
            </div>

            <div className="flex justify-between items-end">
              <div>
                <p className="text-white/70 text-xs">Valid Thru</p>
                <p className="text-white font-mono">{showDetails ? account.cardExpiry : "••/••"}</p>
              </div>
              <div className="flex items-center">
                <p className="text-white mr-2 font-medium">{account.cardType}</p>
                {account.cardType === "Visa" ? (
                  <div className="text-white font-bold italic text-xl">VISA</div>
                ) : (
                  <div className="text-white font-bold text-xl">Mastercard</div>
                )}
              </div>
            </div>
          </div>

          <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2">
            <Button className="bg-[#0F5132] hover:bg-[#0F5132]/90 shadow-md" size="sm">
              <Lock className="h-4 w-4 mr-1" /> Manage Card
            </Button>
          </div>
        </div>

        {/* Tabs for Transactions and Settings */}
        <Tabs defaultValue="transactions" className="mt-8">
          <TabsList className="grid w-full grid-cols-2 bg-gray-100">
            <TabsTrigger
              value="transactions"
              className="data-[state=active]:bg-white data-[state=active]:text-[#0F5132]"
            >
              Transactions
            </TabsTrigger>
            <TabsTrigger value="settings" className="data-[state=active]:bg-white data-[state=active]:text-[#0F5132]">
              Card Settings
            </TabsTrigger>
          </TabsList>

          <TabsContent value="transactions" className="mt-4 space-y-4">
            <div className="flex justify-between items-center">
              <h2 className="text-lg font-bold text-gray-800">Recent Transactions</h2>
              <div className="flex items-center text-sm text-gray-500">
                <Calendar className="h-4 w-4 mr-1" />
                <span>April 2025</span>
              </div>
            </div>

            <div className="space-y-3">
              {account.transactions.map((transaction) => (
                <div
                  key={transaction.id}
                  className="flex justify-between items-center p-3 rounded-lg border border-gray-100 shadow-sm bg-white"
                >
                  <div className="flex items-center">
                    <div className={`p-2 rounded-full mr-3 ${transaction.amount > 0 ? "bg-green-100" : "bg-gray-100"}`}>
                      {transaction.amount > 0 ? (
                        <ArrowDownLeft className="h-5 w-5 text-green-600" />
                      ) : (
                        <ArrowUpRight className="h-5 w-5 text-gray-600" />
                      )}
                    </div>
                    <div>
                      <p className="font-medium text-gray-800">{transaction.merchant}</p>
                      <p className="text-xs text-gray-500">
                        {transaction.date} • {transaction.category}
                      </p>
                    </div>
                  </div>
                  <p className={`font-medium ${transaction.amount > 0 ? "text-green-600" : "text-gray-800"}`}>
                    {transaction.amount > 0 ? "+" : ""}R{Math.abs(transaction.amount).toFixed(2)}
                  </p>
                </div>
              ))}
            </div>

            <Button variant="outline" className="w-full border-gray-200 text-gray-700">
              View All Transactions
            </Button>
          </TabsContent>

          <TabsContent value="settings" className="mt-4 space-y-4">
            <Card className="border-gray-100 shadow-sm">
              <CardContent className="p-4 space-y-4">
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <Lock className="h-5 w-5 text-gray-600 mr-2" />
                    <span className="font-medium text-gray-800">Card Status</span>
                  </div>
                  <Switch checked={true} className="data-[state=checked]:bg-[#0F5132]" />
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
                    <Shield className="h-5 w-5 text-gray-600 mr-2" />
                    <span className="font-medium text-gray-800">Contactless Payments</span>
                  </div>
                  <Switch checked={true} className="data-[state=checked]:bg-[#0F5132]" />
                </div>
              </CardContent>
            </Card>

            <Card className="border-gray-100 shadow-sm">
              <CardContent className="p-4">
                <h3 className="font-medium text-gray-800 mb-3">Card Limits</h3>
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Daily ATM Withdrawal</span>
                      <span className="font-medium text-gray-800">R5,000</span>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Daily Purchase Limit</span>
                      <span className="font-medium text-gray-800">R20,000</span>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Online Transaction Limit</span>
                      <span className="font-medium text-gray-800">R10,000</span>
                    </div>
                  </div>
                </div>
                <Button variant="outline" className="w-full mt-4 border-gray-200 text-[#0F5132]">
                  Adjust Limits
                </Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

