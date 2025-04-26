import Image from "next/image";
import Button from "./components/Button";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-gradient-to-tl from-[#0649E7] to-[#5886f3] text-white min-h-screen">
        <Navbar />

        <div className="container mx-auto px-6 py-16 md:py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center border border-red-900">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
                Land job interviews <span className="text-[#022183]">10x</span> faster
              </h1>
              <p className="text-xl mb-8">
                Custom-built resumes that match your goals, keywords, and recruiter expectations.
              </p>
              <Button href="/get-started" arrow className="text-lg w-54 bg-white text-black">
                Get Started
              </Button>
            </div>

            <div className="relative border border-red-900 flex-end">
              <Image src='/hero.png' height={200} width={300} alt="hero-image" />
            </div>
          </div>
        </div>
      </section>

      {/* How We Work Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-blue-600 mb-16">How we work?</h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { number: 1, title: "Submit Intake Form" },
              { number: 2, title: "We do the search and curation for list of jobs" },
              { number: 3, title: "You approve, we do the tedious part (applying)" },
              { number: 4, title: "You get the interviews" },
            ].map((step, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full border-2 border-blue-600 flex items-center justify-center text-blue-600 font-bold text-2xl mb-4">
                  {step.number}
                </div>
                <div className="h-1 w-full bg-blue-100 mb-4"></div>
                <p className="text-blue-600 font-medium text-center">{step.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-blue-600 mb-16">What our clients have to say</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md">
                <div className="h-48 bg-gray-200 flex items-center justify-center">
                  <button className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </button>
                </div>
                <div className="p-6 bg-blue-600 text-white">
                  <p className="mb-2">
                    Holly is a <span className="font-bold">senior executive</span> who got over{" "}
                    <span className="font-bold">10 job interviews</span> and an offer she accepted
                  </p>
                  <div className="flex justify-end">
                    <button className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 text-blue-600"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-12 space-x-6">
            <Button href="/testimonials" variant="outline" arrow>
              More customer testimonials
            </Button>
            <Button href="/get-started" arrow>
              Get Started
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-blue-600 mb-16">Why Choose Us?</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-12 w-12 text-blue-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                ),
                title: "Tried, Tested, Trusted",
                description:
                  "Built by folks with 40+ years in tech and hiring — we know the game, and we've got your back.",
              },
              {
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-12 w-12 text-blue-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                ),
                title: "Real People, Real Help",
                description:
                  "A hands-on team that actually cares — guiding you through every twist in your career path.",
              },
              {
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-12 w-12 text-blue-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                    />
                  </svg>
                ),
                title: "Beat the Line",
                description: "We search, shortlist, and apply for you so your name shows up first — every single day.",
              },
            ].map((item, index) => (
              <div key={index} className="border border-blue-200 rounded-lg p-8">
                <div className="mb-6">{item.icon}</div>
                <h3 className="text-xl font-bold text-blue-800 mb-4">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
