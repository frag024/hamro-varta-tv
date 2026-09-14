import { NavigatorScreenParams } from '@react-navigation/native';

export type MainTabParamList = {
  Home: undefined;
  News: { category?: string } | undefined;
  Live: undefined;
  Videos: { category?: string } | undefined;
  More: undefined;
};

export type RootStackParamList = {
  Splash: undefined;
  MainTabs?: NavigatorScreenParams<MainTabParamList>;
  NewsDetails: { articleId: string };
  VideoPlayer: { videoId: string };
  Notifications: undefined;
  StaticPage: { title: string; body: string };
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
