import { useContents } from "../../Hooks/useContents";
import { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, Text, View } from "react-native";
import { HomeListItem } from "../../Components/HomeListItem";


export const HomePage = () => {
  const { getLatestContents } = useContents()

  const [contents, setContents] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  const perPage = 10

  useEffect(() => {
    loadPosts().then()
  }, [])

  const loadPosts = async () => {
    setIsLoading(true)
    const page = contents.length === 0 ? 1 : ((contents.length / perPage) + 1)
    const data = await getLatestContents(page, perPage)
    setContents([...contents, ...data])
    setIsLoading(false)
  }

  return (
    <View style={{ marginVertical: 8 }}>
      {isLoading ? <ActivityIndicator size={'large'}/> : null}
      <FlatList
        contentContainerStyle={{
          marginHorizontal: 16
        }}
        data={contents}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <HomeListItem post={item}/>}
        ItemSeparatorComponent={() => <View style={{ height: 16 }}/>}
        onEndReached={loadPosts}
        onEndReachedThreshold={0.2}
      />
    </View>
  )
}