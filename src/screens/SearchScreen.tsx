import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import SearchBar from '../components/SearchBar'
import ArticlesData from '../data/articles.json'
import Article from '../components/Article'

const SearchScreen = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredData, setFilteredData] = useState(ArticlesData);

    const handleSearch = (text: string) => {
        setSearchTerm(text);

        // JSON verisini filtrele
        const filtered = ArticlesData.filter(
            (item) =>
                item.title.includes(text) || item.description.includes(text)
        );

        setFilteredData(filtered);
    }

    return (
        <View style={styles.container}>
            <SearchBar placeholder="Search..."
                value={searchTerm}
                onChangeText={handleSearch} />
            <FlatList
                data={filteredData}
                renderItem={({ item }) =>
                    <Article
                        urlToImage={item.urlToImage}
                        title={item.title}
                        description={item.description}
                        author={item.author}
                        date={item.publishedAt}
                        source={item.source.name} />}
                keyExtractor={(item) => `${item.title}-${item.source.name}-${item.publishedAt}`} />
        </View>
    )
}

export default SearchScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    }
})
