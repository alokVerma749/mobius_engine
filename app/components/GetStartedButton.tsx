import { ArrowRight } from "lucide-react"

interface GetStartedButtonProps {
  variant?: "default" | "white"
}

export function GetStartedButton({ variant = "default" }: GetStartedButtonProps) {
  return (
    <button
      className={`
        flex items-center gap-2 px-6 py-3 rounded-full font-medium cursor-pointer border
        ${variant === "default"
          ? "bg-[#0649E7] text-white hover:bg-white hover:text-[#0649E7] hover:border hover:border-[#0649E7] "
          : "bg-white text-[#0649E7] hover:bg-[#0649E7] hover:text-white hover:border hover:border-white"
        }
        transition-colors
      `}
    >
      Get Started
      <ArrowRight className="h-4 w-4" />
    </button>
  )
}
