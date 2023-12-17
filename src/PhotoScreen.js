import React from 'react';
import {View,Text,Image,StyleSheet} from 'react-native';

export default function PhotoScreen({navigation,route}){

    const {url_s,title} = route.params;

    return(
        <View style={styles.container}>
            <View style={styles.box}>
        <Image
        source={{ uri: url_s }}
        style={styles.image}
      />
      <Text style={styles.text}>{title}</Text>
      </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: 'center',
        alignContent: 'center',
        padding: 30,
        backgroundColor: '#e9eae2'
    },
    box:{
        backgroundColor: '#292e25',
        padding: 17,
        borderRadius: 20
    },
    image:{
        height: 600,
        width: 300,
    },
    text:{
        fontSize: 20,
        alignSelf: 'center',
        color: '#D9D8D8'
    }
})