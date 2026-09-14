import React from 'react';
import { Image, Text, TouchableOpacity, View, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { VideoItem } from '../types';
import { colors, radius, spacing, typography, shadow } from '../theme';

interface Props {
  video: VideoItem;
  onPress?: () => void;
  width?: number;
}

export default function VideoCard({ video, onPress, width = 220 }: Props) {
  return (
    <TouchableOpacity
      style={[styles.card, { width }]}
      onPress={onPress}
      activeOpacity={0.85}
      accessibilityRole="button"
    >
      <View style={styles.thumbWrap}>
        <Image source={video.thumbnail} style={styles.thumb} resizeMode="cover" />
        <View style={styles.playOverlay}>
          <View style={styles.playCircle}>
            <Ionicons name="play" size={14} color={colors.white} style={{ marginLeft: 2 }} />
          </View>
        </View>
        <View style={styles.durationBadge}>
          <Text style={styles.durationText}>{video.duration}</Text>
        </View>
      </View>
      <Text style={styles.category}>{video.categoryLabel.toUpperCase()}</Text>
      <Text style={styles.title} numberOfLines={2}>
        {video.title}
      </Text>
      <Text style={styles.views}>{video.views} views</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    marginRight: spacing.sm,
  },
  thumbWrap: {
    borderRadius: radius.md,
    overflow: 'hidden',
    height: 124,
    backgroundColor: colors.surfaceMuted,
    ...shadow.card,
  },
  thumb: {
    width: '100%',
    height: '100%',
  },
  playOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  playCircle: {
    width: 34,
    height: 34,
    borderRadius: 17,
    backgroundColor: 'rgba(0,0,0,0.45)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  durationBadge: {
    position: 'absolute',
    right: 6,
    bottom: 6,
    backgroundColor: 'rgba(0,0,0,0.72)',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 4,
  },
  durationText: {
    color: colors.white,
    fontSize: 10,
    fontWeight: typography.weight.semibold,
  },
  category: {
    fontSize: 10,
    fontWeight: typography.weight.bold,
    color: colors.brandRed,
    letterSpacing: typography.tracking.label,
    marginTop: spacing.xs,
  },
  title: {
    fontSize: typography.sizes.sm,
    fontWeight: typography.weight.semibold,
    color: colors.ink,
    marginTop: 3,
    lineHeight: 18,
  },
  views: {
    fontSize: typography.sizes.xs,
    color: colors.slate,
    marginTop: 3,
  },
});
