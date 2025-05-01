import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { Book } from '@/interfaces/interfaces'
import { Link } from 'expo-router';

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
            <Text className='text-surface text-base font-semibold mt-2'>
                {title.length > 20 ? `${title.slice(0, 20)}...` : title}
            </Text>
        </TouchableOpacity>
    </Link>
  )
}

export default BookCard