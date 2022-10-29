import { View, Text,StyleSheet,Pressable,Image,ImageBackground,
    SafeAreaView,TextInput,Button,TouchableOpacity,
    Switch, } from 'react-native'
import { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';   
import React from 'react'
import Login from './Login';



const Stack = createNativeStackNavigator();

const RegisterStudent = ({navigation}) => {


 /*NavRegister*/
 const onPress = () => {
  navigation.navigate('')
}



  return (
    <View style={stylesHeader.container}>
      <ImageBackground source={require('../img/register/regisstudentBG.png')} style={stylesHeader.styleBGheader}>
            <Text style={stylesHeader.headdertext}>REGISTERATION</Text>
            <Text style={stylesHeader.texttitle}>Create your account</Text>
      </ImageBackground>
      <View style={stylesStudentregis.Vectorbox}>
            <Text style={stylesStudentregis.textstudent}>STUDENT</Text>
            <Image source={require('../img/register/studentvector.png')} style={stylesStudentregis.vectorstudent}></Image>
     
{/*TextBoxEditor*..............................*/}
      <SafeAreaView>

        <TextInput style={styleboxRegisterstudent.boxid}  placeholder={'ID'}  placeholderTextColor = "#FF895C"></TextInput>
        <TextInput style={styleboxRegisterstudent.boxid2} placeholder={'Frist Name'} placeholderTextColor = "#FF895C" ></TextInput>
        <TextInput style={styleboxRegisterstudent.boxid3} placeholder={'Last Name'}  placeholderTextColor = "#FF895C"></TextInput>
        <TextInput style={styleboxRegisterstudent.boxid3} placeholder={'School'}  placeholderTextColor = "#FF895C"></TextInput>
        <TextInput style={styleboxRegisterstudent.boxid3} placeholder={'Institute'}  placeholderTextColor = "#FF895C"></TextInput>
        <TextInput style={styleboxRegisterstudent.boxid3} placeholder={'Phone Number'}  placeholderTextColor = "#FF895C"></TextInput>



          <TouchableOpacity onPress={() => navigation.navigate('Login')}  >
        <View style={styleboxRegisterstudent.btndone} >
            <Text style={styleboxRegisterstudent.textdone}>Done</Text>
        </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Login')} >
            <Text style={styleboxRegisterstudent.cancel}>Cancel</Text>
          </TouchableOpacity>
      </SafeAreaView>
      </View>
    </View>
  )
}

const stylesHeader = StyleSheet.create ({
    container: {
        flex: 1,
        backgroundColor: '#FFF7F4',
        justifyContent: 'center',
        alignItems: 'center',
      },
      styleBGheader:{
        width:420,
        height: 480,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: -380,
        marginHorizontal: 100,
        marginVertical:100, 
      },
      headdertext:{
        marginTop:200,
        color: '#FFFFFF',
        fontWeight: 'bold',
        fontSize:20,
        marginVertical:-120,
        marginLeft:-170
       
      },
        texttitle:{
        color:'#FFFFFF',
        fontWeight: 'bold',
        fontSize:15,
        marginBottom:1,
        marginVertical:120,
        marginLeft:-180
      }

})

const stylesStudentregis = StyleSheet.create ({
    Vectorbox:{
        width:250,
        height:470,
        backgroundColor:"#FFFFFF",
        padding:10,
        marginBottom:-50,
        borderRadius: 20,
        elevation: 2,  
        borderBottomColor:'#000000',
        borderColor:'#000000',
        marginHorizontal:150,
        marginVertical:-200
      },
      textstudent:{
        fontSize:18,
        fontWeight:'bold',
        color:'#FF885C',
        width:80,
        marginTop:5,
        marginHorizontal:10,
      },
      vectorstudent:{
        marginTop:-25,
        marginHorizontal:90,
        width:25,
        height:25,
      },
     
})

/*StyboxRegisterStudent*/
const styleboxRegisterstudent = StyleSheet.create({
    boxid:{
       backgroundColor:"#FFFFFF",
       fontSize:14,
       padding:10,
       width:210,
       height:36,
       marginTop:10,
       borderRadius: 20,
       marginHorizontal:13,
       marginVertical:-100,
       elevation: 2,
       marginBottom:10,   
      },
      boxid2:{
        backgroundColor:"#FFFFFF",
        fontSize:14,
        padding:10,
        width:210,
        height:36,
        marginTop:10,
        borderRadius: 20,
        marginHorizontal:13,
        marginVertical:-90,
        elevation: 2,
        marginBottom:10,   
       },
       boxid3:{
        backgroundColor:"#FFFFFF",
        fontSize:14,
        padding:10,
        width:210,
        height:36,
        marginTop:10,
        borderRadius: 20,
        marginHorizontal:13,
        marginVertical:-100,
        elevation: 2,
        marginBottom:10,
       },
       btndone:{
        backgroundColor:"#FD9A4D",
        width:80,
        height:33,
        marginBottom:-100,
        borderRadius: 20,
        marginHorizontal:75,
        marginVertical:5
      },
      textdone:{
        marginTop:6,
        marginHorizontal:23,
        color:'#FFFFFF',
      },
      cancel:{
        color:'#FD9A4D',
        marginTop:45,
        marginHorizontal:92,
        width:80,
      }

    

})


export default RegisterStudent