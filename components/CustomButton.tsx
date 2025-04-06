import { Button, type ButtonProps } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { forwardRef } from "react"

interface CustomButtonProps extends ButtonProps {
  variant?: "default" | "outline" | "secondary" | "ghost" | "link"
  size?: "default" | "sm" | "lg" | "icon"
}

const CustomButton = forwardRef<HTMLButtonElement, CustomButtonProps>(
  ({ className, variant = "default", size = "default", ...props }, ref) => {
    return (
      <Button
        ref={ref}
        variant={variant}
        size={size}
        className={cn(
          "font-medium transition-all duration-300",
          variant === "default" && "bg-r2pro hover:bg-r2pro-600 text-white shadow-md hover:shadow-lg",
          variant === "outline" && "border-r2pro text-r2pro hover:bg-r2pro-50",
          className,
        )}
        {...props}
      />
    )
  },
)
CustomButton.displayName = "CustomButton"

export { CustomButton }

