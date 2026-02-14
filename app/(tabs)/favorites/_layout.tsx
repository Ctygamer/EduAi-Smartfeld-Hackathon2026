/**
 * -------------------------------------------------------------
 * Project: EduAI Marketplace
 * File: (favorites)/_layout.tsx
 * Author: Caner Taha Yilmaz
 * Created: 14 Feb 2026
 * Description: Stack layout configuration for the Favorites section,
 * managing navigation and screen structure for saved materials.
 * -------------------------------------------------------------
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
