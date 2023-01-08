import React from 'react'
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';
// import Icon from 'react-native-vector-icons/FontAwesome';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import { useDispatch } from 'react-redux';
import { addProductCart } from '../store/actions/productsActions';
export const Item = ({ item,navigation }) => {
    const dispatch = useDispatch();
    return (
        <TouchableOpacity
            onPress={()=>navigation.navigate('ProductView',{id:item.id})}
        >
            <View style={[style.container, item.id !== 5 && { borderBottomWidth: hp(0.2), borderBottomColor: '#ededed' }]}>
                <View style={style.containerImage}>
                    <Image style={style.image} source={{ uri: item.image }} />
                </View>
                <View style={style.containerInformation} >
                    <View>
                        <Text style={style.titleTextCard} maxFontSizeMultiplier={1}>{item.name}</Text>
                        <Text style={style.stockTextCard} maxFontSizeMultiplier={1}>Stock: {item.stock}</Text>
                    </View>
                    <View style={style.containerButtom}>
                        <Text style={style.priceTextCard} maxFontSizeMultiplier={1} >${item.unit_price}</Text>
                        <View style={{width:wp(15),flexDirection:'row',justifyContent:'space-between',paddingRight:wp(3)}}>
                            {/* <Icon name='trash-o' size={wp(2)} /> */}
                            <TouchableOpacity>
                                <Text>-</Text>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Text>{item.count}</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={()=>dispatch(addProductCart(item))}
                            >
                                <Text>+</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    )
}



const style = StyleSheet.create({
    container: {
        width: wp(90),
        flexDirection: 'row',
        alignItems: 'center',
        height: hp(20),
        backgroundColor: '#F2F4F4',
        borderRadius: wp(3)
    },
    containerImage: {
        width: wp(30),
        padding: wp(2),
    },
    image: {
        height: hp(15),
        width: wp(26),
        borderRadius: wp(3)
    },
    containerInformation: {
        width: wp(60),
        justifyContent: 'center'
    },
    titleTextCard: {
        fontWeight: 'bold',
        fontSize: RFPercentage(2.2),
        width: wp(55),
        textAlign: 'justify',
        color: 'black'
    },
    stockTextCard: {
        fontSize: RFPercentage(2.0),
        textAlign: 'justify',
        color: 'grey'
    },
    containerButtom: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    priceTextCard: {
        fontWeight: 'bold',
        fontSize: RFPercentage(2.0),
        textAlign: 'left',
        color: 'black'
    },
    addTextCard: {
        fontWeight: 'bold',
        fontSize: RFPercentage(2.0),
        textAlign: 'left',
        color: 'white',
        textAlign: 'center'
    },
    buttonCard: {
        backgroundColor: '#e61f6d',
        padding: wp(2),
        borderRadius: wp(3),
        width: wp(30),
    }
})