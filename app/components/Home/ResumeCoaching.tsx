import FlierCard from "../FlierCard"

export function ResumeCoaching() {
  return (
    <div className="space-y-8 w-[75%] mx-auto my-8">
      <div className="space-y-2">
        <h2 className="text-3xl font-bold text-[#0649E7]">Resume Building & Coaching</h2>
        <div className="">
          <p className="text-[#0649E7] font-medium">Let's talk about where you're headed — and how your resume can get you there.</p>
          <p className="text-[#0649E7] font-medium">Schedule a call to get started.</p>
        </div>
      </div>

      <div className="flex justify-evenly flex-wrap flex-col md:flex-row space-y-4">
        <FlierCard
          title="Resume Rebuild"
          description="Crafted for senior to VP-level professionals ready for their next big step."
          price="$1000"
          priceDetails="one time"
          features={[
            "3x 30-min coaching",
            "Focused on storytelling, not just formatting",
            "Analyst + full application team on Pacific hours",
            "Tailored to your target industry, company, or role",
            "Direct work with our co-founder (ex-Google, JP Morgan)",
            "Executive coaching from UC Berkeley alum with 10+ yrs experience",
            "Resume Rebuild portfolio available upon request",
          ]}
        />

        <FlierCard
          title="Interview Prep"
          description="Two sessions to sharpen your story, confidence, and clarity — fast."
          price="$500"
          priceDetails="one time"
          features={[
            "2x 45-min live coaching with our co-founder",
            "Real-time, practical feedback",
            "Build clarity, empathy & executive presence",
            "For senior and leadership roles — technical & non-technical",
          ]}
        />
      </div>
    </div>
  )
}
