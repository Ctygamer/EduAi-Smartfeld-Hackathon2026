/*
╔══════════════════════════════════════════════════════╗
║  ⚠  WARNING: DEVELOPER WAS HERE                      ║
╠══════════════════════════════════════════════════════╣
║  Project   : EduAI Marketplace                       ║
║  File      : app/_layout.tsx                         ║
║  Author    : Caner Taha Yilmaz                       ║
║  Since     : 14 Feb 2026                             ║
║                                                      ║
║  Responsibility:                                     ║
║  → Root layout: wires providers + global navigation. ║
║                                                      ║
║  Known Facts:                                        ║
║  • If this breaks, everything breaks.                ║
║  • Yes, the order of providers matters.              ║
║                                                      ║
║  If something behaves weird…                         ║
║  restart Metro. Then question your life choices.     ║
╚══════════════════════════════════════════════════════╝
*/
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import React, { useEffect } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import Colors from "@/constants/colors";

SplashScreen.preventAutoHideAsync();

const queryClient = new QueryClient();

function RootLayoutNav() {
    return (
        <Stack screenOptions={{ headerBackTitle: "Zurück" }}>
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
            <Stack.Screen
                name="login"
                options={{
                    headerShown: false,
                    presentation: 'fullScreenModal',
                }}
            />
            <Stack.Screen
                name="register"
                options={{
                    headerShown: true,
                    title: 'Registrieren',
                    headerTintColor: Colors.primary,
                    headerStyle: { backgroundColor: 'transparent' },
                    headerTransparent: true,
                }}
            />
        </Stack>
    );
}

export default function RootLayout() {
    useEffect(() => {
        SplashScreen.hideAsync();
    }, []);

    return (
        <QueryClientProvider client={queryClient}>
            <GestureHandlerRootView style={{ flex: 1 }}>
                <RootLayoutNav />
            </GestureHandlerRootView>
        </QueryClientProvider>
    );
}
