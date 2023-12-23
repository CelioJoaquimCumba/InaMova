import React, { useEffect } from "react"
import { Text, View } from "react-native"

type ProgressBarProps = {
    interval: number
    progress: number
}
export const ProgressBar = ({ interval, progress }: ProgressBarProps) => {
    const [percentage, setPercentage] = React.useState(0);
    useEffect(() => {
        setPercentage(progress * 100 / interval);
    }, [progress])
    return(
        <View className="flex self-stretch h-4 rounded-full border border-teal-600">
            <View className={`flex flex-grow self-stretch bg-teal-600 rounded-full`} style={{width: `${percentage}%`}}></View>
        </View>
    )
}