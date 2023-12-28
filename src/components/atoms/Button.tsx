import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { Pressable, Text, TouchableOpacity } from "react-native"
import { cn } from "../../lib/utils"

const buttonVariants = cva(
  "inline-flex flex-row items-center justify-center space-x-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 self-stretch",
  {
    variants: {
      variant: {
        default: "bg-teal-900 text-white hover:bg-teal-700",
        destructive:
          "bg-red-500 text-red-900 hover:bg-red-600",
        outline:
          "border border-gray-200 bg-background hover:bg-gray-50 hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
  onPress? : ()=>void
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, onPress, ...props }, ref) => {
    return (
      <TouchableOpacity
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        onPress={onPress}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
