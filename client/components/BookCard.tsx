import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { Book } from '@/interfaces/interfaces'
import { Link } from 'expo-router';
import { icons } from '@/constants/icons';

const BookCard = ({ id, volumeInfo }: Book) => {
    const { title, imageLinks } = volumeInfo;
    const imageUrl = imageLinks?.thumbnail
    
  return (
    <Link
        href={`/book/${id}`}
        asChild
    >
        <TouchableOpacity
            className='w-[30%]'
        >
            <Image
                source={{ uri: imageUrl ? imageUrl : 'https://via.placeholder.com/150' }}
                alt={title}
                className='w-full h-52 rounded-lg'
                resizeMode='cover'
            />
            <Text className='text-surface text-base font-semibold mt-2' numberOfLines={1}>
                {title.length > 20 ? `${title.slice(0, 20)}...` : title}
            </Text>
            <View className='flex-row items-center justify-start gap-x-1'>
                <Image
                    source={icons.star}
                    className='size-4'
                />
                <Text className='text-surface text-sm font-semibold'>
                    {volumeInfo?.averageRating ? volumeInfo?.averageRating  : "Not Rated yet"}
                </Text>
            </View>
            <View className='flex-row items-center justify-between mt-2'>
                <Text className='text-surface text-sm font-semibold'>
                    {/* split ot get the year only */}
                    {volumeInfo?.publishedDate?.split('-')[0]}
                </Text>
                <Text className='text-surface text-sm text-semibold'>
                    {volumeInfo?.categories ? volumeInfo?.categories[0] : "No Category"}
                </Text>
            </View>
        </TouchableOpacity>
    </Link>
  )
}

export default BookCard