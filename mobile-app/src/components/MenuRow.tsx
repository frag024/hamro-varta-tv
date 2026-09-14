import React from 'react';
import { Text, TouchableOpacity, View, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors, spacing, typography } from '../theme';

interface Props {
  icon: keyof typeof Ionicons.glyphMap;
  label: string;
  onPress?: () => void;
  showChevron?: boolean;
}

export default function MenuRow({ icon, label, onPress, showChevron = true }: Props) {
  return (
    <TouchableOpacity style={styles.row} onPress={onPress} activeOpacity={0.7}>
      <View style={styles.iconWrap}>
        <Ionicons name={icon} size={18} color={colors.brandRed} />
      </View>
      <Text style={styles.label}>{label}</Text>
      {showChevron ? <Ionicons name="chevron-forward" size={18} color={colors.slate} /> : null}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.sm + 2,
    borderBottomWidth: 1,
    borderBottomColor: colors.hairline,
  },
  iconWrap: {
    width: 32,
    height: 32,
    borderRadius: 8,
    backgroundColor: colors.brandRedLight,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: spacing.sm,
  },
  label: {
    flex: 1,
    fontSize: typography.sizes.base,
    color: colors.ink,
    fontWeight: typography.weight.medium,
  },
});
