/*
╔══════════════════════════════════════════════════════╗
║  ⚠  WARNING: DEVELOPER WAS HERE                      ║
╠══════════════════════════════════════════════════════╣
║  Project   : EduAI Marketplace                       ║
║  File      : (create)/_layout.tsx                    ║
║  Author    : Caner Taha Yilmaz                       ║
║  Since     : 14 Feb 2026                             ║
║                                                      ║
║  Responsibility:                                     ║
║  → Create stack layout: controls publishing flow.    ║
║                                                      ║
║  Known Facts:                                        ║
║  • Layout files decide more than they show.          ║
║  • If headers disappear, start here.                 ║
║                                                      ║
║  If create navigation feels broken…                  ║
║  this file probably knows why.                       ║
╚══════════════════════════════════════════════════════╝
*/

import { Stack } from 'expo-router';
import Colors from '@/constants/colors';

export default function CreateLayout() {
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
