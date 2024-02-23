import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, FlatList, ScrollView } from 'react-native';
import axios from 'axios';

export default function UsersList() {

  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users")
      .then((response) => setUsers(response.data))
      .catch((err) => console.log(err))
  }, []);

  const renderUserCard = ({ item }) => {
    return (
        <ScrollView>
            <View style={styles.card}>
                <View style={styles.isiCard}>
                    <Text style={styles.text1}>Name: </Text>
                    <Text style={styles.text}>{item.name}</Text>
                </View>
                    <View style={styles.isiCard}>
                <Text style={styles.text1}>Username: </Text>
                    <Text style={styles.text}>{item.username}</Text>
                </View>
                    <View style={styles.isiCard}>
                <Text style={styles.text1}>Email: </Text>
                    <Text style={styles.text}>{item.email}</Text>
                </View>
                <View style={styles.isiCard}>
                    <Text style={styles.text1}>Address: </Text>
                    <View>
                        <Text style={styles.text}>{item.address.street}, {item.address.suite}</Text>
                        <Text style={styles.text}>{item.address.city}, {item.address.zipcode}</Text>
                    </View>
                </View>
                <View style={styles.isiCard}>
                    <Text style={styles.text1}>Phone: </Text>
                    <Text style={styles.text}>{item.phone}</Text>
                </View>
            </View>
        </ScrollView>
    )
  }

  return (
    <ScrollView>
        <View style={styles.container}>
        <Text style={styles.header}>Users List</Text>
        <FlatList
            data={users}
            keyExtractor={(item) => item.id.toString()}
            renderItem={renderUserCard}
        />
    </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    padding: 20,
  },

  header: {
    fontSize: 36,
    fontWeight: '700',
    color: '#000000',
    marginBottom: 40,
  },

  card: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderRadius: 8,
    padding: 15,
    marginBottom: 10,
  },

  isiCard: {
    flexDirection: 'row',
    margin: 3,
  },

  text: {
    color: '#000000',
    fontSize: 16,
  },

  text1: {
    color: '#000000',
    fontSize: 15,
    fontWeight: 'bold',
  },
});