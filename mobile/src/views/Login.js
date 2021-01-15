import React,{useState} from 'react';
import {View, Text, SafeAreaView,Dimensions, Alert} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input,Button } from 'react-native-elements';
import { Divider } from 'react-native-elements';
import Screen from '../constant/screen'
const {width,height} = Dimensions.get('screen')
import axios from 'axios'
import {url} from '../constant/config'
import { ImageBackground, Image } from 'react-native';

function Login(props) {
    const [user,setUser] = useState('')
    const [pass, setPass] = useState('')
    const handleLogin = async() => {
        try {
            if(!user || !pass) {
                return Alert.alert("Vui lòng điền đầy đủ thông tin")
            }
            const body = {
                userName: user,
                password: pass
            }
            return props.navigation.navigate(Screen.HOME)
            const data = await axios.post(`${url}/v1/users/login`,body)
            
            if(data.data.code === 0) {
                return props.navigation.navigate(Screen.HOME)
            } else {
                return Alert.alert("Tài khoản hoặc mật khẩu không đúng")
            }
        } catch (error) {
            return Alert.alert("Tài khoản hoặc mật khẩu không chính xác")
        }
    }
    return (
        <SafeAreaView style={{paddingTop:24,flex:1, color: 'red'}}>
            
            
            <View style={{
                margin:30,
                flexDirection:'column',
                justifyContent:'center', 
                alignItems:'center'}}>

                <Image style={{
                    marginBottom: 30,
                    width: 180,
                    height: 180
                    }}source={require('../../assets/kisspng-record-news-logo-identidade-visual-connected-idea-logo-5ae03b0c0aa4c8.8492517315246446200436.png')}> 
                </Image>

                <Input
                    placeholder='Tài khoản'
                    inputStyle={{paddingLeft:15}}
                    value={user}
                    onChangeText={(text) => setUser(text)}
                    leftIcon={
                        <Icon
                        name='user'
                        size={24}
                        color='black'
                        />
                    }
                />
                <Input
                    placeholder='Mật khẩu'
                    secureTextEntry
                    inputStyle={{paddingLeft:15}}
                    value={pass}
                    onChangeText={(text) => setPass(text)}
                    leftIcon={
                        <Icon
                        name='lock'
                        size={24}
                        color='black'
                        />
                    }
                />
                <Divider style={{ height:30 }} />
                <Button
                    onPress={() => props.navigation.navigate(Screen.HOME)}
                    buttonStyle={{width:180, borderRadius:20}}
                    title="Đọc báo"
                />
                <Divider style={{ height:10 }} />
                <Button
                    onPress={handleLogin}
                    buttonStyle={{width:180, borderRadius:20}}
                    title="Đăng nhập"
                />
                <Divider style={{ height:10 }} />
                <Button
                    onPress={() => props.navigation.navigate(Screen.REG)}
                    buttonStyle={{width:180, borderRadius:20}}
                    title="Đăng kí"
                />
                <Divider style={{ height:10 }} />
                <Button
                    onPress={() => props.navigation.navigate(Screen.FP)}
                    buttonStyle={{width:180, borderRadius:20}}
                    title="Quên mật khẩu"
                />
            </View>
            
        </SafeAreaView>
    );
}

export default Login;