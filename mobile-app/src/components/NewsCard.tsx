import React from 'react';
import { Image, Text, TouchableOpacity, View, StyleSheet } from 'react-native';
import { NewsArticle } from '../types';
import { colors, radius, spacing, typography, shadow } from '../theme';
import { getTimeAgo } from '../utils/date';

interface Props {
  article: NewsArticle;
  onPress?: () => void;
  variant?: 'horizontal' | 'stacked';
}

export default function NewsCard({ article, onPress, variant = 'horizontal' }: Props) {
  if (variant === 'stacked') {
    return (
      <TouchableOpacity style={styles.stackedCard} onPress={onPress} activeOpacity={0.85}>
        <Image source={article.image} style={styles.stackedImage} resizeMode="cover" />
        <View style={styles.stackedBody}>
          <Text style={styles.category}>{article.categoryLabel.toUpperCase()}</Text>
          <Text style={styles.stackedHeadline} numberOfLines={3}>
            {article.headline}
          </Text>
          <Text style={styles.meta}>{getTimeAgo(article.publishedAt)}</Text>
        </View>
      </TouchableOpacity>
    );
  }

  return (
    <TouchableOpacity style={styles.card} onPress={onPress} activeOpacity={0.85}>
      <Image source={article.image} style={styles.image} resizeMode="cover" />
      <View style={styles.body}>
        <Text style={styles.category}>{article.categoryLabel.toUpperCase()}</Text>
        <Text style={styles.headline} numberOfLines={2}>
          {article.headline}
        </Text>
        <Text style={styles.meta}>{getTimeAgo(article.publishedAt)}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    backgroundColor: colors.surface,
    borderRadius: radius.md,
    marginHorizontal: spacing.lg,
    marginBottom: spacing.sm,
    overflow: 'hidden',
    ...shadow.card,
  },
  image: {
    width: 108,
    height: 96,
  },
  body: {
    flex: 1,
    paddingVertical: spacing.xs,
    paddingHorizontal: spacing.sm,
    justifyContent: 'center',
  },
  category: {
    fontSize: 10,
    fontWeight: typography.weight.bold,
    color: colors.brandRed,
    letterSpacing: typography.tracking.label,
    marginBottom: 3,
  },
  headline: {
    fontSize: typography.sizes.base,
    fontWeight: typography.weight.semibold,
    color: colors.ink,
    lineHeight: 20,
  },
  meta: {
    fontSize: typography.sizes.xs,
    color: colors.slate,
    marginTop: 6,
  },
  stackedCard: {
    width: 220,
    marginRight: spacing.sm,
    backgroundColor: colors.surface,
    borderRadius: radius.md,
    overflow: 'hidden',
    ...shadow.card,
  },
  stackedImage: {
    width: '100%',
    height: 130,
  },
  stackedBody: {
    padding: spacing.sm,
  },
  stackedHeadline: {
    fontSize: typography.sizes.sm,
    fontWeight: typography.weight.semibold,
    color: colors.ink,
    lineHeight: 19,
    marginTop: 2,
  },
});
