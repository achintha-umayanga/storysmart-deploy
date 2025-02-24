"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const team = [
  { name: "Achintha Umayanga", avatar: "/team/achintha.jpg", role: "" },
  { name: "Ashen Panduka", avatar: "/team/ashen.jpg", role: "" },
  { name: "Gomidu Indeewara", avatar: "/team/gomindu.jpg", role: "" },
  { name: "Isiri Kaushani", avatar: "/team/isiri.jpg", role: "" },
  { name: "Sathmi Thisakya", avatar: "/team/Sathmi.jpg", role: "" },
  { name: "Basith Abdul", avatar: "/team/basith.jpg", role: "" },
]

export default function Team() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="team" className="py-24 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <motion.h2
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-center mb-12"
        >
          Meet Our Team
        </motion.h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-6 rounded-2xl shadow-lg"
            >
              <Avatar className="w-24 h-24 mx-auto mb-4">
                <AvatarImage src={member.avatar} alt={member.name} />
                <AvatarFallback>{member.name[0]}</AvatarFallback>
              </Avatar>
              <h3 className="text-xl font-semibold text-center mb-1">{member.name}</h3>
              <p className="text-gray-600 text-center">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

