import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {},
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 24
  },
  input: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 8,
    marginVertical: 8
  },
  forgotPassword: {
    fontSize: 12,
    alignSelf: 'flex-end'
  },
  loginButtonContainer: {
    borderRadius: 5,
    paddingVertical: 8,
    width: '100%',
    backgroundColor: '#2c974b',
    marginVertical: 16
  },
  loginButton: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'white'
  },
  signUp: {
    marginTop: 80,
    fontSize: 12
  }
})