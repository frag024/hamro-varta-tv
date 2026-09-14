import React from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/types';
import { AppHeader, SectionHeader, LiveCard, FeaturedStory, NewsCard, VideoCard } from '../components';
import { colors, spacing, typography, radius, shadow } from '../theme';
import { mockNews, mockVideos, mockTrending, mockNotifications } from '../data';
import { getGreeting, getFormattedToday } from '../utils/date';
import { banners, news } from '../assets/images';

type Nav = NativeStackNavigationProp<RootStackParamList>;

export default function HomeScreen() {
  const navigation = useNavigation<Nav>();

  const topStory = mockNews.find((a) => a.isFeatured) ?? mockNews[0];
  const latest = mockNews.slice(1, 5);
  const editorsPick = mockNews.find((a) => a.isEditorsPick) ?? mockNews[2];
  const sikkimStories = mockNews.filter((a) => a.category === 'sikkim').slice(0, 4);
  const homeVideos = mockVideos.slice(0, 4);
  const unreadCount = mockNotifications.filter((n) => !n.read).length;

  return (
    <View style={styles.screen}>
      <AppHeader
        notificationCount={unreadCount}
        onPressNotifications={() => navigation.navigate('Notifications')}
      />
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        <View style={styles.greetingBlock}>
          <Text style={styles.greeting}>{getGreeting().toUpperCase()}</Text>
          <Text style={styles.date}>{getFormattedToday()}</Text>
        </View>

        <View style={{ marginBottom: spacing.xl }}>
          <LiveCard onPress={() => navigation.navigate('MainTabs', { screen: 'Live' })} />
        </View>

        <View style={{ marginBottom: spacing.xl }}>
          <SectionHeader title="Top Stories" />
          <FeaturedStory
            article={topStory}
            onPress={() => navigation.navigate('NewsDetails', { articleId: topStory.id })}
          />
        </View>

        <View style={{ marginBottom: spacing.xl }}>
          <SectionHeader
            title="Latest News"
            actionLabel="See all"
            onPressAction={() => navigation.navigate('MainTabs', { screen: 'News' })}
          />
          {latest.map((article) => (
            <NewsCard
              key={article.id}
              article={article}
              onPress={() => navigation.navigate('NewsDetails', { articleId: article.id })}
            />
          ))}
        </View>

        <View style={{ marginBottom: spacing.xl }}>
          <SectionHeader
            title="Sikkim"
            subtitle="Stories from across the state"
            actionLabel="More"
            onPressAction={() =>
              navigation.navigate('MainTabs', { screen: 'News', params: { category: 'sikkim' } })
            }
          />
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingHorizontal: spacing.lg }}
          >
            {sikkimStories.map((article) => (
              <NewsCard
                key={article.id}
                article={article}
                variant="stacked"
                onPress={() => navigation.navigate('NewsDetails', { articleId: article.id })}
              />
            ))}
          </ScrollView>
        </View>

        <View style={styles.trendingSection}>
          <SectionHeader title="Trending" />
          <View style={styles.trendingCard}>
            {mockTrending.map((item, idx) => (
              <TouchableOpacity
                key={item.id}
                style={[styles.trendingRow, idx === mockTrending.length - 1 && { borderBottomWidth: 0 }]}
                activeOpacity={0.7}
                onPress={() =>
                  item.articleId && navigation.navigate('NewsDetails', { articleId: item.articleId })
                }
              >
                <Text style={styles.trendingRank}>{item.rank}</Text>
                <Text style={styles.trendingTitle} numberOfLines={2}>
                  {item.title}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        <View style={{ marginBottom: spacing.xl }}>
          <SectionHeader
            title="Videos"
            actionLabel="See all"
            onPressAction={() => navigation.navigate('MainTabs', { screen: 'Videos' })}
          />
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingHorizontal: spacing.lg }}
          >
            {homeVideos.map((video) => (
              <VideoCard
                key={video.id}
                video={video}
                onPress={() => navigation.navigate('VideoPlayer', { videoId: video.id })}
              />
            ))}
          </ScrollView>
        </View>

        <View style={{ marginBottom: spacing.xxl }}>
          <SectionHeader title="Editor's Pick" />
          <TouchableOpacity
            style={styles.editorsCard}
            activeOpacity={0.88}
            onPress={() => navigation.navigate('NewsDetails', { articleId: editorsPick.id })}
          >
            <Image source={editorsPick.image} style={styles.editorsImage} resizeMode="cover" />
            <View style={styles.editorsBody}>
              <Text style={styles.editorsLabel}>EDITOR'S PICK</Text>
              <Text style={styles.editorsHeadline} numberOfLines={3}>
                {editorsPick.headline}
              </Text>
              <Text style={styles.editorsSummary} numberOfLines={2}>
                {editorsPick.summary}
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.surfaceAlt,
  },
  scrollContent: {
    paddingTop: spacing.lg,
    paddingBottom: spacing.xxxl,
  },
  greetingBlock: {
    paddingHorizontal: spacing.lg,
    marginBottom: spacing.lg,
  },
  greeting: {
    fontSize: typography.sizes.xs,
    fontWeight: typography.weight.bold,
    color: colors.brandRed,
    letterSpacing: typography.tracking.label,
    marginBottom: 2,
  },
  date: {
    fontSize: typography.sizes.xl,
    fontWeight: typography.weight.bold,
    color: colors.ink,
    fontFamily: typography.headlineFont,
  },
  trendingSection: {
    marginBottom: spacing.xl,
  },
  trendingCard: {
    marginHorizontal: spacing.lg,
    backgroundColor: colors.surface,
    borderRadius: radius.md,
    ...shadow.card,
  },
  trendingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm + 2,
    borderBottomWidth: 1,
    borderBottomColor: colors.hairline,
  },
  trendingRank: {
    width: 28,
    fontSize: typography.sizes.md,
    fontWeight: typography.weight.black,
    color: colors.brandRed,
    fontFamily: typography.headlineFont,
  },
  trendingTitle: {
    flex: 1,
    fontSize: typography.sizes.base,
    color: colors.ink,
    fontWeight: typography.weight.medium,
    lineHeight: 20,
  },
  editorsCard: {
    marginHorizontal: spacing.lg,
    borderRadius: radius.lg,
    backgroundColor: colors.ink,
    overflow: 'hidden',
    flexDirection: 'row',
    ...shadow.raised,
  },
  editorsImage: {
    width: 120,
    height: '100%',
    minHeight: 150,
  },
  editorsBody: {
    flex: 1,
    padding: spacing.md,
    justifyContent: 'center',
  },
  editorsLabel: {
    color: colors.gold,
    fontSize: 10,
    fontWeight: typography.weight.bold,
    letterSpacing: typography.tracking.label,
    marginBottom: 6,
  },
  editorsHeadline: {
    color: colors.white,
    fontSize: typography.sizes.md,
    fontWeight: typography.weight.bold,
    lineHeight: 22,
    fontFamily: typography.headlineFont,
  },
  editorsSummary: {
    color: 'rgba(255,255,255,0.72)',
    fontSize: typography.sizes.xs,
    marginTop: 6,
    lineHeight: 16,
  },
});
