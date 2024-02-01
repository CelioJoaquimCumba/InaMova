import * as React from "react"

import { cn } from "../../lib/utils"
import { Text, TextInput, TextInputProps, TouchableOpacity, View } from "react-native"
import { Feather } from "@expo/vector-icons"
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
    const [visible, setVisible] = React.useState(type!=="password")

    const toggleVisible = () => {
      setVisible(!visible)
    }
    return (
        <View className="w-full space-y-2 ">
            <View className="flex">
            <Text>{label}</Text>
              <View className="flex flex-row items-end space-x-2">
                <TextInput
                  autoCapitalize="none"
                  secureTextEntry={!visible}
                  className={cn(
                    `flex h-10 flex-grow rounded-md  px-3 py-2 ring-offset-4 file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-900 disabled:cursor-not-allowed disabled:opacity-50 border ${isInvalid ? "border-red-500" :"border-gray-300 focus:border-black"}`,
                    className
                  )}
                  ref={ref}
                  {...props}
                  value={value}
                  onChangeText={onChangeText}
                />
                {type === "password" && 
                <TouchableOpacity onPress={toggleVisible} className="flex self-stretch items-center justify-end rounded-md p-1 h-10">
                  <Feather name={!visible? "eye" : "eye-off"} size={24} color={"gray"}/>
                </TouchableOpacity>
                 }
                
              </View>
            </View>
            {hint && isInvalid && <Text className="text-red-500 text-xs italic">{hint}</Text>}
        </View>
    )
  }
)
Input.displayName = "Input"

export { Input }
