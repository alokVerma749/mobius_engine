import FlierCard from "../FlierCard"

export function ServicePlans() {
  const plans = [
    {
      title: "April Promo",
      description: "Curated jobs from 1M+ listings, refreshed every 48 hours.",
      price: "$35",
      priceDetails: "/week",
      features: [
        "Curated jobs from 1M+ listings, refreshed every 48 hours",
        "Up to 20 human-applied roles per week (no bots, no fluff — just real company sites)",
        "Need more? Add extra apps for just $15 each",
        "Your own dedicated application analyst",
        "Personalized with up to 10 filters & 5 job titles",
      ],
    },
    {
      title: "Starter",
      description: "All the perks of the Promo Plan, plus:",
      price: "$50",
      priceDetails: "/week",
      features: [
        "Resume review & story-focused feedback",
        "Dedicated search specialist",
        "Up to 50 job apps/week",
        "Extra apps at $15 each",
        "Analyst support within 6 hours (SLA/PST hours)",
      ],
    },
    {
      title: "Plus",
      description: "Everything in Starter, with more muscle:",
      price: "$100",
      priceDetails: "/week",
      features: [
        "Up to 75 apps/week",
        "Apply to 15 job titles",
        "Analyst + full application team on Pacific hours",
      ],
    },
  ]

  return (
    <div className="space-y-8 w-[75%] mx-auto">
      <h2 className="text-3xl font-medium text-center text-[#0649E7]">Job Application Service Plans</h2>

      <div className="flex flex-col md:flex-row gap-3">
        {plans.map((plan, index) => (
          <FlierCard
            key={index}
            title={plan.title}
            description={plan.description}
            price={plan.price}
            priceDetails={plan.priceDetails}
            features={plan.features}
          />
        ))}
      </div>
    </div>
  )
}
