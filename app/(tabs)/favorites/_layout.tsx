/*
╔══════════════════════════════════════════════════════╗
║  ⚠  WARNING: DEVELOPER WAS HERE                      ║
╠══════════════════════════════════════════════════════╣
║  Project   : EduAI Marketplace                       ║
║  File      : (favorites)/_layout.tsx                 ║
║  Author    : Caner Taha Yilmaz                       ║
║  Since     : 14 Feb 2026                             ║
║                                                      ║
║  Responsibility:                                     ║
║  → Favorites stack layout: controls saved navigation.║
║                                                      ║
║  Known Facts:                                        ║
║  • Layout files decide more than they show.          ║
║  • If headers disappear, start here.                 ║
║                                                      ║
║  If favorites navigation feels broken…               ║
║  this file probably knows why.                       ║
╚══════════════════════════════════════════════════════╝
*/
import { Stack } from 'expo-router';
import Colors from '@/constants/colors';

export default function FavoritesLayout() {
    return (
        <Stack
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen name="index" />
        </Stack>
    );
}
