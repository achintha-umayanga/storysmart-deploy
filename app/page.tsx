import Header from "@/components/header"
import Hero from "@/components/hero"
import Features from "@/components/features"
import Stories from "@/components/stories"
import HowToPlay from "@/components/how-to-play"
import Team from "@/components/team"
import About from "@/components/about"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900">
      <Header />
      <main>
        <Hero />
        <About />
        <Features />
        <Stories />
        <HowToPlay />
        <Team />
      </main>
      <Footer />
    </div>
  )
}

