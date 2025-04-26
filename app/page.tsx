import Navbar from "./components/Navbar"
import WhyChooseUs from "./components/Home/WhyChooseUs"
import HowWeWork from "./components/Home/HowWeWork"
import Hero from "./components/Home/Hero"
import Testimonial from "./components/Home/Testimonial"
import Contact from "./components/Home/Contact"
import { AdvanceTier } from "./components/Home/AdvanceTier"
import { ServicePlans } from "./components/Home/ServicePlans"
import { ResumeCoaching } from "./components/Home/ResumeCoaching"
import { AboutUs } from "./components/Home/AboutUs"

export default function Home() {
  return (
    <main className="min-h-screen">
      <section className="bg-gradient-to-br from-[#0649E7]/80 to-[#022183] min-h-screen">
        <Navbar />
        <Hero />
      </section>
      <HowWeWork />
      <AboutUs />
      <Testimonial />
      <WhyChooseUs />
      <ServicePlans />
      <AdvanceTier />
      <div className="border w-[75%] mx-auto border-gray-200"></div>
      <ResumeCoaching />
      <Contact />
    </main>
  )
}
