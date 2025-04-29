import { View, Text, Image, TextInput } from 'react-native'
import React from 'react'
import { icons } from '@/constants/icons'


interface Props {
    onPress?: () => void;
    placeholder: string;
}

export default function SearchBar({onPress, placeholder}: Props) {
  return (
    <View className='flex-row items-center bg-dark-200 rounded-full px-4 py-2'>
        <Image source={icons.search} className='size-5' resizeMode='contain' tintColor="#fff" />
        <TextInput
            onPress={onPress}
            placeholder={placeholder}
            value=''
            onChangeText={() => {}}
            placeholderTextColor="#fff"
            className='flex-1 text-white ml-2'
        />
    </View>
  )
}