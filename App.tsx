import { Text, View, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';

const App = () => {
  return (
    <View style={style.container}>
      <Text style={style.title}> Welcome</Text>
      <View style={style.inputContainer}>
        <Text style={style.words}>  Username</Text>
        <TextInput
        placeholder="Masukkan username anda"
        style={style.input}
        />
      </View>
      <View style={style.inputContainer}>
        <Text style={style.words}>  Password</Text>
        <TextInput
        placeholder="Masukkan username anda"
        style={style.input}
        />
      </View>
      <View style={style.inputContainer}></View>
      <TouchableOpacity style={style.button}>
        <Text style={style.buttonText}>Sign In</Text>
      </TouchableOpacity>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black',
    marginTop: 10,
  },
  words: {
    fontSize: 17,
    fontWeight: '500',
    color: 'black',
  },
  inputContainer: {
    marginTop: 25,
  },
  input: {
    borderColor: 'black',
    borderWidth: 1,
    margin: 10,
    borderRadius: 10,
    padding: 12,
  },
  button: {
    backgroundColor: '#E36414',
    borderRadius: 10,
    padding: 15,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    fontSize: 13,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default App;