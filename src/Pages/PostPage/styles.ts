import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    paddingTop: 16,
    paddingHorizontal: 16,
    backgroundColor: 'white',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  body: {

  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
  },
  floatIcon: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    zIndex: 1,
    padding: 16,
    borderRadius: 50,
    backgroundColor: '#c4c4c4',
    margin: 16
  }
})