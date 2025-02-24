"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center space-y-6"
        >
          <h2 className="text-3xl font-bold mb-8">About StorySmart</h2>
          <p className="text-lg text-gray-600 mb-4">
            StorySmart is a revolutionary learning platform that combines the power of storytelling with interactive
            education. We believe that learning should be an adventure, and our mission is to make it engaging and fun
            for learners of all ages.
          </p>
          <p className="text-lg text-gray-600 mb-4">
            By leveraging cutting-edge technology and immersive narratives, we create an environment where knowledge
            acquisition feels like embarking on an exciting journey. Our platform addresses the challenges of
            traditional online learning by offering a personalized, interactive approach that boosts engagement and
            knowledge retention.
          </p>
          <p className="text-lg text-gray-600">
            Whether you're a student, a professional, or a lifelong learner, StorySmart provides a unique and impactful
            way to achieve your educational goals. Join us in redefining the future of learning, one story at a time.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

