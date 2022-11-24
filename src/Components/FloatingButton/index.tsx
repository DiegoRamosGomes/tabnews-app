import { Plus } from "phosphor-react-native";
import { TouchableOpacity } from "react-native";

interface FloatingButtonProps {
  onClick(): void
}

export const FloatingButton = ({ onClick }: FloatingButtonProps) => {
  return (
    <TouchableOpacity
      style={{
        position: 'absolute',
        right: 0,
        bottom: 0,
        margin: 16,
        backgroundColor: 'blue',
        padding: 16,
        borderRadius: 30,
        opacity: 1,
        zIndex: 1
      }}
      onPress={onClick}
    >
      <Plus size={25} color={'white'}/>
    </TouchableOpacity>
  )
}