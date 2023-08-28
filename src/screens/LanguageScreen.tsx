import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useTranslation } from 'react-i18next';
import type { NativeStackScreenProps } from '@react-navigation/native-stack'
import { FlatList } from 'react-native-gesture-handler';
import LanguageList from '../services/LanguageList';

type RootStackParamList = {
  Home: undefined;
  Search: undefined;
  News: undefined;
  ChangeLanguage: undefined;

}

type Params = NativeStackScreenProps<RootStackParamList>

const LanguageScreen = ({ navigation }: Params) => {
  const {i18n } = useTranslation();

  const handleLanguageChange = (language: string) => {
    i18n.changeLanguage(language)
    // Burada dil değiştirme işlemleri yapılabilir
    navigation.navigate('Home'); // HomeScreen'e dönüş yap
  };

  return (
    <View style={styles.container}>
      <FlatList data={['en', 'tr', 'ar']} renderItem={({ item }) => (
        <TouchableOpacity
          onPress={() => handleLanguageChange(item)} // İngilizce seçeneği
          style={styles.languageButton}
        >
          <Text>{LanguageList[item].nativeName}</Text>
        </TouchableOpacity>
      )} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  languageButton: {
    marginBottom: 16,
    padding: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
  },
});

export default LanguageScreen;
