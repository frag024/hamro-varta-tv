import React from 'react';
import { Image, Text, TouchableOpacity, View, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { NewsArticle } from '../types';
import { colors, radius, spacing, typography, shadow } from '../theme';
import { getTimeAgo } from '../utils/date';

interface Props {
  article: NewsArticle;
  onPress?: () => void;
}

export default function FeaturedStory({ article, onPress }: Props) {
  return (
    <TouchableOpacity
      style={styles.card}
      onPress={onPress}
      activeOpacity={0.9}
      accessibilityRole="button"
    >
      <Image source={article.image} style={styles.image} resizeMode="cover" />
      <LinearGradient
        colors={['transparent', 'rgba(0,0,0,0.15)', 'rgba(10,7,7,0.88)']}
        locations={[0, 0.45, 1]}
        style={styles.gradient}
      />
      <View style={styles.content}>
        <Text style={styles.category}>{article.categoryLabel.toUpperCase()}</Text>
        <Text style={styles.headline} numberOfLines={3}>
          {article.headline}
        </Text>
        <Text style={styles.meta}>
          {article.location ? `${article.location} · ` : ''}
          {getTimeAgo(article.publishedAt)}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    marginHorizontal: spacing.lg,
    borderRadius: radius.lg,
    overflow: 'hidden',
    height: 260,
    backgroundColor: colors.ink,
    ...shadow.raised,
  },
  image: {
    ...StyleSheet.absoluteFill,
  },
  gradient: {
    ...StyleSheet.absoluteFill,
  },
  content: {
    flex: 1,
    justifyContent: 'flex-end',
    padding: spacing.lg,
  },
  category: {
    color: colors.brandRedLight,
    backgroundColor: colors.brandRed,
    alignSelf: 'flex-start',
    fontSize: 10,
    fontWeight: typography.weight.bold,
    letterSpacing: typography.tracking.label,
    paddingHorizontal: spacing.xs,
    paddingVertical: 4,
    borderRadius: 4,
    marginBottom: spacing.xs,
    overflow: 'hidden',
  },
  headline: {
    color: colors.white,
    fontSize: typography.sizes.xl,
    fontWeight: typography.weight.bold,
    lineHeight: typography.lineHeights.xl,
    fontFamily: typography.headlineFont,
  },
  meta: {
    color: 'rgba(255,255,255,0.78)',
    fontSize: typography.sizes.sm,
    marginTop: spacing.xs,
  },
});
