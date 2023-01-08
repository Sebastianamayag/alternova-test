import React, { useEffect, useState } from 'react'
import { Image, Text, TouchableOpacity, View, TextInput, StyleSheet } from 'react-native'
import { useDispatch, useSelector } from 'react-redux';
import { RFPercentage } from 'react-native-responsive-fontsize';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { createrUser, singInUser } from '../functions/firebaseFunctions';
import { style } from '../styles/globalStyle';
import ToggleSwitch from 'toggle-switch-react-native';
import { ButtonAuth } from '../components/ButtonAuth';
import { changeTheme } from '../store/actions/themeAction';
import { loginAccountSuccess } from '../store/actions/authActions';
export const AuthView = ({ navigation }) => {
  const dispatch = useDispatch();
  const auth = useSelector(state => state.Auth.auth);
  const [credentials, setCredentials] = useState({});
  const [themestatus, setThemeStatus] = useState(false);
  const theme = useSelector(state => state.Theme);
  useEffect(() => {
    if (auth) navigation.navigate('Home')
  }, [auth])

  return (
    <View style={styles.container}>
      <View style={styles.containerTheme}>
        <ToggleSwitch
          isOn={themestatus}
          onColor={theme.switch}
          offColor={theme.switch}
          label="Tema"
          labelStyle={{ color: theme.colors.text, fontWeight: "900" }}
          size="large"
          onToggle={isOn => {setThemeStatus(isOn);dispatch(changeTheme(!theme.dark ? 'dark' : 'light'))}}
        />
      </View>
      <View style={styles.containerTop}>
        <Image style={styles.image} source={require('../assets/logo.png')} />
        <Text style={[style.title, { color: theme.colors.primary }]}>Bienvenido!!</Text>
      </View>
      <View>
        <TextInput style={[styles.textInput, { borderColor: theme.colors.border }]} placeholderTextColor={theme.colors.primary} keyboardType='email-address' value={credentials.email} placeholder='Email' onChangeText={(text) => setCredentials({ ...credentials, email: text })} />
        <TextInput style={[styles.textInput, { borderColor: theme.colors.border, marginBottom: hp(6) }]} placeholderTextColor={theme.colors.primary} secureTextEntry={true} value={credentials.password} placeholder='Contaseña' onChangeText={(text) => setCredentials({ ...credentials, password: text })} />
        <ButtonAuth text={'Ingresar'} color={theme.colors.primary} textColor={theme.secondary} action={() => { singInUser(credentials.email, credentials.password); dispatch(loginAccountSuccess()) }} />
        <ButtonAuth text={'Registrarse'} color={theme.colors.primary} textColor={theme.secondary} action={() => { createrUser(credentials.email, credentials.password); dispatch(loginAccountSuccess()) }} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerTheme: {
    marginTop: hp(20),
  },
  containerTop: {
    marginTop: hp(5),
    marginBottom: hp(4),
  },
  image: {
    width: wp(85),
    alignSelf: 'center',
    height: wp(8)
  },
  textInput: {
    width: wp(90),
    alignSelf: 'center',
    padding: wp(3),
    borderBottomWidth: wp(0.3),
    marginTop: hp(1),
  }
})

