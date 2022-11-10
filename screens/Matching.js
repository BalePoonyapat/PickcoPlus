import {View, Text,StyleSheet,Pressable,Image,ImageBackground,
  SafeAreaView,TextInput,Button,TouchableOpacity,
  Switch,useState,ScrollView, Alert,} from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { color } from 'react-native-reanimated';





const Matching = ({navigation}) => {

    const dummyData = [
      'มีสินทรัพย์ เทคโนโลยี จำกัด'
    ];




const Header =() =>{
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

const Viewlayotcollect = () => {
  
    return(
    
    <SafeAreaView style={stylelayoutcollect.safeview}>
        <Text style={stylelayoutcollect.fonstheaderrec}>Recommended company</Text>
          
      <ScrollView>

        <ScrollView  horizontal={true}>
            <View style={{height:140, width:'100%', backgroundColor:'#FFFFF', padding:2, flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
                        <TouchableOpacity style={stylelayoutcollect.boxinside} onPress={() => navigation.navigate('CompanyDetailScreen')}>
                                <View style={stylelayoutcollect.boximg2}></View>
                                <View style={stylelayoutcollect.boxtex}>
                                            <Text style={{width:200}}> บริษัท จิน เวล ซีเล็คเท็ด จำกัด</Text>
                                            <Text>  Detail </Text>
                                        <TouchableOpacity style={stylelayoutcollect.Viewmor} onPress={() => Alert.alert("Success")}>
                                            <Text style={stylelayoutcollect.viewtex}>Get to Co-op</Text>
                                        </TouchableOpacity>

                                  </View>
                        </TouchableOpacity>
                 
                


            </View>
        </ScrollView>

        <Text style={{fontSize:16, fontWeight:'bold', color:'#494949', marginHorizontal:10}}>General company</Text>
{/*GeneralView*/}
          <ScrollView horizontal={true} style={{padding:5}}>
              <View style={{height:140, width:'100%', backgroundColor:'#FFFFF', padding:2, flexDirection:'row', }}>
                      
                       <TouchableOpacity style={stylegover.boxinside} onPress={() => navigation.navigate('CompanyDetailScreen')}>
                              <View style={stylegover.boximg2}></View>
                              <Text>Work1</Text>
                              <Text>Detail</Text>
                          <TouchableOpacity style={stylegover.Viewmor} onPress={() => Alert.alert("Success")}>
                              <Text style={stylegover.viewtex}>Get to Co-op</Text>
                          </TouchableOpacity>
                      </TouchableOpacity>

                      <TouchableOpacity style={stylegover.boxinside2} onPress={() => navigation.navigate('CompanyDetailScreen')}>
                              <View style={stylegover.boximg3}></View>
                              <Text>Work1</Text>
                              <Text>Detail</Text>
                          <TouchableOpacity style={stylegover.Viewmor} onPress={() => Alert.alert("Success")}>
                              <Text style={stylegover.viewtex}>Get to Co-op</Text>
                          </TouchableOpacity>
                      </TouchableOpacity>

                      <TouchableOpacity style={stylegover.boxinside} onPress={() => navigation.navigate('CompanyDetailScreen')}>
                              <View style={stylegover.boximg2}></View>
                              <Text>Work1</Text>
                              <Text>Detail</Text>
                          <TouchableOpacity style={stylegover.Viewmor} onPress={() => Alert.alert("Success")}>
                              <Text style={stylegover.viewtex}>Get to Co-op</Text>
                          </TouchableOpacity>
                      </TouchableOpacity>

                      <TouchableOpacity style={stylegover.boxinside2} onPress={() => navigation.navigate('CompanyDetailScreen')}>
                              <View style={stylegover.boximg3}></View>
                              <Text>Work1</Text>
                              <Text>Detail</Text>
                          <TouchableOpacity style={stylegover.Viewmor} onPress={() => Alert.alert("Success")}>
                              <Text style={stylegover.viewtex}>Get to Co-op</Text>
                          </TouchableOpacity>
                      </TouchableOpacity>






              </View>
          </ScrollView>
        <Text style={{fontSize:16, fontWeight:'bold', color:'#494949', marginHorizontal:10}}>Government company</Text>
{/*GovermentView*/}
          <ScrollView horizontal={true} style={{padding:5}}>
                
                <View style={{height:140, width:'100%', backgroundColor:'#FFFFF', padding:5, flexDirection:'row', }}>
                      
                      <TouchableOpacity style={stylegover.boxinside} onPress={() => navigation.navigate('CompanyDetailScreen')}>
                              <View style={stylegover.boximg2}></View>
                              <Text>Work1</Text>
                              <Text>Detail</Text>
                          <TouchableOpacity style={stylegover.Viewmor} onPress={() => Alert.alert("Success")}>
                              <Text style={stylegover.viewtex}>Get to Co-op</Text>
                          </TouchableOpacity>
                      </TouchableOpacity>

                      <TouchableOpacity style={stylegover.boxinside2} onPress={() => navigation.navigate('CompanyDetailScreen')}>
                              <View style={stylegover.boximg3}></View>
                              <Text>Work1</Text>
                              <Text>Detail</Text>
                          <TouchableOpacity style={stylegover.Viewmor} onPress={() => Alert.alert("Success")}>
                              <Text style={stylegover.viewtex}>Get to Co-op</Text>
                          </TouchableOpacity>
                      </TouchableOpacity>
                      
                      <TouchableOpacity style={stylegover.boxinside} onPress={() => navigation.navigate('CompanyDetailScreen')}>
                              <View style={stylegover.boximg2}></View>
                              <Text>Work1</Text>
                              <Text>Detail</Text>
                          <TouchableOpacity style={stylegover.Viewmor} onPress={() => Alert.alert("Success")}>
                              <Text style={stylegover.viewtex}>Get to Co-op</Text>
                          </TouchableOpacity>
                      </TouchableOpacity>

                      <TouchableOpacity style={stylegover.boxinside2} onPress={() => navigation.navigate('CompanyDetailScreen')}>
                              <View style={stylegover.boximg3}></View>
                              <Text>Work1</Text>
                              <Text>Detail</Text>
                          <TouchableOpacity style={stylegover.Viewmor} onPress={() => Alert.alert("Success")}>
                              <Text style={stylegover.viewtex}>Get to Co-op</Text>
                          </TouchableOpacity>
                      </TouchableOpacity>
                  

                      
          




                </View>
            </ScrollView>

          
              


          {/* <ScrollView >  
                  {
                    dummyData.map((item, index) => (
                      
                      <TouchableOpacity style={stylelayoutcollect.boxinside} onPress={() => navigation.navigate('CompanyDetailScreen')}>
                        <View style={stylelayoutcollect.boximg}>
                            <Text style={stylelayoutcollect.textrecom} key={index}>
                            {item}
                            </Text>
                        </View>
                      </TouchableOpacity>
                      
                    ))
                  } 
     
             </ScrollView> */}     

 
        


    


      </ScrollView>
   
              <View style={stylebotmid.Bottonlayoutgroud}>
              <TouchableOpacity style={stylebotmid.boxHome}  onPress={() => navigation.navigate('Homepage')}>
                    <Image source={require('../img/iconbottom/homapage2.png')}></Image>
               </TouchableOpacity>

               <TouchableOpacity style={stylebotmid.boxmassage}  onPress={() => navigation.navigate('Massagescreens')}>
                    <Image source={require('../img/iconbottom/Massage.png')}></Image>
               </TouchableOpacity>

             

               <TouchableOpacity style={stylebotmid.boxprofile}  onPress={() => navigation.navigate('Profilescreens')}>
                    <Image source={require('../img/iconbottom/profileicon.png')}></Image>
               </TouchableOpacity>

              </View>

   </SafeAreaView> 

   




 
  )   
}

const Buttomlayoutmid = () => {
  return(
    <View style={stylebotmid.Bottonlayoutgroud}>
        <TouchableOpacity style={stylebotmid.boxHome}  onPress={() => navigation.navigate('Homepage')}>
            <Image source={require('../img/iconbottom/homapage2.png')}></Image>
       </TouchableOpacity>

       <TouchableOpacity style={stylebotmid.boxmassage}  onPress={() => navigation.navigate('Massagescreens')}>
            <Image source={require('../img/iconbottom/Massage.png')}></Image>
       </TouchableOpacity>

     

       <TouchableOpacity style={stylebotmid.boxprofile}  onPress={() => navigation.navigate('Profilescreens')}>
            <Image source={require('../img/iconbottom/profileicon.png')}></Image>
       </TouchableOpacity>



    </View>
  )
}



  return (
    
        
        <View style={styleHeader.container}>
         

             <Header/>
             <Searchbar/>
             <Buttonlayout/>
             <Viewlayotcollect/>
             
            

        </View>
      
  )
  }



 /*style Header*/ 
 const styleHeader = StyleSheet.create({
  container:{
    flex:1,
    height:'100%'
  },
  headergroud:{
      width:'100%',
      height:'5%',
      backgroundColor:'#FFFFFF',
      justifyContent:'center',
  },
  texthead:{
    fontSize:18,
    fontWeight:'bold',
    color:'#FD9A4D'
  }
})
 /*style Searchbar*/ 
const styleSearchbar = StyleSheet.create({
  container:{
    flex:1
  },
  searchgroud:{
      width:'100%',
      height:'12%',
      backgroundColor:'#FFFFFF',
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
      height: '12%',
      backgroundColor:'#FFFFFF',
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
/*style stylelayoutcollect*/ 
const stylelayoutcollect = StyleSheet.create({
    safeview:{
      flex:10,
      backgroundColor:'#FFFFFF',
      elevation:10,
      padding:3,
      justifyContent:'center',
      height:'100%'
         
    },
    fonstheaderrec:{
      fontSize:16,
      fontWeight:'bold',
      color:'#494949',
      padding:10
      
      
    },
    textrecom:{
      width: 200,
      height: 120,
      fontSize:16,
      textAlign:'left',
      marginHorizontal:150
     /*  padding:10,
      borderRadius:10,
      backgroundColor:'#494949'*/
     
     
    },
    boximg2:{
      width:'40%',
      height:'100%',
      backgroundColor:'#FFFFFF',   
      borderRadius:20,
      padding:10  
    },
    boxinside:{
      width:340,
      height:'100%',
      flex:1,
      backgroundColor:'#FD9A4D',   
      borderRadius:20,
      padding:3,
      marginHorizontal:40
    },
    Viewmor:{
      width:80,
      height:25,
      backgroundColor:'#3E3E3E',
      borderRadius:10,
      justifyContent:'center',
      alignItems:'center',
      marginVertical:50,
      marginHorizontal:40,
      
    },
    viewtex:{
      fontSize:12,
      color:'#ffffff',
    },
    textdeail:{width:100,
      marginVertical:-10,
      marginHorizontal:130
    },
    boxtex:{
      width:'50%',
      height:'100%', 
      borderRadius:20,
      padding:10,
      marginHorizontal:130,
      marginVertical:-130 
    },
    getCoop:{
      fontSize:10
    }
  

})
/*style stylelarec*/ 
const stylerecom = StyleSheet.create({
    groud:{
      height:100,
      width:'100%'
    },
    boxinside:{
      width:10,
      height:'100%',
      flex:1,
      backgroundColor:'#FD9A4D',   
      borderRadius:20,
      padding:3
    }
})

const stylegover = StyleSheet.create({
  groud:{
    height:100,
    width:'100%'
  },
  textger:{
    fontWeight:'bold',
    marginTop:100,
    marginVertical:200
  },
  boxinside:{
    width:120,
    height:140,
    backgroundColor:'#FD9A4D',   
    borderRadius:20,
    padding:3,
    alignItems:'center'
  },
  boxinside2:{
    width:120,
    height:140,
    backgroundColor:'#FD9A4D',   
    borderRadius:20,
    padding:3,
    alignItems:'center',
    marginHorizontal:10
  },

  boximg2:{
    width:40,
    height:40,
    backgroundColor:'#FFFFFF',   
    borderRadius:10,
    padding:3, 
  },
  boximg3:{
    width:40,
    height:40,
    backgroundColor:'#FFFFFF',   
    borderRadius:10,
    padding:3, 
  },


  Viewmor:{
    width:80,
    height:25,
    backgroundColor:'#3E3E3E',
    borderRadius:10,
    justifyContent:'center',
    alignItems:'center',
    marginVertical:25
  },
  viewtex:{
    fontSize:12,
    color:'#ffffff'

  },
  getCoop:{
    fontSize:10
  }
})

/*Style botmid */
const stylebotmid = StyleSheet.create ({
  Bottonlayoutgroud:{
    width:'80%',
    height:'15%',
    backgroundColor:'#FFFFFF',
    padding:2,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    borderRadius:20,
    elevation:10,
    marginHorizontal:42,
    marginVertical:-20,
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
  marginTop:-20,
     
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
  marginTop:-20,
     
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
  marginTop:-20,
     
},

})




export default Matching