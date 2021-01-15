import React,{useState} from 'react';
import {View, Text, SafeAreaView,Dimensions, Alert} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input,Button } from 'react-native-elements';
import { Divider } from 'react-native-elements';
import axios from 'axios'
import {url} from '../constant/config'
import { TextInput } from 'react-native-gesture-handler';
import { ImageBackground, Image } from 'react-native';
const {width,height} = Dimensions.get('screen')
function Register(props) {
    const [name,setName] = useState('')
    const [user,setUser] = useState('')
    const [pass,setPass] = useState('')
    const [cpass,setCPass] = useState('')

    const handleSubmit = async() => {
        try {
            if(!name || !user || !pass || !cpass) {
                return Alert.alert("Vui lòng nhập đầy đủ thông tin")
            }
            if(pass !== cpass) {
                return Alert.alert("Mật khẩu không đúng")
            }
            const body = {
                fullName: name,
                userName: user,
                password: pass
            }
            const data = await axios.post(`${url}/v1/users/register`,body)
            if(data.data.code === 0) {
                setCPass('')
                setName('')
                setPass('')
                setUser('')
                return Alert.alert(
                    "Thong bao",
                    "Tao thanh cong",
                    [
                      
                      { text: "OK", onPress: () => props.navigation.goBack() }
                    ],
                    { cancelable: false }
                  );
            } else {
                return Alert.alert("Tạo không thành công")
            }
        } catch (error) {
            return Alert.alert("Lỗi")
        }

    }
    return (
        <SafeAreaView style={{paddingTop:36,flex:1}}>
            <View style={{
                margin:30,
                flexDirection:'column',
                justifyContent:'center', 
                alignItems:'center'}}>

                <Image style={{
                    marginBottom: 20,
                    width: 180,
                    height: 180
                    }}source={require('../../assets/kisspng-record-news-logo-identidade-visual-connected-idea-logo-5ae03b0c0aa4c8.8492517315246446200436.png')}>
                </Image>
              

                <Input
                    placeholder='Họ và tên'
                    inputStyle={{paddingLeft:15}}
                    value={name}
                    onChangeText={(text) => setName(text)}
                    leftIcon={
                        <Icon
                        name='user'
                        size={24}
                        color='black'
                        />
                    }
                />
                

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
                    // keyboardType="default"
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
                <Input
                    placeholder='Nhập lại mật khẩu'
                    secureTextEntry
                    inputStyle={{paddingLeft:15}}
                    value={cpass}
                    onChangeText={(text) => setCPass(text)}
                    leftIcon={
                        <Icon
                        name='lock'
                        size={24}
                        color='black'
                        />
                    }
                />
                <Button
                    onPress={handleSubmit}
                    buttonStyle={{width:180, borderRadius:20}}
                    title="Đăng kí"
                />
                <Divider style={{ height:10 }} />
                <Button
                    onPress={() => props.navigation.goBack()}
                    buttonStyle={{width:180, borderRadius:20}}
                    title="Quay lại"
                />
            </View>
        </SafeAreaView>
    );
}

export default Register;