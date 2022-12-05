import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    padding: 8,
    borderWidth: 1,
    borderColor: '#c4c4c4',
    borderRadius: 5,
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center'
  },
  bodyContainer: {
    flex: 1
  },
  leftIcon: {
    marginRight: 8,
  },
  postInfoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  postInfo: {
    fontSize: 12
  }
})