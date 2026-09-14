import React from 'react';
import { ScrollView, Text, View, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/types';
import { AppHeader, VideoCard } from '../components';
import { colors, spacing, typography } from '../theme';
import { mockNotifications } from '../data';
import { getVideosByCategory } from '../data/mockVideos';
import { VideoCategory } from '../types';

type Nav = NativeStackNavigationProp<RootStackParamList>;

const SECTIONS: { id: VideoCategory; title: string }[] = [
  { id: 'latest', title: 'Latest Videos' },
  { id: 'popular', title: 'Popular' },
  { id: 'interviews', title: 'Interviews' },
  { id: 'ground-reports', title: 'Ground Reports' },
  { id: 'bulletins', title: 'News Bulletins' },
  { id: 'shows', title: 'Shows' },
];

export default function VideosScreen() {
  const navigation = useNavigation<Nav>();
  const unreadCount = mockNotifications.filter((n) => !n.read).length;

  return (
    <View style={styles.screen}>
      <AppHeader
        notificationCount={unreadCount}
        onPressNotifications={() => navigation.navigate('Notifications')}
      />
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: spacing.xxxl }}>
        <View style={styles.titleRow}>
          <Text style={styles.pageTitle}>Videos</Text>
          <Text style={styles.pageSubtitle}>News, interviews, ground reports and shows</Text>
        </View>

        {SECTIONS.map((section) => {
          const items = getVideosByCategory(section.id);
          if (items.length === 0) return null;
          return (
            <View key={section.id} style={styles.section}>
              <Text style={styles.sectionTitle}>{section.title}</Text>
              <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ paddingHorizontal: spacing.lg }}
              >
                {items.map((video) => (
                  <VideoCard
                    key={video.id}
                    video={video}
                    onPress={() => navigation.navigate('VideoPlayer', { videoId: video.id })}
                  />
                ))}
              </ScrollView>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: colors.surfaceAlt },
  titleRow: {
    paddingHorizontal: spacing.lg,
    paddingTop: spacing.md,
    paddingBottom: spacing.lg,
  },
  pageTitle: {
    fontSize: typography.sizes.xxl,
    fontWeight: typography.weight.black,
    color: colors.ink,
    fontFamily: typography.headlineFont,
  },
  pageSubtitle: {
    fontSize: typography.sizes.sm,
    color: colors.slate,
    marginTop: 2,
  },
  section: {
    marginBottom: spacing.xl,
  },
  sectionTitle: {
    fontSize: typography.sizes.lg,
    fontWeight: typography.weight.bold,
    color: colors.ink,
    paddingHorizontal: spacing.lg,
    marginBottom: spacing.sm,
  },
});
