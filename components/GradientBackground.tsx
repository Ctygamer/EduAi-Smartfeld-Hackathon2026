/*
╔══════════════════════════════════════════════════════╗
║  ⚠  WARNING: DEVELOPER WAS HERE                      ║
╠══════════════════════════════════════════════════════╣
║  Project   : EduAI Marketplace                       ║
║  File      : GradientBackground.tsx                  ║
║  Author    : Caner Taha Yilmaz                       ║
║  Since     : 14 Feb 2026                             ║
║                                                      ║
║  Responsibility:                                     ║
║  → Reusable gradient wrapper for consistent vibe.    ║
║                                                      ║
║  Known Facts:                                        ║
║  • Gradients increase perceived quality by +12%.     ║
║  • If this breaks, everything looks flat.            ║
║                                                      ║
║  If the UI feels boring…                             ║
║  this file is probably innocent.                     ║
╚══════════════════════════════════════════════════════╝
*/
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Colors from '@/constants/colors';

interface GradientBackgroundProps {
    children: React.ReactNode;
}

export default function GradientBackground({ children }: GradientBackgroundProps) {
    return (
        <LinearGradient
            colors={[Colors.backgroundGradientStart, Colors.backgroundGradientEnd]}
            style={styles.gradient}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
        >
            {children}
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    gradient: {
        flex: 1,
    },
});
