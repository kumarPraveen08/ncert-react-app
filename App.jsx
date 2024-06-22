import {View, Text, PermissionsAndroid} from 'react-native';
import React, {useEffect} from 'react';
import ViewScreen from './screens/ViewScreen';
import DownloadScreen from './screens/DownloadScreen';
import HomeScreen from './screens/HomeScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import BookScreen from './screens/BookScreen';
import TitleScreen from './screens/TitleScreen';
import PdfPreview from './screens/PdfPreview';

const Stack = createNativeStackNavigator();

export default function App() {
  useEffect(() => {
    requestStoragePermission();
  }, []);
  const requestStoragePermission = async () => {
    try {
      const result = await PermissionsAndroid.requestMultiple([
        PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
      ]);

      if (
        result['android.permission.READ_EXTERNAL_STORAGE'] ===
          PermissionsAndroid.RESULTS.GRANTED &&
        result['android.permission.WRITE_EXTERNAL_STORAGE'] ===
          PermissionsAndroid.RESULTS.GRANTED
      ) {
      } else {
        requestStoragePermission();
      }
    } catch (error) {
      console.warn(error);
    }
  };
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: true,
          headerStyle: {backgroundColor: '#11181f'},
          headerTintColor: '#fff',
          headerTitleStyle: {fontWeight: 'bold', fontSize: 24},
        }}>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{title: 'NCERT Books (Class 1st to 12th)'}}
        />
        <Stack.Screen
          name="Download"
          component={DownloadScreen}
          options={{title: 'All Books'}}
        />
        <Stack.Screen
          name="View"
          component={ViewScreen}
          options={{title: 'All Books'}}
        />
        <Stack.Screen name="Book" component={BookScreen} />
        <Stack.Screen name="Title" component={TitleScreen} />
        <Stack.Screen name="Pdf" component={PdfPreview} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
