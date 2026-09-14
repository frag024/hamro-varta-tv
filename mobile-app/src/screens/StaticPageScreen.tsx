import React from 'react';
import { ScrollView, Text, TouchableOpacity, View, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/types';
import { colors, spacing, typography } from '../theme';

type Props = NativeStackScreenProps<RootStackParamList, 'StaticPage'>;

export default function StaticPageScreen({ route, navigation }: Props) {
  const insets = useSafeAreaInsets();
  const { title, body } = route.params;
  const paragraphs = body.split('\n\n');

  return (
    <View style={styles.screen}>
      <View style={[styles.header, { paddingTop: insets.top + spacing.sm }]}>
        <TouchableOpacity onPress={() => navigation.goBack()} hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}>
          <Ionicons name="arrow-back" size={22} color={colors.ink} />
        </TouchableOpacity>
        <Text style={styles.title} numberOfLines={1}>{title}</Text>
        <View style={{ width: 22 }} />
      </View>
      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        {paragraphs.map((p, idx) => (
          <Text key={idx} style={styles.paragraph}>{p}</Text>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: colors.surface },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: spacing.lg,
    paddingBottom: spacing.sm,
    borderBottomWidth: 1,
    borderBottomColor: colors.hairline,
  },
  title: {
    flex: 1,
    textAlign: 'center',
    fontSize: typography.sizes.md,
    fontWeight: typography.weight.bold,
    color: colors.ink,
  },
  content: {
    padding: spacing.lg,
    paddingBottom: spacing.xxxl,
  },
  paragraph: {
    fontSize: typography.sizes.base,
    lineHeight: 24,
    color: colors.inkSoft,
    marginBottom: spacing.md,
  },
});
