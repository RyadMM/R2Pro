import { Button, type ButtonProps } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { forwardRef } from "react"
import { ArrowRight } from "lucide-react"

interface CustomButtonProps extends ButtonProps {
  variant?: "default" | "outline" | "secondary" | "ghost" | "link"
  size?: "default" | "sm" | "lg" | "icon"
  showArrow?: boolean
}

const CustomButton = forwardRef<HTMLButtonElement, CustomButtonProps>(
  ({ className, variant = "default", size = "default", showArrow = false, children, ...props }, ref) => {
    return (
      <Button
        ref={ref}
        variant={variant}
        size={size}
        className={cn(
          "font-medium transition-all duration-300",
          variant === "default" && "bg-r2pro hover:bg-r2pro-600 text-white shadow-md hover:shadow-lg",
          variant === "outline" && "border-r2pro text-r2pro hover:bg-r2pro-50",
          "rounded-full", // Ajout d'un bord arrondi
          "transform hover:scale-105", // Effet de zoom au survol
          className,
        )}
        {...props}
      >
        {typeof children === "string" ? (
          <span className="flex items-center justify-center text-base">
            {children}
            {showArrow && (
              <ArrowRight className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:rotate-45" />
            )}
          </span>
        ) : (
          children
        )}
      </Button>
    )
  },
)
CustomButton.displayName = "CustomButton"

export { CustomButton }

