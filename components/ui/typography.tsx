import { cn } from "@/lib/utils"

interface TypographyProps {
  children: React.ReactNode
  className?: string
}

export function Typography({ children, className }: TypographyProps) {
  return (
    <div className={cn("typography", className)}>
      {children}
    </div>
  )
}