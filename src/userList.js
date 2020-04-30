import React, {useEffect, useState} from 'react';
import {
  PixelRatio,
  ScrollView,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';

const UserListScreen = ({navigation}) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(json => setUsers(json));
  }, []);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {users.length === 0 ? (
        <Text>Caragando...</Text>
      ) : (
        users.map(user => (
          <TouchableHighlight
            style={styles.userContainer}
            underlayColor="#EFEFEF"
            key={user.id}
            onPress={() => navigation.navigate('Usuario', {...user})}>
            <View style={styles.userInnerContainer}>
              <Text style={styles.name}>{user.name}</Text>
              <Text style={styles.username}>"{user.username}"</Text>
              <Text style={styles.email}>{user.email}</Text>
            </View>
          </TouchableHighlight>
        ))
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexGrow: 1,
    justifyContent: 'center',
  },
  userContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    elevation: 10,
    marginVertical: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,
    shadowColor: 'black',
    shadowOpacity: 0.9,
    width: '70%',
  },
  userInnerContainer: {
    alignItems: 'center',
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  username: {
    color: '#333333',
    fontSize: 14,
  },
  email: {
    color: '#777777',
    fontSize: 12,
    textTransform: 'lowercase',
  },
});

export default UserListScreen;
