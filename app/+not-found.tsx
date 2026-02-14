import { Link, Stack } from 'expo-router';
import { StyleSheet, View, Text } from 'react-native';
import Colors from '@/constants/colors';

export default function NotFoundScreen() {
    return (
        <>
            <Stack.Screen options={{ title: 'Seite nicht gefunden' }} />
            <View style={styles.container}>
                <Text style={styles.title}>Diese Seite existiert nicht.</Text>
                <Link href="/(tabs)/(home)" style={styles.link}>
                    <Text style={styles.linkText}>Zurück zur Startseite</Text>
                </Link>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
        backgroundColor: Colors.background,
    },
    title: {
        fontSize: 20,
        fontWeight: '600' as const,
        color: Colors.text,
        marginBottom: 16,
    },
    link: {
        marginTop: 15,
        paddingVertical: 15,
    },
    linkText: {
        fontSize: 16,
        color: Colors.primary,
        fontWeight: '500' as const,
    },
});
