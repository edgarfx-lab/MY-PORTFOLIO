"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { ArrowLeft, Send, Mic, PiggyBank, CreditCard, BarChart3, ArrowUpRight, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { useRouter } from "next/navigation"
import { cn } from "@/lib/utils"

// Import the Nedbank logo component at the top of the file
import NedbankLogo from "@/components/nedbank-logo"

export default function AIAssistantScreen() {
  const router = useRouter()
  const [message, setMessage] = useState("")
  const [isRecording, setIsRecording] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hello Edgar! I'm your Nedbank AI assistant. How can I help you today?",
      sender: "ai",
      timestamp: new Date().toISOString(),
    },
  ])

  const suggestions = [
    { id: 1, text: "How much did I spend on groceries last month?", icon: BarChart3 },
    { id: 2, text: "Help me set up a savings goal", icon: PiggyBank },
    { id: 3, text: "What's my current credit card balance?", icon: CreditCard },
    { id: 4, text: "Show me my recent transactions", icon: ArrowUpRight },
  ]

  const handleSendMessage = () => {
    if (message.trim() === "") return

    // Add user message
    const userMessage = {
      id: messages.length + 1,
      text: message,
      sender: "user",
      timestamp: new Date().toISOString(),
    }

    setMessages([...messages, userMessage])
    setMessage("")

    // Simulate AI response after a short delay
    setTimeout(() => {
      let response = ""

      if (message.toLowerCase().includes("spend") || message.toLowerCase().includes("groceries")) {
        response =
          "Last month, you spent R1,245.50 on groceries. This is about 15% less than your average monthly grocery spending of R1,465.75."
      } else if (message.toLowerCase().includes("savings") || message.toLowerCase().includes("goal")) {
        response =
          "I can help you set up a savings goal! What are you saving for? A vacation, emergency fund, or something else? I can suggest a savings plan based on your spending habits."
      } else if (message.toLowerCase().includes("credit card") || message.toLowerCase().includes("balance")) {
        response =
          "Your current credit card balance is R3,250.75. Your payment due date is April 15th. Would you like to make a payment now?"
      } else if (message.toLowerCase().includes("transaction")) {
        response =
          "Your most recent transactions are: R450.75 at Woolworths (Today), R159.00 to Netflix (Apr 3), and R85.50 to Uber (Apr 2). Would you like to see more transactions?"
      } else {
        response =
          "I'm here to help with your banking needs. You can ask me about your spending, account balances, savings goals, or recent transactions."
      }

      const aiMessage = {
        id: messages.length + 2,
        text: response,
        sender: "ai",
        timestamp: new Date().toISOString(),
      }

      setMessages((prev) => [...prev, aiMessage])
    }, 1000)
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  const handleSuggestionClick = (suggestion: string) => {
    setMessage(suggestion)

    // Focus the input after setting the message
    const inputElement = document.getElementById("message-input")
    if (inputElement) {
      inputElement.focus()
    }
  }

  const toggleRecording = () => {
    setIsRecording(!isRecording)

    // Simulate voice recognition after a short delay
    if (!isRecording) {
      setTimeout(() => {
        setMessage("What's my current credit card balance?")
        setIsRecording(false)
      }, 2000)
    }
  }

  // Auto-scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <header className="bg-gradient-to-r from-[#0F5132] to-[#004225] text-white p-4 flex items-center">
        <Button
          variant="ghost"
          size="icon"
          className="text-white mr-2 hover:bg-white/10"
          onClick={() => router.push("/dashboard")}
        >
          <ArrowLeft className="h-6 w-6" />
        </Button>
        <h1 className="text-xl font-medium">Nedbank AI Assistant</h1>
      </header>

      {/* Messages */}
      <div className="flex-1 p-4 overflow-y-auto">
        <div className="space-y-4">
          {messages.map((msg) => (
            <div key={msg.id} className={cn("flex", msg.sender === "user" ? "justify-end" : "justify-start")}>
              <div
                className={cn(
                  "max-w-[80%] rounded-lg p-3",
                  msg.sender === "user"
                    ? "bg-[#0F5132] text-white rounded-br-none"
                    : "bg-white border border-gray-200 rounded-bl-none",
                )}
              >
                {msg.sender === "ai" && (
                  <div className="flex items-center mb-2">
                    <Avatar className="h-6 w-6 mr-2">
                      <AvatarFallback className="bg-green-100 text-[#0F5132] text-xs p-0.5">
                        <NedbankLogo variant="icon-only" size="small" />
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex items-center">
                      <span className="text-xs font-medium text-[#0F5132]">Nedbank Assistant</span>
                      <Sparkles className="h-3 w-3 text-[#0F5132] ml-1" />
                    </div>
                  </div>
                )}
                <p className={msg.sender === "user" ? "text-white" : "text-gray-800"}>{msg.text}</p>
                <p
                  className={cn("text-xs mt-1 text-right", msg.sender === "user" ? "text-green-100" : "text-gray-400")}
                >
                  {new Date(msg.timestamp).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                </p>
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Suggestions */}
      <div className="bg-white border-t border-gray-200 p-3">
        <p className="text-xs text-gray-500 mb-2">Suggested questions</p>
        <div className="flex overflow-x-auto space-x-2 pb-2">
          {suggestions.map((suggestion) => (
            <Button
              key={suggestion.id}
              variant="outline"
              className="flex items-center whitespace-nowrap border-gray-200 hover:bg-gray-50"
              onClick={() => handleSuggestionClick(suggestion.text)}
            >
              <suggestion.icon className="h-4 w-4 mr-2 text-[#0F5132]" />
              {suggestion.text}
            </Button>
          ))}
        </div>
      </div>

      {/* Input */}
      <div className="bg-white border-t border-gray-200 p-3">
        <div className="flex items-center">
          <Button
            variant="ghost"
            size="icon"
            className={cn("text-gray-500", isRecording && "text-red-500 animate-pulse")}
            onClick={toggleRecording}
          >
            <Mic className="h-5 w-5" />
          </Button>
          <Input
            id="message-input"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Type a message..."
            className="flex-1 border-gray-200 focus-visible:ring-[#0F5132]"
          />
          <Button
            variant="ghost"
            size="icon"
            className="text-[#0F5132]"
            onClick={handleSendMessage}
            disabled={message.trim() === ""}
          >
            <Send className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  )
}

