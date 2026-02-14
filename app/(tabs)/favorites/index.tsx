/**
 * -------------------------------------------------------------
 * Project: EduAI Marketplace
 * File: (favorites)/index.tsx
 * Author: Caner Taha Yilmaz
 * Created: 14 Feb 2026
 * Description: Favorites screen displaying all bookmarked teaching
 * materials with navigation to detailed material views.
 * -------------------------------------------------------------
 */
import React, { useState } from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';
import { useRouter } from 'expo-router';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Colors from '@/constants/colors';
import { materials } from '@/mocks/data';
import MaterialCard from '@/components/MaterialCard';

export default function FavoritesScreen() {
    const router = useRouter();
    const insets = useSafeAreaInsets();

    const favoriteMaterials = materials.filter(m => m.isBookmarked);

    const handleMaterialPress = (id: string) => {
        router.push(`/(tabs)/(home)/${id}`);
    };

    return (
        <View style={[styles.container, { paddingTop: insets.top }]}>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>Favoriten</Text>
            </View>

            {favoriteMaterials.length > 0 ? (
                <FlatList
                    data={favoriteMaterials}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <MaterialCard
                            material={item}
                            onPress={() => handleMaterialPress(item.id)}
                        />
                    )}
                    contentContainerStyle={styles.listContent}
                    showsVerticalScrollIndicator={false}
                />
            ) : (
                <View style={styles.emptyState}>
                    <Text style={styles.emptyIcon}>❤️</Text>
                    <Text style={styles.emptyTitle}>Keine Favoriten</Text>
                    <Text style={styles.emptyText}>
                        Speichere Materialien als Favoriten, um sie hier wiederzufinden.
                    </Text>
                </View>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.background,
    },
    header: {
        paddingHorizontal: 20,
        paddingVertical: 16,
        borderBottomWidth: 1,
        borderBottomColor: Colors.border,
    },
    headerTitle: {
        fontSize: 24,
        fontWeight: '700' as const,
        color: Colors.text,
    },
    listContent: {
        paddingTop: 8,
        paddingBottom: 24,
    },
    emptyState: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 40,
    },
    emptyIcon: {
        fontSize: 48,
        marginBottom: 16,
    },
    emptyTitle: {
        fontSize: 20,
        fontWeight: '600' as const,
        color: Colors.text,
        marginBottom: 8,
    },
    emptyText: {
        fontSize: 15,
        color: Colors.textMuted,
        textAlign: 'center',
        lineHeight: 22,
    },
});
