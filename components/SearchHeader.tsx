import React from 'react';
import { StyleSheet, View, TextInput, Pressable, Image } from 'react-native';
import { Search, Menu } from 'lucide-react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Colors from '@/constants/colors';

interface SearchHeaderProps {
  searchQuery: string;
  onSearchChange: (text: string) => void;
  onMenuPress?: () => void;
  userAvatar?: string;
}

export default function SearchHeader({
                                       searchQuery,
                                       onSearchChange,
                                       onMenuPress,
                                       userAvatar
                                     }: SearchHeaderProps) {
  const insets = useSafeAreaInsets();

  return (
      <View style={[styles.container, { paddingTop: insets.top + 8 }]}>
        <View style={styles.searchContainer}>
          <Pressable onPress={onMenuPress} style={styles.menuButton}>
            <Menu size={22} color={Colors.white} />
          </Pressable>
          <TextInput
              style={styles.input}
              placeholder="Search"
              placeholderTextColor={Colors.white}
              value={searchQuery}
              onChangeText={onSearchChange}
          />
          <Search size={20} color={Colors.white} />
        </View>
        <View style={styles.logoCircle}>
          <Image
              source={require("../assets/images/Smartfeld_Logo_RGB_150dpi.png")}
              style={styles.logo}
              resizeMode="contain"
          />
        </View>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingBottom: 12,
    backgroundColor: Colors.background,
  },
  searchContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.primary,
    borderRadius: 24,
    paddingHorizontal: 12,
    paddingVertical: 10,
    marginRight: 12,
  },
  menuButton: {
    marginRight: 8,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: Colors.white,
    marginRight: 8,
  },
  avatar: {
    width: 44,
    height: 44,
    borderRadius: 22,
    borderWidth: 2,
    borderColor: Colors.primary,
  },
  logoCircle: {
    width: 44,
    height: 44,
    borderRadius: 22,
    borderWidth: 2,
    borderColor: Colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.white,
  },
  logo: {
    width: 35,
    height: 12,
  },
});
