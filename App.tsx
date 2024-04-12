import { Alert, StyleSheet } from 'react-native';
import NavigationComponent from './src/navigation/index'
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'
import PushController from './NotificationHandler';
import { useEffect } from 'react';
import messaging from '@react-native-firebase/messaging';
import {PermissionsAndroid} from 'react-native';

const queryClient = new QueryClient()

export default function App() {
  useEffect(() => {
    requestUserPermission()
  },[])
  useEffect(() => {
    const unsubscribe = messaging().onMessage(async remoteMessage => {
      Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage));
    });

    return unsubscribe;
  }, []);

    async function requestUserPermission() {
      PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS);
      const authStatus = await messaging().requestPermission();
      const enabled =
        authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
        authStatus === messaging.AuthorizationStatus.PROVISIONAL;
    
      if (enabled) {
        console.log('Authorization status:', authStatus);
      }
    }
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationComponent />
      <PushController/>
    </QueryClientProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  }
});
