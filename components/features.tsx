"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { BookOpen, Gamepad2, Mic, BarChart } from "lucide-react"

const features = [
  {
    title: "Immersive Storytelling",
    description: "Dive into interactive narratives that adapt to your choices.",
    icon: BookOpen,
  },
  {
    title: "Gamified Learning",
    description: "Earn rewards and track progress through engaging challenges.",
    icon: Gamepad2,
  },
  {
    title: "Voice Interaction",
    description: "Practice language skills with advanced speech recognition.",
    icon: Mic,
  },
  {
    title: "Personalized Analytics",
    description: "Gain insights into your learning journey with detailed progress tracking.",
    icon: BarChart,
  },
]

export default function Features() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="features" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <motion.h2
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-center mb-12"
        >
          Innovative Features
        </motion.h2>
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex flex-col items-center text-center"
            >
              <feature.icon className="h-12 w-12 mb-4 text-blue-500" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

