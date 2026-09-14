import React, { useState } from 'react';
import { FlatList, ScrollView, StyleSheet, Text, View } from 'react-native';
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList, MainTabParamList } from '../navigation/types';
import { AppHeader, CategoryChip, NewsCard } from '../components';
import { colors, spacing, typography } from '../theme';
import { mockCategories, mockNotifications } from '../data';
import { getArticlesByCategory } from '../data/mockNews';
import { CategoryId } from '../types';

type Nav = NativeStackNavigationProp<RootStackParamList>;
type NewsRoute = RouteProp<MainTabParamList, 'News'>;

export default function NewsScreen() {
  const navigation = useNavigation<Nav>();
  const route = useRoute<NewsRoute>();
  const [active, setActive] = useState<CategoryId>((route.params?.category as CategoryId) ?? 'latest');

  const articles = getArticlesByCategory(active);
  const unreadCount = mockNotifications.filter((n) => !n.read).length;

  return (
    <View style={styles.screen}>
      <AppHeader
        notificationCount={unreadCount}
        onPressNotifications={() => navigation.navigate('Notifications')}
      />

      <View style={styles.titleRow}>
        <Text style={styles.pageTitle}>News</Text>
      </View>

      <View style={styles.chipsWrap}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ paddingHorizontal: spacing.lg }}>
          {mockCategories.map((cat) => (
            <CategoryChip
              key={cat.id}
              label={cat.label}
              active={active === cat.id}
              onPress={() => setActive(cat.id)}
            />
          ))}
        </ScrollView>
      </View>

      <FlatList
        data={articles}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingTop: spacing.md, paddingBottom: spacing.xxxl }}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <NewsCard article={item} onPress={() => navigation.navigate('NewsDetails', { articleId: item.id })} />
        )}
        ListEmptyComponent={
          <View style={styles.empty}>
            <Text style={styles.emptyText}>No stories in this category yet.</Text>
          </View>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.surfaceAlt,
  },
  titleRow: {
    paddingHorizontal: spacing.lg,
    paddingTop: spacing.md,
    paddingBottom: spacing.sm,
  },
  pageTitle: {
    fontSize: typography.sizes.xxl,
    fontWeight: typography.weight.black,
    color: colors.ink,
    fontFamily: typography.headlineFont,
  },
  chipsWrap: {
    paddingBottom: spacing.sm,
    borderBottomWidth: 1,
    borderBottomColor: colors.hairline,
  },
  empty: {
    padding: spacing.xxl,
    alignItems: 'center',
  },
  emptyText: {
    color: colors.slate,
    fontSize: typography.sizes.base,
  },
});
