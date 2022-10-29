import {View, Text,StyleSheet,Pressable,Image,ImageBackground,
    SafeAreaView,TextInput,Button,TouchableOpacity,
    Switch,useState} from 'react-native'
  import React from 'react'
  import { NavigationContainer } from '@react-navigation/native';
  import { createNativeStackNavigator } from '@react-navigation/native-stack';
  
  
  
  
const PopularCours = ({navigation}) => {

 {/*NavRegister*/}
 const onPress = () => {
    navigation.navigate('')
  }

  return (
    <View style={{flex:1, justifyContent:'flex-start',alignItems:'flex-end',backgroundColor:"#FFFFFF"}}>
    <View>
      <View>
          <TouchableOpacity  onPress={() => navigation.navigate('PopularCours')}  >   
          <View style={stylebottpopular.btnpopular}>
          <Image source={require('../img/popularcourse/Popular.png')} style={stylebottpopular.imgpopular} ></Image>
          <Text style={stylebottpopular.fontpopular}>Course</Text>
          </View>
          </TouchableOpacity>

          <TouchableOpacity  onPress={() => navigation.navigate('EnglishSkill')}  >   
          <View style={stylebottEng.btneng}>
          <Image source={require('../img/popularcourse/English.png')} style={stylebottEng.imgeng} ></Image>
          <Text style={stylebottEng.fonteng}>English Skill</Text>
          </View>
          </TouchableOpacity>

          <TouchableOpacity  onPress={() => navigation.navigate('Mobileskill')}  >   
          <View style={stylebottmobile.btnmobile}>
          <Image source={require('../img/popularcourse/Mobile.png')} style={stylebottmobile.imgmobile} ></Image>
          <Text style={stylebottmobile.fontmobile}>Mobile Skill</Text>
          </View>
          </TouchableOpacity>

          <TouchableOpacity  onPress={() => navigation.navigate('mycoourse')}  >   
          <View style={stylebottmycourse.btnmycourse}>
          <Image source={require('../img/popularcourse/mycourse.png')} style={stylebottmycourse.imgmycourse} ></Image>
          <Text style={stylebottmycourse.fontmycourse}>Mycourse</Text>
          </View>
          </TouchableOpacity>

         
      </View>
     <View>
     


     </View>
    </View>
  </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    image: {    
      flex: 1,
      justifyContent: "center",
      color:'#FFFFF',
    },
    textname:{
      fontSize:18,
      fontWeight:'bold',
      marginHorizontal:-3
  
  
    },
    imgprofile:{
      marginTop:20,
      marginHorizontal:-40,
    },
    headermenu:{
      fontSize:16,
      fontWeight:'bold',
      marginHorizontal:-120
    }
    
  
  });
  
  const stylebottpopular = StyleSheet.create({
    container:{
      flex: 1,
    },
    btnpopular:{
      backgroundColor:"#FFFFFF",
      padding:10,
      width:70,
      height:70,
      marginTop:20,
      borderRadius: 10,
      marginHorizontal:-120,
      marginVertical:-90,
      elevation: 4,
    },
    fontpopular:{
      fontSize:10,
      width:200,
      fontWeight:'bold',
      marginHorizontal:10,
      marginVertical:10,
      color:'#494949'
    },
    imgpopular:{
        marginHorizontal:15,
    }
  }) 
  
  const stylebottEng = StyleSheet.create({
    container:{
      flex: 1,
    },
    btneng:{
      backgroundColor:"#FFFFFF",
      padding:10,
      width:70,
      height:70,
      marginTop:20,
      borderRadius: 10,
      marginHorizontal:-40,
      marginVertical:-90,
      elevation: 4,
    },
    fonteng:{
      fontSize:10,
      width:200,
      fontWeight:'bold',
      marginHorizontal:-1,
      marginVertical:10,
      color:'#494949'
    },
    imgeng:{
        marginHorizontal:8,
    }
  }) 

  const stylebottmobile = StyleSheet.create({
    container:{
      flex: 1,
    },
    btnmobile:{
      backgroundColor:"#FFFFFF",
      padding:10,
      width:70,
      height:70,
      marginTop:20,
      borderRadius: 10,
      marginHorizontal:40,
      marginVertical:10,
      elevation: 4,
    },
    fontmobile:{
      fontSize:10,
      width:200,
      fontWeight:'bold',
      marginHorizontal:-1,
      marginVertical:10,
      color:'#494949'
    },
    imgmobile:{
        marginHorizontal:15,
    }
  }) 
  const stylebottmycourse = StyleSheet.create({
    container:{
      flex: 1,
    },
    btnmycourse:{
      backgroundColor:"#FFFFFF",
      padding:10,
      width:70,
      height:70,
      marginTop:20,
      borderRadius: 10,
      marginHorizontal:120,
      marginVertical:-140,
      marginRight:50,
      marginTop:-80,
      elevation: 4,
    },
    fontmycourse:{
      fontSize:10,
      width:200,
      fontWeight:'bold',
      marginHorizontal:2,
      marginVertical:10,
      color:'#494949'
    },
    imgmycourse:{
        marginHorizontal:10,
    }
  }) 


  const stylebottonmatching = StyleSheet.create({
    container:{
      flex: 1,
    },
    btnmat:{
      backgroundColor:"#FD9A4D",
      padding:10,
      width:150,
      height:60,
      marginTop:20,
      borderRadius: 10,
      marginHorizontal:40,
      marginVertical:30,
    },
    fontmat:{
      fontSize:18,
      width:200,
      fontWeight:'bold',
      marginHorizontal:45,
      marginVertical:-35,
      color:'#FFFFFF'
    }
  }) 
  
  const styleintro = StyleSheet.create({
    container:{
      flex: 1,
    },
    btnintro:{
      backgroundColor:"#FFA966",
      padding:10,
      width:150,
      height:200,
      marginTop:20,
      borderRadius: 10,
      marginHorizontal:-120,
      marginVertical:-90
    },
    fontintro:{
      fontSize:18,
      width:200,
      fontWeight:'bold',
      marginHorizontal:45,
      marginVertical:-35,
      color:'#FFFFFF'
    },
    imgitro:{
      height:120,
      width:100,
      marginVertical:30,
      marginHorizontal:10
    },
    btnintro2:{
      backgroundColor:"#FFA966",
      padding:10,
      width:150,
      height:200,
      marginTop:-110,
      borderRadius: 10,
      marginHorizontal:50,
      marginVertical:500
    },
  }) 


export default PopularCours