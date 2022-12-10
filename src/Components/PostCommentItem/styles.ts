import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  commentContainer: {
    backgroundColor: '#f1f1f1',
    marginBottom: 16,
    padding: 8,
    borderRadius: 5,
  },
  owner: {
    alignSelf: 'flex-start',
    paddingHorizontal: 6,
    paddingVertical: 2,
    color: '#0969da',
    backgroundColor: '#ddf4ff',
    fontSize: 10,
  },
  body: {
    marginLeft: 8,
    position: 'relative',
    flex: 1
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
    paddingRight: 8
  },
  viewCommentText: {
    flex: 1,
    alignSelf: 'flex-start'
  }
})