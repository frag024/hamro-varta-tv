import React from 'react';
import { Image, Text, TouchableOpacity, View, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { colors, radius, spacing, typography, shadow } from '../theme';
import { banners } from '../assets/images';
import LiveBadge from './LiveBadge';

interface Props {
  onPress?: () => void;
  compact?: boolean;
}

export default function LiveCard({ onPress, compact }: Props) {
  return (
    <TouchableOpacity
      style={[styles.card, compact && styles.cardCompact]}
      onPress={onPress}
      activeOpacity={0.9}
      accessibilityRole="button"
      accessibilityLabel="Watch Hamro Varta Television live"
    >
      <Image source={banners.tvStudio} style={styles.image} resizeMode="cover" />
      <LinearGradient
        colors={['rgba(0,0,0,0.05)', 'rgba(8,6,6,0.75)']}
        style={styles.gradient}
      />

      <View style={styles.topRow}>
        <LiveBadge label="LIVE NOW" size="md" />
      </View>

      <View style={styles.centerPlay}>
        <View style={styles.playCircle}>
          <Ionicons name="play" size={26} color={colors.white} style={{ marginLeft: 3 }} />
        </View>
      </View>

      <View style={styles.bottomRow}>
        <Text style={styles.channel}>HAMRO VARTA TELEVISION</Text>
        <Text style={styles.tagline}>Live from Sikkim</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    marginHorizontal: spacing.lg,
    borderRadius: radius.lg,
    overflow: 'hidden',
    height: 210,
    backgroundColor: colors.black,
    ...shadow.raised,
  },
  cardCompact: {
    height: 190,
  },
  image: {
    ...StyleSheet.absoluteFill,
  },
  gradient: {
    ...StyleSheet.absoluteFill,
  },
  topRow: {
    padding: spacing.md,
  },
  centerPlay: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  playCircle: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: 'rgba(255,255,255,0.22)',
    borderWidth: 1.5,
    borderColor: 'rgba(255,255,255,0.7)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottomRow: {
    padding: spacing.md,
  },
  channel: {
    color: colors.white,
    fontSize: typography.sizes.md,
    fontWeight: typography.weight.bold,
    letterSpacing: typography.tracking.wide,
  },
  tagline: {
    color: 'rgba(255,255,255,0.8)',
    fontSize: typography.sizes.sm,
    marginTop: 2,
  },
});
