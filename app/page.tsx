import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Testimonial from "./components/Testimonial"
import WhyChooseUs from "./components/WhyChooseUs"
import HowWeWork from "./components/HowWeWork"
import Hero from "./components/Hero"

export default function Home() {
  return (
    <main className="min-h-screen">
      <section className="bg-gradient-to-br from-[#0649E7]/80 to-[#022183] min-h-screen">
        <Navbar />
        <Hero />
      </section>

      <HowWeWork />
      <Testimonial />
      <WhyChooseUs />
    </main>
  )
}
