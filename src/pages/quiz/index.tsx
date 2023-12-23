import React from "react"
import { Text, View } from "react-native"
import { Feather } from "@expo/vector-icons"
import { Button, ProgressBar } from "../../components/atoms"
import { QuizForm } from "../../components/molecules"

export const Quiz = () => {
    const [progress, setProgress] = React.useState(1)
    const numberOfQuestions = 25
    return(
        <View className="flex flex-grow h-full self-stretch pt-8">
            {/* header */}
            <View className="flex flex-row px-8 py-3 justify-end items-center self-stretch">
                <Feather name="x" size={24} color="black" />
            </View>
            {/* main */}
            <View className="flex p-8 pt-2 flex-col items-start space-y-2 flex-grow self-stretch bg-gray-50">
                <ProgressBar interval={numberOfQuestions} progress={progress} />
                <QuizForm image="https://media.istockphoto.com/id/1179858968/vector/turn-left-traffic-sign-vector-illustration-traffic-road-sign.jpg?s=612x612&w=0&k=20&c=F-LWEJlLwdG6R3hkgLkh5PGHMrdrkkrOR5S0Ibel4nk=" question="Lorem ipsum dolor sit amet consectetur adipiscing elit.Lorem ipsum dolor sit amet consectetur adipiscing elit?" explanation="Lorem ipsum dolor sit amet consectetur adipiscing elit?" options={["Option 1", "Option 2", "Option 3", "Option 4"]} answer={0}/>
            </View>
            {/* footer  */}
            <View className="flex flex-row px-8 py-4 justify-between items-center self-stretch">
                <Button variant={"outline"}>
                    <Text className="text-gray-900">Previous</Text>
                </Button>
                <Button>
                    <Text className="text-white">Answer</Text>
                </Button>
            </View>
        </View>
    )
}