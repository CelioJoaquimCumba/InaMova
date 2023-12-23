import React from "react"
import { Text } from "react-native"
import { Card } from "./Card"

type OptionProps = {
    option: string
    index: number
}
export const OptionCard = ({option, index}: OptionProps) => {
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    return(
        <Card  className="flex flex-row p-4 space-x-2 rounded-lg border-b-2 border-gray-300 self-stretch">
            <Text>{alphabet[index]}.</Text>
            <Text>{option}</Text>
        </Card>
    )
}