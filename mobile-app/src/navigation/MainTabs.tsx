import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MainTabParamList } from './types';
import TabBar from './TabBar';
import HomeScreen from '../screens/HomeScreen';
import NewsScreen from '../screens/NewsScreen';
import LiveScreen from '../screens/LiveScreen';
import VideosScreen from '../screens/VideosScreen';
import MoreScreen from '../screens/MoreScreen';

const Tab = createBottomTabNavigator<MainTabParamList>();

export default function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false }}
      tabBar={(props) => <TabBar {...props} />}
    >
      <Tab.Screen name="Home" component={HomeScreen} options={{ tabBarLabel: 'Home' }} />
      <Tab.Screen name="News" component={NewsScreen} options={{ tabBarLabel: 'News' }} />
      <Tab.Screen name="Live" component={LiveScreen} options={{ tabBarLabel: 'Live' }} />
      <Tab.Screen name="Videos" component={VideosScreen} options={{ tabBarLabel: 'Videos' }} />
      <Tab.Screen name="More" component={MoreScreen} options={{ tabBarLabel: 'More' }} />
    </Tab.Navigator>
  );
}
