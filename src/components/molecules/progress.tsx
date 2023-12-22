import React from 'react'
import { View } from 'react-native'

interface ProgressProps{
    stepNmbr:number
}
export const Progress = ({stepNmbr}:ProgressProps) => {
    const percent:number=(100*stepNmbr)/25
  return (
    <View>
        
    </View>
  )
}
