import { Button, type ButtonProps } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { forwardRef } from "react";

import Link from "next/link";

interface CustomButtonProps extends ButtonProps {
  variant?: "default" | "outline" | "secondary" | "ghost" | "link";
  size?: "default" | "sm" | "lg" | "icon";
  href?: string;
}

const CustomButton = forwardRef<HTMLButtonElement, CustomButtonProps>(
  ({ className, variant = "default", size = "default", children, href, ...props }, ref) => {
    if (href) {
      return (
        <Link href={href} passHref>
          <Button
            ref={ref}
            variant={variant}
            size={size}
            className={cn(
              "font-medium transition-all duration-300",
              variant === "default" && "bg-white text-r2pro-500 shadow-md hover:shadow-lg border border-r2pro-500",
              variant === "outline" && "border-r2pro text-r2pro hover:bg-r2pro-50",
              "rounded-full px-6 py-3 text-lg font-semibold transform hover:scale-105 transition-transform duration-200",
              className
            )}
            {...props}
          >
            {typeof children === "string" ? (
              <span className="flex items-center justify-center text-base">
                {children}
              </span>
            ) : (
              children
            )}
          </Button>
        </Link>
      );
    }

    return (
      <Button
        ref={ref}
        variant={variant}
        size={size}
        className={cn(
          "font-medium transition-all duration-300",
          variant === "default" && "bg-white text-r2pro-500 shadow-md hover:shadow-lg border border-r2pro-500",
          variant === "outline" && "border-r2pro text-r2pro hover:bg-r2pro-50",
          "rounded-full px-6 py-3 text-lg font-semibold transform hover:scale-105 transition-transform duration-200",
          className
        )}
        {...props}
      >
        {typeof children === "string" ? (
          <span className="flex items-center justify-center text-base">
            {children}
          </span>
        ) : (
          children
        )}
      </Button>
    );
  }
);
CustomButton.displayName = "CustomButton";

export { CustomButton };

