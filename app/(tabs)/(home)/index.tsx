import React, { useState } from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';
import { useRouter } from 'expo-router';
import Colors from '@/constants/colors';
import { materials, currentUser } from '@/mocks/data';
import MaterialCard from '@/components/MaterialCard';
import SearchHeader from '@/components/SearchHeader';

export default function HomeScreen() {
    const router = useRouter();
    const [searchQuery, setSearchQuery] = useState('');

    const filteredMaterials = materials.filter(material =>
        material.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        material.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
    );

    const handleMaterialPress = (id: string) => {
        router.push(`/(tabs)/(home)/${id}`);
    };

    return (
        <View style={styles.container}>
            <SearchHeader
                searchQuery={searchQuery}
                onSearchChange={setSearchQuery}
                userAvatar={currentUser.avatar}
            />

            <FlatList
                data={filteredMaterials}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <MaterialCard
                        material={item}
                        onPress={() => handleMaterialPress(item.id)}
                    />
                )}
                ListHeaderComponent={
                    <Text style={styles.sectionTitle}>Unterrichts Inspiration:</Text>
                }
                contentContainerStyle={styles.listContent}
                showsVerticalScrollIndicator={false}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.background,
    },
    sectionTitle: {
        fontSize: 20,
        fontWeight: '700' as const,
        color: Colors.text,
        marginHorizontal: 16,
        marginTop: 16,
        marginBottom: 8,
    },
    listContent: {
        paddingBottom: 24,
    },
});
