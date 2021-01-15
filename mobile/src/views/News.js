import React from 'react';
import {View, Text} from 'react-native'
import { WebView } from 'react-native-webview';
function News(props) {
    const {link} = props.route.params
    return (
        <View style={{flex: 1}}>
            <WebView source={{ uri: link }}/>
        </View>
    );
}

export default News;