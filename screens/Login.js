import {View, Text,StyleSheet,Pressable,Image,ImageBackground,SafeAreaView,TextInput,Button,TouchableOpacity,Switch } from 'react-native'
import React,{useState}from 'react'
import { StatusBar } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Register from './Register';





const Login = ({navigation}) => {

  {/*Swicth*/}
  const [switchValue, setswitchValue] = useState(false);
  const toggleSwitch = (value) =>{
    setswitchValue(value);
  }
 {/*NavRegister*/}
  const onPress = () => {
    navigation.navigate('')
  }



  
  return (


  <View style={styles.container}>
    <ImageBackground source={require('../img/FrameBGlogin.png')} resizeMode="cover" style={styles.image}>
      
    <Image source={require('../img/Logo1.png')}style={styles.logoLogin}/>
    <Text style={styles.textheader}>PICKCO</Text> 
    <Text style={styles.texttitle}>PICK YOUR SUITED COMPANY</Text>    
    <SafeAreaView>
    
       <TextInput style={styles2.textinput} placeholder={'Username'}></TextInput>
       <TextInput style={styles2.textinput2} placeholder={'Password'}></TextInput>

       <TouchableOpacity onPress={() => navigation.navigate('Homepage')}>
        <View style={styles2.btnsingin}>
          <Text style={styles2.btnsingintext}>Sign in</Text>
        </View>
       </TouchableOpacity>
       
       <TouchableOpacity onPress={() => navigation.navigate('Forgotpassword')}>
       <Text style={styles2.btnforgotpss}>Forgot Password</Text>
       </TouchableOpacity>
       <TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Register')}>
       <Text style={styles2.btnregister} >Register</Text>
       <View style={styles2.separator}/>
      </TouchableOpacity>
       </TouchableOpacity>
       <View>
          <Switch
            style={styles2.rememberme}
            onValueChange={toggleSwitch}
            value={switchValue}           
          >      
          </Switch>
          <Text style={styles2.remembermestyle}>Remember Password</Text>
       </View>
      
    </SafeAreaView>
    </ImageBackground>
  </View>

  )
}










{/*Style*/}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {    
    flex: 1,
    justifyContent: "center",
    color:'#FFFFF',
  },

  text: {
    color: "white",
    fontSize: 42,
    lineHeight: 84,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000c0"
  },
  logoLogin :{
    width:140,height: 180,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -200,
    marginHorizontal: 140,
    paddingVertical: 100,
  },
  textheader:{
    color: '#4F2878',
    fontWeight: 'bold',
    fontSize: 18,
    marginTop: 1,
    width: 100,
    height: 20,
    marginHorizontal: 180,
    justifyContent: 'center',
    alignItems: 'center',
  },
  texttitle:{
    color:'#FE8E58',
    fontWeight: 'bold',
    fontSize: 18,
    marginTop: 1,
    width: 270,
    height: 40,
    marginHorizontal: 80,
    justifyContent: 'center',
    alignItems: 'center',
   
  },
 




});

const styles2 = StyleSheet.create({
  textinput: {
    height: 40,
    width:250,
    borderWidth: 1,
    padding:10,
    marginHorizontal: 80,
    marginVertical:100,
    marginBottom:-90,
    borderRadius: 20,
    backgroundColor: "#FFFFFF",
    borderColor: "#FFFFFF",
  },
  textinput2: {
    height: 40,
    width:250,
    borderWidth: 1,
    padding:10,
    marginHorizontal: 80,
    marginVertical:100,
    marginBottom:-80,
    borderRadius: 20,
    backgroundColor: "#FFFFFF",
    borderColor: "#FFFFFF",
  },
  buttonremem:{
    height: 1,
    width:1,
    borderWidth: 1,
    padding:10,
    marginHorizontal: 110,
    marginVertical:100,
    marginBottom:-80,
    borderRadius: 10,
    backgroundColor: "#FFFFFF",
    borderColor: "#FFFFFF",
  },
  btnsingin:{
    backgroundColor:"#FFFFFF",
    padding:10,
    marginBottom:-200,
    borderRadius: 40,
    marginHorizontal:130,
    marginVertical:120
  },
  btnsingintext:{
    color: "#FF895C",
    fontSize: 18,
    marginTop: 1,
    width: 200,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal:40,
    marginVertical:-15
  },
  btnforgotpss:{
    color:"#FFFFFF",
    fontSize: 12,
    marginBottom:-200,
    width: 150,
    height: 40,
    marginHorizontal:240,
    marginVertical:82
  },
  btnregister:{
    fontWeight: 'bold',
    color:"#FFFFFF",
    fontSize: 17,
    marginBottom:-400,
    width: 150,
    height: 40,
    marginHorizontal:175,
    marginVertical:180
  },
  separator: {
    marginBottom: -400,
    borderBottomColor: '#FFFFFF',
    borderBottomWidth: StyleSheet.hairlineWidth,
    marginVertical:385,
    marginHorizontal:175,
    width: 65,   
  },
  rememberme:{
    color:"#FFFFFF",
    fontSize: 14,
    marginBottom:-200,
    width: 150,
    height: 40,
    marginHorizontal:-33,
    marginVertical:72
  },
  remembermestyle:{
    color:"#FFFFFF",
    fontSize: 10,
    marginBottom:-200,
    width: 150,
    height: 40,
    marginHorizontal:115,
    marginVertical:173
  },


});




export default Login