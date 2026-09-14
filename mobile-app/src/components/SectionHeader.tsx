import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { colors, spacing, typography } from '../theme';

interface Props {
  title: string;
  actionLabel?: string;
  onPressAction?: () => void;
  subtitle?: string;
}

export default function SectionHeader({ title, actionLabel, onPressAction, subtitle }: Props) {
  return (
    <View style={styles.row}>
      <View style={{ flex: 1 }}>
        <Text style={styles.title}>{title}</Text>
        {subtitle ? <Text style={styles.subtitle}>{subtitle}</Text> : null}
      </View>
      {actionLabel ? (
        <TouchableOpacity onPress={onPressAction} hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}>
          <Text style={styles.action}>{actionLabel}</Text>
        </TouchableOpacity>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    paddingHorizontal: spacing.lg,
    marginBottom: spacing.sm,
  },
  title: {
    fontSize: typography.sizes.lg,
    fontWeight: typography.weight.bold,
    color: colors.ink,
    letterSpacing: typography.tracking.tight,
  },
  subtitle: {
    fontSize: typography.sizes.sm,
    color: colors.slate,
    marginTop: 2,
  },
  action: {
    fontSize: typography.sizes.sm,
    fontWeight: typography.weight.semibold,
    color: colors.brandRed,
  },
});
