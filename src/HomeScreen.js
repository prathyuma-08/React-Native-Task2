import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState, useEffect } from 'react';
import { Text, View, Dimensions, RefreshControl, TouchableOpacity, Image, FlatList, StyleSheet } from 'react-native';

const SCREEN_HEIGHT = Dimensions.get('window').height
const SCREEN_WIDTH = Dimensions.get('window').width

export default function HomeScreen({ navigation }) {

    const [data, setData] = useState([]);
    const [storedData, setStoredData] = useState([]);
    const [refreshing, setRefreshing] = React.useState(false);

    useEffect(() => {
      fetch('https://api.flickr.com/services/rest/?method=flickr.photos.getRecent&per_page=20&page=1&api_key=6f102c62f41998d151e5a1b48713cf13&format=json&nojsoncallback=1&extras=url_s')
        .then((response) => response.json())
        .then((json) => setData(json.photos.photo))
        .catch((error) => console.error(error));  
    }, []);

    useEffect(() => {
        const storeData = async () => {
          try {
            const jsonValue = JSON.stringify(data);
            await AsyncStorage.setItem('my-key', jsonValue);
            console.log('Data is Stored!')
          } catch (e) {
            console.error(e);
          }
        };

        storeData();

      }, [data]);

const getData = async () => {
    try {
        const value = await AsyncStorage.getItem('my-key');
        if (value !== null) {
            setStoredData(JSON.parse(value))
        }
    } catch (e) {
        console.log("error")
    }
};

getData();

const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    getData();
    setTimeout(() => {
        setRefreshing(false);
    }, 2000);
}, []);

return (
    <View style={styles.view}>
        <FlatList

            refreshControl={<RefreshControl
                colors={["#9Bd35A", "#689F38"]}
                refreshing={refreshing}
                onRefresh={onRefresh} />}

            horizontal={false}
            numColumns={3}
            data={storedData}
            renderItem={({ item }) => (
                <TouchableOpacity onPress={() => navigation.navigate("Picture", item)}>
                    <View style={{ flex: 1, padding: 2 }}>

                        <Image
                            source={{ uri: item.url_s }}
                            style={{ width: SCREEN_WIDTH / 3, height: 140 }}
                        />
                    </View>
                </TouchableOpacity>)} />

    </View>
);
}

const styles = StyleSheet.create({
    view: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#e9eae2'
    },
    text: {
        paddingVertical: 10,
        alignSelf: 'center',
        fontSize: 40,
        fontWeight: 'bold'
    }
});