import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { AccountStackRoutes } from "../../Routes/AuccountRoutes";
import { useCallback, useContext, useEffect, useState } from "react";
import AuthContext from "../../Contexts/AuthContext";
import { useProfile } from "../../Hooks/useProfile";
import { ActivityIndicator, FlatList, RefreshControl, View } from "react-native";
import { HomeListItem } from "../../Components/HomeListItem";


export const ProfilePage = ({ navigation, route }: NativeStackNavigationProp<AccountStackRoutes, 'ProfilePage'>) => {
  const { user } = useContext(AuthContext)
  const { getUserContents } = useProfile()

  const [page, setPage] = useState(1)
  const [contents, setContents] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [refreshing, setRefreshing] = useState(false)
  const [hasMoreData, setHasMoreData] = useState(true)

  const username = route.params?.username ?? user.username
  const perPage = 5

  useEffect(() => {
    loadContents().then()
  }, [])

  const onRefresh = useCallback(() => {
    setHasMoreData(true)
    setRefreshing(true)
    setPage(1)
    setContents([])
    loadContents().then(() => {
      setRefreshing(false)
    })
  }, []);

  const loadContents = async () => {
    setIsLoading(true)

    const data = await getUserContents(username, page, perPage)
    if (data.length === 0) {
      setHasMoreData(false)
      setIsLoading(false)
      return
    }

    setContents([...contents, ...data])
    setPage(prevState => prevState + 1)
    setIsLoading(false)
  }

  return (
    <>
      <FlatList
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
          />
        }
        contentContainerStyle={{
          margin: 16
        }}
        data={contents}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <HomeListItem post={item}/>}
        ItemSeparatorComponent={() => <View style={{ height: 16 }}/>}
        onEndReached={hasMoreData ? loadContents : null}
        onEndReachedThreshold={0.2}
        ListFooterComponent={() => {
          return (
            <>
              {isLoading && !refreshing ? <ActivityIndicator size={'large'}/> : null}
            </>
          )
        }}
      />
    </>
  )
}