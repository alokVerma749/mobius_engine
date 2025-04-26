import Link from "next/link"
import type { ReactNode } from "react"

interface ButtonProps {
  href?: string
  variant?: "primary" | "outline"
  className?: string
  children: ReactNode
  arrow?: boolean
}

export default function Button({ href, variant = "primary", className = "", children, arrow = false }: ButtonProps) {
  const baseClasses = variant === "primary" ? "btn-primary" : "btn-outline"

  const classes = `${baseClasses} ${className} ${arrow ? "flex items-center" : ""}`

  const content = (
    <>
      {children}
      {arrow && (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
          <path
            fillRule="evenodd"
            d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      )}
    </>
  )

  if (href) {
    return (
      <Link href={href} className={classes}>
        {content}
      </Link>
    )
  }

  return <button className={classes}>{content}</button>
}
