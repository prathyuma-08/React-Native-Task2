import {Text,View,StyleSheet} from 'react-native';

export default function About(){
    return(
        <View style={styles.page}>
            <Text  style={styles.text}> 1.  Make an image Gallery mobile app </Text>
           <Text style={styles.text}> 2. Should show recent images from Flickr using API 1 on the homepage. </Text>
           <Text style={styles.text}> 3. Should have a left navbar. Use “home” as the option.</Text>
           <Text style={styles.text}> 4. Use image caching so that if the app is opened offline, the last view should be retained for the homepage and the photos. In case API response changes, the view must refresh</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    text:{
        fontSize: 20,
        paddingBottom: 15
    },
    page:{
        flex:1,
        padding: 20,
        backgroundColor: '#e9eae2'
    }
})