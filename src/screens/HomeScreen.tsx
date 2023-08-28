import {FlatList, SafeAreaView, StyleSheet} from 'react-native';
import React from 'react';

import Article from '../components/Article';
import En from '../data/en.json';
import Tr from '../data/tr.json';
import ar from '../data/ar.json';
import {useTranslation} from 'react-i18next';

const HomeScreen = () => {
  const {t} = useTranslation();
  const lang = t('language');

  const articles_data = lang === 'tr' ? Tr : lang === 'en' ? En : ar;

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={articles_data}
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
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {},
});
