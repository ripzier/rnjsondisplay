import React, {useEffect, useState} from 'react';
import {PixelRatio, ScrollView, StyleSheet, Text, View} from 'react-native';

const PostScreen = ({route}) => {
  const [postComments, setPostComments] = useState([]);

  useEffect(() => {
    fetch(
      `https://jsonplaceholder.typicode.com/comments?postId=${route.params.id}`,
    )
      .then(response => response.json())
      .then(json => setPostComments(json));
  }, []);

  const {title, name: author, body} = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.author}>por {author}</Text>
      <Text style={styles.body}>{body}</Text>
      <Text style={styles.commentHeader}>Comentarios</Text>
      {postComments.length === 0 ? (
        <Text>Caragando...</Text>
      ) : (
        <ScrollView>
          {postComments.map(comment => (
            <View style={styles.commentContainer} key={comment.id}>
              <Text style={styles.commentName}>{comment.name}</Text>
              <Text style={styles.commentEmail}>{comment.email}</Text>
              <Text style={styles.commentBody}>{comment.body}</Text>
            </View>
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
  commentHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 15,
  },
  commentContainer: {
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
  commentName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  commentEmail: {
    color: '#777777',
    fontSize: 12,
    marginBottom: 4,
    marginTop: -10,
    textTransform: 'lowercase',
  },
  commentBody: {
    color: '#333333',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginHorizontal: 30,
    textAlign: 'center',
    textTransform: 'capitalize',
  },
  author: {
    color: '#777777',
    fontStyle: 'italic',
    marginBottom: 10,
  },
  body: {
    color: '#333333',
    fontSize: 16,
    marginHorizontal: 20,
    textTransform: 'lowercase',
  },
});

export default PostScreen;
