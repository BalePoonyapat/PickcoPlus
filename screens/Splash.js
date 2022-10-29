import { View, Text,Image,StyleSheet,Pressable } from 'react-native'
import React from 'react'


const splash = ({navigation}) => {
  const onPress = () => {
    navigation.navigate('Login')
  }
  return (
    
   
    <Pressable onPress={onPress} style={{flex:1, justifyContent: 'center',alignItems: 'center',backgroundColor:'#FFFFFF'}}>
    <View style={styles.container}>   
    <Image source={require('../img/Logo1.png')} style={styles.logostyle}/>
    <Text style={styles.headline2}>PICKCO</Text>  
    <Text style={styles.headline}>PICK YOUR SUITED COMPANY </Text> 
    </View>
    </Pressable>
   
  )
}
const styles = StyleSheet.create ({
  headline: {
    color:'#FE8E58',
    fontWeight: 'bold',
    fontSize: 20,
    marginTop: 1,
    width: 300,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal:200
    
},
headline2: {
  color:'#4F2878',
  fontWeight: 'bold',
  fontSize: 24,
  marginTop: 1,
  width: 100,
  height: 40,
  justifyContent: 'center',
  alignItems: 'center',
  marginHorizontal:200,
},
container: {
  flex: 0.05,
  flexDirection: 'column',
  backgroundColor: '#FFFFFF',
  justifyContent: 'center',
  alignItems: 'center',
},
logostyle:{
  width:250,
  height: 300,
  justifyContent: 'center',
  alignItems: 'center',
  
  
}

})


export default splash