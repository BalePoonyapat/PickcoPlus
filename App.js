import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Splash from './screens/Splash'
import Login from './screens/Login'
import Register from './screens/Register';
import RegisterStudent from './screens/RegisterStudent';
import Homepage from './screens/Homepage';
import Registerworkplace from './screens/Registerworkplace'
import RegisterCoach from './screens/RegisterCoach';
import Forgotpassword from './screens/Forgotpassword';
import Fgpasswordawait from './screens/Fgpaswordawait';
import Profilescreen from './screens/Profilescreens';
import Setting from './screens/Setting';
import PopularCours from './screens/PopularCours';
import Matching from './screens/Matching';
import EnglishSkill from './screens/EnglishSkill';
import mycoourse from './screens/mycoourse';
import Mobileskill from './screens/Mobileskill';




/* ... */
// Wrap your app with the new GestureHandler

  /* your app */



const Stack = createNativeStackNavigator();




const App = () =>{
return ( 
  <NavigationContainer>
  <Stack.Navigator>
    <Stack.Screen
        name="Splash"
        component={Splash}
        options={{ headerShown: false}}
    />
     <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false}}
    />
   <Stack.Screen
        name="Homepage"
        component={Homepage}
        options={{ headerShown: false}}
    />
    <Stack.Screen
        name="Register"
        component={Register}
        options={{ headerShown: false}}
    />
    <Stack.Screen
        name="RegisterStudent"
        component={RegisterStudent}
        options={{ headerShown: false}}
    />
    <Stack.Screen
        name="RegisterCoach"
        component={RegisterCoach}
        options={{ headerShown: false}}
    />
    <Stack.Screen
        name="Registerworkplace"
        component={Registerworkplace}
        options={{ headerShown: false}}
    />
    <Stack.Screen
        name="PopularCours"
        component={PopularCours}
        options={{ headerShown: false}}
    />
    <Stack.Screen
        name="Matching"
        component={Matching}
        options={{ headerShown: false}}
    />
    <Stack.Screen
        name="Mobileskill"
        component={Mobileskill}
        options={{ headerShown: false}}
    />
    <Stack.Screen
        name="mycoourse"
        component={mycoourse}
        options={{ headerShown: false}}
    />
    <Stack.Screen
        name="EnglishSkill"
        component={EnglishSkill}
        options={{ headerShown: false}}
    />

  </Stack.Navigator>
</NavigationContainer>

)}

export default App 