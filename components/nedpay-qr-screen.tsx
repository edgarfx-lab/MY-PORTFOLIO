"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { ArrowLeft, QrCode, Copy, Share, RefreshCw, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import BottomNavigation from "@/components/bottom-navigation"
import NedbankLogo from "@/components/nedbank-logo"

export default function NedpayQRScreen() {
  const router = useRouter()
  const [amount, setAmount] = useState("")
  const [reference, setReference] = useState("")
  const [selectedAccount, setSelectedAccount] = useState("1")
  const [qrGenerated, setQrGenerated] = useState(false)

  const accounts = [
    { id: "1", name: "Private Client", balance: 12450.49 },
    { id: "2", name: "MiGoals", balance: 3500.75 },
    { id: "3", name: "MyPocket", balance: 5000.0 },
  ]

  const handleGenerateQR = () => {
    setQrGenerated(true)
  }

  const handleRefreshQR = () => {
    // Simulate refreshing QR code
    setQrGenerated(false)
    setTimeout(() => {
      setQrGenerated(true)
    }, 500)
  }

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
            <h1 className="text-xl font-medium">NedPay QR</h1>
          </div>
        </div>
      </header>

      <div className="p-4 space-y-4">
        {!qrGenerated ? (
          <>
            <Card className="border-gray-100 shadow-sm">
              <CardContent className="p-4 space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Select Account</label>
                  <Select value={selectedAccount} onValueChange={setSelectedAccount}>
                    <SelectTrigger className="w-full border-gray-200">
                      <SelectValue placeholder="Select an account" />
                    </SelectTrigger>
                    <SelectContent>
                      {accounts.map((account) => (
                        <SelectItem key={account.id} value={account.id}>
                          <div className="flex justify-between items-center w-full">
                            <span>{account.name}</span>
                            <span className="text-gray-500">R{account.balance.toLocaleString()}</span>
                          </div>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Amount (Optional)</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <span className="text-gray-500">R</span>
                    </div>
                    <Input
                      type="number"
                      placeholder="0.00"
                      value={amount}
                      onChange={(e) => setAmount(e.target.value)}
                      className="pl-8 border-gray-200"
                    />
                  </div>
                  <p className="text-xs text-gray-500 mt-1">Leave blank to let the recipient enter the amount</p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Reference (Optional)</label>
                  <Input
                    placeholder="e.g. Dinner payment"
                    value={reference}
                    onChange={(e) => setReference(e.target.value)}
                    className="border-gray-200"
                  />
                </div>
              </CardContent>
            </Card>

            <Button className="w-full bg-[#0F5132] hover:bg-[#0F5132]/90" onClick={handleGenerateQR}>
              Generate QR Code
            </Button>

            <div className="pt-4">
              <Card className="border-gray-100 shadow-sm">
                <CardContent className="p-4">
                  <div className="flex items-start">
                    <div className="bg-green-100 p-2 rounded-full mr-3">
                      <QrCode className="h-5 w-5 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-800">About NedPay QR</h3>
                      <ul className="text-sm text-gray-600 mt-2 space-y-2">
                        <li className="flex items-start">
                          <span className="text-[#0F5132] mr-2">•</span>
                          Generate a QR code for instant payments
                        </li>
                        <li className="flex items-start">
                          <span className="text-[#0F5132] mr-2">•</span>
                          Share with anyone to receive payments directly to your account
                        </li>
                        <li className="flex items-start">
                          <span className="text-[#0F5132] mr-2">•</span>
                          QR codes expire after 10 minutes for security
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </>
        ) : (
          <>
            <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center">
              <div className="mb-4">
                <h2 className="text-lg font-bold text-gray-800 text-center">Scan to Pay</h2>
                <p className="text-sm text-gray-500 text-center">
                  {amount ? `R${Number.parseFloat(amount).toFixed(2)}` : "Any amount"}
                  {reference ? ` • ${reference}` : ""}
                </p>
              </div>

              <div className="bg-[#0F5132] p-6 rounded-xl mb-4">
                <div className="bg-white p-2 rounded-lg">
                  <div className="w-56 h-56 bg-white flex items-center justify-center">
                    <QrCode className="h-40 w-40 text-[#0F5132]" />
                  </div>
                </div>
              </div>

              <div className="flex space-x-3 w-full">
                <Button variant="outline" className="flex-1 border-gray-200" onClick={handleRefreshQR}>
                  <RefreshCw className="h-4 w-4 mr-2" />
                  Refresh
                </Button>
                <Button variant="outline" className="flex-1 border-gray-200">
                  <Copy className="h-4 w-4 mr-2" />
                  Copy
                </Button>
                <Button variant="outline" className="flex-1 border-gray-200">
                  <Share className="h-4 w-4 mr-2" />
                  Share
                </Button>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md p-4">
              <div className="flex justify-between items-center mb-3">
                <h3 className="font-medium text-gray-800">Account Details</h3>
                <Button variant="ghost" size="sm" className="text-[#0F5132] h-8 px-2">
                  Change <ChevronDown className="h-4 w-4 ml-1" />
                </Button>
              </div>

              {accounts
                .filter((account) => account.id === selectedAccount)
                .map((account) => (
                  <div key={account.id} className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-500">Account</span>
                      <span className="text-sm font-medium text-gray-800">{account.name}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-500">Available Balance</span>
                      <span className="text-sm font-medium text-gray-800">R{account.balance.toLocaleString()}</span>
                    </div>
                  </div>
                ))}
            </div>

            <p className="text-xs text-gray-500 text-center mt-2">This QR code will expire in 10:00 minutes</p>

            <Button variant="outline" className="w-full border-gray-200 mt-4" onClick={() => setQrGenerated(false)}>
              Create New QR Code
            </Button>
          </>
        )}
      </div>

      <BottomNavigation />
    </div>
  )
}

