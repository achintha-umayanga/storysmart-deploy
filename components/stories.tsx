"use client"

import * as React from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const stories = [
  { name: "Adventure in Math Kingdom", image: "/explore/math_kingdom.png" },
  { name: "Language Voyage", image: "/explore/language.png" },
  { name: "Science Explorer", image: "/explore/science.png" },
  { name: "History Quest", image: "/explore/history.png" },
  { name: "Coding Chronicles", image: "/explore/coding.png" },
]

export default function Stories() {
  const [currentIndex, setCurrentIndex] = React.useState(0)
  const constraintsRef = React.useRef(null)
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % stories.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + stories.length) % stories.length)
  }

  return (
    <section id="stories" className="py-24 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <motion.h2
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-center mb-12"
        >
          Explore Our Stories
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
          ref={constraintsRef}
        >
          <motion.div
            className="flex space-x-8"
            drag="x"
            dragConstraints={constraintsRef}
            initial={{ x: 0 }}
            animate={{ x: -currentIndex * (320 + 32) }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            {stories.map((story, index) => (
              <motion.div
                key={index}
                className="relative flex-shrink-0 w-80 h-[30rem] rounded-2xl overflow-hidden shadow-lg"
                initial={{ scale: 0.9, opacity: 0.7 }}
                animate={{
                  scale: index === currentIndex ? 1 : 0.9,
                  opacity: index === currentIndex ? 1 : 0.7,
                }}
                transition={{ duration: 0.5 }}
              >
                <Image
                  src={story.image || "/placeholder.svg"}
                  alt={story.name}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{story.name}</h3>
                  <Button variant="secondary" className="w-full">
                    Explore Story
                  </Button>
                </div>
              </motion.div>
            ))}
          </motion.div>
          <Button
            variant="ghost"
            size="icon"
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full"
            onClick={prevSlide}
          >
            <ChevronLeft className="h-6 w-6" />
            <span className="sr-only">Previous story</span>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full"
            onClick={nextSlide}
          >
            <ChevronRight className="h-6 w-6" />
            <span className="sr-only">Next story</span>
          </Button>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex justify-center mt-8 space-x-2"
        >
          {stories.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full ${index === currentIndex ? "bg-blue-500" : "bg-gray-300"}`}
              onClick={() => setCurrentIndex(index)}
            >
              <span className="sr-only">Go to slide {index + 1}</span>
            </button>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

