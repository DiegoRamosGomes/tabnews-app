import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    padding: 16,
    flex: 1
  },
  header: {
    marginBottom: 24,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: "center",
  },
  publish: {
    backgroundColor: '#2da44e',
    borderRadius: 5,
    paddingVertical: 8,
    paddingHorizontal: 16
  },
  publishDisabled: {
    backgroundColor: 'rgba(45,164,78,0.5)',

  },
  publishText: {
    color: 'white',
    fontWeight: 'bold'
  },
  input: {
    width: '100%',
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#c4c4c4',
    fontSize: 13,
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: 'white'
  },
  contentContainer: {
    width: '100%',
    height: '70%',
    // flex: 1,
    backgroundColor: 'white',
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#c4c4c4',
    marginVertical: 24,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderBottomWidth: 1,
    borderBottomColor: '#eaeaea'
  },
  button: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 8,
  },
  buttonActivated: {
    backgroundColor: '#eaeaea'
  },
  inputContainer: {
    padding: 16,
    width: '100%',
    flex: 1,

  },
  contentInput: {
    width: '100%',
    flex: 1,
    fontSize: 13,
    textAlignVertical: 'top',
  }
})