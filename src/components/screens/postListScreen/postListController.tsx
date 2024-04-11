import React from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import { useFetchPosts } from './postListModel';
import { PostList } from './postListView';
import { ActivityIndicator, Modal } from 'react-native'
import PostDetailsComponent from '../postDetails/postDetails';

const UserListController = () => {
  const { getPostListData, onSelectPost, computedValue, selectedPostDetails, postListDataLoading, modalVisible, handleClosedModal } = useFetchPosts();

  if (postListDataLoading) {
    return <ActivityIndicator size={'large'} />;
  }

  return (
    <>
      <PostList posts={getPostListData} onSelectPost={onSelectPost} />
      {selectedPostDetails &&
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            handleClosedModal()
          }}>
          <PostDetailsComponent post={selectedPostDetails} computedValue={computedValue} />
        </Modal>
      }
    </>
  );
};

export default UserListController;
