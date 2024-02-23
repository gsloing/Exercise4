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
        <Text style={styles.textInput}>Address</Text>
        <TextInput
          style={styles.input}
          placeholder="Masukan alamat anda"
          value={address}
          onChangeText={handleAddressChange}
        />
        <Text style={styles.textInput}>Phone Number</Text>
        <TextInput
          style={styles.input}
          placeholder="Masukan nomor telepon anda"
          keyboardType="phone-pad"
          value={phoneNumber}
          onChangeText={handlePhoneNumberChange}
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
    flex: 1,
    marginTop: 30,
    marginLeft: 20,
    marginRight: 20,
    padding: 5,
  },

  text2: {
    fontSize: 36,
    color: 'black',
    fontWeight: '700',
    marginBottom: 40,
  },
   
  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: 'gray',
    marginTop: 8,
    marginBottom: 25,
    paddingHorizontal: 10,
    borderRadius: 10,
    padding: 8,
  },

  textInput: {
    fontSize: 14,
    color: 'black',
    fontWeight: '500',
    lineHeight: 16.41,
  },

  button: {
    color: 'red',
    backgroundColor: '#C238CE',
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    borderRadius: 30,
    width: '100%',
    height: 45,
    borderColor: '#ffffff',
  },

  textButton: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: '400',
  },
});

export default Registration;