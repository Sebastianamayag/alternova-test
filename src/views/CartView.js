import React, { useEffect } from 'react'
import { BackHandler, ScrollView, Text, View } from 'react-native'
import { useSelector } from 'react-redux'
import { Item } from '../components/Item';
import { style } from '../styles/globalStyle';

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import { ButtonCart } from '../components/ButtonCart';
export const CartView = ({ navigation }) => {
    const products = useSelector(state => state.Products.selectedProducts);
    const backAction = () => {
        navigation.navigate('Home');
        return true;
    };
    useEffect(() => {

        const backHandler = BackHandler.addEventListener(
            "hardwareBackPress",
            backAction
        );

        return () => backHandler.remove();
    }, []);
    return (
        <View
            style={{ marginHorizontal: wp(5) }}
        >
            <Text maxFontSizeMultiplier={1} style={style.title} >Carrito</Text>
            <ScrollView
                showsVerticalScrollIndicator={false}
                style={{ marginBottom: hp(10) }}
            >
                {
                    products.length > 0 && products.map(data => (
                        <Item navigation={navigation} key={data.id} item={data} />
                    ))
                }
                <ButtonCart text={'Comprar'} navigation={navigation} />
            </ScrollView>
        </View>
    )
}
