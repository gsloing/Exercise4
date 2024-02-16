import {Text, 
  View, 
  Image, 
  ScrollView, 
  TextInput, 
  StyleSheet,
} from 'react-native';
import React from 'react';

const App = () => {
  return (
    <View>
      <Text style={style.title}>Jangan Golput, Gunakan Hak Pilihmu!</Text>
      <ScrollView>
        <TextInput
        placeholder="Masukkan nama anda"
        style={style.inputUsername}
        />
        <TextInput
        placeholder="Masukkan pilihan anda"
        style={style.inputUsername}
        />
        <Text style={style.words}>Apapun pilihanmu, kita adalah saudara</Text>
        <Text style={style.words}>sebangsa dan setanah air.</Text>
        <Text style={style.title}> 1 </Text>
        <Image
          source={require('./assets/1.jpg')}
          style={{width: 400,  height: 200}}
        />
        <Text style={style.title}> 2 </Text>
        <Image
          source={require('./assets/2.jpg')}
          style={{width: 400,  height: 200}}
        />
        <Text style={style.title}> 3 </Text>
        <Image
          source={require('./assets/3.jpg')}
          style={{width: 400,  height: 200}}
        />
        </ScrollView>
      </View>
  );
};

const style = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
    marginTop: 10,
  },
  words:{
    fontSize: 15,
    textAlign: 'center'
  },
  inputUsername: {
    borderColor: 'black',
    borderWidth: 1,
    margin: 10,
    borderRadius: 10,
    padding: 10,    
  },
});

export default App;