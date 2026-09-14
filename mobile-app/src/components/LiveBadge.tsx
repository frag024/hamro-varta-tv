import React, { useEffect, useRef } from 'react';
import { Animated, Text, View, StyleSheet } from 'react-native';
import { colors, radius, spacing, typography } from '../theme';

interface Props {
  label?: string;
  size?: 'sm' | 'md';
}

export default function LiveBadge({ label = 'LIVE', size = 'sm' }: Props) {
  const pulse = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    const loop = Animated.loop(
      Animated.sequence([
        Animated.timing(pulse, { toValue: 0.35, duration: 700, useNativeDriver: true }),
        Animated.timing(pulse, { toValue: 1, duration: 700, useNativeDriver: true }),
      ])
    );
    loop.start();
    return () => loop.stop();
  }, [pulse]);

  const isMd = size === 'md';

  return (
    <View style={[styles.badge, isMd && styles.badgeMd]}>
      <Animated.View style={[styles.dot, isMd && styles.dotMd, { opacity: pulse }]} />
      <Text style={[styles.text, isMd && styles.textMd]}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  badge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.live,
    paddingHorizontal: spacing.xs,
    paddingVertical: 4,
    borderRadius: radius.sm,
    alignSelf: 'flex-start',
  },
  badgeMd: {
    paddingHorizontal: spacing.sm,
    paddingVertical: 6,
  },
  dot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: colors.white,
    marginRight: 5,
  },
  dotMd: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginRight: 6,
  },
  text: {
    color: colors.white,
    fontSize: typography.sizes.xs,
    fontWeight: typography.weight.bold,
    letterSpacing: typography.tracking.wide,
  },
  textMd: {
    fontSize: typography.sizes.sm,
  },
});
