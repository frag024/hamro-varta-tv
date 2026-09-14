import React, { useState } from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View, StyleSheet, ActivityIndicator } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/types';
import { AppHeader, LiveBadge } from '../components';
import { colors, spacing, typography, radius, shadow } from '../theme';
import { banners } from '../assets/images';
import { mockProgramme, mockNotifications } from '../data';

type Nav = NativeStackNavigationProp<RootStackParamList>;

export default function LiveScreen() {
  const navigation = useNavigation<Nav>();
  const [isPlaying, setIsPlaying] = useState(false);
  const [isBuffering, setIsBuffering] = useState(false);
  const unreadCount = mockNotifications.filter((n) => !n.read).length;

  const handlePlay = () => {
    setIsBuffering(true);
    setTimeout(() => {
      setIsBuffering(false);
      setIsPlaying(true);
    }, 900);
  };

  return (
    <View style={styles.screen}>
      <AppHeader
        notificationCount={unreadCount}
        onPressNotifications={() => navigation.navigate('Notifications')}
      />
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: spacing.xxxl }}>
        <View style={styles.titleRow}>
          <Text style={styles.pageTitle}>Live TV</Text>
        </View>

        <View style={styles.playerWrap}>
          <Image source={banners.tvStudio} style={styles.playerImage} resizeMode="cover" />
          <LinearGradient colors={['rgba(0,0,0,0.05)', 'rgba(6,4,4,0.8)']} style={StyleSheet.absoluteFill} />

          <View style={styles.playerTop}>
            <LiveBadge label="LIVE" size="md" />
            <View style={styles.viewersPill}>
              <Ionicons name="eye-outline" size={13} color={colors.white} />
              <Text style={styles.viewersText}>3.2K watching</Text>
            </View>
          </View>

          <View style={styles.playerCenter}>
            {isBuffering ? (
              <ActivityIndicator color={colors.white} size="large" />
            ) : (
              <TouchableOpacity
                style={styles.playCircle}
                onPress={handlePlay}
                accessibilityRole="button"
                accessibilityLabel="Watch live"
              >
                <Ionicons
                  name={isPlaying ? 'pause' : 'play'}
                  size={30}
                  color={colors.white}
                  style={isPlaying ? undefined : { marginLeft: 4 }}
                />
              </TouchableOpacity>
            )}
            {!isPlaying && !isBuffering ? <Text style={styles.watchLabel}>WATCH LIVE</Text> : null}
          </View>

          <View style={styles.playerBottom}>
            <Text style={styles.channelName}>Hamro Varta Television</Text>
            <Text style={styles.channelTagline}>Live from Sikkim</Text>
          </View>
        </View>

        {isPlaying ? (
          <View style={styles.liveNotice}>
            <View style={styles.liveDot} />
            <Text style={styles.liveNoticeText}>
              Streaming Hamro Varta Television — demo playback for presentation purposes.
            </Text>
          </View>
        ) : null}

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Now Playing</Text>
          <View style={styles.nowCard}>
            <View style={styles.nowIconWrap}>
              <Ionicons name="radio" size={20} color={colors.live} />
            </View>
            <View style={{ flex: 1 }}>
              <Text style={styles.nowTitle}>{mockProgramme.find((p) => p.isLiveNow)?.title}</Text>
              <Text style={styles.nowDesc}>{mockProgramme.find((p) => p.isLiveNow)?.description}</Text>
            </View>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Programme Schedule</Text>
          <View style={styles.scheduleCard}>
            {mockProgramme.map((slot, idx) => (
              <View
                key={slot.id}
                style={[
                  styles.scheduleRow,
                  idx === mockProgramme.length - 1 && { borderBottomWidth: 0 },
                ]}
              >
                <Text style={styles.scheduleTime}>{slot.time}</Text>
                <View style={{ flex: 1 }}>
                  <View style={styles.scheduleTitleRow}>
                    <Text style={styles.scheduleTitle}>{slot.title}</Text>
                    {slot.isLiveNow ? (
                      <View style={styles.scheduleLiveTag}>
                        <Text style={styles.scheduleLiveTagText}>ON AIR</Text>
                      </View>
                    ) : null}
                  </View>
                  {slot.description ? (
                    <Text style={styles.scheduleDesc}>{slot.description}</Text>
                  ) : null}
                </View>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: colors.surfaceAlt },
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
  playerWrap: {
    marginHorizontal: spacing.lg,
    height: 300,
    borderRadius: radius.lg,
    overflow: 'hidden',
    backgroundColor: colors.black,
    ...shadow.raised,
  },
  playerImage: { ...StyleSheet.absoluteFill },
  playerTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: spacing.md,
  },
  viewersPill: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.45)',
    paddingHorizontal: spacing.xs,
    paddingVertical: 4,
    borderRadius: radius.pill,
    gap: 4,
  },
  viewersText: { color: colors.white, fontSize: 11, fontWeight: typography.weight.medium },
  playerCenter: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: spacing.sm,
  },
  playCircle: {
    width: 68,
    height: 68,
    borderRadius: 34,
    backgroundColor: 'rgba(255,255,255,0.22)',
    borderWidth: 1.5,
    borderColor: 'rgba(255,255,255,0.75)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  watchLabel: {
    color: colors.white,
    fontWeight: typography.weight.bold,
    fontSize: typography.sizes.sm,
    letterSpacing: typography.tracking.wide,
  },
  playerBottom: { padding: spacing.md },
  channelName: {
    color: colors.white,
    fontSize: typography.sizes.md,
    fontWeight: typography.weight.bold,
  },
  channelTagline: {
    color: 'rgba(255,255,255,0.78)',
    fontSize: typography.sizes.sm,
    marginTop: 2,
  },
  liveNotice: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: spacing.lg,
    marginTop: spacing.sm,
    padding: spacing.sm,
    backgroundColor: colors.brandRedLight,
    borderRadius: radius.md,
    gap: spacing.xs,
  },
  liveDot: {
    width: 7,
    height: 7,
    borderRadius: 4,
    backgroundColor: colors.live,
  },
  liveNoticeText: {
    flex: 1,
    color: colors.brandRedDark,
    fontSize: typography.sizes.xs,
    lineHeight: 16,
  },
  section: {
    marginTop: spacing.xl,
    paddingHorizontal: spacing.lg,
  },
  sectionTitle: {
    fontSize: typography.sizes.lg,
    fontWeight: typography.weight.bold,
    color: colors.ink,
    marginBottom: spacing.sm,
  },
  nowCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.surface,
    borderRadius: radius.md,
    padding: spacing.md,
    ...shadow.card,
  },
  nowIconWrap: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: colors.liveGlow,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: spacing.sm,
  },
  nowTitle: {
    fontSize: typography.sizes.base,
    fontWeight: typography.weight.bold,
    color: colors.ink,
  },
  nowDesc: {
    fontSize: typography.sizes.xs,
    color: colors.slate,
    marginTop: 2,
  },
  scheduleCard: {
    backgroundColor: colors.surface,
    borderRadius: radius.md,
    ...shadow.card,
  },
  scheduleRow: {
    flexDirection: 'row',
    padding: spacing.md,
    borderBottomWidth: 1,
    borderBottomColor: colors.hairline,
  },
  scheduleTime: {
    width: 76,
    fontSize: typography.sizes.sm,
    fontWeight: typography.weight.bold,
    color: colors.brandRed,
  },
  scheduleTitleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  scheduleTitle: {
    fontSize: typography.sizes.base,
    fontWeight: typography.weight.semibold,
    color: colors.ink,
  },
  scheduleDesc: {
    fontSize: typography.sizes.xs,
    color: colors.slate,
    marginTop: 2,
  },
  scheduleLiveTag: {
    backgroundColor: colors.live,
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 4,
  },
  scheduleLiveTagText: {
    color: colors.white,
    fontSize: 9,
    fontWeight: typography.weight.bold,
  },
});
