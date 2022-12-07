import { FloatingAction } from "react-native-floating-action";
import { List } from "phosphor-react-native";
import { View } from "react-native";

type FloatActionButtonItem = {
  text: string
  icon: JSX.Element
  name: string
}

interface FloatActionButtonProps {
  actions: FloatActionButtonItem[]
  onPressItem(name: string): void
}

export const FloatActionButton = ({actions, onPressItem}: FloatActionButtonProps) => {
  return (
    <View style={{
      position: 'absolute',
      bottom: 0,
      right: 0,
      zIndex: 1,
    }}>
      <FloatingAction
        color={'#0969da'}
        floatingIcon={<List color={'white'} weight={'bold'}/>}
        actions={actions}
        onPressItem={onPressItem}
      />
    </View>
  )
}