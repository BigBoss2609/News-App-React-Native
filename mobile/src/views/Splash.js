import React from 'react';
import {View, Text,SafeAreaView,ImageBackground, Dimensions, TouchableOpacity} from 'react-native'
import axios from 'axios'
import Screen from '../constant/screen'
const {width,height} = Dimensions.get('screen')
function Splash(props) {
    return (
        <SafeAreaView style={{flex:1}}>
            <ImageBackground style={{
                flex: 0.999,
                resizeMode: "cover",
                justifyContent: "center"
            }} source={require('../../assets/bg.png')} />
            <TouchableOpacity style={{flex: 0.001, backgroundColor: '#d581d9'}} 
                    onPress={()=> props.navigation.navigate(Screen.LOGIN)}/>
        </SafeAreaView>
    );
}

export default Splash;