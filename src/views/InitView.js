import React, { useEffect } from 'react'
import { ActivityIndicator, View } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';
export const InitView = ({navigation}) => {

    const checkStorage = async() => {
        const token=await AsyncStorage.getItem('token');
        if(token){
            navigation.navigate('Home')
        }else{
            navigation.navigate('Auth')
        }
    }

    useEffect(() => {
        checkStorage()
    }, []);


    return (
        <View style={{flex:1,justifyContent:'center',alignItems:'center'}} >
            <ActivityIndicator size={'large'} color={'#e61f6d'}/>
        </View>
    )
}
