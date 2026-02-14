/*
╔══════════════════════════════════════════════════════╗
║  ⚠  WARNING: DEVELOPER WAS HERE                      ║
╠══════════════════════════════════════════════════════╣
║  Project   : EduAI Marketplace                       ║
║  File      : (tabs)/_layout.tsx                      ║
║  Author    : Caner Taha Yilmaz                       ║
║  Since     : 14 Feb 2026                             ║
║                                                      ║
║  Responsibility:                                     ║
║  → Bottom tab navigation: wires icons + core routes. ║
║                                                      ║
║  Known Facts:                                        ║
║  • This defines the main user universe.              ║
║  • Icon choice influences more feelings than logic.  ║
║                                                      ║
║  If tabs behave strangely…                           ║
║  check routes before blaming React.                  ║
╚══════════════════════════════════════════════════════╝
*/
import { Tabs } from 'expo-router';
import { Home, MessageCircle, Plus, Heart, User } from 'lucide-react-native';
import React from 'react';
import Colors from '@/constants/colors';

export default function TabLayout() {
    return (
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: Colors.primary,
                tabBarInactiveTintColor: Colors.textMuted,
                headerShown: false,
                tabBarStyle: {
                    backgroundColor: Colors.white,
                    borderTopWidth: 1,
                    borderTopColor: Colors.border,
                    paddingTop: 12,
                    paddingBottom: 12,
                    height: 90,
                },
                tabBarLabelStyle: {
                    fontSize: 11,
                    fontWeight: '500' as const,
                },
            }}
        >
            <Tabs.Screen
                name="(home)"
                options={{
                    title: 'Startseite',
                    tabBarIcon: ({ color, size }) => <Home size={size} color={color} />,
                }}
            />
            <Tabs.Screen
                name="messages"
                options={{
                    title: 'Nachrichten',
                    tabBarIcon: ({ color, size }) => <MessageCircle size={size} color={color} />,
                }}
            />
            <Tabs.Screen
                name="create"
                options={{
                    title: 'Erstellen',
                    tabBarIcon: ({ color, size }) => (
                        <Plus size={size} color={Colors.white} style={{ backgroundColor: Colors.primary, borderRadius: 12, padding: 4 }} />
                    ),
                }}
            />
            <Tabs.Screen
                name="favorites"
                options={{
                    title: 'Favoriten',
                    tabBarIcon: ({ color, size }) => <Heart size={size} color={color} />,
                }}
            />
            <Tabs.Screen
                name="profile"
                options={{
                    title: 'Profil',
                    tabBarIcon: ({ color, size }) => <User size={size} color={color} />,
                }}
            />

        </Tabs>
    );
}
