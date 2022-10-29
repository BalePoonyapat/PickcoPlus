import {View, Text,StyleSheet,Pressable,Image,ImageBackground,
        SafeAreaView,TextInput,Button,TouchableOpacity,
        Switch,} from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './Login';
import RegisterStudent from './RegisterStudent';


const Stack = createNativeStackNavigator();

const Register = ({navigation}) => {

  /*NavRegister*/
  const onPress = () => {
    navigation.navigate('')
  }
 
  

  return (
    
    <View style={styles.container}>
        <ImageBackground source={require('../img/Vectorregis.png')} style={styles.Vectorregis}>
            <Text style={styles.headdertext}>REGISTERATION</Text>
            <Text style={styles.texttitle}>Create your account</Text>
        </ImageBackground>
        <View style={styles.Vector2}>
            
            <Text style={stylesforseclect.texthedder}>Select the type of user</Text>
            <Text style={stylesforseclect.texthedder2}>you want to apply </Text>           
            
            <TouchableOpacity  onPress={() => navigation.navigate('RegisterStudent')} >   
            <View style={stylesforseclect.btnstudent}  >
            <Image source={require('../img/register/studentregis1.png')} style={stylesforseclect.studentvec}></Image>
            <Text style={stylesforseclect.studenttext}>Student</Text>
            </View>
            </TouchableOpacity>
      

            <TouchableOpacity onPress={() => navigation.navigate('Registerworkplace')}>
            <View style={stylesworkplace.workbtn}>
                <Image source={require('../img/register/workplaceicon.png')} style={stylesworkplace.stylework}></Image>
                <Text style={stylesworkplace.textworkplace}>Workplace</Text>
            </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('RegisterCoach')} >
            <View style={stylesantherpeople.ppbtn} >
                <Image source={require('../img/register/people.png')} style={stylesantherpeople.pplework}></Image>
                <Text style={stylesantherpeople.textpp}>Coach/Lacturer/University EC</Text>
            </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <View style={stylebacklogin.backlogin} >
                <Text style={stylebacklogin.backlogintext}>BACK</Text>
            </View>
            </TouchableOpacity>
        </View> 
    </View>
   
  )
}







/*Styles......................................................*/ 
const styles = StyleSheet.create ({
    container: {
        flex: 1,
        backgroundColor: '#FFF6F6',
        justifyContent: 'center',
        alignItems: 'center',
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
      },
      Vectorregis:{
        width:420,
        height: 480,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: -380,
        marginHorizontal: 100,
        marginVertical:100, 
      },
      Vector2:{
        width:250,
        height:400,
        backgroundColor:"#FFFFFF",
        padding:10,
        marginBottom:-50,
        borderRadius: 20,
        borderBottomColor:'#000000',
        borderColor:'#000000',
        marginHorizontal:150,
        marginVertical:-200
      },
     


})
/*Styles..blockStudent..*/
const stylesforseclect = StyleSheet.create({
      texthedder:{
        color:'#FD9A4D',
        marginTop:1,
        width:200,
        marginHorizontal:45
      },
      texthedder2:{
        color:'#FD9A4D',
        marginTop:1,
        marginHorizontal:60
      },
      btnstudent:{
        backgroundColor:"#FD9A4D",
        padding:10,
        width:200,
        height:60,
        marginTop:20,
        borderRadius: 10,
        marginHorizontal:17,
        marginVertical:1
      },
      studentvec:{
        width:40,
        height:40,
      },
      studenttext:{
            color:'#FFFFFF',
            fontWeight: 'bold',
            width:80,
            fontSize:18,
            marginBottom:1,
            marginVertical:-30,
            marginHorizontal:70,
      }
})
/*Styles..blockworkplace..*/
const stylesworkplace = StyleSheet.create({
    workbtn:{
        backgroundColor:"#6248A1",
        padding:10,
        width:200,
        height:60,
        marginTop:20,
        borderRadius: 10,
        marginHorizontal:17,
        marginVertical:1
    },
    stylework:{
        width:40,
        height:40,
    },
    textworkplace:{
        color:'#FFFFFF',
        fontWeight: 'bold',
        width:100,
        fontSize:18,
        marginBottom:1,
        marginVertical:-30,
        marginHorizontal:70,
    }
})
/*Styles..blockworkplace..*/
const stylesantherpeople = StyleSheet.create({
    ppbtn:{
        backgroundColor:"#9862B0",
        padding:10,
        width:200,
        height:60,
        marginTop:20,
        borderRadius: 10,
        marginHorizontal:17,
        marginVertical:1
    },
    pplework:{
        width:28,
        height:28,
        marginVertical:5,
        marginHorizontal:5
    },
    textpp:{
        color:'#FFFFFF',
        fontWeight: 'bold',
        width:150,
        fontSize:18,
        marginBottom:1,
        marginVertical:-41,
        marginHorizontal:50,
    }
})
const stylebacklogin = StyleSheet.create({
    backlogin:{
        backgroundColor:"#FD9A4D",
        padding:10,
        width:100,
        height:30,
        marginTop:20,
        borderRadius: 30,
        marginHorizontal:65,
        marginVertical:1
    },
    backlogintext:{
        color:'#FFFFFF',
        width:50,
        height:30,
        fontSize:13,
        fontWeight:'bold',
        marginTop:-4,
        marginHorizontal:22,
    }
})


export default Register