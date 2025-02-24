"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { UserPlus, BookOpen, Compass, PuzzleIcon as PuzzlePiece, Award, BarChart3 } from "lucide-react"

const steps = [
  {
    title: "Sign Up",
    description: "Create your account to start the adventure.",
    icon: UserPlus,
  },
  {
    title: "Choose a Topic",
    description: "Select from various exciting learning areas.",
    icon: BookOpen,
  },
  {
    title: "Pick Your Story",
    description: "Dive into a world of interactive narratives.",
    icon: Compass,
  },
  {
    title: "Complete Challenges",
    description: "Solve puzzles and quizzes as you progress.",
    icon: PuzzlePiece,
  },
  {
    title: "Earn Rewards",
    description: "Collect points and badges for your achievements.",
    icon: Award,
  },
  {
    title: "Track Progress",
    description: "Monitor your learning journey and set new goals.",
    icon: BarChart3,
  },
]

export default function HowToPlay() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="how-to-play" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <motion.h2
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-center mb-12"
        >
          How To Play
        </motion.h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gray-50 p-6 rounded-2xl flex flex-col items-center text-center"
            >
              <div className="mb-4 bg-blue-100 p-3 rounded-full">
                <step.icon className="w-8 h-8 text-blue-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

