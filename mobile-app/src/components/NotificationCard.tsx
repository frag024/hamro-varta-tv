import React from 'react';
import { Text, TouchableOpacity, View, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { NotificationItem } from '../types';
import { colors, radius, spacing, typography } from '../theme';

interface Props {
  item: NotificationItem;
  onPress?: () => void;
}

const ICONS: Record<NotificationItem['type'], keyof typeof Ionicons.glyphMap> = {
  breaking: 'flash',
  live: 'radio',
  update: 'newspaper-outline',
  general: 'tv-outline',
};

const TINTS: Record<NotificationItem['type'], string> = {
  breaking: colors.brandRed,
  live: colors.live,
  update: colors.inkSoft,
  general: colors.slate,
};

export default function NotificationCard({ item, onPress }: Props) {
  const tint = TINTS[item.type];
  return (
    <TouchableOpacity style={styles.row} onPress={onPress} activeOpacity={0.8}>
      <View style={[styles.iconWrap, { backgroundColor: `${tint}1A` }]}>
        <Ionicons name={ICONS[item.type]} size={18} color={tint} />
      </View>
      <View style={styles.body}>
        <Text style={[styles.title, { color: tint }]}>{item.title}</Text>
        <Text style={styles.message}>{item.message}</Text>
        <Text style={styles.time}>{item.timeAgo}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.sm,
    borderBottomWidth: 1,
    borderBottomColor: colors.hairline,
  },
  iconWrap: {
    width: 38,
    height: 38,
    borderRadius: radius.md,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: spacing.sm,
  },
  body: {
    flex: 1,
  },
  title: {
    fontSize: typography.sizes.xs,
    fontWeight: typography.weight.bold,
    letterSpacing: typography.tracking.wide,
    marginBottom: 3,
  },
  message: {
    fontSize: typography.sizes.base,
    color: colors.ink,
    lineHeight: 20,
  },
  time: {
    fontSize: typography.sizes.xs,
    color: colors.slate,
    marginTop: 4,
  },
});
