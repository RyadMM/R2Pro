import { Button, ButtonVariant } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { forwardRef } from "react"



interface CustomButtonProps {
  variant?: ButtonVariant
  size?: "default" | "sm" | "lg" | "icon"
  className?: string
  children?: React.ReactNode
  asChild?: boolean
}

const CustomButton = forwardRef<HTMLButtonElement, CustomButtonProps>(
  ({ className, variant = "primary" as ButtonVariant, size = "default", ...props }, ref) => {
    return (
      <Button
        ref={ref}
        variant={variant}
        size={size}
        className={cn(
          "transition-all duration-300",
          className
        )}
        {...props}
      />
    )
  },
)
CustomButton.displayName = "CustomButton"

export { CustomButton }
