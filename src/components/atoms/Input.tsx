import * as React from "react"

import { cn } from "../../lib/utils"
import { Text, TextInput, View } from "react-native"

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
    label: string
    isInvalid?: boolean
    hint?:string|undefined
  } 

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, label, hint, isInvalid, ...props }, ref) => {
    return (
        <View className="w-full space-y-2 ">
            <Text>{label}</Text>
            <TextInput
              type={type}
              className={cn(
                `flex h-10 w-full rounded-md  px-3 py-2 ring-offset-4 file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-900 disabled:cursor-not-allowed disabled:opacity-50 border ${isInvalid ? "border-red-500" :"border-gray-300 focus:border-black"}`,
                className
              )}
              ref={ref}
              {...props}
            />
            {hint && isInvalid && <Text className="text-red-500 text-xs italic">{hint}</Text>}
        </View>
    )
  }
)
Input.displayName = "Input"

export { Input }
