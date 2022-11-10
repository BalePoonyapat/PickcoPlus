import {View, Text,StyleSheet,Pressable,Image,ImageBackground,
  SafeAreaView,TextInput,Button,TouchableOpacity,
  Switch,useState,ScrollView} from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';







  

const Homepage = ({navigation}) => {

  const dummyData = [
    'มีสินทรัพย์ เทคโนโลยี จำกัด'
  ];


  const Header = () => {
    return(
        <View style={styleheader.headergoud}>
            <Text style={styleheader.fonthed}>PICKCO</Text>
        </View>
    )        
  }

  const Imgprofile = () => {
    return(
      <View style={styleimg.gound}>
            <Image source={require('../img/homepage/profilehome.png')}></Image>
            <Text style={styleimg.fontimgname}>Wiwat</Text>
           
      </View>
    )
  }

  const Textselect = () => {
    return(
        <View style={styeselcet.gound}>
              <Text style={styeselcet.text}>Select menu</Text>
        </View>
    )
  }

  const Menuselect = () => {
    return(  
        <View style={stlyemainmenu.gound}>    
            <TouchableOpacity style={stlyemainmenu.boxcourse} onPress={() => navigation.navigate('PopularCours')}>
                  <Image source={require('../img/homepage/course.png')} style={stlyemainmenu.imgset}></Image>
                  <Text style={stlyemainmenu.textcourse}>Course</Text>
            </TouchableOpacity>

            <TouchableOpacity style={stlyemainmenu.boxcourse2} onPress={() => navigation.navigate('Matching')}>
                  <Image source={require('../img/homepage/mat.png')} style={stlyemainmenu.imgset2}></Image>
                  <Text style={stlyemainmenu.textcourse2}>Matching</Text>
            </TouchableOpacity>
         </View>    
    )
  }
  const TextCourseintroduction = () => {
    return(
        <View style={styeselcet.gound}>
              <Text style={styleCourseintroduction.text}>Course introduction</Text>
        </View>
    )
  }
  

  const Courseintroduction = () => {
      return(

          <SafeAreaView style={styleCourseintroduction.introgound}>
                <ScrollView horizontal={true}>
                      
                      <TouchableOpacity style={styleCourseintroduction.boxintro}>
                          <Text>cu</Text>
                              <View style={styleCourseintroduction.detail}>
                                  <Text>Detail</Text>
                              </View>
                      </TouchableOpacity>

                      <TouchableOpacity style={styleCourseintroduction.boxintro2}>
                          <Text>cu</Text>
                               <View style={styleCourseintroduction.detail}>
                                  <Text>Detail</Text>
                              </View>
                      </TouchableOpacity>

                      <TouchableOpacity style={styleCourseintroduction.boxintro}>
                          <Text>cu</Text>
                          <   View style={styleCourseintroduction.detail}>
                                  <Text>Detail</Text>
                              </View>
                      </TouchableOpacity>

                      <TouchableOpacity style={styleCourseintroduction.boxintro2}>
                          <Text>cu</Text>
                              <View style={styleCourseintroduction.detail}>
                                  <Text>Detail</Text>
                              </View>
                      </TouchableOpacity>

                </ScrollView>

                <View style={stybottommid.ground}>
                        <TouchableOpacity style={stybottommid.boxHome}  onPress={() => navigation.navigate('Homepage')}>
                            <Image source={require('../img/iconbottom/homapage2.png')}></Image>
                        </TouchableOpacity>

                        <TouchableOpacity style={stybottommid.boxmassage}  onPress={() => navigation.navigate('Massagescreens')}>
                            <Image source={require('../img/iconbottom/Massage.png')}></Image>
                        </TouchableOpacity>

                    

                        <TouchableOpacity style={stybottommid.boxprofile}  onPress={() => navigation.navigate('Profilescreens')}>
                            <Image source={require('../img/iconbottom/profileicon.png')}></Image>
                        </TouchableOpacity>
                </View>
          </SafeAreaView>

      )    
  }
 
  





  return (
    <View style={styles.container}>
        <Header/>
        <Imgprofile/>
        <Textselect/>
        <Menuselect/>
        <TextCourseintroduction/>
        <Courseintroduction/>
      

    </View>
  )
}





      const styles = StyleSheet.create({
        container: {
          flex: 1,
          backgroundColor:'#fff'

        },

      });

      const styleheader = StyleSheet.create({
        headergoud:{
            backgroundColor:'#FFFFFF',
            height:40,
            width:'100%',
            justifyContent:'center'
        },
        fonthed:{
            fontSize:18,
            fontWeight:'bold',
            color:'#FD9A4D'
        }
      });

      const styleimg = StyleSheet.create({
        gound:{
          backgroundColor:'#FFFFFF',
          height:200,
          width:'100%',
          justifyContent:'center',
          alignItems:'center'
        },
        imgscale:{

        },
        fontimgname:{
          fontSize:18,
          fontWeight:'bold',
          color:'#494949'
          
        }
      });

      const styeselcet = StyleSheet.create({
        
          gound:{
            backgroundColor:'#fff',
            height:20,
            width:'100%',
            marginHorizontal:20
          },
          text:{
            fontSize:18,
            fontWeight:'bold',
            color:'#494949'
          }
        
      })

      const stlyemainmenu = StyleSheet.create({
        gound:{
          backgroundColor:'#fff',
          height:100,
          width:'100%',
          justifyContent:'center',
          alignItems:'center',
          flexDirection:'row'
        },
        boxcourse:{
          height:70,
          width:140,
          backgroundColor:'#9862B0',
          borderRadius:20,
          justifyContent:'center',
          marginHorizontal:10  
        },
        boxcourse2:{
          height:70,
          width:140,
          backgroundColor:'#6248A1',
          borderRadius:20,
          justifyContent:'center',      
        },
        imgset:{
          marginHorizontal:10
        },
        imgset2:{
          marginHorizontal:10,  
        },
        textcourse:{
          color:'#ffffff',
          fontWeight:'bold',
          fontSize:18,
          width:100,
          marginHorizontal:65,
          marginVertical:10,
          marginTop:-30
          
          
        },
        textcourse2:{
          color:'#ffffff',
          fontWeight:'bold',
          fontSize:18,
          width:100,
          marginHorizontal:60,
          marginVertical:10,
          marginTop:-35
          
          
        }



      });
      
      const styleCourseintroduction = StyleSheet.create({
          introgound:{
                  flex:1,
                  backgroundColor:'#fff',
                  elevation:10,
                  padding:3,
                  height:'100%',
                  width:'100%',
                  flexDirection:'column',  
                  justifyContent:'center',
                  alignItems:'center'         
          },
          text:{
            fontSize:18,
            fontWeight:'bold',
            color:'#494949'
          },
          boxintro:{
            width:120,
            height:200,
            backgroundColor:'#FFA966',
            borderRadius:20,
            marginVertical:10,
            alignItems:'center' ,
            marginHorizontal:10,
            elevation:5   
          },
          boxintro2:{
            width:120,
            height:200,
            backgroundColor:'#FFA966',
            borderRadius:20,
            marginVertical:10,
            alignItems:'center'    
          },
          detail:{
            width:'99%',
            height:90,
            backgroundColor:'#242424',
            borderRadius:19,
            opacity:0.5,
            marginVertical:90,
            alignItems:'center'   
          },



      })

      const stybottommid = StyleSheet.create({
        ground:{
          backgroundColor:'#fff',
          width:'80%',
          height:80,
          borderRadius:20,
          marginVertical:-30,
          elevation:20,
          flexDirection:'row',
          justifyContent:'center'
        },
        boxHome:{
          marginHorizontal:3,
          width: '20%',
          height:'70%',
          backgroundColor:'#FFFFFF',
          padding:4,
          borderRadius:10,
          alignItems:'center',
          justifyContent:'center',
          
             
        },
        boxprofile:{
          marginHorizontal:3,
          width: '20%',
          height:'70%',
          backgroundColor:'#FFFFFF',
          padding:4,
          borderRadius:10,
          alignItems:'center',
          justifyContent:'center',
         
             
        },
        boxmassage:{
          marginHorizontal:3,
          width: '20%',
          height:'70%',
          backgroundColor:'#FFFFFF',
          padding:4,
          borderRadius:10,
          alignItems:'center',
          justifyContent:'center',
          
             
        },
      })





export default Homepage