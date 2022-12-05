import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { AccountStackRoutes } from "../../Routes/AuccountRoutes";
import { useCallback, useContext, useEffect, useState } from "react";
import AuthContext from "../../Contexts/AuthContext";
import { useProfile } from "../../Hooks/useProfile";
import { ActivityIndicator, FlatList, RefreshControl, TextInput, View } from "react-native";
import { HomeListItem } from "../../Components/HomeListItem";
import { MagnifyingGlass } from "phosphor-react-native";


export const ProfilePage = ({ route }: NativeStackNavigationProp<AccountStackRoutes, 'ProfilePage'>) => {
  const { user } = useContext(AuthContext)
  const { getUserContents } = useProfile()

  const [page, setPage] = useState(1)
  const [contents, setContents] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [searchText, setSearchText] = useState('')
  const [refreshing, setRefreshing] = useState(false)
  const [hasMoreData, setHasMoreData] = useState(true)

  const username = route.params?.username ?? user.username
  const perPage = 5

  const filteredContents = contents?.filter((item) => {
    return item?.body?.toLowerCase().includes(searchText.toLowerCase()) ||
      item?.title?.toLowerCase().includes(searchText.toLowerCase())
  })

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
      <View style={{
        flexDirection: 'row',
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#c4c4c4',
        marginTop: 8,
        marginHorizontal: 16
      }}>
        <View style={{
          backgroundColor: '#c4c4c4',
          paddingHorizontal: 8,
          alignItems: 'center',
          justifyContent: 'center',
        }} >
          <MagnifyingGlass color={'black'} weight={'bold'} size={18}/>
        </View>
        <TextInput
          style={{
            flex: 1,
            paddingHorizontal: 8,
            height: 35,
          }}
          placeholder={"Digite um termo para busca"}
          value={searchText}
          onChangeText={setSearchText}
        />
      </View>
      <FlatList
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
          />
        }
        contentContainerStyle={{
          margin: 16,
          paddingBottom: 24
        }}
        data={searchText != '' ? filteredContents : contents}
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