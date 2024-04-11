// View.js
import React, { useCallback, useMemo } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

interface Post {
  id: number;
  title: string;
  body: string;
}

interface PostDetailsProps {
  posts: Post[];
  onSelectPost: (postId: number) => void;
}

const PostList: React.FC<PostDetailsProps> = ({ posts, onSelectPost }) => {
  const renderItem = useCallback(({ item }) => (
    <TouchableOpacity style={styles.itemContainer} onPress={() => onSelectPost(item.id)}>
      <Text style={styles.title}>{item?.id}</Text>
      <Text style={styles.body}>{item?.title}</Text>
    </TouchableOpacity>
  ), [onSelectPost]);

  const keyExtractor = useCallback((item: Post) => item.id.toString(), []);

  const memoizedRenderItem = useMemo(() => renderItem, [renderItem]);

  return (
    <View>
      <FlatList
        data={posts}
        renderItem={memoizedRenderItem}
        keyExtractor={keyExtractor}
      />
    </View>
  );
};



const styles = StyleSheet.create({
  itemContainer: {
    padding: 10,
    backgroundColor: '#d9d9d9',
    borderRadius: 5,
    margin: 10
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  body: {
    fontSize: 14,
    fontWeight: '700',
  },
});

export { PostList };
