import { StyleSheet } from "react-native";
import { RFPercentage } from 'react-native-responsive-fontsize';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
export const style = StyleSheet.create({
    title: {
      fontWeight: 'bold',
      fontSize: RFPercentage(3.5),
      marginVertical: hp(2),
      color: '#e61f6d',
      textAlign:'center',
      borderBottomWidth: hp(0.2), 
      borderBottomColor: '#ededed'
    },
    titleNotFound: {
      fontWeight: '600',
      fontSize: RFPercentage(3),
      marginVertical: hp(2),
      color: 'black',
      textAlign:'justify'
    },

  })