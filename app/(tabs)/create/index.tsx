/*
╔══════════════════════════════════════════════════════╗
║  ⚠  WARNING: DEVELOPER WAS HERE                      ║
╠══════════════════════════════════════════════════════╣
║  Project   : EduAI Marketplace                       ║
║  File      : (create)/index.tsx                      ║
║  Author    : Caner Taha Yilmaz                       ║
║  Since     : 14 Feb 2026                             ║
║                                                      ║
║  Responsibility:                                     ║
║  → Create screen: publishes new teaching materials.  ║
║                                                      ║
║  Known Facts:                                        ║
║  • Users forget required fields.                     ║
║  • File uploads look easy, but rarely are.           ║
║                                                      ║
║  If publish does nothing…                            ║
║  check handlePublish before blaming React.           ║
╚══════════════════════════════════════════════════════╝
*/
import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, ScrollView, Pressable, Image } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { Upload } from 'lucide-react-native';
import Colors from '@/constants/colors';

export default function CreatePostScreen() {
    const insets = useSafeAreaInsets();
    const [title, setTitle] = useState('');
    const [shortText, setShortText] = useState('');
    const [fullText, setFullText] = useState('');
    const [date, setDate] = useState('');
    const [tags, setTags] = useState('');

    const handlePublish = () => {
        console.log('Publishing:', { title, shortText, fullText, date, tags });
    };

    return (
        <LinearGradient
            colors={[Colors.backgroundGradientStart, Colors.backgroundGradientEnd]}
            style={styles.gradient}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
        >
            <ScrollView
                style={styles.container}
                contentContainerStyle={[styles.content, { paddingTop: insets.top + 16 }]}
                showsVerticalScrollIndicator={false}
            >
                <View style={styles.header}>
                    <View style={styles.logoContainer}>
                    <Image
                        source={require("../../../assets/images/logocrop.png")}
                        style={styles.logo}
                        resizeMode="contain"
                    />
                    <View style={styles.logoText}>
                            <Text style={styles.logoTitle}>Smartfeld</Text>
                            <Text style={styles.logoSubtitle}>EduAI</Text>
                        </View>
                    </View>
                </View>

                <View style={styles.card}>
                    <View style={styles.tabContainer}>
                        <View style={styles.activeTab}>
                            <Text style={styles.activeTabText}>Beitrag</Text>
                        </View>
                    </View>

                    <View style={styles.form}>
                        <View style={styles.inputGroup}>
                            <Text style={styles.label}>Titel</Text>
                            <TextInput
                                style={styles.input}
                                placeholder="Titel"
                                placeholderTextColor={Colors.textMuted}
                                value={title}
                                onChangeText={setTitle}
                            />
                        </View>

                        <View style={styles.inputGroup}>
                            <Text style={styles.label}>Kurzer Post Text</Text>
                            <TextInput
                                style={styles.input}
                                placeholder="Kurzer Post Text"
                                placeholderTextColor={Colors.textMuted}
                                value={shortText}
                                onChangeText={setShortText}
                            />
                        </View>

                        <View style={styles.inputGroup}>
                            <Text style={styles.label}>Ausführlicher Text</Text>
                            <TextInput
                                style={[styles.input, styles.textArea]}
                                placeholder="Ausführlicher Text"
                                placeholderTextColor={Colors.textMuted}
                                value={fullText}
                                onChangeText={setFullText}
                                multiline
                                numberOfLines={6}
                                textAlignVertical="top"
                            />
                        </View>

                        <View style={styles.row}>
                            <View style={[styles.inputGroup, styles.halfWidth]}>
                                <Text style={styles.label}>Datum</Text>
                                <TextInput
                                    style={styles.input}
                                    placeholder="Datum"
                                    placeholderTextColor={Colors.textMuted}
                                    value={date}
                                    onChangeText={setDate}
                                />
                            </View>
                            <View style={[styles.inputGroup, styles.halfWidth]}>
                                <Text style={styles.label}>Tags</Text>
                                <TextInput
                                    style={styles.input}
                                    placeholder="Tags"
                                    placeholderTextColor={Colors.textMuted}
                                    value={tags}
                                    onChangeText={setTags}
                                />
                            </View>
                        </View>

                        <View style={styles.inputGroup}>
                            <Text style={styles.label}>Ordner/ Datei reinschieben</Text>
                            <Pressable style={styles.uploadArea}>
                                <Upload size={32} color={Colors.textMuted} />
                                <Text style={styles.uploadText}>Dateien hier ablegen oder klicken</Text>
                            </Pressable>
                        </View>

                        <Pressable
                            style={({ pressed }) => [styles.publishButton, pressed && styles.buttonPressed]}
                            onPress={handlePublish}
                        >
                            <Text style={styles.publishButtonText}>Veröffentlichen</Text>
                        </Pressable>
                    </View>
                </View>
            </ScrollView>
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
    content: {
        paddingHorizontal: 16,
        paddingBottom: 40,
    },
    header: {
        marginBottom: 20,
    },
    logoContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: -60,
    },
    logoShape: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: Colors.primary,
        transform: [{ rotate: '-15deg' }],
        marginRight: 10,
    },
    logo: {
        width: 100,
        height: 40,
        marginRight: 10,
    },
    logoText: {
        alignItems: 'flex-start',
    },
    logoTitle: {
        fontSize: 18,
        fontWeight: '800' as const,
        color: Colors.black,
    },
    logoSubtitle: {
        fontSize: 14,
        fontWeight: '600' as const,
        color: Colors.primary,
    },
    card: {
        backgroundColor: Colors.white,
        borderRadius: 16,
        overflow: 'hidden',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.08,
        shadowRadius: 8,
        elevation: 3,
    },
    tabContainer: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: Colors.border,
    },
    activeTab: {
        paddingHorizontal: 20,
        paddingVertical: 14,
        borderBottomWidth: 2,
        borderBottomColor: Colors.primary,
    },
    activeTabText: {
        fontSize: 15,
        fontWeight: '600' as const,
        color: Colors.text,
    },
    form: {
        padding: 20,
    },
    inputGroup: {
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
    textArea: {
        minHeight: 120,
        paddingTop: 14,
    },
    row: {
        flexDirection: 'row',
        gap: 12,
    },
    halfWidth: {
        flex: 1,
    },
    uploadArea: {
        backgroundColor: Colors.inputBackground,
        borderRadius: 8,
        borderWidth: 2,
        borderColor: Colors.border,
        borderStyle: 'dashed',
        paddingVertical: 40,
        alignItems: 'center',
        justifyContent: 'center',
    },
    uploadText: {
        marginTop: 12,
        fontSize: 14,
        color: Colors.textMuted,
    },
    publishButton: {
        backgroundColor: Colors.primary,
        borderRadius: 8,
        paddingVertical: 16,
        alignItems: 'center',
        marginTop: 8,
    },
    buttonPressed: {
        opacity: 0.9,
        transform: [{ scale: 0.98 }],
    },
    publishButtonText: {
        color: Colors.white,
        fontSize: 16,
        fontWeight: '600' as const,
    },
});
