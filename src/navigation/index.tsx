import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import UserListComponent from '../components/screens/postListScreen/postListComponent';
import PostDetailsComponent from '../components/screens/postDetails/postDetails';

const Stack = createNativeStackNavigator();

 const NavigationComponent = () =>  {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="PostList"
            component={UserListComponent}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="PostDetails"
            component={PostDetailsComponent}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}
export default  NavigationComponent;
