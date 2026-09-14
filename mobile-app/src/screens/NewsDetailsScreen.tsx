import React from 'react';
import { Image, ScrollView, Share, Text, TouchableOpacity, View, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/types';
import { colors, spacing, typography, radius } from '../theme';
import { getArticleById, getRelatedArticles } from '../data/mockNews';
import { getFormattedPublishTime } from '../utils/date';
import NewsCard from '../components/NewsCard';

type Props = NativeStackScreenProps<RootStackParamList, 'NewsDetails'>;

export default function NewsDetailsScreen({ route, navigation }: Props) {
  const insets = useSafeAreaInsets();
  const article = getArticleById(route.params.articleId);

  if (!article) {
    return (
      <View style={styles.notFound}>
        <Text style={styles.notFoundText}>This story is unavailable.</Text>
      </View>
    );
  }

  const related = getRelatedArticles(article, 4);

  const onShare = async () => {
    try {
      await Share.share({
        message: `${article.headline} — Hamro Varta Television\n\n${article.summary}`,
        title: article.headline,
      });
    } catch {
      // ignore share errors in demo
    }
  };

  return (
    <View style={styles.screen}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.heroWrap}>
          <Image source={article.image} style={styles.hero} resizeMode="cover" />
          <View style={[styles.navBar, { top: insets.top + spacing.xs }]}>
            <TouchableOpacity style={styles.navButton} onPress={() => navigation.goBack()}>
              <Ionicons name="arrow-back" size={20} color={colors.white} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.navButton} onPress={onShare}>
              <Ionicons name="share-social-outline" size={19} color={colors.white} />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.body}>
          <Text style={styles.category}>{article.categoryLabel.toUpperCase()}</Text>
          <Text style={styles.headline}>{article.headline}</Text>

          <View style={styles.metaRow}>
            <View style={styles.authorAvatar}>
              <Ionicons name="tv" size={16} color={colors.brandRed} />
            </View>
            <View style={{ flex: 1 }}>
              <Text style={styles.author}>{article.author}</Text>
              <Text style={styles.publishTime}>
                {getFormattedPublishTime(article.publishedAt)}
                {article.location ? `  ·  ${article.location}` : ''}
              </Text>
            </View>
            <Text style={styles.readTime}>{article.readTimeMinutes} min read</Text>
          </View>

          <View style={styles.divider} />

          {article.body.map((para, idx) => (
            <Text key={idx} style={styles.paragraph}>
              {para}
            </Text>
          ))}

          <TouchableOpacity style={styles.shareRow} onPress={onShare} activeOpacity={0.8}>
            <Ionicons name="share-social-outline" size={18} color={colors.brandRed} />
            <Text style={styles.shareText}>Share this story</Text>
          </TouchableOpacity>
        </View>

        {related.length > 0 ? (
          <View style={styles.relatedSection}>
            <Text style={styles.relatedTitle}>Related Stories</Text>
            {related.map((a) => (
              <NewsCard
                key={a.id}
                article={a}
                onPress={() => navigation.push('NewsDetails', { articleId: a.id })}
              />
            ))}
          </View>
        ) : null}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.surface,
  },
  notFound: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.surface,
  },
  notFoundText: {
    color: colors.slate,
    fontSize: typography.sizes.base,
  },
  heroWrap: {
    height: 320,
  },
  hero: {
    width: '100%',
    height: '100%',
  },
  navBar: {
    position: 'absolute',
    left: spacing.md,
    right: spacing.md,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  navButton: {
    width: 38,
    height: 38,
    borderRadius: 19,
    backgroundColor: 'rgba(20,16,16,0.55)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  body: {
    paddingHorizontal: spacing.lg,
    paddingTop: spacing.lg,
  },
  category: {
    color: colors.brandRed,
    fontSize: typography.sizes.xs,
    fontWeight: typography.weight.bold,
    letterSpacing: typography.tracking.label,
    marginBottom: spacing.xs,
  },
  headline: {
    fontSize: typography.sizes.xxl,
    fontWeight: typography.weight.bold,
    color: colors.ink,
    lineHeight: typography.lineHeights.xxl,
    fontFamily: typography.headlineFont,
  },
  metaRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: spacing.lg,
  },
  authorAvatar: {
    width: 34,
    height: 34,
    borderRadius: 17,
    backgroundColor: colors.brandRedLight,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: spacing.sm,
  },
  author: {
    fontSize: typography.sizes.sm,
    fontWeight: typography.weight.semibold,
    color: colors.ink,
  },
  publishTime: {
    fontSize: typography.sizes.xs,
    color: colors.slate,
    marginTop: 2,
  },
  readTime: {
    fontSize: typography.sizes.xs,
    color: colors.slate,
    fontWeight: typography.weight.medium,
  },
  divider: {
    height: 1,
    backgroundColor: colors.hairline,
    marginVertical: spacing.lg,
  },
  paragraph: {
    fontSize: typography.sizes.md,
    lineHeight: 27,
    color: colors.inkSoft,
    marginBottom: spacing.md,
  },
  shareRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: colors.brandRed,
    borderRadius: radius.md,
    paddingVertical: spacing.sm + 2,
    marginTop: spacing.sm,
    marginBottom: spacing.xl,
    gap: spacing.xs,
  },
  shareText: {
    color: colors.brandRed,
    fontWeight: typography.weight.semibold,
    fontSize: typography.sizes.base,
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
