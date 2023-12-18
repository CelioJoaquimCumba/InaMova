import { View } from "react-native"
import { Chip } from "../atoms/chip"


type ChipsProps = {
    steps: number
    index: number
}
export const ChipsContainer = ({steps, index}: ChipsProps) => {
    const chips = []
    for ( let i =0 ; i< steps; i++) { 
        chips.push(i)
    }
    return(
        <View className="flex flex-row justify-center items-center w-full">
            {chips.map((i) => <Chip key={i} selected={i === index} />)}
        </View>
    )
}