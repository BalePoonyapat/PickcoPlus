import {View, Text,StyleSheet,Pressable,Image,ImageBackground,
  SafeAreaView,TextInput,Button,TouchableOpacity,
  Switch,useState,ScrollView, Alert,} from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { color } from 'react-native-reanimated';

const CoopScreen = ({navigation}) => {
  
  const Header = () => {
    return(
    <View style={styleHeader.headergroud}>
          <Text style={styleHeader.texthead}>PICKCO</Text>
    </View>
    )
  }

  const Searchbar = () => {
    return(
        <View style={styleSearchbar.searchgroud}>
            <View style={styleSearchbar.boxsearc}> 
                <TextInput >
                 
                </TextInput>
                 <Image source={require('../img/popularcourse/search.png')} style={styleSearchbar.imgsearch}></Image>
            </View>
            
        </View>
    )        
  }

  const Buttonlayout = () => {
    return(
        <View style={styleBottonlayout.Bottonlayoutgroud}  >
  
           <TouchableOpacity style={styleBottonlayout.Matchingbox}  onPress={() => navigation.navigate('Matching')}>
                <Image source={require('../img/Matching/Matching.png')}></Image>
                <Text style={styleBottonlayout.fontbutton}>Matching</Text>
           </TouchableOpacity>
  
           <TouchableOpacity style={styleBottonlayout.Matchingbox} onPress={() => navigation.navigate('CoopScreen')}>
                <Image source={require('../img/Matching/Coop.png')}></Image>
                <Text style={styleBottonlayout.Myfontbutton}>Co-op</Text>
           </TouchableOpacity>
  
        </View>
    )        
  }
  
  const CoopSelect = () => {
    return(
      <View style={stylecoopseclect.groudL}>
          <View style={stylecoopseclect.box}>

            <View style={stylecoopseclect.boxinsid}>
                  <View style={stylecoopseclect.boxinsid2}>
                    <Text style={stylecoopseclect.text}>Company Name</Text>
                    <Text style={{textAlign:'center'}}>Detail</Text>
                    
                    <View style={stylecoopseclect.boxbot}>     
                          <TouchableOpacity style={stylecoopseclect.view} >
                            <Text style={stylecoopseclect.text2}>View more</Text>
                          </TouchableOpacity>

                          <TouchableOpacity style={stylecoopseclect.view2} onPress={() => Alert.alert("Success")}> 
                            <Text style={stylecoopseclect.text2}>Co-op</Text>
                          </TouchableOpacity>
                    </View>
                  </View>
            </View>
            </View>


          
          <View style={stylecoopseclect.box}>

              <View style={stylecoopseclect.boxinsid}>
                  <View style={stylecoopseclect.boxinsid2}>
                    <Text style={stylecoopseclect.text}>Company Name</Text>
                    <Text style={{textAlign:'center'}}>Detail</Text>
            
                    <View style={stylecoopseclect.boxbot}>     
                      <TouchableOpacity style={stylecoopseclect.view}>
                         <Text style={stylecoopseclect.text2}>View more</Text>
                      </TouchableOpacity>

                      <TouchableOpacity style={stylecoopseclect.view2} onPress={() => Alert.alert("Success")}>
                          <Text style={stylecoopseclect.text2}>Co-op</Text>
                      </TouchableOpacity>
            </View>
          </View>

     

          </View>
          </View>


        


      </View>
    )
  }
  const Bottommid = () => {
      return(
        <View style={stybotmid.groud} >
              <TouchableOpacity style={stybotmid.boxhome} onPress={() => navigation.navigate('Homepage')}>
                    <Image source={require('../img/iconbottom/homapage2.png')}></Image>
              </TouchableOpacity>

              <TouchableOpacity style={stybotmid.boxmassage}  onPress={() => navigation.navigate('Massagescreens')}>
                    <Image source={require('../img/iconbottom/Massage.png')}></Image>
               </TouchableOpacity>

               <TouchableOpacity style={stybotmid.boxprofile}  onPress={() => navigation.navigate('Profilescreens')}>
                    <Image source={require('../img/iconbottom/profileicon.png')}></Image>
               </TouchableOpacity>

        </View>
      )
  }

 
  
  
  
  return (
    <SafeAreaView style={stylecon.container}>
        <ScrollView>
          <Header/>
          <Searchbar/>
          <Buttonlayout/>
          <CoopSelect/>
        </ScrollView>
          <Bottommid/>
    </SafeAreaView>
  )
}


  const stylecon = StyleSheet.create({
    container:{
      flex:1,
      backgroundColor:'#fff'
    }
  })

   /*style Header*/ 
 const styleHeader = StyleSheet.create({
  container:{
    flex:1,
    height:'100%'
  },
  headergroud:{
      width:'100%',
      height:40,
      backgroundColor:'#fff',
      justifyContent:'center',
  },
  texthead:{
    fontSize:18,
    fontWeight:'bold',
    color:'#FD9A4D'
  }
})
/*style styleSearchbar*/ 
const styleSearchbar = StyleSheet.create({
  container:{
    flex:1
  },
  searchgroud:{
      width:'100%',
      height:80,
      backgroundColor:'#fff',
      alignItems:'center',
      justifyContent:'center'
  },
  boxsearc:{
    width:'80%',
    height:'40%',
    backgroundColor:'#F5F4F4',
    borderRadius:20,
  },
  imgsearch:{
    width:'5%',
    alignContent:'center',
    justifyContent:'center',
    marginLeft:'90%',
    marginTop:-24
    
  }

})
 /*style Bottonlayout*/ 
 const styleBottonlayout = StyleSheet.create({
  container:{
    flex:1
  },
  Bottonlayoutgroud:{
      width:'100%',
      height: 80,
      backgroundColor:'#fff',
      padding:2,
      flexDirection:'row',
      alignItems:'center',
      justifyContent:'center',
      
  },
  Matchingbox:{
    marginHorizontal:3,
    width: '20%',
    height:'80%',
    backgroundColor:'#FFFFFF',
    padding:4,
    borderRadius:10,
    alignItems:'center',
    justifyContent:'center',
    elevation: 4,   
  },
  fontbutton:{
    width:'100%',
    fontWeight:'bold',
    fontSize:12,
    marginRight:-20
  },
  Myfontbutton:{
    width:'100%',
    fontWeight:'bold',
    fontSize:12,
    marginRight:-35
  }




})

  const stylecoopseclect = StyleSheet.create({
    groudL:{
      width:'100%',
      height:600,
      elevation:10,
      backgroundColor:'#fff',
      flexDirection:'column',
      alignItems:'center',
      padding:20
    },
    box:{
      width:350,
      height:140,
      elevation:10,
      borderRadius:20,
      backgroundColor:'#fff',
      flexDirection:'row',
      padding:5,
      marginVertical:10
    },
    boxinsid:{
      borderRadius:20,
      width:120,
      height:'100%',
      backgroundColor:'#FD9A4D',
      
    },
    boxinsid2:{
      borderRadius:20,
      width:200,
      height:'100%',
      backgroundColor:'#fff',  
      marginLeft:130,
      flexDirection:'column',
      padding:5
    },
    text:{
      textAlign:'center', 
      fontSize:18,
      fontWeight:"bold",
      color:'#FD9A4D'
    },
    boxbot:{
      width:'100%',
      height:50,
      backgroundColor:'#fff',
      borderRadius:20,
      marginVertical:30,
      justifyContent:'center',  
      flexDirection:'row'
    },
    text2:{
        fontSize:16,
        fontWeight:'bold',
        color:'#fff'
    },
    view:{
      height:35,
      width:90,
      borderRadius:15,
      backgroundColor:'#FD9A4D',
      justifyContent:'center',
      alignItems:'center',
      marginHorizontal:5
    },
    view2:{
      height:35,
      width:90,
      borderRadius:15,
      backgroundColor:'#3E3E3E',
      justifyContent:'center',
      alignItems:'center'
    }

  })
  const stybotmid = StyleSheet.create({
    groud:{
      backgroundColor:'#fff',
      height:70,
      width:'80%',
      borderRadius:20,
      marginVertical:-20,
      marginHorizontal:50,
      elevation:10,
      alignItems:'center',
      justifyContent:'center',
      flexDirection:'row'
    },
    boxhome:{
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
      marginTop:0,
         
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
      marginTop:0,
         
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
      elevation:10
         
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
      elevation:10
         
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
      elevation:10
         
    },
  })


 
 
  

export default CoopScreen