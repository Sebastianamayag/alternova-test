import React from 'react'
import { TouchableOpacity,Text,View,StyleSheet } from 'react-native'
import { RFPercentage } from 'react-native-responsive-fontsize';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import { useDispatch, useSelector } from 'react-redux';
import { buyProducts } from '../store/actions/cartActions';
export const ButtonCart = () => {
    const dispatch=useDispatch();
    const total=useSelector(state=>state.Products.total);
    return (
        <TouchableOpacity
            onPress={()=>dispatch(buyProducts())}
        >
            <View style={style.button}>
                <Text style={style.textButton}>Comprar ${total}</Text>
            </View>
        </TouchableOpacity>
    )
}

const style = StyleSheet.create({
    button: {
      backgroundColor: '#e61f6d',
      width: wp(90),
      marginVertical: hp(2),
      padding: hp(2),
      borderRadius: wp(3)
    },
    textButton: {
      color: 'white',
      fontSize: RFPercentage(2.5),
      textAlign: 'center'
    }
  })