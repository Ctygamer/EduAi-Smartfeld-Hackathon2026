/*
╔══════════════════════════════════════════════════════╗
║  ⚠  WARNING: DEVELOPER WAS HERE                      ║
╠══════════════════════════════════════════════════════╣
║  Project   : EduAI Marketplace                       ║
║  File      : (profile)/_layout.tsx                   ║
║  Author    : Caner Taha Yilmaz                       ║
║  Since     : 14 Feb 2026                             ║
║                                                      ║
║  Responsibility:                                     ║
║  → Profile stack layout: controls navigation flow.   ║
║                                                      ║
║  Known Facts:                                        ║
║  • Layout files decide more than you think.          ║
║  • If headers vanish, check this first.              ║
║                                                      ║
║  If navigation feels haunted…                        ║
║  this file might be involved.                        ║
╚══════════════════════════════════════════════════════╝
*/

import { Stack } from 'expo-router';
import Colors from '@/constants/colors';

export default function ProfileLayout() {
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
