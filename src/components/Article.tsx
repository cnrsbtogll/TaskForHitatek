import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import moment from 'moment';

interface ArticleProps {
    title: string;
    urlToImage?: string | null;
    description: string;
    author?: string | null;
    date: string;
    source: string;
}

const Article: React.FC<ArticleProps> = ({ urlToImage, title, description, author, date, source }) => {
    return (
        <View style={styles.container}>
            {/* Image */}
            {urlToImage && <Image source={{ uri: urlToImage }} style={styles.image} />}

            <View style={{ padding: 20 }}>

                {/* Title*/}
                <Text style={styles.title}>{title} </Text>

                {/* Description */}
                <Text style={styles.description} numberOfLines={3}>{description}</Text>

                <View style={styles.data}>
                    <Text style={styles.heading}>by: <Text style={styles.author}>{author}</Text></Text>
                    <Text style={styles.date}>{moment(date).format('MMM Do YY')}</Text>
                </View>

                {/* Source */}
                <Text style={{ marginTop: 10 }}>source: <Text style={styles.source}>{source}</Text></Text>
            </View>
        </View>
    )
}

export default Article

const styles = StyleSheet.create({
    container: {
        width: '90%',
        alignSelf: 'center',
        borderRadius: 40,
        shadowOpacity: 0.5,
        shadowColor: '#000',
        shadowOffset: {
            height: 5,
            width: 5
        },
        backgroundColor: '#fff',
        elevation: 5,
        marginVertical:10
    },
    image: {
        height: 200,
        width: '100%',
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
    },
    title: {
        fontSize: 18,
        fontWeight: '600',
        marginTop: 10
    },
    description: {
        fontSize: 16,
        fontWeight: '400',
        marginTop: 10
    },
    data: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10
    },
    heading: {},
    author: {
        fontWeight: 'bold',
        fontSize: 15
    },
    date: {
        fontWeight: 'bold',
        color: 'tomato',
        fontSize: 15
    },
    source: {
        color: 'tomato',
        fontWeight: 'bold',
        fontSize: 18
    }
})