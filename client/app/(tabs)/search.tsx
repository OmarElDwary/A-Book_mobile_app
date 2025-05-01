import { View, Text, Image, FlatList, ActivityIndicator } from 'react-native'
import React, { useEffect } from 'react'
import { icons } from '@/constants/icons'
import { images } from '@/constants/images'
import BookCard from '@/components/BookCard'
import useFetch from '@/services/useFetch'
import { fetchBooks } from '@/services/api'
import SearchBar from '@/components/SearchBar'

const Search = () => {

  const [searchQuery, setSearchQuery] = React.useState("")
  
  const {
    data: books,
    loading: booksLoading,
    error: booksError,
    refetch: refetchBooks,
    reset,
  } = useFetch(() => fetchBooks(searchQuery), false);


  useEffect(() => {
    const handleSearch = setTimeout(async () => {
      if (searchQuery.trim()) {
        await refetchBooks()
      } else {
        reset()
      }
    }, 500)

    return () => clearTimeout(handleSearch)
  }, [searchQuery])
  return (
    <View className='flex-1 bg-primary'>
      <Image
        source={images.bg}
        className='felx-1 absolute z-0 w-full'
        resizeMode='contain'
      />
      <FlatList
        data={books?.items}
        keyExtractor={(item) => item.id.toString()}
        numColumns={3}
        className='px-5'
        columnWrapperStyle={{
          justifyContent: 'center',
          gap: 20,
          marginVertical: 10,
        }}
        renderItem={({ item }) => (
          <BookCard
            {...item}
          />
        )}

        ListHeaderComponent={
          <>
            <View className='flex-row items-center justify-center mt-20'>
              <Image source={images.logo2} className='w-12 h-14' resizeMode='contain' />
            </View>
            <View className='my-5'>
              <SearchBar
                value={searchQuery}
                onChangeText={(text: string) => setSearchQuery(text)}
                placeholder='Search'
                />
            </View>
            {booksLoading &&
              <ActivityIndicator size={"large"} color={"#fff"} />
            }

            {!booksLoading && !booksError && searchQuery.trim() && books?.items.length > 0 && (
              <Text className='text-surface text-center mt-10'>
                Search results for <Text className='font-bold text-secondary'>{searchQuery}</Text>
              </Text>
            )}
          </>  
        }
      />
    </View>
  )
}

export default Search