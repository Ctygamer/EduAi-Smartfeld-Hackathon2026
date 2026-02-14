/*
╔══════════════════════════════════════════════════════╗
║  ⚠  WARNING: DEVELOPER WAS HERE                      ║
╠══════════════════════════════════════════════════════╣
║  Project   : EduAI Marketplace                       ║
║  File      : (messages)/_layout.tsx                  ║
║  Author    : Caner Taha Yilmaz                       ║
║  Since     : 14 Feb 2026                             ║
║                                                      ║
║  Responsibility:                                     ║
║  → Messages stack layout: controls chat navigation.  ║
║                                                      ║
║  Known Facts:                                        ║
║  • Layout files decide more than they show.          ║
║  • If headers disappear, start here.                 ║
║                                                      ║
║  If chat navigation feels cursed…                    ║
║  this file might know why.                           ║
╚══════════════════════════════════════════════════════╝
*/

import { Stack } from 'expo-router';
import Colors from '@/constants/colors';

export default function MessagesLayout() {
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
