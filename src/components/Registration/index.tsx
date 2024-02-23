import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

const Registration = () => {
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [address, setAddress] = useState('');

  const handleNameChange = (text: React.SetStateAction<string>) => {
    setName(text);
  };

  const handleEmailChange = (text: React.SetStateAction<string>) => {
    setEmail(text);
  };

  const handlePhoneNumberChange = (text: React.SetStateAction<string>) => {
    setPhoneNumber(text);
  };

  const handleUsernameChange = (text: React.SetStateAction<string>) => {
    setUsername(text);
  };

  const handleAddressChange = (text: React.SetStateAction<string>) => {
    setAddress(text);
  };

  const handleSubmit = () => {
    console.log('Nama: ', name);
    console.log('Username: ', username);
    console.log('Email:', email);
    console.log('Address: ', address);
    console.log('Phone Number:', phoneNumber);
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.text2}>Registration</Text>
        <Text style={styles.textInput}>Name</Text>
        <TextInput
          style={styles.input}
          placeholder="Masukan nama lengkap anda"
          value={name}
          onChangeText={handleNameChange}
        />
        <Text style={styles.textInput}>Username</Text>
        <TextInput
          style={styles.input}
          placeholder="Masukan username anda"
          value={username}
          onChangeText={handleUsernameChange}
        />
        <Text style={styles.textInput}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="Masukan email anda"
          keyboardType="email-address"
          autoCapitalize="none"
          value={email}
          onChangeText={handleEmailChange}
        />

        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.textButton}>Register</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    
  },

  text2: {
   

  input: {

  },

  textInput: {

  },

  button: {
    
  },

  textButton: {
    
  },
});

export default Registration;