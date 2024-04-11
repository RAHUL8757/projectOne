import React, { useMemo, useCallback } from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}

interface PostDetailsProps {
  post: Post | null;
  computedValue: number | null;
}

const PostDetailsComponent: React.FC<PostDetailsProps> = ({ post, computedValue }) => {
  const renderPostDetails = useMemo(() => {
    return (
      <View style={styles.itemContainer}>
        <Text style={styles.title}>Post ID: {post?.id}</Text>
        <Text style={styles.title}>Post User id: {post?.userId}</Text>
        <Text style={styles.title}>Computed Value: {computedValue}</Text>
        <Text style={styles.title}>Title: {post?.title}</Text>
        <Text style={styles.body}>Body: {post?.body}</Text>
      </View>
    );
  }, [post, computedValue]);

  return renderPostDetails;
};

const styles = StyleSheet.create({
  itemContainer: {
    padding: 20,
    backgroundColor: '#f9f9f9',
    borderRadius: 5,
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  body: {
    marginTop: 10,
  },
});

export default PostDetailsComponent;
