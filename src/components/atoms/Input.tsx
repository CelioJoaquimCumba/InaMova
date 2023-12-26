import * as React from "react"

import { cn } from "../../lib/utils"
import { Text, TextInput, TextInputProps, View } from "react-native"

export interface InputProps
  extends TextInputProps {
    label: string
    isInvalid?: boolean
    hint?:string|undefined
    value?:string|undefined,
    type?: "email" | "password" | "text" | "number"
  }

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, label, hint, isInvalid,value,onChangeText, ...props }, ref) => {
    return (
        <View className="w-full space-y-2 ">
            <Text>{label}</Text>
            <TextInput
              secureTextEntry={type === "password"}
              className={cn(
                `flex h-10 w-full rounded-md  px-3 py-2 ring-offset-4 file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-900 disabled:cursor-not-allowed disabled:opacity-50 border ${isInvalid ? "border-red-500" :"border-gray-300 focus:border-black"}`,
                className
              )}
              ref={ref}
              {...props}
              value={value}
              onChangeText={onChangeText}
            />
            {hint && isInvalid && <Text className="text-red-500 text-xs italic">{hint}</Text>}
        </View>
    )
  }
)
Input.displayName = "Input"

export { Input }
