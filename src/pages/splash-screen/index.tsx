import { Pressable, Text, View } from "react-native"
import Carousel from "../../components/organisms/Carrousel"
import { FirstSlide } from "./first-slide"
import { SecondSlide } from "./second-slide"
import { ThirdSlide } from "./third-slide"
import { Button } from "../../components/atoms/Button"
// import  Icon from  "react-native-vector-icons/Feather"
export const SplashScreen = () => {
    return(
        <View className="flex w-full h-full justify-center py-8">
            <View className="flex flex-row justify-end px-4">
                <Button variant={"link"} className="w-16 ">
                    <Text className="text-teal-800 underline">Skip</Text>
                    {/* <Icon name="chevron-up" size={20} color={"teal"}/> */}
                </Button>
            </View>
            <Carousel items={[<FirstSlide/>, <SecondSlide/>, <ThirdSlide/>]}/>
        </View>
    )
}