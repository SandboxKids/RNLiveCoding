import React, { useState, useEffect } from 'react';
import { FlatList, Image, StyleSheet, Text, View } from 'react-native';
import { Avatar } from 'react-native-elements';
import axios from 'axios';

const API_URL = 'https://api.imgflip.com/get_memes';

export default function App() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await axios.get(API_URL);
            setData(Object.values(response.data.data.memes));
        } catch (error) {
            console.error(error);
        }
    };

    const renderItem = ({ item }) => (
        <View style={styles.item}>
            <Avatar source={{ uri: item.url }} />
            <Text style={styles.title}>{item.name}</Text>
        </View>
    );

    return (
        <View style={styles.container}>
            <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                ListEmptyComponent={<Text>No data found.</Text>}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 50,
        marginHorizontal: 20,
    },
    item: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 10,
    },
    title: {
        marginLeft: 10,
        fontSize: 16,
    },
});