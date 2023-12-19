import { Text, View } from "react-native"
import Carousel from "../../components/organisms/Carrousel"
import { FirstSlide } from "./first-slide"
import { SecondSlide } from "./second-slide"
import { ThirdSlide } from "./third-slide"
export const SplashScreen = () => {
    return(
        <View className="flex w-full h-full justify-center py-4">
            <Carousel items={[<FirstSlide/>, <SecondSlide/>, <ThirdSlide/>]}/>
        </View>
    )
}