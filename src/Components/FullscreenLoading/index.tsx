import { ActivityIndicator, Dimensions, View } from "react-native";

export const FullscreenLoading = () => {
  return (
    <View style={{
      position: 'absolute',
      zIndex: 999,
      height: Dimensions.get('screen').height,
      width: Dimensions.get('screen').width,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(0,0,0,0.8)'
    }}>
      <ActivityIndicator size="large" />
    </View>
  )
}