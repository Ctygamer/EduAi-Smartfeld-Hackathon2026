/*
╔══════════════════════════════════════════════════════╗
║  ⚠  WARNING: DEVELOPER WAS HERE                      ║
╠══════════════════════════════════════════════════════╣
║  Project   : EduAI Marketplace                       ║
║  File      : (home)/_layout.tsx                      ║
║  Author    : Caner Taha Yilmaz                       ║
║  Since     : 14 Feb 2026                             ║
║                                                      ║
║  Responsibility:                                     ║
║  → Home stack layout: controls feed navigation flow. ║
║                                                      ║
║  Known Facts:                                        ║
║  • Layout files decide more than they show.          ║
║  • If headers vanish, this is suspect #1.            ║
║                                                      ║
║  If navigation feels broken…                         ║
║  this file probably knows why.                       ║
╚══════════════════════════════════════════════════════╝
*/
import { Stack } from 'expo-router';
import Colors from '@/constants/colors';

export default function HomeLayout() {
    return (
        <Stack
            screenOptions={{
                headerShown: false,
                contentStyle: { backgroundColor: Colors.background },
            }}
        >
            <Stack.Screen name="index" />
            <Stack.Screen
                name="[materialId]"
                options={{
                    headerShown: true,
                    headerTitle: '',
                    headerBackTitle: 'Zurück',
                    headerTintColor: Colors.primary,
                    headerStyle: { backgroundColor: Colors.background },
                }}
            />
        </Stack>
    );
}
