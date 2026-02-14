/**
 * -------------------------------------------------------------
 * Project: EduAI Marketplace
 * File: (profile)/index.tsx
 * Author: Caner Taha Yilmaz
 * Created: 14 Feb 2026
 * Description: Profile screen displaying user information, statistics,
 * personal materials overview, and account actions.
 * -------------------------------------------------------------
 */
import React from 'react';
import { StyleSheet, View, Text, Image, ScrollView, Pressable } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { Settings, LogOut, ChevronRight, BookOpen, Users, School } from 'lucide-react-native';
import Colors from '@/constants/colors';
import { currentUser, materials } from '@/mocks/data';

export default function ProfileScreen() {
    const insets = useSafeAreaInsets();
    const router = useRouter();

    const userMaterials = materials.filter(m => m.author.id === currentUser.id);

    const handleLogout = () => {
        router.replace('/login');
    };

    const menuItems = [
        { icon: BookOpen, label: 'Meine Materialien', value: `${userMaterials.length}` },
        { icon: Users, label: 'Gruppen', value: '3' },
        { icon: School, label: 'Lehrpersonen', value: '12' },
        { icon: Settings, label: 'Einstellungen', value: '' },
    ];

    return (
        <ScrollView
            style={[styles.container, { paddingTop: insets.top }]}
            showsVerticalScrollIndicator={false}
        >
            <View style={styles.header}>
                <Image
                    source={{ uri: currentUser.avatar }}
                    style={styles.avatar}
                />
                <Text style={styles.name}>{currentUser.name}</Text>
                <Text style={styles.email}>{currentUser.email}</Text>

                <View style={styles.schoolInfo}>
                    <School size={16} color={Colors.textMuted} />
                    <Text style={styles.schoolText}>{currentUser.school}</Text>
                </View>
                <Text style={styles.canton}>{currentUser.canton}</Text>
            </View>

            <View style={styles.statsRow}>
                <View style={styles.stat}>
                    <Text style={styles.statValue}>{userMaterials.length}</Text>
                    <Text style={styles.statLabel}>Beiträge</Text>
                </View>
                <View style={styles.statDivider} />
                <View style={styles.stat}>
                    <Text style={styles.statValue}>156</Text>
                    <Text style={styles.statLabel}>Likes</Text>
                </View>
                <View style={styles.statDivider} />
                <View style={styles.stat}>
                    <Text style={styles.statValue}>42</Text>
                    <Text style={styles.statLabel}>Follower</Text>
                </View>
            </View>

            <View style={styles.menu}>
                {menuItems.map((item, index) => (
                    <Pressable
                        key={index}
                        style={({ pressed }) => [styles.menuItem, pressed && styles.menuItemPressed]}
                    >
                        <View style={styles.menuItemLeft}>
                            <item.icon size={22} color={Colors.primary} />
                            <Text style={styles.menuItemLabel}>{item.label}</Text>
                        </View>
                        <View style={styles.menuItemRight}>
                            {item.value ? (
                                <Text style={styles.menuItemValue}>{item.value}</Text>
                            ) : null}
                            <ChevronRight size={20} color={Colors.textMuted} />
                        </View>
                    </Pressable>
                ))}
            </View>

            <Pressable
                style={({ pressed }) => [styles.logoutButton, pressed && styles.logoutButtonPressed]}
                onPress={handleLogout}
            >
                <LogOut size={20} color={Colors.error} />
                <Text style={styles.logoutText}>Abmelden</Text>
            </Pressable>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.background,
    },
    header: {
        alignItems: 'center',
        paddingVertical: 24,
        paddingHorizontal: 20,
    },
    avatar: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginBottom: 16,
        borderWidth: 3,
        borderColor: Colors.primary,
    },
    name: {
        fontSize: 24,
        fontWeight: '700' as const,
        color: Colors.text,
        marginBottom: 4,
    },
    email: {
        fontSize: 15,
        color: Colors.textMuted,
        marginBottom: 12,
    },
    schoolInfo: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 6,
    },
    schoolText: {
        fontSize: 14,
        color: Colors.textLight,
    },
    canton: {
        fontSize: 13,
        color: Colors.textMuted,
        marginTop: 4,
    },
    statsRow: {
        flexDirection: 'row',
        backgroundColor: Colors.white,
        marginHorizontal: 16,
        borderRadius: 16,
        paddingVertical: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.06,
        shadowRadius: 8,
        elevation: 2,
    },
    stat: {
        flex: 1,
        alignItems: 'center',
    },
    statValue: {
        fontSize: 22,
        fontWeight: '700' as const,
        color: Colors.primary,
        marginBottom: 4,
    },
    statLabel: {
        fontSize: 13,
        color: Colors.textMuted,
    },
    statDivider: {
        width: 1,
        backgroundColor: Colors.border,
    },
    menu: {
        backgroundColor: Colors.white,
        marginHorizontal: 16,
        marginTop: 20,
        borderRadius: 16,
        overflow: 'hidden',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.06,
        shadowRadius: 8,
        elevation: 2,
    },
    menuItem: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
        paddingVertical: 16,
        borderBottomWidth: 1,
        borderBottomColor: Colors.border,
    },
    menuItemPressed: {
        backgroundColor: Colors.inputBackground,
    },
    menuItemLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 12,
    },
    menuItemLabel: {
        fontSize: 16,
        color: Colors.text,
    },
    menuItemRight: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
    },
    menuItemValue: {
        fontSize: 15,
        color: Colors.textMuted,
    },
    logoutButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 8,
        marginHorizontal: 16,
        marginTop: 20,
        marginBottom: 40,
        paddingVertical: 16,
        backgroundColor: Colors.white,
        borderRadius: 12,
        borderWidth: 1,
        borderColor: Colors.error,
    },
    logoutButtonPressed: {
        backgroundColor: '#FFF5F5',
    },
    logoutText: {
        fontSize: 16,
        fontWeight: '600' as const,
        color: Colors.error,
    },
});
