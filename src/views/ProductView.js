import React, { useEffect, useState } from 'react'
import { ActivityIndicator, BackHandler, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { RFPercentage } from 'react-native-responsive-fontsize';
import Icon from  'react-native-vector-icons/FontAwesome'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import { ButtonCart } from '../components/ButtonCart';
import { style } from '../styles/globalStyle';
import { addProductCart, deleteProductCart, getOneItem, getOneItemnone } from '../store/actions/productsActions'
import { STATUS } from '../store/types/types';
export const ProductView = ({ navigation, route }) => {
    const dispatch = useDispatch();
    const id = route.params.id ? route.params.id : 0;
    const product = useSelector(state => state.Products.getProduct.product);
    const prod = useSelector(state => state.Products.newProducts.find((data)=>data.id===id));
    const prod2 = useSelector(state => state.Products.getProducts.products.find((data)=>data.id===id));
    const productStatus = useSelector(state => state.Products.getProduct.status);
    useEffect(() => {
        dispatch(getOneItem(id));
    }, [])
    const backAction = () => {
        navigation.goBack();
        dispatch(getOneItemnone())
        return true;
    };
    useEffect(() => {

        const backHandler = BackHandler.addEventListener(
            "hardwareBackPress",
            backAction
        );

        return () => backHandler.remove();
    }, []);
    if(productStatus===STATUS.LOADING){
        return(
          <View style={{flex:1,justifyContent:'center',alignItems:'center'}} >
            <ActivityIndicator size={hp(10)} color={'#e61f6d'}/>
          </View>
        )
      }
    return (
        <View>
            <Image style={styles.image} source={{ uri: product.image }} />
            <Text style={style.title}>{product.name}</Text>
            <Text style={styles.subtitle} >{product.description}</Text>
            <View style={styles.containerInfo}>
                <Text style={styles.priceText}>${product.unit_price}</Text>
                <Text style={styles.stockText}>Stock:{product.stock}</Text>
            </View>
            <View style={styles.containerCart}>
                <TouchableOpacity
                    onPress={()=>dispatch(deleteProductCart(prod))}
                >
                    <Icon name='trash-o' size={RFPercentage(3)} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.textButton}>{product.count}</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={()=>dispatch(addProductCart(prod?prod:prod2))}
                >
                    <Icon name='plus' size={RFPercentage(3)} color={'#e61f6d'} />
                </TouchableOpacity>
            </View>
            <View style={{ marginHorizontal: wp(5) }} >
                <ButtonCart text={'Ir al carrito'} navigation={navigation} />
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    image: {
        height: hp(25),
        width: wp(100),
    },
    subtitle: {
        fontSize: RFPercentage(2.2),
        textAlign: 'center',
        color: 'gray',
        marginVertical: hp(2),
        textAlign: 'justify',
        width: wp(90),
        alignSelf: 'center',
        marginBottom: hp(4)
    },
    containerInfo: {
        flexDirection: 'row',
        marginHorizontal: wp(5),
        justifyContent: 'space-between'
    },
    stockText: {
        fontSize: RFPercentage(2.5),
        color: 'grey'
    },
    priceText: {
        fontWeight: 'bold',
        fontSize: RFPercentage(2.5),
        color: 'black'
    },
    containerCart: {
        flexDirection: 'row',
        marginHorizontal: wp(5),
        justifyContent: 'space-between',
        marginVertical: hp(2)
    },
    textButton: {
        fontWeight: 'bold',
        fontSize: RFPercentage(3.0),
        color: 'black'
    }
})