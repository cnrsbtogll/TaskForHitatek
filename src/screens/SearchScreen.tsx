import {FlatList, StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import SearchBar from '../components/SearchBar';
import Article from '../components/Article';
import En from '../data/en.json';
import Tr from '../data/tr.json';
import ar from '../data/ar.json';
import {useTranslation} from 'react-i18next';

const SearchScreen = () => {
  const {t} = useTranslation();
  const lang = t('language');
  console.log(lang);
  const articles_data = lang === 'tr' ? Tr : lang === 'en' ? En : ar;
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredData, setFilteredData] = useState(articles_data);

  const handleSearch = (text: string) => {
    setSearchTerm(text);

    // JSON verisini filtrele
    const filtered = articles_data.filter(item => item.title.includes(text));

    setFilteredData(filtered);
  };

  return (
    <View style={styles.container}>
      <SearchBar
        placeholder={t('bottomTabSearch')}
        value={searchTerm}
        onChangeText={handleSearch}
      />
      <FlatList
        data={filteredData}
        renderItem={({item}) => (
          <Article
            urlToImage={item.urlToImage}
            title={item.title}
            description={item.description}
            author={item.author}
            date={item.publishedAt}
            source={item.source.name}
            url={item.url}
          />
        )}
        keyExtractor={item =>
          `${item.title}-${item.source.name}-${item.publishedAt}`
        }
      />
    </View>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
