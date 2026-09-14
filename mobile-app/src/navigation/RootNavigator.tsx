import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { RootStackParamList } from './types';
import { colors } from '../theme';
import SplashScreen from '../screens/SplashScreen';
import MainTabs from './MainTabs';
import NewsDetailsScreen from '../screens/NewsDetailsScreen';
import VideoPlayerScreen from '../screens/VideoPlayerScreen';
import NotificationsScreen from '../screens/NotificationsScreen';
import StaticPageScreen from '../screens/StaticPageScreen';

const Stack = createNativeStackNavigator<RootStackParamList>();

const navTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: colors.surfaceAlt,
    primary: colors.brandRed,
    card: colors.surface,
    border: colors.hairline,
    text: colors.ink,
  },
};

export default function RootNavigator() {
  return (
    <NavigationContainer theme={navTheme}>
      <Stack.Navigator
        initialRouteName="Splash"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="MainTabs" component={MainTabs} />
        <Stack.Screen
          name="NewsDetails"
          component={NewsDetailsScreen}
          options={{ animation: 'slide_from_right' }}
        />
        <Stack.Screen
          name="VideoPlayer"
          component={VideoPlayerScreen}
          options={{ animation: 'slide_from_right' }}
        />
        <Stack.Screen
          name="Notifications"
          component={NotificationsScreen}
          options={{ animation: 'slide_from_bottom' }}
        />
        <Stack.Screen
          name="StaticPage"
          component={StaticPageScreen}
          options={{ animation: 'slide_from_right' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
