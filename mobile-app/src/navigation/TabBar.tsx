import React from 'react';
import { Text, TouchableOpacity, View, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { colors, radius, spacing, typography } from '../theme';

const ICONS: Record<string, keyof typeof Ionicons.glyphMap> = {
  Home: 'home',
  News: 'newspaper',
  Live: 'radio',
  Videos: 'play-circle',
  More: 'menu',
};

const OUTLINE_ICONS: Record<string, keyof typeof Ionicons.glyphMap> = {
  Home: 'home-outline',
  News: 'newspaper-outline',
  Live: 'radio-outline',
  Videos: 'play-circle-outline',
  More: 'menu-outline',
};

export default function TabBar({ state, descriptors, navigation }: BottomTabBarProps) {
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.wrap, { paddingBottom: Math.max(insets.bottom, spacing.xs) }]}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const isFocused = state.index === index;
        const isLive = route.name === 'Live';

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });
          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const label =
          typeof options.tabBarLabel === 'string' ? options.tabBarLabel : route.name;

        if (isLive) {
          return (
            <TouchableOpacity
              key={route.key}
              onPress={onPress}
              style={styles.liveTabTouchable}
              accessibilityRole="button"
              accessibilityLabel="Live TV"
              accessibilityState={isFocused ? { selected: true } : {}}
            >
              <View style={[styles.liveButton, isFocused && styles.liveButtonActive]}>
                <Ionicons name="radio" size={20} color={colors.white} />
              </View>
              <Text style={[styles.liveLabel, isFocused && styles.labelActive]}>LIVE</Text>
            </TouchableOpacity>
          );
        }

        return (
          <TouchableOpacity
            key={route.key}
            onPress={onPress}
            style={styles.tabTouchable}
            accessibilityRole="button"
            accessibilityLabel={label}
            accessibilityState={isFocused ? { selected: true } : {}}
          >
            <Ionicons
              name={isFocused ? ICONS[route.name] : OUTLINE_ICONS[route.name]}
              size={22}
              color={isFocused ? colors.brandRed : colors.slate}
            />
            <Text style={[styles.label, isFocused && styles.labelActive]}>{label}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    flexDirection: 'row',
    backgroundColor: colors.surface,
    borderTopWidth: 1,
    borderTopColor: colors.hairline,
    paddingTop: spacing.xs,
    paddingHorizontal: spacing.xs,
  },
  tabTouchable: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 4,
    gap: 3,
  },
  label: {
    fontSize: 10,
    fontWeight: typography.weight.semibold,
    color: colors.slate,
  },
  labelActive: {
    color: colors.brandRed,
  },
  liveTabTouchable: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 3,
  },
  liveButton: {
    width: 44,
    height: 44,
    borderRadius: radius.pill,
    backgroundColor: colors.live,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: -18,
    borderWidth: 3,
    borderColor: colors.surface,
    shadowColor: colors.live,
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.4,
    shadowRadius: 6,
    elevation: 5,
  },
  liveButtonActive: {
    backgroundColor: colors.brandRedDark,
  },
  liveLabel: {
    fontSize: 10,
    fontWeight: typography.weight.bold,
    color: colors.live,
    letterSpacing: typography.tracking.wide,
  },
});
