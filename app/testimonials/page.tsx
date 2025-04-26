import Button from "../components/Button";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";


export default function TestimonialsPage() {
  return (
    <main>
      <section className="bg-gradient-to-b from-blue-500 to-blue-700 text-white py-8">
        <Navbar />
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6">
          <h1 className="text-3xl font-bold text-blue-600 mb-16">What our clients have to say</h1>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {Array.from({ length: 6 }).map((_, index) => (
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

          <div className="flex justify-center mt-12">
            <Button href="/get-started" arrow>
              Get Started
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
