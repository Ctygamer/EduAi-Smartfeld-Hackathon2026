/**
 * -------------------------------------------------------------
 * Project: EduAI Marketplace
 * File: login.tsx
 * Author: Caner Taha Yilmaz
 * Created: 14 Feb 2026
 * Description: Login screen handling user authentication input,
 * navigation to registration, and redirect to the main tab layout.
 * -------------------------------------------------------------
 */
import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, Pressable, KeyboardAvoidingView, Platform, ScrollView, Image } from 'react-native';
import { useRouter } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Colors from '@/constants/colors';

export default function LoginScreen() {
    const router = useRouter();
    const insets = useSafeAreaInsets();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        console.log('Login attempt:', { email, password });
        router.replace('/(tabs)');
    };

    const handleRegister = () => {
        router.push('/register');
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
                    contentContainerStyle={[styles.scrollContent, { paddingTop: insets.top + 60 }]}
                    keyboardShouldPersistTaps="handled"
                >
                    <View style={styles.logoContainer}>
                        <Image
                            source={require("../assets/images/Smartfeld_Logo_RGB_150dpi.png")}
                            style={styles.logo}
                            resizeMode="contain"
                        />
                    </View>

                    <View style={styles.card}>
                        <Text style={styles.welcomeText}>Willkommen zurück</Text>

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
                                testID="email-input"
                            />
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
                                testID="password-input"
                            />
                        </View>

                        <Pressable onPress={handleRegister}>
                            <Text style={styles.registerLink}>
                                Du hast noch keinen Account? <Text style={styles.registerLinkBold}>Registrieren</Text>
                            </Text>
                        </Pressable>

                        <Pressable
                            style={({ pressed }) => [styles.button, pressed && styles.buttonPressed]}
                            onPress={handleLogin}
                            testID="login-button"
                        >
                            <Text style={styles.buttonText}>Anmelden</Text>
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
    welcomeText: {
        fontSize: 22,
        fontWeight: '600' as const,
        color: Colors.text,
        textAlign: 'center',
        marginBottom: 24,
    },
    inputContainer: {
        marginBottom: 16,
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
    registerLink: {
        fontSize: 14,
        color: Colors.textLight,
        textAlign: 'center',
        marginTop: 8,
        marginBottom: 20,
    },
    registerLinkBold: {
        color: Colors.primary,
        fontWeight: '600' as const,
        textDecorationLine: 'underline',
    },
    button: {
        backgroundColor: Colors.primary,
        borderRadius: 8,
        paddingVertical: 16,
        alignItems: 'center',
    },
    buttonPressed: {
        opacity: 0.9,
        transform: [{ scale: 0.98 }],
    },
    buttonText: {
        color: Colors.white,
        fontSize: 16,
        fontWeight: '600' as const,
    },
});
