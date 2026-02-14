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
