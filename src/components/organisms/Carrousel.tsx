import React, { useState } from 'react';
import { ScrollView, Text, View } from 'react-native';
import { ChipsContainer } from '../molecules/chips-container';

type CarouselProps = {
    items:React.ReactNode[]
}
export default function Carousel({ items }: CarouselProps) {
  const [index, setIndex] = useState(0);
 return (
   <View className='w-full flex flex-col h-full p-8'>
     <ScrollView
       className="w-full flex-grow"
       horizontal
       pagingEnabled
       showsHorizontalScrollIndicator={false}
       onMomentumScrollEnd={(e) => setIndex(Math.round(e.nativeEvent.contentOffset.x / e.nativeEvent.layoutMeasurement.width))}
     >
       {items.map((item, index) => (
        <View className='w-screen'>
          {item}
        </View>
       ))}
     </ScrollView>
     <ChipsContainer steps={items.length} index={index} />
   </View>
 );
}
