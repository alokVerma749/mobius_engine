import React from 'react'

const HowWeWork = () => {
  return (
    <section className="py-16 md:py-24 w-[75%] mx-auto">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl text-[#0649E7] mb-16 font-medium">How we work?</h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {[
            { number: 1, title: "Submit Intake Form" },
            { number: 2, title: "We do the search and curation for list of jobs" },
            { number: 3, title: "You approve, we do the tedious part (applying)" },
            { number: 4, title: "You get the interviews" },
          ].map((step, index) => (
            <div key={index} className="flex flex-col items-start">
              <div className="w-16 h-16 rounded-full border-1 flex items-center justify-center font-medium text-3xl mb-4">
                {step.number}
              </div>
              <div className="border w-3/4 border-[#0649E7] mb-4"></div>
              <p className="text-blue-600 font-semibold text-center">{step.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HowWeWork;
