"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Link as ScrollLink } from "react-scroll"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import LoginModal from "@/components/login-modal"

export default function Header() {
  const [showLoginModal, setShowLoginModal] = React.useState(false)

  const navItems = ["Features", "Stories", "About", "How to Play", "Team"]

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100 }}
      className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-gray-200"
    >
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <ScrollLink to="hero" smooth={true} duration={500} className="flex items-center space-x-2 cursor-pointer">
          <span className="text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600">
            StorySmart
          </span>
        </ScrollLink>
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <ScrollLink
              key={item}
              to={item.toLowerCase().replace(/\s+/g, "-")}
              spy={true}
              smooth={true}
              offset={-64}
              duration={500}
              className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors cursor-pointer"
            >
              {item}
            </ScrollLink>
          ))}
        </nav>
        <Button variant="ghost" className="rounded-full" onClick={() => setShowLoginModal(true)}>
          <Avatar className="h-8 w-8">
            <AvatarFallback>U</AvatarFallback>
          </Avatar>
        </Button>
      </div>
      <LoginModal open={showLoginModal} onOpenChange={setShowLoginModal} />
    </motion.header>
  )
}

