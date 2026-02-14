/****
 * -------------------------------------------------------------
 * Project: EduAI Marketplace
 * File: (profile)/_layout.tsx
 * Author: Caner Taha Yilmaz
 * Created: 14 Feb 2026
 * Description: Stack layout configuration for the Profile section,
 * handling navigation and screen structure for user profile views.
 * -------------------------------------------------------------
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
