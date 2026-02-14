/**
 * -------------------------------------------------------------
 * Project: EduAI Marketplace
 * File: MaterialCard.tsx
 * Author: Caner Taha Yilmaz
 * Created: 14 Feb 2026
 * Description: Reusable card component displaying teaching material
 * preview information including title, author, tags, and interaction
 * statistics (likes, comments, bookmarks).
 * -------------------------------------------------------------
 */
import React from 'react';
import { StyleSheet, View, Text, Image, Pressable } from 'react-native';
import { Heart, MessageCircle, Bookmark } from 'lucide-react-native';
import Colors from '@/constants/colors';
import { Material } from '@/types';

interface MaterialCardProps {
    material: Material;
    onPress: () => void;
}

export default function MaterialCard({ material, onPress }: MaterialCardProps) {
    return (
        <Pressable
            style={({ pressed }) => [styles.card, pressed && styles.cardPressed]}
            onPress={onPress}
            testID={`material-card-${material.id}`}
        >
            {material.image && (
                <Image source={{ uri: material.image }} style={styles.image} />
            )}
            <View style={styles.content}>
                <Text style={styles.title} numberOfLines={2}>{material.title}</Text>
                <Text style={styles.description} numberOfLines={2}>{material.shortDescription}</Text>

                <View style={styles.authorRow}>
                    <Image
                        source={{ uri: material.author.avatar || 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=50&h=50&fit=crop' }}
                        style={styles.avatar}
                    />
                    <Text style={styles.authorName}>{material.author.name}</Text>
                </View>

                <View style={styles.tagsRow}>
                    {material.tags.slice(0, 3).map((tag, index) => (
                        <View key={index} style={styles.tag}>
                            <Text style={styles.tagText}>{tag}</Text>
                        </View>
                    ))}
                </View>

                <View style={styles.statsRow}>
                    <View style={styles.stat}>
                        <Heart
                            size={16}
                            color={material.isLiked ? Colors.primary : Colors.textMuted}
                            fill={material.isLiked ? Colors.primary : 'transparent'}
                        />
                        <Text style={styles.statText}>{material.likes}</Text>
                    </View>
                    <View style={styles.stat}>
                        <MessageCircle size={16} color={Colors.textMuted} />
                        <Text style={styles.statText}>{material.comments}</Text>
                    </View>
                    <Bookmark
                        size={16}
                        color={material.isBookmarked ? Colors.primary : Colors.textMuted}
                        fill={material.isBookmarked ? Colors.primary : 'transparent'}
                        style={styles.bookmark}
                    />
                </View>
            </View>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: Colors.white,
        borderRadius: 16,
        marginHorizontal: 16,
        marginVertical: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.08,
        shadowRadius: 8,
        elevation: 3,
        overflow: 'hidden',
    },
    cardPressed: {
        opacity: 0.95,
        transform: [{ scale: 0.99 }],
    },
    image: {
        width: '100%',
        height: 140,
    },
    content: {
        padding: 16,
    },
    title: {
        fontSize: 18,
        fontWeight: '700' as const,
        color: Colors.text,
        marginBottom: 8,
        lineHeight: 24,
    },
    description: {
        fontSize: 14,
        color: Colors.textLight,
        lineHeight: 20,
        marginBottom: 12,
    },
    authorRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 12,
    },
    avatar: {
        width: 24,
        height: 24,
        borderRadius: 12,
        marginRight: 8,
    },
    authorName: {
        fontSize: 13,
        color: Colors.textMuted,
    },
    tagsRow: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 8,
        marginBottom: 12,
    },
    tag: {
        backgroundColor: Colors.tag,
        paddingHorizontal: 12,
        paddingVertical: 6,
        borderRadius: 16,
    },
    tagText: {
        fontSize: 12,
        color: Colors.tagText,
        fontWeight: '500' as const,
    },
    statsRow: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: 8,
        borderTopWidth: 1,
        borderTopColor: Colors.border,
    },
    stat: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 16,
    },
    statText: {
        fontSize: 13,
        color: Colors.textMuted,
        marginLeft: 4,
    },
    bookmark: {
        marginLeft: 'auto',
    },
});
