import React, { useEffect } from 'react'
import { ScrollView, Text, View, BackHandler, ActivityIndicator } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { Item } from '../components/Item';
import { getAllItems } from '../store/actions/productsActions';
import { style } from '../styles/globalStyle';

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import { ButtonCart } from '../components/ButtonCart';
import { STATUS } from '../store/types/types';
export const HomeView = ({ navigation, route }) => {
  const products = useSelector(state => state.Products.getProducts.products);
  const productsStatus = useSelector(state => state.Products.getProducts.status);
  const products2 = useSelector(state => state.Products.newProducts);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllItems())
  }, [])
  useEffect(() => {
    if (route.name === 'Home') {
      BackHandler.addEventListener("hardwareBackPress", () => true)
    }
  }, [route.name])

  if(productsStatus===STATUS.LOADING){
    return(
      <View style={{flex:1,justifyContent:'center',alignItems:'center'}} >
        <ActivityIndicator size={hp(10)} color={'#e61f6d'}/>
      </View>
    )
  }
  return (
    <View
      style={{ marginHorizontal: wp(5) }}
    >
      <Text maxFontSizeMultiplier={1} style={style.title} >Productos</Text>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ marginBottom: hp(10) }}
      >
        {
          products.length > 0 && products2.length===0 && products.map(data => (
            <Item navigation={navigation} key={data.id} item={data} />
          ))
        }
        {
          products2.length > 0 && products2.map(dat => (
            <Item navigation={navigation} key={dat.id} item={dat} />
          ))
        }
        <ButtonCart text={'Ir al carrito'} navigation={navigation} />
      </ScrollView>
    </View>
  )
}
