/*
╔══════════════════════════════════════════════════════╗
║  ⚠  WARNING: DEVELOPER WAS HERE                      ║
╠══════════════════════════════════════════════════════╣
║  Project   : EduAI Marketplace                       ║
║  File      : (home)/[materialId].tsx                 ║
║  Author    : Caner Taha Yilmaz                       ║
║  Since     : 14 Feb 2026                             ║
║                                                      ║
║  Responsibility:                                     ║
║  → Material detail screen with interactions +        ║
║    download functionality.                           ║
║                                                      ║
║  Known Facts:                                        ║
║  • If material is undefined, check route params.     ║
║  • Toggle states always look simpler than they are.  ║
║                                                      ║
║  If something feels off…                             ║
║  console.log(materialId) before blaming React.       ║
╚══════════════════════════════════════════════════════╝
*/
import React, { useState } from 'react';
import { StyleSheet, View, Text, ScrollView, Image, Pressable } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { ThumbsUp, Share2, MessageCircle, Bookmark, Download, ChevronLeft, ChevronRight } from 'lucide-react-native';
import Colors from '@/constants/colors';
import { materials } from '@/mocks/data';

export default function MaterialDetailScreen() {
    const { materialId } = useLocalSearchParams<{ materialId: string }>();
    const [isLiked, setIsLiked] = useState(false);
    const [isBookmarked, setIsBookmarked] = useState(false);

    const material = materials.find(m => m.id === materialId);

    if (!material) {
        return (
            <View style={styles.container}>
                <Text style={styles.errorText}>Material nicht gefunden</Text>
            </View>
        );
    }

    return (
        <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
            <View style={styles.imageContainer}>
                <View style={styles.folderPreview}>
                    <View style={styles.folderIcon}>
                        <View style={styles.folderTab} />
                        <View style={styles.folderBody} />
                    </View>
                </View>
                <Pressable style={[styles.navButton, styles.navLeft]}>
                    <ChevronLeft size={24} color={Colors.white} />
                </Pressable>
                <Pressable style={[styles.navButton, styles.navRight]}>
                    <ChevronRight size={24} color={Colors.white} />
                </Pressable>
            </View>

            <View style={styles.content}>
                <View style={styles.header}>
                    <View style={styles.titleRow}>
                        <Text style={styles.title}>{material.title}</Text>
                        <View style={styles.actions}>
                            <Pressable
                                style={styles.actionButton}
                                onPress={() => setIsLiked(!isLiked)}
                            >
                                <ThumbsUp
                                    size={22}
                                    color={isLiked ? Colors.primary : Colors.textMuted}
                                    fill={isLiked ? Colors.primary : 'transparent'}
                                />
                            </Pressable>
                            <Pressable style={styles.actionButton}>
                                <Share2 size={22} color={Colors.textMuted} />
                            </Pressable>
                            <Pressable style={styles.actionButton}>
                                <MessageCircle size={22} color={Colors.textMuted} />
                            </Pressable>
                            <Pressable
                                style={styles.actionButton}
                                onPress={() => setIsBookmarked(!isBookmarked)}
                            >
                                <Bookmark
                                    size={22}
                                    color={isBookmarked ? Colors.primary : Colors.textMuted}
                                    fill={isBookmarked ? Colors.primary : 'transparent'}
                                />
                            </Pressable>
                        </View>
                    </View>

                    <View style={styles.authorRow}>
                        <Image
                            source={{ uri: material.author.avatar }}
                            style={styles.avatar}
                        />
                        <Text style={styles.authorName}>{material.author.name}</Text>
                        <View style={styles.verifiedBadge}>
                            <Text style={styles.verifiedText}>✓</Text>
                        </View>
                    </View>
                </View>

                <Text style={styles.description}>{material.fullDescription}</Text>

                <View style={styles.tagsContainer}>
                    {material.tags.map((tag, index) => (
                        <View key={index} style={styles.tag}>
                            <Text style={styles.tagText}>{tag}</Text>
                        </View>
                    ))}
                </View>

                <Pressable style={styles.downloadButton}>
                    <Download size={18} color={Colors.primary} />
                    <Text style={styles.downloadText}>Download der Dateien</Text>
                </Pressable>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.background,
    },
    errorText: {
        fontSize: 16,
        color: Colors.textMuted,
        textAlign: 'center',
        marginTop: 40,
    },
    imageContainer: {
        height: 240,
        backgroundColor: Colors.secondary,
        position: 'relative',
        justifyContent: 'center',
        alignItems: 'center',
    },
    folderPreview: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    folderIcon: {
        alignItems: 'flex-start',
    },
    folderTab: {
        width: 60,
        height: 20,
        backgroundColor: Colors.primary,
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
        marginBottom: -2,
        marginLeft: 10,
    },
    folderBody: {
        width: 140,
        height: 100,
        backgroundColor: Colors.primary,
        borderRadius: 8,
    },
    navButton: {
        position: 'absolute',
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: 'rgba(0,0,0,0.3)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    navLeft: {
        left: 16,
    },
    navRight: {
        right: 16,
    },
    content: {
        padding: 20,
    },
    header: {
        marginBottom: 16,
    },
    titleRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        marginBottom: 12,
    },
    title: {
        flex: 1,
        fontSize: 22,
        fontWeight: '700' as const,
        color: Colors.text,
        lineHeight: 28,
        marginRight: 12,
    },
    actions: {
        flexDirection: 'row',
        gap: 8,
    },
    actionButton: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: Colors.white,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
    },
    authorRow: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    avatar: {
        width: 32,
        height: 32,
        borderRadius: 16,
        marginRight: 10,
    },
    authorName: {
        fontSize: 15,
        fontWeight: '500' as const,
        color: Colors.text,
    },
    verifiedBadge: {
        width: 18,
        height: 18,
        borderRadius: 9,
        backgroundColor: Colors.primary,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 6,
    },
    verifiedText: {
        color: Colors.white,
        fontSize: 10,
        fontWeight: '700' as const,
    },
    description: {
        fontSize: 15,
        lineHeight: 24,
        color: Colors.textLight,
        marginBottom: 20,
    },
    tagsContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 8,
        marginBottom: 24,
    },
    tag: {
        backgroundColor: Colors.tag,
        paddingHorizontal: 14,
        paddingVertical: 8,
        borderRadius: 20,
    },
    tagText: {
        fontSize: 13,
        color: Colors.tagText,
        fontWeight: '500' as const,
    },
    downloadButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.white,
        borderWidth: 1,
        borderColor: Colors.primary,
        borderRadius: 8,
        paddingVertical: 14,
        gap: 8,
    },
    downloadText: {
        fontSize: 15,
        fontWeight: '600' as const,
        color: Colors.primary,
    },
});
