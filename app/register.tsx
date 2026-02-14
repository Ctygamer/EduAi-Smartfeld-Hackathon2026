import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, Pressable, KeyboardAvoidingView, Platform, ScrollView, Image } from 'react-native';
import { useRouter } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Colors from '@/constants/colors';

export default function RegisterScreen() {
    const router = useRouter();
    const insets = useSafeAreaInsets();
    const [email, setEmail] = useState('');
    const [school, setSchool] = useState('');
    const [canton, setCanton] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleRegister = () => {
        console.log('Register attempt:', { email, school, canton, password });
        router.replace('/(tabs)');
    };

    return (
        <LinearGradient
            colors={[Colors.backgroundGradientStart, Colors.secondary, Colors.backgroundGradientEnd]}
            style={styles.gradient}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
        >
            <KeyboardAvoidingView
                style={styles.container}
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            >
                <ScrollView
                    contentContainerStyle={[styles.scrollContent, { paddingTop: insets.top + 20 }]}
                    keyboardShouldPersistTaps="handled"
                    showsVerticalScrollIndicator={false}
                >
                    <View style={styles.logoContainer}>
                        <Image
                            source={require("../assets/images/Smartfeld_Logo_RGB_150dpi.png")}
                            style={styles.logo}
                            resizeMode="contain"
                        />
                    </View>


                    <View style={styles.card}>
                        <Text style={styles.title}>Erstelle einen Account</Text>

                        <View style={styles.inputContainer}>
                            <Text style={styles.label}>E-Mail</Text>
                            <TextInput
                                style={styles.input}
                                placeholder="E-Mail"
                                placeholderTextColor={Colors.textMuted}
                                value={email}
                                onChangeText={setEmail}
                                keyboardType="email-address"
                                autoCapitalize="none"
                                testID="register-email-input"
                            />
                        </View>

                        <View style={styles.row}>
                            <View style={[styles.inputContainer, styles.halfInput]}>
                                <Text style={styles.label}>Schule</Text>
                                <TextInput
                                    style={styles.input}
                                    placeholder="Schule"
                                    placeholderTextColor={Colors.textMuted}
                                    value={school}
                                    onChangeText={setSchool}
                                    testID="school-input"
                                />
                            </View>
                            <View style={[styles.inputContainer, styles.halfInput]}>
                                <Text style={styles.label}>Kanton</Text>
                                <TextInput
                                    style={styles.input}
                                    placeholder="Kanton"
                                    placeholderTextColor={Colors.textMuted}
                                    value={canton}
                                    onChangeText={setCanton}
                                    testID="canton-input"
                                />
                            </View>
                        </View>

                        <View style={styles.inputContainer}>
                            <Text style={styles.label}>Passwort</Text>
                            <TextInput
                                style={styles.input}
                                placeholder="Passwort"
                                placeholderTextColor={Colors.textMuted}
                                value={password}
                                onChangeText={setPassword}
                                secureTextEntry
                                testID="register-password-input"
                            />
                        </View>

                        <View style={styles.inputContainer}>
                            <Text style={styles.label}>Passwort bestätigen</Text>
                            <TextInput
                                style={styles.input}
                                placeholder="Passwort bestätigen"
                                placeholderTextColor={Colors.textMuted}
                                value={confirmPassword}
                                onChangeText={setConfirmPassword}
                                secureTextEntry
                                testID="confirm-password-input"
                            />
                        </View>

                        <Pressable
                            style={({ pressed }) => [styles.button, pressed && styles.buttonPressed]}
                            onPress={handleRegister}
                            testID="register-button"
                        >
                            <Text style={styles.buttonText}>Account erstellen</Text>
                        </Pressable>
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    gradient: {
        flex: 1,
    },
    container: {
        flex: 1,
    },
    scrollContent: {
        flexGrow: 1,
        justifyContent: 'center',
        paddingHorizontal: 24,
        paddingBottom: 40,
    },
    logoContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 32,
    },
    logo: {
        width: 220,
        height: 70,
    },
    card: {
        backgroundColor: Colors.white,
        borderRadius: 20,
        padding: 28,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 12,
        elevation: 5,
    },
    title: {
        fontSize: 22,
        fontWeight: '600' as const,
        color: Colors.text,
        textAlign: 'center',
        marginBottom: 24,
    },
    inputContainer: {
        marginBottom: 16,
    },
    row: {
        flexDirection: 'row',
        gap: 12,
    },
    halfInput: {
        flex: 1,
    },
    label: {
        fontSize: 14,
        color: Colors.textLight,
        marginBottom: 6,
    },
    input: {
        backgroundColor: Colors.inputBackground,
        borderRadius: 8,
        paddingHorizontal: 16,
        paddingVertical: 14,
        fontSize: 16,
        color: Colors.text,
        borderBottomWidth: 1,
        borderBottomColor: Colors.border,
    },
    button: {
        backgroundColor: Colors.secondary,
        borderRadius: 8,
        paddingVertical: 16,
        alignItems: 'center',
        marginTop: 8,
    },
    buttonPressed: {
        opacity: 0.9,
        transform: [{ scale: 0.98 }],
    },
    buttonText: {
        color: Colors.primary,
        fontSize: 16,
        fontWeight: '600' as const,
    },
});
