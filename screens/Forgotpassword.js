import {View, Text,StyleSheet,Pressable,Image,ImageBackground,
    SafeAreaView,TextInput,Button,TouchableOpacity,
    Switch,} from 'react-native';
import React from 'react';

const Forgotpassword = ({navigation}) => {

  const onPress = () => {
    navigation.navigate('')
  }

  return (
    <View style={styles.container}>
      <View>
         <Text style={styles.Textheader}>FORGOT PASSWORD</Text>
         <Image source={require('../img/forgot/forgot1.png')} style={styles.stylelogoforgot}></Image>
      </View>
      
         <Text style={styles.textdetail}>Select which contact details should</Text>
         <Text style={styles.textdetail2}>we use to reset your password.</Text>
         <TouchableOpacity>
         <View style={stylebot.container}>
          <Image source={require('../img/forgot/phon1.png')} style={stylebot.bottomphone}></Image>
          <Text style={stylebot.numberphone}>0555555</Text>
          <Text style={stylebot.textPhone}>Via:SMS</Text>
          </View> 
       </TouchableOpacity>
       <TouchableOpacity>
        <View style={stylebot.containeremail}>
          <Image  source={require('../img/forgot/mail1.png')} style={stylebot.botemail}></Image>
          <Text style={stylebot.textmail}>Via:Email</Text>
          <Text style={stylebot.emailsent}>A@gamil</Text>
        </View>
       </TouchableOpacity>
       <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <View style={stylebot.bottomback}>
          <Text style={stylebot.fontback}>BACK</Text>
        </View>
        
       </TouchableOpacity>

    </View>
  

  )
}




const styles = StyleSheet.create ({
    container: {
        flex: 1,
        backgroundColor: '#FBFBFB',
        justifyContent: 'center',
        alignItems: 'center',
      },
    Textheader:{
        color:'#FD9555',
        fontSize:26,
        fontWeight:'bold',
        marginVertical:-280,
        marginBottom:-160,
   },
   stylelogoforgot:{
        marginBottom:-150,
        marginVertical:180,
        marginLeft:25,
   },
   textdetail:{
        width:400,
        color:'#FD9A4D',
        fontSize:18,
        marginTop:1,
        marginRight:-120,
        marginHorizontal:-20,
        marginRight:-140,  
        
   },
   textdetail2:{
    width:400,
    color:'#FD9A4D',
    fontSize:18,
    marginTop:1,
    marginRight:-140,
    marginHorizontal:22,
   },

})
const stylebot = StyleSheet.create({
  /*styleForgetpassword Phone*/    
  container:{
      backgroundColor:"#FFFFFF",
      width:250,
      height:80,
      borderRadius: 20,
      marginHorizontal:130,
      marginVertical:30,
      marginBottom:-150,
      elevation: 2,
    },
    bottomphone :{
      marginVertical:5
    },
    textPhone:{
      fontWeight:'bold',
      fontSize:14,
      marginHorizontal:70,
      marginVertical:10
    },
    numberphone:{
      color:'#FD9A4D',
      fontWeight:'bold',
      fontSize:14,
      marginHorizontal:70,
      marginVertical:-50,
      
    },
  /*styleForgetpassword Email*/  
  containeremail:{
    backgroundColor:"#FFFFFF",
    width:250,
    height:80,
    borderRadius: 20,
    marginHorizontal:130,
    marginVertical:130,
    marginBottom:-200,
    elevation: 2,
  },
  botemail:{
    marginVertical:13,
    marginHorizontal:10
  },  
  textmail:{
    fontWeight:'bold',
      fontSize:14,
      marginHorizontal:75,
      marginVertical:-70
  },
  emailsent:{
    color:'#FD9A4D',
    fontWeight:'bold',
    fontSize:14,
    marginHorizontal:75,
    marginVertical:70,
    marginBottom:-40,
  },
  bottomback:{
    backgroundColor:"#FD9A4D",
    width:80,
    padding:10,
    marginBottom:-300,
    borderRadius: 40,
    marginHorizontal:200,
    marginVertical:220,
    justifyContent: 'center',
    alignItems: 'center' 
  },
  fontback:{
    fontWeight:'bold',
    color:'#FFFFFF',
  }
  
}) 


export default Forgotpassword