import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AuthView } from '../views/AuthView';
import { HomeView } from '../views/HomeView';
import { InitView } from '../views/InitView';
import { ProductView } from '../views/ProductView';
import { useSelector } from 'react-redux';

const Stack = createNativeStackNavigator();


export const Navigation = () => {
    const theme = useSelector(state => state.Theme);
    return (
        <NavigationContainer
            theme={theme}
        >
            <Stack.Navigator
                screenOptions={{ headerShown: false, gestureEnabled: false }}
                initialRouteName="InitView"
                
            >
                <Stack.Screen name="InitView" component={InitView} />
                <Stack.Screen name="Auth" component={AuthView} />
                <Stack.Screen name="Home" component={HomeView} />
                <Stack.Screen name="ProductView" component={ProductView} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

