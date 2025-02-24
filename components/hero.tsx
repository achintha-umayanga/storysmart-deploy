"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"
import { useInView } from "react-intersection-observer"
import Image from "next/image"

const images = [
  "/hero1.png",
  "/hero2.png",
  "/hero3.png",
  "/hero4.png",
  "/hero5.png",
  "/hero6.png"
]

export default function Hero() {
  const [currentImage, setCurrentImage] = useState(0)
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length)
    }, 5000) // Change image every 5 seconds

    return () => clearInterval(timer)
  }, [])

  return (
    <section id="hero" className="relative h-screen overflow-hidden">
      <AnimatePresence initial={false}>
        <motion.div
          key={currentImage}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          <Image
            src={images[currentImage] || "/placeholder.svg"}
            alt="Background"
            layout="fill"
            objectFit="cover"
            quality={100}
          />
        </motion.div>
      </AnimatePresence>
      <div className="absolute inset-0 bg-black bg-opacity-50" />
      <div className="relative h-full flex items-center justify-center">
        <div className="container mx-auto px-4 md:px-6 text-center text-white">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter mb-6">Learn Through Stories</h1>
            <p className="max-w-[600px] mx-auto text-lg md:text-xl mb-8">
              Immerse yourself in interactive narratives that make learning an unforgettable adventure.
            </p>
            <Button size="lg" className="bg-white text-gray-900 hover:bg-gray-200 rounded-full px-8">
              Start Your Journey
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

