import { View } from "react-native"


type ChipsProps = {
    selected: boolean
}
export const Chip = ({selected}:ChipsProps) => {
    return (
        <View className={`flex  border-4 rounded-md mr-1 ${selected ? 'border-teal-900 w-6' : 'border-gray-500 w-4'}`}>
        </View>
    )
}