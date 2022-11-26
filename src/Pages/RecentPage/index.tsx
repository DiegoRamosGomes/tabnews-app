import { useCallback, useEffect, useState } from "react";
import { ActivityIndicator, FlatList, RefreshControl, View } from "react-native";
import { HomeListItem } from "../../Components/HomeListItem";
import { useRecents } from '../../Hooks/useRecents';


export const RecentPage = () => {
  const { getLatestContents } = useRecents()

  const [contents, setContents] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [refreshing, setRefreshing] = useState(false)

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

  const onRefresh = useCallback( () => {
    setRefreshing(true)
    setContents([])
    loadPosts().then(() => {
      setRefreshing(false)
    })
  }, []);

  return (
    <View style={{ marginVertical: 8 }}>

      <FlatList
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
          />
        }
        contentContainerStyle={{
          marginHorizontal: 16
        }}
        data={contents}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <HomeListItem post={item}/>}
        ItemSeparatorComponent={() => <View style={{ height: 16 }}/>}
        onEndReached={loadPosts}
        onEndReachedThreshold={0.2}
        ListFooterComponent={() => {
          return (
            <>
              {isLoading && !refreshing ? <ActivityIndicator size={'large'}/> : null}
            </>
          )
        }}
      />
    </View>
  )
}