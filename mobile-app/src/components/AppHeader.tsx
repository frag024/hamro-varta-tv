import React from 'react';
import { Image, Text, TouchableOpacity, View, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { colors, spacing, typography } from '../theme';
import { logo } from '../assets/images';

interface Props {
  onPressNotifications?: () => void;
  notificationCount?: number;
}

export default function AppHeader({ onPressNotifications, notificationCount = 0 }: Props) {
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.wrap, { paddingTop: insets.top + spacing.sm }]}>
      <View style={styles.row}>
        <View style={styles.brandRow}>
          <Image source={logo.mark} style={styles.mark} resizeMode="contain" />
          <View>
            <Text style={styles.brandName}>HAMRO VARTA</Text>
            <Text style={styles.brandSub}>TELEVISION · SIKKIM</Text>
          </View>
        </View>

        <TouchableOpacity
          onPress={onPressNotifications}
          style={styles.bellButton}
          hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
          accessibilityRole="button"
          accessibilityLabel="Notifications"
        >
          <Ionicons name="notifications-outline" size={22} color={colors.ink} />
          {notificationCount > 0 ? (
            <View style={styles.dot}>
              <Text style={styles.dotText}>{notificationCount > 9 ? '9+' : notificationCount}</Text>
            </View>
          ) : null}
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    backgroundColor: colors.surface,
    paddingHorizontal: spacing.lg,
    paddingBottom: spacing.sm,
    borderBottomWidth: 1,
    borderBottomColor: colors.hairline,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  brandRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.xs,
  },
  mark: {
    width: 34,
    height: 34,
    marginRight: spacing.xs,
  },
  brandName: {
    fontSize: typography.sizes.base,
    fontWeight: typography.weight.black,
    color: colors.ink,
    letterSpacing: typography.tracking.wide,
  },
  brandSub: {
    fontSize: 10,
    fontWeight: typography.weight.semibold,
    color: colors.brandRed,
    letterSpacing: typography.tracking.label,
    marginTop: 1,
  },
  bellButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: colors.surfaceAlt,
    alignItems: 'center',
    justifyContent: 'center',
  },
  dot: {
    position: 'absolute',
    top: -2,
    right: -2,
    minWidth: 16,
    height: 16,
    borderRadius: 8,
    paddingHorizontal: 3,
    backgroundColor: colors.brandRed,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1.5,
    borderColor: colors.surface,
  },
  dotText: {
    color: colors.white,
    fontSize: 9,
    fontWeight: typography.weight.bold,
  },
});
