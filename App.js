import React, { useState, useEffect } from 'react';
import { FlatList, Image, StyleSheet, Text, View } from 'react-native';
import { Avatar } from 'react-native-elements';
import axios from 'axios';

const API_URL = 'https://api.imgflip.com/get_memes';
export default function App() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ fontSize: 32, textAlign: 'center' }}>Hello World!</Text>
        </View>
    );
}