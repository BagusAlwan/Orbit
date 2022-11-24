import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from './screens/HomeScreen';
import ChatScreen from './screens/ChatScreen';
import LoginScreen from './screens/LoginScreen';
import useAuth from './hooks/useAuth';
import RegisterScreen from './screens/RegisterScreen';
import ModalScreen from './screens/ModalScreen';
import ProfileScreen from './screens/ProfileScreen';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
    const { user } = useAuth();

    return (
    <Stack.Navigator
    screenOptions={{
        headerShown: false,
    }}
    >
        {user ? (
            <>
            <Stack.Group>
                <Stack.Screen name="Home" component={HomeScreen}/>
                <Stack.Screen name="Chat" component={ChatScreen}/>
                <Stack.Screen name="Profile" component={ProfileScreen}/>


            </Stack.Group>
            <Stack.Group screenOptions={{ presentation: 'modal'}}>
                <Stack.Screen name="Modal" component={ModalScreen}/>
            </Stack.Group>
            </>
            ) : (
            <>
            <Stack.Screen name="Login" component={LoginScreen}/>
            <Stack.Screen name="Register" component={RegisterScreen}/>
            </>
            )}
    </Stack.Navigator>
  )
}

export default StackNavigator