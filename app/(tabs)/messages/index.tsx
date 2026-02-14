/**
 * -------------------------------------------------------------
 * Project: EduAI Marketplace
 * File: (messages)/index.tsx
 * Author: Caner Taha Yilmaz
 * Created: 14 Feb 2026
 * Description: Messages screen displaying user conversations and
 * integrated EduAI assistant interaction area.
 * -------------------------------------------------------------
 */
import React, { useState } from 'react';
import { StyleSheet, View, Text, FlatList, Pressable, Image } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Send, ImageIcon, Code, Mic } from 'lucide-react-native';
import Colors from '@/constants/colors';
import { messages } from '@/mocks/data';
import MessageItem from '@/components/MessageItem';

export default function MessagesScreen() {
    const insets = useSafeAreaInsets();


    return (
        <View style={[styles.container, { paddingTop: insets.top }]}>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>Nachrichten</Text>
            </View>

            <View style={styles.messagesContainer}>
                <FlatList
                    data={messages}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <MessageItem
                            message={item}
                            onPress={() => console.log('Open chat:', item.id)}
                        />
                    )}
                    showsVerticalScrollIndicator={false}
                />
            </View>

            <View style={styles.eduAiSection}>
                <View style={styles.eduAiHeader}>
                <View style={styles.eduAiLogo}>
                    <Image
                        source={require("../../../assets/images/logocrop.png")}
                        style={styles.logo}
                        resizeMode="contain"
                    />
                </View>
                    <Text style={styles.eduAiTitle}>EduAI</Text>
                </View>

                <View style={styles.chatArea}>
                    <Text style={styles.placeholder}>Was möchtest du wissen?</Text>
                </View>

                <View style={styles.inputRow}>
                    <Pressable style={styles.inputIcon}>
                        <ImageIcon size={20} color={Colors.textMuted} />
                    </Pressable>
                    <Pressable style={styles.inputIcon}>
                        <Code size={20} color={Colors.textMuted} />
                    </Pressable>
                    <Pressable style={styles.inputIcon}>
                        <Mic size={20} color={Colors.textMuted} />
                    </Pressable>
                    <View style={styles.spacer} />
                    <Pressable style={styles.sendButton}>
                        <Send size={18} color={Colors.white} />
                    </Pressable>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.background,
    },
    header: {
        backgroundColor: Colors.primary,
        paddingHorizontal: 20,
        paddingVertical: 16,
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
    },
    headerTitle: {
        fontSize: 18,
        fontWeight: '600' as const,
        color: Colors.white,
        textAlign: 'center',
    },
    messagesContainer: {
        flex: 1,
        backgroundColor: Colors.primary,
    },
    eduAiSection: {
        backgroundColor: Colors.white,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        padding: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: -2 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 5,
    },
    eduAiHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 16,
        marginLeft: -60,
    },
    eduAiLogo: {
        width: 80,
        height: 32,
        marginRight: 5,
    },
    logo: {
        width: 80,
        height: 32,
    },
    eduAiTitle: {
        fontSize: 18,
        fontWeight: '700' as const,
        color: Colors.text,
    },
    chatArea: {
        minHeight: 60,
        marginBottom: 16,
    },
    placeholder: {
        fontSize: 15,
        color: Colors.textMuted,
    },
    inputRow: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: 12,
        borderTopWidth: 1,
        borderTopColor: Colors.border,
    },
    inputIcon: {
        padding: 8,
        marginRight: 8,
    },
    spacer: {
        flex: 1,
    },
    sendButton: {
        width: 36,
        height: 36,
        borderRadius: 18,
        backgroundColor: Colors.primary,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
