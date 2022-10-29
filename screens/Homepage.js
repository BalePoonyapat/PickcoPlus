import {View, Text,StyleSheet,Pressable,Image,ImageBackground,
  SafeAreaView,TextInput,Button,TouchableOpacity,
  Switch,useState} from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';







  

const Homepage = ({navigation}) => {

 {/*NavRegister*/}
 const onPress = () => {
  navigation.navigate('')
}



  return (
    <View style={{flex:1, justifyContent:'flex-start',alignItems:'flex-end',backgroundColor:"#FFFFFF"}}>
      <View>
        <View>
            <Image source={require('../img/homepage/profilehome.png')} style={styles.imgprofile}/>
            <Text style={styles.textname}>XXXXXXX</Text>
            <Text style={styles.headermenu}>Select menu</Text>
        </View>
        <View>
            <TouchableOpacity  onPress={() => navigation.navigate('PopularCours')}  >   
            <View style={stylebottoncurse.btnCourse}>
            <Image source={require('../img/homepage/course.png')} ></Image>
            <Text style={stylebottoncurse.fontcourse}>Course</Text>
            </View>
            </TouchableOpacity>

            <TouchableOpacity  onPress={() => navigation.navigate('Matching')}  >   
            <View style={stylebottonmatching.btnmat}>
            <Image source={require('../img/homepage/mat.png')} ></Image>
            <Text style={stylebottonmatching.fontmat}>Matching</Text>
            </View>
            </TouchableOpacity>   
        </View>
       <View>
       <Text style={styles.headermenu}>Course introduction</Text>
            <TouchableOpacity  onPress={() => navigation.navigate('')}  >   
            <View style={styleintro.btnintro}>
            <Image source={require('../img/homepage/Logo1.png')} style={styleintro.imgitro} ></Image>
            <Text style={styleintro.fontintro}></Text>
            </View>
            </TouchableOpacity>

            <TouchableOpacity  onPress={() => navigation.navigate('')}  >   
            <View style={styleintro.btnintro2}>
            <Image source={require('../img/homepage/Logo1.png')} style={styleintro.imgitro} ></Image>
            </View>
            </TouchableOpacity>   
       


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

const stylebottoncurse = StyleSheet.create({
  container:{
    flex: 1,
  },
  btnCourse:{
    backgroundColor:"#FD9A4D",
    padding:10,
    width:150,
    height:60,
    marginTop:20,
    borderRadius: 10,
    marginHorizontal:-120,
    marginVertical:-90
  },
  fontcourse:{
    fontSize:18,
    width:200,
    fontWeight:'bold',
    marginHorizontal:45,
    marginVertical:-35,
    color:'#FFFFFF'
  },
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



export default Homepage