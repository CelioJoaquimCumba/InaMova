import React from 'react'
import { Text, View } from 'react-native'

interface TopBarContainerProps{
    username:string
}
export const TopBarContainer = ({username}:TopBarContainerProps) => {
  return (
    <View className="w-full flex flex-row justify-between px-3 bg-white pt-6">
        <View className="justify-between">
          <Text className="text-xs text-">Welcome</Text>
          <Text className='font-[600]'>{username}</Text>
        </View>

        <View>
          <Text>Placeholder</Text>
        </View>
      </View>
  )
}

