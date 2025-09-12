"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Fingerprint, Eye, EyeOff, ChevronRight, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
// Import the Nedbank logo component
import NedbankLogo from "@/components/nedbank-logo"

export default function LoginScreen() {
  const router = useRouter()
  const [pin, setPin] = useState<string[]>(["", "", "", ""])
  const [showPin, setShowPin] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handlePinChange = (index: number, value: string) => {
    if (value.length > 1) return
    if (!/^\d*$/.test(value)) return

    const newPin = [...pin]
    newPin[index] = value
    setPin(newPin)

    // Auto-focus next input
    if (value && index < 3) {
      const nextInput = document.getElementById(`pin-${index + 1}`)
      if (nextInput) nextInput.focus()
    }
  }

  const handleLogin = () => {
    setIsLoading(true)
    // Simulate login
    setTimeout(() => {
      router.push("/dashboard")
    }, 1500)
  }

  const handleBiometricLogin = () => {
    setIsLoading(true)
    // Simulate biometric login
    setTimeout(() => {
      router.push("/dashboard")
    }, 1500)
  }

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-[#0F5132] to-[#004225]">
      {/* Logo and header */}
      <div className="flex-1 flex flex-col items-center justify-center px-6 py-12">
        {/* Replace the SVG logo with the Nedbank logo component */}
        <div className="mb-8 flex flex-col items-center">
          <NedbankLogo variant="full" size="large" className="mb-4" />
          <p className="text-green-100 mt-2 text-center">Welcome back! Please log in to continue</p>
        </div>

        {/* PIN entry */}
        <div className="w-full max-w-xs">
          <div className="mb-6">
            <label className="block text-green-100 text-sm mb-2">Enter your PIN</label>
            <div className="flex space-x-3 mb-2">
              {pin.map((digit, index) => (
                <div key={index} className="flex-1 relative">
                  <Input
                    id={`pin-${index}`}
                    type={showPin ? "text" : "password"}
                    value={digit}
                    onChange={(e) => handlePinChange(index, e.target.value)}
                    className="h-14 text-center text-xl bg-white/10 border-green-400/30 text-white focus-visible:ring-green-300"
                    maxLength={1}
                  />
                </div>
              ))}
            </div>
            <div className="flex justify-between items-center">
              <button
                type="button"
                onClick={() => setShowPin(!showPin)}
                className="text-green-100 text-sm flex items-center"
              >
                {showPin ? (
                  <>
                    <EyeOff className="h-4 w-4 mr-1" /> Hide PIN
                  </>
                ) : (
                  <>
                    <Eye className="h-4 w-4 mr-1" /> Show PIN
                  </>
                )}
              </button>
              <button className="text-green-100 text-sm">Forgot PIN?</button>
            </div>
          </div>

          <Button
            onClick={handleLogin}
            disabled={pin.some((digit) => digit === "") || isLoading}
            className="w-full h-12 bg-white text-[#0F5132] hover:bg-green-50 mb-4 flex items-center justify-center shadow-lg"
          >
            {isLoading ? (
              <div className="h-5 w-5 border-2 border-green-800 border-t-transparent rounded-full animate-spin" />
            ) : (
              <>
                Log in <ChevronRight className="ml-2 h-4 w-4" />
              </>
            )}
          </Button>

          <div className="relative py-4">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-green-300/20"></div>
            </div>
            <div className="relative flex justify-center">
              <span className="bg-gradient-to-b from-[#0F5132] to-[#004225] px-2 text-sm text-green-100">or</span>
            </div>
          </div>

          <Button
            onClick={handleBiometricLogin}
            variant="outline"
            className="w-full h-12 border-green-300/30 text-white hover:bg-green-700/50 flex items-center justify-center"
          >
            <Fingerprint className="mr-2 h-5 w-5" />
            Log in with biometrics
          </Button>
        </div>
      </div>

      <div className="p-4 text-center text-green-100 text-xs flex items-center justify-center">
        <Shield className="h-4 w-4 mr-1" />
        <p>Secured with bank-grade encryption</p>
      </div>
    </div>
  )
}

