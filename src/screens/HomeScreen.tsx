import { FlatList, SafeAreaView, StyleSheet } from 'react-native'
import React from 'react'
import ArticlesData from '../data/articles.json'
import Article from '../components/Article'

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={ArticlesData}
        renderItem={({ item }) =>
          <Article
            urlToImage={item.urlToImage}
            title={item.title}
            description={item.description}
            author={item.author}
            date={item.publishedAt}
            source={item.source.name} />}
        keyExtractor={(item) => `${item.title}-${item.source.name}-${item.publishedAt}`} />
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {}
})