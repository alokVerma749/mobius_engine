import Navbar from "./components/Navbar"
import WhyChooseUs from "./components/Home/WhyChooseUs"
import HowWeWork from "./components/Home/HowWeWork"
import Hero from "./components/Home/Hero"
import Testimonial from "./components/Home/Testimonial"
import Contact from "./components/Home/Contact"

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
      <Contact />
    </main>
  )
}
