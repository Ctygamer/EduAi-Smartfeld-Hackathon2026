/**
 * -------------------------------------------------------------
 * Project: EduAI Marketplace
 * File: (home)/_layout.tsx
 * Author: Caner Taha Yilmaz
 * Created: 14 Feb 2026
 * Description: Stack layout configuration for the Home tab,
 * including navigation and header styling for material screens.
 * -------------------------------------------------------------
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
