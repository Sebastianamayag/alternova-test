import React from 'react'
import { StyleSheet, TouchableOpacity, View ,Text} from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
export const ButtonAuth = ({ color, action ,text,textColor}) => {
    return (
        <TouchableOpacity onPress={action}>
            <View style={[style.button,{ backgroundColor: color }]}>
                <Text style={[style.textButton,{color:textColor}]} >{text}</Text>
            </View>
        </TouchableOpacity>
    )
}


const style=StyleSheet.create({
    button:{
        padding:wp(4),
        width:wp(90),
        alignSelf:'center',
        borderRadius:wp(4),
        borderWidth:wp(0.2),
        borderColor:'red',
        marginTop:hp(1)
    },
    textButton:{
        fontSize: RFPercentage(2.5),
        textAlign: 'center'
    }
})