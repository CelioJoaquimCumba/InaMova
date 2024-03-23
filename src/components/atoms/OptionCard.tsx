import React, { useState } from "react"
import { Pressable, Text, Touchable } from "react-native"
import { Card } from "./Card"
import { cn } from "../../lib/utils"

type OptionProps = {
    option: string
    index: number,
    on_click: (option: number) => void,
    selected?: boolean,
    isAnswer: boolean
    isWrong: boolean
} & React.HtmlHTMLAttributes<HTMLDivElement>
export const OptionCard = ({option, index, on_click, selected, isAnswer, isWrong, className, ...props}: OptionProps) => {
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    return(
        <Pressable className={cn(`flex flex-row p-4 space-x-2 ${isAnswer ? "bg-teal-600" : isWrong ? "bg-red-600" : selected && "bg-gray-100"} rounded-lg border-b-2 border-gray-300 self-stretch mt-2`, className)} onPress={()=>on_click(index)}>
            <Text className={`${isAnswer || isWrong ? "text-white" : "text-gray-900"}`}>{alphabet[index]}.</Text>
            <Text className={`${isAnswer || isWrong ? "text-white" : "text-gray-900"}`}>{option}</Text>
        </Pressable>
    )
}