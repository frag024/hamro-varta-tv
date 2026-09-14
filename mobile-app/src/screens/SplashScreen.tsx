import React, { useEffect, useRef } from 'react';
import { Animated, Easing, Image, StatusBar, Text, View, StyleSheet } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/types';
import { colors, spacing, typography } from '../theme';
import { logo } from '../assets/images';

type Props = NativeStackScreenProps<RootStackParamList, 'Splash'>;

export default function SplashScreen({ navigation }: Props) {
  const fade = useRef(new Animated.Value(0)).current;
  const scale = useRef(new Animated.Value(0.86)).current;
  const lineWidth = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.sequence([
      Animated.parallel([
        Animated.timing(fade, {
          toValue: 1,
          duration: 550,
          easing: Easing.out(Easing.cubic),
          useNativeDriver: true,
        }),
        Animated.timing(scale, {
          toValue: 1,
          duration: 600,
          easing: Easing.out(Easing.back(1.2)),
          useNativeDriver: true,
        }),
      ]),
      Animated.timing(lineWidth, {
        toValue: 1,
        duration: 450,
        easing: Easing.out(Easing.cubic),
        useNativeDriver: false,
      }),
    ]).start();

    const timer = setTimeout(() => {
      navigation.replace('MainTabs');
    }, 2100);

    return () => clearTimeout(timer);
  }, [fade, scale, lineWidth, navigation]);

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={colors.brandRedDarker} />
      <Animated.View style={{ opacity: fade, transform: [{ scale }], alignItems: 'center' }}>
        <View style={styles.logoCircle}>
          <Image source={logo.mark} style={styles.mark} resizeMode="contain" />
        </View>
        <Text style={styles.title}>HAMRO VARTA</Text>
        <Text style={styles.titleAccent}>TELEVISION</Text>
        <Animated.View
          style={[
            styles.rule,
            { width: lineWidth.interpolate({ inputRange: [0, 1], outputRange: [0, 64] }) },
          ]}
        />
        <Text style={styles.sub}>SIKKIM</Text>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.brandRedDarker,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoCircle: {
    width: 128,
    height: 128,
    borderRadius: 64,
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: spacing.lg,
  },
  mark: {
    width: 84,
    height: 84,
  },
  title: {
    color: colors.white,
    fontSize: typography.sizes.xl,
    fontWeight: typography.weight.black,
    letterSpacing: typography.tracking.wider,
  },
  titleAccent: {
    color: 'rgba(255,255,255,0.88)',
    fontSize: typography.sizes.base,
    fontWeight: typography.weight.semibold,
    letterSpacing: typography.tracking.label,
    marginTop: 2,
  },
  rule: {
    height: 2,
    backgroundColor: 'rgba(255,255,255,0.55)',
    marginTop: spacing.md,
    marginBottom: spacing.md,
  },
  sub: {
    color: 'rgba(255,255,255,0.7)',
    fontSize: typography.sizes.sm,
    letterSpacing: typography.tracking.label,
    fontWeight: typography.weight.medium,
  },
});
