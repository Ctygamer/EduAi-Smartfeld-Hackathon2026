/****
 * -------------------------------------------------------------
 * Project: EduAI Marketplace
 * File: (messages)/_layout.tsx
 * Author: Caner Taha Yilmaz
 * Created: 14 Feb 2026
 * Description: Stack layout configuration for the Messages section,
 * managing navigation and screen structure for chat and communication.
 * -------------------------------------------------------------
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
