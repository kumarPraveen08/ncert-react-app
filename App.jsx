import {View, Text, PermissionsAndroid} from 'react-native';
import React, {useEffect, useState} from 'react';
import HomeScreen from './screens/HomeScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';

import {BannerAd, BannerAdSize, TestIds} from 'react-native-google-mobile-ads';

import BookScreen from './screens/BookScreen';
import TitleScreen from './screens/TitleScreen';
import ChapterScreen from './screens/ChapterScreen';
import PdfScreen from './screens/PdfScreen';

const adUnitId = __DEV__
  ? TestIds.ADAPTIVE_BANNER
  : 'ca-app-pub-5874253013765779/6787966011';

const Stack = createNativeStackNavigator();

export default function App() {
  // useEffect(() => {
  //   requestStoragePermission();
  // }, []);
  // const requestStoragePermission = async () => {
  //   try {
  //     const result = await PermissionsAndroid.requestMultiple([
  //       PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
  //       PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
  //     ]);

  //     if (
  //       result['android.permission.READ_EXTERNAL_STORAGE'] ===
  //         PermissionsAndroid.RESULTS.GRANTED &&
  //       result['android.permission.WRITE_EXTERNAL_STORAGE'] ===
  //         PermissionsAndroid.RESULTS.GRANTED
  //     ) {
  //     } else {
  //       requestStoragePermission();
  //     }
  //   } catch (error) {
  //     console.warn(error);
  //   }
  // };
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
        <Stack.Screen name="Book" component={BookScreen} />
        <Stack.Screen name="Title" component={TitleScreen} />
        <Stack.Screen name="Chapter" component={ChapterScreen} />
        <Stack.Screen name="Pdf" component={PdfScreen} />
      </Stack.Navigator>
      <BannerAd
        unitId={adUnitId}
        size={BannerAdSize.ANCHORED_ADAPTIVE_BANNER}
      />
    </NavigationContainer>
  );
}
