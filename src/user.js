import React, {useEffect, useState} from 'react';
import {
  PixelRatio,
  ScrollView,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';

const UserScreen = ({navigation, route}) => {
  const [userPosts, setUserPosts] = useState([]);

  useEffect(() => {
    fetch(
      `https://jsonplaceholder.typicode.com/posts?userId=${route.params.id}`,
    )
      .then(response => response.json())
      .then(json => setUserPosts(json));
  }, []);

  const {address, email, name, phone, website} = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.email}>{email}</Text>
      <Text style={styles.address}>
        {address.street} - {address.city}
      </Text>
      <Text style={styles.address}> ({phone})</Text>
      <Text style={styles.website}>{website}</Text>
      <Text style={styles.postsHeader}>Entradas</Text>
      {userPosts.length === 0 ? (
        <Text>Caragando...</Text>
      ) : (
        <ScrollView>
          {userPosts.map(post => (
            <TouchableHighlight
              style={styles.postContainer}
              underlayColor="#EFEFEF"
              key={post.id}
              onPress={() => navigation.navigate('Entrada', {...post, name})}>
              <View>
                <Text style={styles.postTitle}>{post.title}</Text>
                <Text style={styles.postBody}>
                  {post.body.split('\n')[0]}...
                </Text>
              </View>
            </TouchableHighlight>
          ))}
        </ScrollView>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    paddingTop: 20,
  },
  postsHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 15,
  },
  postContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    elevation: 10,
    marginHorizontal: 20,
    marginVertical: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,
    shadowColor: 'black',
    shadowOpacity: 0.9,
  },
  postTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    textTransform: 'capitalize',
  },
  postBody: {
    color: '#333333',
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  email: {
    color: '#333333',
    fontSize: 16,
    textTransform: 'lowercase',
  },
  address: {
    color: '#555555',
  },
  website: {
    color: '#777777',
    fontSize: 12,
    textDecorationLine: 'underline',
    textTransform: 'lowercase',
  },
});

export default UserScreen;
