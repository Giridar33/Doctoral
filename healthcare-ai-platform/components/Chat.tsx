"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, Mic, Send, Plus, HelpCircle } from "lucide-react"
import Header from'./Header';
export default function Chat() {
  const [messages] = useState([
    {
      id: 1,
      text: "Your React component now includes the requested styles for a modern UI. Let me know if you need further adjustments or additional features! 🚀",
      isUser: false,
    },
    { id: 2, text: "there are are some ui error crct it", isUser: true },
    {
      id: 3,
      text: "I've corrected UI issues, including improving spacing, dropdown alignment, and input field styling. Let me know if you need further refinements! 🚀",
      isUser: false,
    },
    {
      id: 4,
      text: "Your React component now includes the requested styles for a modern UI. Let me know if you need further adjustments or additional features! 🚀",
      isUser: false,
    },
    { id: 5, text: "there are are some ui error crct it", isUser: true },
    {
      id: 6,
      text: "I've corrected UI issues, including improving spacing, dropdown alignment, and input field styling. Let me know if you need further refinements! 🚀",
      isUser: false,
    },
    {
      id: 7,
      text: "Your React component now includes the requested styles for a modern UI. Let me know if you need further adjustments or additional features! 🚀",
      isUser: false,
    },
    { id: 8, text: "there are are some ui error crct it", isUser: true },
    {
      id: 9,
      text: "I've corrected UI issues, including improving spacing, dropdown alignment, and input field styling. Let me know if you need further refinements! 🚀",
      isUser: false,
    },
  ])

  return (
    <div className="flex-1 flex flex-col h-screen">

<Header/>
      {/* <header className="flex items-center justify-between px-6 py-4 border-b border-gray-800">
        <h1 className="text-lg font-semibold">Doctoral</h1>
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon">
            <HelpCircle className="h-5 w-5" />
          </Button>
        </div>
      </header> */}

      <div className="flex-1 overflow-auto p-6">
        <div className="max-w-4xl mx-auto space-y-6">
          {messages.map((message) => (
            <div key={message.id} className={`flex ${message.isUser ? "justify-end" : "justify-start"}`}>
              <div
                className={`max-w-xl rounded-lg px-4 py-3 ${
                  message.isUser ? "bg-blue-600 text-white" : "bg-gray-800 text-gray-100"
                }`}
              >
                {message.text}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="p-6 border-t border-gray-800">
        <div className="max-w-4xl mx-auto">
          <div className="relative flex items-center">
            <Button variant="ghost" size="icon" className="absolute left-4">
              <Plus className="h-5 w-5" />
            </Button>
            <Input
              placeholder="Enter symptoms..."
              className="w-full pl-12 pr-20 py-3 bg-gray-800 border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500"
            />
            <div className="absolute right-4 flex items-center gap-2">
              <Button variant="ghost" size="icon">
                <Search className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <Mic className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <Send className="h-5 w-5" />
              </Button>
            </div>
          </div>
          <p className="text-xs text-gray-500 text-center mt-2">
            Doctoral can make mistakes. Please verify important information.
          </p>
        </div>
      </div>
    </div>
  )
}

