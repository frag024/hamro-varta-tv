import React, { useEffect, useRef, useState } from 'react';
import {
  Animated,
  Image,
  ScrollView,
  Share,
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/types';
import { colors, spacing, typography, radius } from '../theme';
import { getVideoById, getVideosByCategory } from '../data/mockVideos';
import { getTimeAgo } from '../utils/date';
import VideoCard from '../components/VideoCard';

type Props = NativeStackScreenProps<RootStackParamList, 'VideoPlayer'>;

// Demo player: simulates playback progress against a local thumbnail.
// Architecture note: swap the player body for an actual <Video> (expo-av)
// or HLS/YouTube embed later — the surrounding screen (title, description,
// related videos) does not need to change.
export default function VideoPlayerScreen({ route, navigation }: Props) {
  const insets = useSafeAreaInsets();
  const video = getVideoById(route.params.videoId);
  const [isPlaying, setIsPlaying] = useState(false);
  const progress = useRef(new Animated.Value(0)).current;
  const [progressWidth, setProgressWidth] = useState(0);

  useEffect(() => {
    if (isPlaying) {
      Animated.timing(progress, {
        toValue: 1,
        duration: 20000,
        useNativeDriver: false,
      }).start();
    } else {
      progress.stopAnimation();
    }
  }, [isPlaying, progress]);

  if (!video) {
    return (
      <View style={styles.notFound}>
        <Text style={styles.notFoundText}>This video is unavailable.</Text>
      </View>
    );
  }

  const related = getVideosByCategory(video.category).filter((v) => v.id !== video.id).slice(0, 6);

  const onShare = async () => {
    try {
      await Share.share({ message: `${video.title} — Hamro Varta Television`, title: video.title });
    } catch {
      // ignore
    }
  };

  return (
    <View style={styles.screen}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.playerWrap}>
          <Image source={video.thumbnail} style={styles.thumb} resizeMode="cover" />
          {!isPlaying && <View style={styles.dim} />}

          <View style={[styles.topBar, { top: insets.top + spacing.xs }]}>
            <TouchableOpacity style={styles.circleButton} onPress={() => navigation.goBack()}>
              <Ionicons name="arrow-back" size={20} color={colors.white} />
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            style={styles.centerTap}
            activeOpacity={0.9}
            onPress={() => setIsPlaying((p) => !p)}
            accessibilityRole="button"
            accessibilityLabel={isPlaying ? 'Pause video' : 'Play video'}
          >
            {!isPlaying && (
              <View style={styles.playCircle}>
                <Ionicons name="play" size={28} color={colors.white} style={{ marginLeft: 3 }} />
              </View>
            )}
          </TouchableOpacity>

          <View
            style={styles.progressTrack}
            onLayout={(e) => setProgressWidth(e.nativeEvent.layout.width)}
          >
            <Animated.View
              style={[
                styles.progressFill,
                {
                  width: progress.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, progressWidth],
                  }),
                },
              ]}
            />
          </View>
        </View>

        <View style={styles.body}>
          <Text style={styles.category}>{video.categoryLabel.toUpperCase()}</Text>
          <Text style={styles.title}>{video.title}</Text>

          <View style={styles.metaRow}>
            <Text style={styles.meta}>
              {video.views} views · {getTimeAgo(video.publishedAt)}
            </Text>
            <TouchableOpacity onPress={onShare} style={styles.shareBtn} hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}>
              <Ionicons name="share-social-outline" size={18} color={colors.brandRed} />
              <Text style={styles.shareBtnText}>Share</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.divider} />
          <Text style={styles.description}>{video.description}</Text>
        </View>

        {related.length > 0 ? (
          <View style={styles.relatedSection}>
            <Text style={styles.relatedTitle}>More in {video.categoryLabel}</Text>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{ paddingHorizontal: spacing.lg }}
            >
              {related.map((v) => (
                <VideoCard key={v.id} video={v} onPress={() => navigation.push('VideoPlayer', { videoId: v.id })} />
              ))}
            </ScrollView>
          </View>
        ) : null}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: colors.surface },
  notFound: { flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: colors.surface },
  notFoundText: { color: colors.slate, fontSize: typography.sizes.base },
  playerWrap: {
    height: 240,
    backgroundColor: colors.black,
  },
  thumb: { ...StyleSheet.absoluteFill },
  dim: { ...StyleSheet.absoluteFill, backgroundColor: 'rgba(0,0,0,0.28)' },
  topBar: {
    position: 'absolute',
    left: spacing.md,
    right: spacing.md,
    flexDirection: 'row',
  },
  circleButton: {
    width: 38,
    height: 38,
    borderRadius: 19,
    backgroundColor: 'rgba(20,16,16,0.55)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  centerTap: {
    ...StyleSheet.absoluteFill,
    alignItems: 'center',
    justifyContent: 'center',
  },
  playCircle: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: 'rgba(255,255,255,0.22)',
    borderWidth: 1.5,
    borderColor: 'rgba(255,255,255,0.75)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  progressTrack: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: 3,
    backgroundColor: 'rgba(255,255,255,0.25)',
  },
  progressFill: {
    height: 3,
    backgroundColor: colors.live,
  },
  body: { padding: spacing.lg },
  category: {
    color: colors.brandRed,
    fontSize: typography.sizes.xs,
    fontWeight: typography.weight.bold,
    letterSpacing: typography.tracking.label,
    marginBottom: spacing.xs,
  },
  title: {
    fontSize: typography.sizes.xl,
    fontWeight: typography.weight.bold,
    color: colors.ink,
    lineHeight: typography.lineHeights.xl,
    fontFamily: typography.headlineFont,
  },
  metaRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: spacing.sm,
  },
  meta: {
    fontSize: typography.sizes.sm,
    color: colors.slate,
  },
  shareBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  shareBtnText: {
    color: colors.brandRed,
    fontWeight: typography.weight.semibold,
    fontSize: typography.sizes.sm,
  },
  divider: {
    height: 1,
    backgroundColor: colors.hairline,
    marginVertical: spacing.md,
  },
  description: {
    fontSize: typography.sizes.base,
    lineHeight: 22,
    color: colors.inkSoft,
  },
  relatedSection: {
    borderTopWidth: 8,
    borderTopColor: colors.surfaceAlt,
    paddingTop: spacing.lg,
    paddingBottom: spacing.xxxl,
  },
  relatedTitle: {
    fontSize: typography.sizes.lg,
    fontWeight: typography.weight.bold,
    color: colors.ink,
    paddingHorizontal: spacing.lg,
    marginBottom: spacing.sm,
  },
});
