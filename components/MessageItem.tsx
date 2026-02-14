import React from 'react';
import { StyleSheet, View, Text, Image, Pressable } from 'react-native';
import { ChevronRight } from 'lucide-react-native';
import Colors from '@/constants/colors';
import { Message } from '@/types';

interface MessageItemProps {
    message: Message;
    onPress: () => void;
}

export default function MessageItem({ message, onPress }: MessageItemProps) {
    return (
        <Pressable
            style={({ pressed }) => [styles.container, pressed && styles.pressed]}
            onPress={onPress}
        >
            <Image
                source={{ uri: message.sender.avatar || 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=50&h=50&fit=crop' }}
                style={styles.avatar}
            />
            <View style={styles.content}>
                <View style={styles.topRow}>
                    <Text style={styles.label}>{message.isGroup ? 'Gruppe' : 'GBS Riethüsli'}</Text>
                    <View style={styles.rightSide}>
                        {message.unreadCount > 0 && (
                            <View style={styles.badge}>
                                <Text style={styles.badgeText}>{message.unreadCount}</Text>
                            </View>
                        )}
                        <Text style={styles.chatLabel}>Chat</Text>
                        <ChevronRight size={16} color={Colors.white} />
                    </View>
                </View>
                <Text style={styles.name} numberOfLines={1}>
                    {message.isGroup ? message.groupName : message.sender.name}
                </Text>
                <Text style={styles.preview} numberOfLines={1}>{message.preview}</Text>
            </View>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 12,
        paddingHorizontal: 16,
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(255,255,255,0.1)',
    },
    pressed: {
        backgroundColor: 'rgba(255,255,255,0.05)',
    },
    avatar: {
        width: 40,
        height: 40,
        borderRadius: 20,
        marginRight: 12,
    },
    content: {
        flex: 1,
    },
    topRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 2,
    },
    label: {
        fontSize: 10,
        color: 'rgba(255,255,255,0.6)',
        textTransform: 'uppercase',
    },
    rightSide: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    badge: {
        backgroundColor: Colors.primary,
        borderRadius: 10,
        minWidth: 18,
        height: 18,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 8,
    },
    badgeText: {
        color: Colors.white,
        fontSize: 11,
        fontWeight: '600' as const,
    },
    chatLabel: {
        fontSize: 12,
        color: Colors.white,
        marginRight: 4,
    },
    name: {
        fontSize: 14,
        fontWeight: '600' as const,
        color: Colors.white,
        marginBottom: 2,
    },
    preview: {
        fontSize: 12,
        color: 'rgba(255,255,255,0.7)',
    },
});
