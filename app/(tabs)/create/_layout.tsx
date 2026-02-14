/****
 * -------------------------------------------------------------
 * Project: EduAI Marketplace
 * File: (create)/_layout.tsx
 * Author: Caner Taha Yilmaz
 * Created: 14 Feb 2026
 * Description: Stack layout configuration for the Create section,
 * handling screen structure and navigation settings.
 * -------------------------------------------------------------
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
