"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import {
  Bell,
  MessageSquare,
  Eye,
  EyeOff,
  Wallet,
  ArrowUpRight,
  ArrowDownLeft,
  QrCode,
  Target,
  Gift,
  FileText,
  Shield,
  AlertCircle,
  ShoppingBag,
  Smartphone,
  Send,
  DollarSign,
  Home,
  Plus,
  ChevronRight,
  Search,
  Menu,
  User,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import BottomNavigation from "@/components/bottom-navigation"
import { Badge } from "@/components/ui/badge"
import NedbankLogo from "@/components/nedbank-logo"

export default function DashboardScreen() {
  const router = useRouter()
  const [showBalances, setShowBalances] = useState(true)

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
      isPhysical: true,
      isContactless: true,
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
      isPhysical: false,
      isContactless: true,
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
      isPhysical: true,
      isContactless: true,
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
      ],
    },
  ]

  const recentTransactions = [
    {
      id: 1,
      merchant: "Woolworths",
      date: "Today",
      amount: -450.75,
      category: "Groceries",
    },
    {
      id: 2,
      merchant: "Salary",
      date: "Apr 5",
      amount: 15000.0,
      category: "Income",
    },
    {
      id: 3,
      merchant: "Netflix",
      date: "Apr 3",
      amount: -159.0,
      category: "Entertainment",
    },
    {
      id: 4,
      merchant: "Uber",
      date: "Apr 2",
      amount: -85.5,
      category: "Transport",
    },
  ]

  const quickActions = [
    { id: 1, name: "Transfer", icon: ArrowUpRight, color: "bg-green-100", onClick: () => router.push("/payments") },
    { id: 2, name: "Pay", icon: Wallet, color: "bg-gray-200", onClick: () => router.push("/payments") },
    { id: 3, name: "NedPay QR", icon: QrCode, color: "bg-green-100", onClick: () => router.push("/nedpay-qr") },
    { id: 4, name: "Goals", icon: Target, color: "bg-gray-200", onClick: () => router.push("/goals") },
  ]

  const frequentlyUsedWidgets = [
    { icon: Send, label: "Quick Pay", onClick: () => router.push("/quick-pay") },
    { icon: DollarSign, label: "Get Cash", onClick: () => router.push("/get-cash") },
    { icon: FileText, label: "Statements", onClick: () => router.push("/statements") },
    { icon: Shield, label: "Insure", onClick: () => router.push("/insurance") },
  ]

  const allWidgets = [
    { icon: Gift, label: "Offers for you", onClick: () => router.push("/offers") },
    { icon: FileText, label: "Applications", onClick: () => router.push("/applications") },
    { icon: Shield, label: "Insure", onClick: () => router.push("/insurance") },
    { icon: AlertCircle, label: "Discs & Fines", onClick: () => router.push("/discs-fines") },
    { icon: ShoppingBag, label: "Shop", onClick: () => router.push("/shop") },
    { icon: Smartphone, label: "PayShap", onClick: () => router.push("/payshap") },
    { icon: Bell, label: "Latest", onClick: () => router.push("/latest") },
    { icon: Send, label: "Quick Pay", onClick: () => router.push("/quick-pay") },
    { icon: DollarSign, label: "Get Cash", onClick: () => router.push("/get-cash") },
    { icon: Home, label: "Home Loans", onClick: () => router.push("/home-loans") },
    { icon: FileText, label: "Statements", onClick: () => router.push("/statements") },
  ]

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <header className="bg-gradient-to-r from-[#0F5132] to-[#004225] text-white p-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Button variant="ghost" size="icon" className="text-white mr-2 hover:bg-white/10 md:hidden">
              <Menu className="h-6 w-6" />
            </Button>
            <NedbankLogo variant="full" size="medium" className="hidden md:block" />
            <NedbankLogo variant="icon-only" size="small" className="md:hidden" />
          </div>
          <div className="flex items-center space-x-3">
            <Button
              variant="ghost"
              size="icon"
              className="text-white hover:bg-white/10"
              onClick={() => router.push("/search")}
            >
              <Search className="h-5 w-5" />
            </Button>
            <button className="relative" onClick={() => router.push("/notifications")}>
              <Bell className="h-5 w-5" />
              <span className="absolute top-0 right-0 h-2 w-2 bg-yellow-400 rounded-full"></span>
            </button>
            <button onClick={() => router.push("/ai-assistant")}>
              <MessageSquare className="h-5 w-5" />
            </button>
            <Button
              variant="ghost"
              size="icon"
              className="text-white hover:bg-white/10 hidden md:flex"
              onClick={() => router.push("/profile")}
            >
              <User className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Welcome Message */}
        <div className="mt-6 mb-2">
          <h1 className="text-2xl font-bold">Hello, Edgar</h1>
          <p className="text-green-100 text-sm">Welcome back to your Nedbank account</p>
        </div>
      </header>

      {/* Quick Actions - Most Important First */}
      <div className="bg-gradient-to-r from-[#0F5132] to-[#004225] text-white px-4 pb-6">
        <div className="grid grid-cols-4 gap-3">
          {quickActions.map((action) => (
            <button key={action.id} className="flex flex-col items-center" onClick={action.onClick}>
              <div className="bg-white/10 p-3 rounded-full mb-2">
                <action.icon className="h-6 w-6 text-white" />
              </div>
              <span className="text-xs text-white">{action.name}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Main Account Summary - Most Important Financial Info */}
      <div className="bg-white shadow-md rounded-t-3xl -mt-4 px-4 pt-6 pb-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-bold text-gray-800">Accounts</h2>
          <button onClick={() => setShowBalances(!showBalances)} className="text-gray-500">
            {showBalances ? <Eye className="h-5 w-5" /> : <EyeOff className="h-5 w-5" />}
          </button>
        </div>

        {/* Primary Account */}
        <Card className="border-none shadow-md hover:shadow-lg transition-shadow bg-gradient-to-r from-gray-900 to-gray-700 mb-4">
          <CardContent className="p-4">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-gray-300 text-sm">{accounts[0].type}</p>
                <p className="font-medium text-white">{accounts[0].name}</p>
              </div>
              <div className="text-right">
                <p className="text-gray-300 text-sm">Available</p>
                <p className="text-xl font-semibold text-white">
                  {showBalances ? `${accounts[0].currency}${accounts[0].balance.toFixed(2)}` : "••••••"}
                </p>
              </div>
            </div>

            {/* Recent Transactions Preview */}
            <div className="mt-4 pt-4 border-t border-gray-700">
              <div className="flex justify-between items-center mb-2">
                <p className="text-gray-300 text-xs">Recent Transactions</p>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-gray-300 hover:text-white hover:bg-gray-700 h-7 px-2 py-0"
                  onClick={() => router.push("/transactions")}
                >
                  View All
                </Button>
              </div>
              <div className="space-y-2">
                {accounts[0].transactions.slice(0, 2).map((transaction) => (
                  <div key={transaction.id} className="flex justify-between items-center bg-gray-800/50 p-2 rounded-lg">
                    <div className="flex items-center">
                      <div
                        className={`p-1.5 rounded-full mr-2 ${transaction.amount > 0 ? "bg-green-800/50" : "bg-gray-700/50"}`}
                      >
                        {transaction.amount > 0 ? (
                          <ArrowDownLeft className="h-3 w-3 text-green-300" />
                        ) : (
                          <ArrowUpRight className="h-3 w-3 text-gray-300" />
                        )}
                      </div>
                      <p className="text-xs text-white">{transaction.merchant}</p>
                    </div>
                    <p className={`text-xs ${transaction.amount > 0 ? "text-green-300" : "text-white"}`}>
                      {transaction.amount > 0 ? "+" : ""}R{Math.abs(transaction.amount).toFixed(2)}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* View Details Button */}
            <div className="mt-4 flex justify-center">
              <Button
                variant="ghost"
                size="sm"
                className="text-gray-300 hover:text-white hover:bg-gray-700 w-full"
                onClick={() => router.push(`/accounts/${accounts[0].id}`)}
              >
                View Account Details
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Other Accounts - Collapsed View */}
        <div className="space-y-3">
          {accounts.slice(1).map((account) => (
            <div key={account.id} className="bg-white rounded-lg border border-gray-200 shadow-sm">
              <div
                className="p-3 flex justify-between items-center"
                onClick={() => router.push(`/accounts/${account.id}`)}
              >
                <div className="flex items-center">
                  <div
                    className={`w-2 h-10 rounded-full mr-3 ${account.type === "Savings" ? "bg-green-600" : "bg-blue-600"}`}
                  ></div>
                  <div>
                    <p className="text-sm text-gray-500">{account.type}</p>
                    <p className="font-medium text-gray-800">{account.name}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm font-semibold text-gray-800">
                    {showBalances ? `${account.currency}${account.balance.toFixed(2)}` : "••••••"}
                  </p>
                  <ChevronRight className="h-5 w-5 text-gray-400 inline-block" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Physical Cards Section - Important for Payments */}
      <div className="bg-white px-4 py-5 border-t border-gray-100">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-bold text-gray-800">My Cards</h2>
          <Button variant="ghost" size="sm" className="text-[#0F5132]" onClick={() => router.push("/cards")}>
            View All
          </Button>
        </div>

        <div className="overflow-x-auto pb-2 -mx-4 px-4">
          <div className="flex space-x-4">
            {accounts
              .filter((account) => account.isPhysical)
              .map((account) => (
                <div
                  key={`card-${account.id}`}
                  className="min-w-[280px] cursor-pointer"
                  onClick={() => router.push(`/accounts/${account.id}`)}
                >
                  <div className={`${account.cardColor} rounded-xl p-4 shadow-lg relative overflow-hidden`}>
                    {/* Card Chip */}
                    <div className="absolute top-4 right-4">
                      <NedbankLogo variant="icon-only" size="small" color="white" />
                    </div>

                    {/* Card Details */}
                    <div className="mt-8 mb-6">
                      <p className="text-white/70 text-xs">Card Number</p>
                      <p className="text-white font-mono text-lg">
                        {showBalances ? account.cardNumber : "•••• •••• •••• ••••"}
                      </p>
                    </div>

                    <div className="flex justify-between items-end">
                      <div>
                        <p className="text-white/70 text-xs">Valid Thru</p>
                        <p className="text-white font-mono">{showBalances ? account.cardExpiry : "••/••"}</p>
                      </div>
                      <div className="flex items-center">
                        {account.isContactless && (
                          <div className="mr-2">
                            <svg
                              width="20"
                              height="20"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M8 9C8.53043 9 9.03914 9.21071 9.41421 9.58579C9.78929 9.96086 10 10.4696 10 11"
                                stroke="white"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M8 5C10.1217 5 12.1566 5.84285 13.6569 7.34315C15.1571 8.84344 16 10.8783 16 13"
                                stroke="white"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M8 13C8.55228 13 9 12.5523 9 12C9 11.4477 8.55228 11 8 11C7.44772 11 7 11.4477 7 12C7 12.5523 7.44772 13 8 13Z"
                                stroke="white"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </div>
                        )}
                        {account.cardType === "Visa" ? (
                          <div className="text-white font-bold italic text-xl">VISA</div>
                        ) : (
                          <div className="text-white font-bold text-xl">Mastercard</div>
                        )}
                      </div>
                    </div>

                    {/* Card Type Badge */}
                    <Badge className="absolute bottom-2 left-2 bg-white/20 text-white hover:bg-white/30">
                      {account.isPhysical ? "Physical" : "Virtual"}
                    </Badge>
                  </div>
                </div>
              ))}

            {/* Add Card Button */}
            <div className="min-w-[280px] cursor-pointer" onClick={() => router.push("/cards/new")}>
              <div className="bg-gray-100 rounded-xl p-4 shadow-sm h-[170px] flex flex-col items-center justify-center border-2 border-dashed border-gray-300">
                <div className="bg-white p-3 rounded-full mb-3">
                  <Plus className="h-6 w-6 text-[#0F5132]" />
                </div>
                <p className="text-gray-700 font-medium">Add New Card</p>
                <p className="text-xs text-gray-500 mt-1">Physical or Virtual</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Frequently Used Widgets - Quick Access to Important Features */}
      <div className="px-4 py-5 bg-gray-50">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-bold text-gray-800">Frequently Used</h2>
        </div>

        <div className="grid grid-cols-4 gap-3">
          {frequentlyUsedWidgets.map((widget, index) => (
            <WidgetButton key={index} icon={widget.icon} label={widget.label} onClick={widget.onClick} />
          ))}
        </div>
      </div>

      {/* Recent Transactions - Important for Financial Awareness */}
      <div className="px-4 py-5 bg-white border-t border-gray-100">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-bold text-gray-800">Recent Transactions</h2>
          <Button variant="ghost" size="sm" className="text-[#0F5132]" onClick={() => router.push("/transactions")}>
            View All
          </Button>
        </div>

        <div className="space-y-3">
          {recentTransactions.map((transaction) => (
            <div
              key={transaction.id}
              className="flex justify-between items-center p-3 rounded-lg border border-gray-100 shadow-sm"
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
      </div>

      {/* All Widgets - Secondary Features */}
      <div className="px-4 py-5 bg-gray-50 border-t border-gray-100 mb-20">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-bold text-gray-800">All Services</h2>
          <Button variant="ghost" size="sm" className="text-[#0F5132]">
            Customize
          </Button>
        </div>

        <div className="grid grid-cols-4 gap-3">
          {allWidgets.slice(0, 8).map((widget, index) => (
            <WidgetButton key={index} icon={widget.icon} label={widget.label} onClick={widget.onClick} small />
          ))}
          <button
            className="flex flex-col items-center justify-center bg-white rounded-lg p-2 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
            onClick={() => router.push("/all-services")}
          >
            <div className="bg-gray-100 p-2 rounded-full mb-1">
              <Plus className="h-4 w-4 text-gray-600" />
            </div>
            <span className="text-xs text-gray-700 text-center">More</span>
          </button>
        </div>
      </div>

      {/* Bottom Navigation */}
      <BottomNavigation />
    </div>
  )
}

function WidgetButton({
  icon: Icon,
  label,
  onClick,
  small = false,
}: {
  icon: React.ElementType
  label: string
  onClick: () => void
  small?: boolean
}) {
  return (
    <button
      className="flex flex-col items-center justify-center bg-white rounded-lg p-2 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
      onClick={onClick}
    >
      <div className={`bg-green-50 ${small ? "p-2" : "p-3"} rounded-full mb-1`}>
        <Icon className={`${small ? "h-4 w-4" : "h-5 w-5"} text-[#0F5132]`} />
      </div>
      <span className="text-xs text-gray-700 text-center">{label}</span>
    </button>
  )
}

