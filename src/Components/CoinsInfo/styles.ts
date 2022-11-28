import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  coinItemContainer: {
    flexDirection: 'row',
    marginLeft: 4,
  },
  coinBox: {
    width: 13,
    height: 13,
    borderRadius: 5,
    marginRight: 2,
  },
  tabCoin: {
    backgroundColor: 'green',
  },
  tabCash: {
    backgroundColor: 'blue',
  },
  coinText: {
    lineHeight: 14,
    fontSize: 13,
  }
})