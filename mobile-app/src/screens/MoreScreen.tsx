import React from 'react';
import { Image, Linking, ScrollView, Text, TouchableOpacity, View, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/types';
import { AppHeader, MenuRow } from '../components';
import { colors, spacing, typography, radius } from '../theme';
import { logo } from '../assets/images';
import { staticContent } from '../data/staticContent';
import { mockNotifications } from '../data';

type Nav = NativeStackNavigationProp<RootStackParamList>;

export default function MoreScreen() {
  const navigation = useNavigation<Nav>();
  const unreadCount = mockNotifications.filter((n) => !n.read).length;

  const openStatic = (key: keyof typeof staticContent) => {
    const page = staticContent[key];
    navigation.navigate('StaticPage', { title: page.title, body: page.body });
  };

  const openSocial = (url: string) => {
    Linking.openURL(url).catch(() => {});
  };

  return (
    <View style={styles.screen}>
      <AppHeader
        notificationCount={unreadCount}
        onPressNotifications={() => navigation.navigate('Notifications')}
      />
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: spacing.xxxl }}>
        <View style={styles.brandCard}>
          <Image source={logo.mark} style={styles.brandMark} resizeMode="contain" />
          <Text style={styles.brandTitle}>HAMRO VARTA TELEVISION</Text>
          <Text style={styles.brandSubtitle}>Sikkim's News. Every Screen.</Text>
        </View>

        <Text style={styles.groupLabel}>ABOUT</Text>
        <View style={styles.group}>
          <MenuRow icon="information-circle-outline" label="About Hamro Varta" onPress={() => openStatic('about')} />
          <MenuRow icon="call-outline" label="Contact Us" onPress={() => openStatic('contact')} />
          <MenuRow icon="megaphone-outline" label="Advertise With Us" onPress={() => openStatic('advertise')} />
        </View>

        <Text style={styles.groupLabel}>BROWSE</Text>
        <View style={styles.group}>
          <MenuRow icon="radio-outline" label="Live TV" onPress={() => navigation.navigate('MainTabs', { screen: 'Live' })} />
          <MenuRow icon="newspaper-outline" label="Latest News" onPress={() => navigation.navigate('MainTabs', { screen: 'News' })} />
          <MenuRow icon="play-circle-outline" label="Videos" onPress={() => navigation.navigate('MainTabs', { screen: 'Videos' })} />
          <MenuRow
            icon="location-outline"
            label="Sikkim"
            onPress={() => navigation.navigate('MainTabs', { screen: 'News', params: { category: 'sikkim' } })}
          />
          <MenuRow
            icon="flag-outline"
            label="National"
            onPress={() => navigation.navigate('MainTabs', { screen: 'News', params: { category: 'national' } })}
          />
          <MenuRow
            icon="football-outline"
            label="Sports"
            onPress={() => navigation.navigate('MainTabs', { screen: 'News', params: { category: 'sports' } })}
          />
          <MenuRow
            icon="film-outline"
            label="Entertainment"
            onPress={() => navigation.navigate('MainTabs', { screen: 'News', params: { category: 'entertainment' } })}
            showChevron={true}
          />
        </View>

        <Text style={styles.groupLabel}>LEGAL</Text>
        <View style={styles.group}>
          <MenuRow icon="document-text-outline" label="Privacy Policy" onPress={() => openStatic('privacy')} />
          <MenuRow icon="reader-outline" label="Terms & Conditions" onPress={() => openStatic('terms')} />
        </View>

        <Text style={styles.groupLabel}>FOLLOW US</Text>
        <View style={styles.socialRow}>
          <TouchableOpacity style={styles.socialButton} onPress={() => openSocial('https://facebook.com')}>
            <Ionicons name="logo-facebook" size={20} color={colors.white} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialButton} onPress={() => openSocial('https://instagram.com')}>
            <Ionicons name="logo-instagram" size={20} color={colors.white} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialButton} onPress={() => openSocial('https://youtube.com')}>
            <Ionicons name="logo-youtube" size={20} color={colors.white} />
          </TouchableOpacity>
        </View>

        <Text style={styles.version}>Hamro Varta TV · Client Demo Build 1.0</Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: colors.surfaceAlt },
  brandCard: {
    alignItems: 'center',
    paddingVertical: spacing.xl,
    marginHorizontal: spacing.lg,
    marginTop: spacing.lg,
    marginBottom: spacing.lg,
    backgroundColor: colors.ink,
    borderRadius: radius.lg,
  },
  brandMark: {
    width: 56,
    height: 56,
    marginBottom: spacing.sm,
  },
  brandTitle: {
    color: colors.white,
    fontSize: typography.sizes.base,
    fontWeight: typography.weight.bold,
    letterSpacing: typography.tracking.wide,
  },
  brandSubtitle: {
    color: 'rgba(255,255,255,0.65)',
    fontSize: typography.sizes.xs,
    marginTop: 4,
  },
  groupLabel: {
    fontSize: 11,
    fontWeight: typography.weight.bold,
    color: colors.slate,
    letterSpacing: typography.tracking.label,
    paddingHorizontal: spacing.lg,
    marginBottom: spacing.xs,
    marginTop: spacing.sm,
  },
  group: {
    backgroundColor: colors.surface,
    marginHorizontal: spacing.lg,
    borderRadius: radius.md,
    marginBottom: spacing.md,
    overflow: 'hidden',
  },
  socialRow: {
    flexDirection: 'row',
    paddingHorizontal: spacing.lg,
    gap: spacing.sm,
    marginBottom: spacing.xl,
  },
  socialButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: colors.brandRed,
    alignItems: 'center',
    justifyContent: 'center',
  },
  version: {
    textAlign: 'center',
    color: colors.slate,
    fontSize: typography.sizes.xs,
  },
});
