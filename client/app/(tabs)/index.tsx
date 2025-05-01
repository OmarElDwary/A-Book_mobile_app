import { View, Image, ScrollView, ActivityIndicator, Text, FlatList } from "react-native";
import React, { useEffect } from "react";
import { images } from "@/constants/images";
import { icons } from "@/constants/icons";
import SearchBar from "@/components/SearchBar";
import { useRouter } from "expo-router";
import { fetchBooks, fetchBooksByLatest } from "@/services/api";
import useFetch from "@/services/useFetch";
import BookCard from "@/components/BookCard";

const Index = () => {
  const router = useRouter();
  // const [data, setData] = React.useState<any>(null);
  // const [loading, setLoading] = React.useState(false);
  // const [error, setError] = React.useState<any>(null);

  const {
    data: books,
    loading: booksLoading,
    error: booksError
  } = useFetch(() => fetchBooks(""), false);

  return (
    <View className="flex-1 bg-primary">
      <Image source={images.bg} className="w-full absolute z-0" />
      
      <ScrollView
        className="flex-1 px-5"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 10, minHeight: "100%" }}
      >
        <Image source={icons.logo} className="w-12 h-10 mt-20 mb-5 mx-auto" />
        {booksLoading ? (
          <ActivityIndicator
            size={"large"}
            color={"#fff"}
            className="mt-10 self-center"
          />
        ) : booksError ? (
          <Text className="text-surface text-center mt-10">
            {booksError?.message}
          </Text>
        ) : (
        <View className="flex-1 mt-4">
          <SearchBar
            onPress={() => router.push("/search")}
            placeholder="Search"
          />
          <>
            <Text className="text-surface mt-8 mb-3 font-bold text-2xl">
              Latest Books
            </Text>
            <FlatList
              data={books?.items}
              renderItem={({ item }) => (
                <BookCard {...item} />
              )}
              keyExtractor={(item) => item.id.toString()}
              numColumns={3}
              columnWrapperStyle={{
                justifyContent: "flex-start",
                gap: 20,
                paddingRight: 10,
                marginBottom: 10,
              }}
              className="mt-2 pb-20"
              scrollEnabled={false}
            />
          </>
        </View>
        )}
        
      </ScrollView>
    </View>
  );
};

export default Index;
