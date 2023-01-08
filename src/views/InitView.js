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
        <View>
            <ActivityIndicator size={'large'} color={'green'}/>
        </View>
    )
}
