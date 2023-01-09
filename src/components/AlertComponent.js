import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Modal from 'react-native-modal';
import { RFPercentage } from 'react-native-responsive-fontsize';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import IconAwesome from 'react-native-vector-icons/FontAwesome';
export const AlertComponent = ({title,visible,closeModal,colorTitle,message}) => {
    return (
        <Modal
            backdropOpacity={0.7}
            backdropColor={'rgba(12, 23, 74, 1)'}
            propagateSwipe
            isVisible={visible}
            animationInTiming={0.2}
            animationOutTiming={0.2}
            onBackButtonPress={closeModal}
            onBackdropPress={closeModal}
        >
            <View style={style.globalContainer}>
                <View style={style.container}>
                    <TouchableOpacity activeOpacity={0} onPress={closeModal} >
                        <View style={style.containerClose}>
                            <IconAwesome
                                size={wp(5)}
                                name={'close'}
                                color={'#e61f6e'}
                                style={{ alignSelf: 'center' }}
                            />
                        </View>
                    </TouchableOpacity>
                    <Text style={[style.title,{color:colorTitle}]}>{title}</Text>
                    <Text style={style.descriptionRegular}>{message}</Text>
                </View>
            </View>
        </Modal>
    )
}
const style=StyleSheet.create({
    globalContainer:{
        alignItems:'center',
        justifyContent:'center',
        flex:1
    },
    container:{
        backgroundColor:'white',
        paddingHorizontal:wp(2),
        paddingVertical:hp(4),
        borderRadius:16,
        width:'100%'
    },
    containerClose: {
        position: 'absolute',
        top: -hp(4),
        right: -wp(1),
        borderRadius: wp(3.5),
        zIndex: 1,
        padding: wp(1),
        backgroundColor: 'white',
        width: wp(7),
        height: wp(7)
    },
    title:{
        color: '#271938',
        fontFamily: 'bold',
        fontSize: RFPercentage(3),
        textAlign:'center',
        marginTop:hp(0.5),
        marginBottom:hp(3)
    },
    descriptionRegular:{
        color: '#271938',
        fontFamily: '400',
        fontSize: RFPercentage(2.25),
        textAlign:'center',
        marginBottom:hp(3)
    },
    button: {
        backgroundColor: '#506DF4',
        padding: wp(4),
        width: wp('80%'),
        borderRadius: wp(3),
        alignSelf:'center',
        marginTop:hp(3),
        bottom:hp(0.1),
    },
    textButton: {
        color: '#ffffff',
        fontFamily: 'bold',
        fontSize: RFPercentage(2.25),
        textAlign: 'center'
    },
})
