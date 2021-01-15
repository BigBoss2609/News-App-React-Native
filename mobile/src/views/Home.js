import React,{useEffect, useState} from 'react';
import {View, Text,SafeAreaView,FlatList, TouchableOpacity} from 'react-native'
import { FAB, Portal, Provider,Button } from 'react-native-paper';
import { ListItem, Avatar } from 'react-native-elements';
import axios from 'axios'
import {url} from '../constant/config'
import Screen from '../constant/screen'
import  moment from 'moment'
const Item = (props) => {
    const {item,index,navigation} = props
    return(
        <TouchableOpacity onPress={() => navigation.navigate(Screen.NEWS,{link: item.link})}>
            <ListItem key={index} bottomDivider>
                <Avatar source={{uri: item.img}} />
                <ListItem.Content>
                <ListItem.Title>{item.title}</ListItem.Title>
                <ListItem.Subtitle>Ngày: {moment(item.isoDate).format('MM/DD/YYYY')}</ListItem.Subtitle>
                </ListItem.Content>
            </ListItem>
        </TouchableOpacity>
        
    )
}
function Home(props) {
    const [state, setState] = useState({ open: false });
    const onStateChange = ({ open }) => setState({ open });
    const { open } = state;
    const [isNews, setNews] = useState(1)
    const [arrData ,setArrData] = useState([])
    useEffect(() => {
        callApi()
    },[isNews])
    const callApi = async() => {
        try {
                let qr = `https://weather-node-paper.herokuapp.com/v1/links/tt`
            if(isNews === 0) {
                qr =`https://weather-node-paper.herokuapp.com/v1/links/vne`
            }
            if(isNews === 2) {
                qr = `https://weather-node-paper.herokuapp.com/v1/links/h24`
            }
            const data = await axios.get(`${qr}`)
            if(data.data.data) {
                setArrData(data.data.data)

            }else {
                setArrData([])
            }
        } catch (error) {
            console.log(error)
            setArrData([])
        }
    }
    return (
        <SafeAreaView style={{flex: 1,paddingTop:0}}>
            <View style={{
                height:49, width: '100%', 
                backgroundColor:'#a25ca7',
                flexDirection:'row',
                alignItems:'center',
                justifyContent:'center',
                opacity: 0.8
            }}> 
                {
                    isNews === 0 && <Text style={{color:'white', fontSize:18, fontWeight:'bold'}}>Báo VN Express</Text> 
                    
                }
                {
                    isNews === 1 && <Text style={{color:'white', fontSize:18, fontWeight:'bold'}}>Báo Tuổi Trẻ</Text>
                    
                }
                {
                    isNews === 2 && <Text style={{color:'white', fontSize:18, fontWeight:'bold'}}>Báo 24h</Text>
                    
                }
            </View>
            <View>
            <FlatList
                style={{marginBottom:50}}
                data={arrData}
                renderItem={({item,index}) => <Item key={index} item={item} index={index} navigation={props.navigation}/>}
                keyExtractor={(item,index) => index.toString()}
            />
            
            </View>

            
            <Provider>
                <Portal>
                    <FAB.Group
                        open={open}
                        icon={open ? 'folder-open' : 'plus'}
                        actions={[
                            
                            {
                            icon: 'star',
                            label: 'VN Express',
                            style: {
                                height:50,
                                width:50,
                                borderRadius:15,
                                flexDirection:'row',
                                alignItems:'center',
                                justifyContent:'center' ,
                                backgroundColor: "yellow"
                            }, 
                            onPress: () => setNews(0),
                            },
                            {
                            icon: 'newspaper',
                            label: "Tuổi trẻ",
                            style: {
                                height:50,
                                width:50,
                                borderRadius:15,
                                flexDirection:'row',
                                alignItems:'center',
                                justifyContent:'center' ,
                                backgroundColor: "red"
                            }, 
                            onPress: () => setNews(1),
                            },
                            {
                                style: {
                                    height:50,
                                    width:50,
                                    borderRadius:15,
                                    flexDirection:'row',
                                    alignItems:'center',
                                    justifyContent:'center',
                                    backgroundColor: "blue"
                                }, 
                            icon: 'calendar-today',
                            label: "24h",
                            onPress: () => setNews(2),
                            },
                        ]}
                        fabStyle={{
                            height:80,
                            width:80,
                            borderRadius:100,
                            flexDirection:'row',
                            alignItems:'center',
                            justifyContent:'center',
                            
                        }}
                        
                        onStateChange={onStateChange}
                        onPress={() => {
                            if (open) {
                            // do something if the speed dial is open
                            }
                        }}
                    />
                </Portal>
            </Provider>

        </SafeAreaView>
    );
}

export default Home;