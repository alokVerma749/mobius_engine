import Image from "next/image"
import Link from "next/link"
import Navbar from "../components/Navbar";
import { Footer } from "../components/Footer";

export default function AboutPage() {
  return (
    <main>
      <section className="bg-gradient-to-b from-blue-900 to-blue-700 text-white py-8">
        <Navbar />

        <div className="container mx-auto px-6 py-16">
          <h1 className="text-4xl font-bold mb-16">About Us</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div className="flex flex-col items-center">
              <div className="relative w-64 h-64 mb-6">
                <div className="w-64 h-64 rounded-full overflow-hidden bg-white">
                  <Image src="/placeholder.svg" alt="Ashwin" width={256} height={256} className="object-cover" />
                </div>
                <div className="absolute bottom-0 right-0 w-12 h-12 rounded-full bg-white flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-blue-600"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </div>
              </div>

              <div className="max-w-md">
                <p className="mb-4">
                  <strong>Ashwin</strong> is the founder of mobiusengine.ai. He is an accomplished senior executive with
                  over 20 years of experience in cloud infrastructure and financial services. With over 2 decades of
                  experience at Google and JP Morgan, Ashwin held various product and GTM roles. Ashwin is an MBA holder
                  from Yale University.
                </p>
                <p>
                  Ashwin's vision with Mobius is to give job seekers a significant advantage in securing the roles of
                  their dreams.
                </p>
              </div>
            </div>

            <div className="flex flex-col items-center">
              <div className="relative w-64 h-64 mb-6">
                <div className="w-64 h-64 rounded-full overflow-hidden bg-white">
                  <Image src="/placeholder.svg" alt="Nicole" width={256} height={256} className="object-cover" />
                </div>
                <div className="absolute bottom-0 right-0 w-12 h-12 rounded-full bg-white flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-blue-600"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </div>
              </div>

              <div className="max-w-md">
                <p className="mb-4">
                  <strong>Nicole</strong> is an Executive Coach at Mobius specializing in resume builds and career
                  advisory.
                </p>
                <p>
                  With a B.S. in Business Administration from UC Berkeley and 7+ years of experience in AI-driven
                  product strategy, she has seen firsthand how the proper positioning opens doors. She takes a targeted,
                  results-driven approach to help clients confidently stand out and land roles that truly match their
                  skills and potential.
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center mt-16 space-y-4">
            <Link href="#" className="text-white hover:text-blue-200 flex items-center">
              Learn more about our Board of Advisors
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
            <Link href="#" className="text-white hover:text-blue-200 flex items-center">
              Follow us on our LinkedIn page
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
