import React, { useCallback, useMemo, useState } from 'react';
import { useMutation, useQuery } from 'react-query';
import { getPostDetails, getPostList } from '../../../api/api';

const heavyComputation = (id: number): number => {
  return id ** 2;
};

export const useFetchPosts = ( ) => {
  const [modalVisible, setModalVisible] = useState(false);
  const { data: getPostListData, isLoading: postListDataLoading } = useQuery('getUserList', () => getPostList(), {});
  const { mutate: getPostDetailsMutate, isLoading: isLoadinggetPostDetailsMutate, data: selectedPostDetails } = useMutation(getPostDetails, {
    onSuccess: () => {},
  });

  const [selectedPostId, setSelectedPostId] = useState<number | null>(null);

  const onSelectPost = useCallback((postId: number) => {
    setSelectedPostId(postId);
    getPostDetailsMutate(postId);
    setModalVisible(true);
  }, [getPostDetailsMutate]);

  const computedValue = useMemo(() => {
    if (selectedPostDetails) {
      return heavyComputation(selectedPostDetails.id);
    }
    return null;
  }, [selectedPostDetails]);

  const handleClosedModal = () => {
    setModalVisible(!modalVisible);
  }

  return { getPostListData, onSelectPost, computedValue, selectedPostDetails,  postListDataLoading ,modalVisible,handleClosedModal};
};
