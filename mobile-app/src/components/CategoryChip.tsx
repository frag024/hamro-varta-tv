import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import { colors, radius, spacing, typography } from '../theme';

interface Props {
  label: string;
  active?: boolean;
  onPress?: () => void;
}

export default function CategoryChip({ label, active, onPress }: Props) {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.75}
      style={[styles.chip, active && styles.chipActive]}
      accessibilityRole="button"
      accessibilityState={{ selected: !!active }}
    >
      <Text style={[styles.label, active && styles.labelActive]}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  chip: {
    paddingHorizontal: spacing.md,
    paddingVertical: 9,
    borderRadius: radius.pill,
    backgroundColor: colors.chip,
    marginRight: spacing.xs,
    borderWidth: 1,
    borderColor: colors.chip,
  },
  chipActive: {
    backgroundColor: colors.brandRed,
    borderColor: colors.brandRed,
  },
  label: {
    fontSize: typography.sizes.sm,
    fontWeight: typography.weight.semibold,
    color: colors.inkSoft,
  },
  labelActive: {
    color: colors.white,
  },
});
