import React, { useState, useEffect, useCallback, useMemo } from 'react';
import {
  View,
  StyleSheet,
} from 'react-native';
import UserListController from './postListController';

const UserListComponent = () => {

  return (
    <View style={styles.container}>
      <UserListController />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40,
  }
});

export default UserListComponent;
