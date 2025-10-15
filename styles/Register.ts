import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({

  container:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 20,
  },

  circle1:{
    position: 'absolute',
    width: 300,
    height: 300,
    borderRadius: 150,
    backgroundColor: 'rgba(0, 200, 200, 0.3)',
    top: -100,
    left: -50,
  },

  circle2:{
    position: 'absolute',
    width: 250,
    height: 250,
    borderRadius: 125,
    backgroundColor: 'rgba(0, 200, 200, 0.2)',
    bottom: -50,
    right: -50,
  },

  profileIcon:{
    width: 40,
    height: 40,
    borderRadius: 20,
    position: 'absolute',
    top: 50,
    right: 20,
  },
  
  title:{
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  }, 

  subtitle:{
    fontSize: 16,
    textAlign: 'center',
    color: '#666',
    marginBottom: 20,
  },

  input:{
    width: '100%',
    height: 50,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 25,
    paddingHorizontal: 15,
    marginBottom: 15,
    backgroundColor: '#fff',
    color: '#333',
  },

  button:{
    backgroundColor: '#00C8C8',
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderRadius: 25,
    marginTop: 10,
  },

  buttonText:{
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  
  signInText:{
    color: '#00C8C8',
    fontSize: 14,
    marginTop: 15,
  },

  overlay:{
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },

  alertContainer:{
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 25,
    width: '85%',
    maxWidth: 400,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },

  message:{
    fontSize: 20,
    color: '#666',
    textAlign: 'center',
    marginBottom: 20,
    lineHeight: 22,
  },

});
