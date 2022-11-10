import { View, Text,StyleSheet,ScrollView,TouchableOpacity,Image,TextInput } from 'react-native'
import React from 'react'
import Icon from 'react-native-ico-material-design'
import {Iconicons} from '@react-native-vector-icons/Iconicons'

const Mobileskill = ({navigation}) => {
 

      

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
               <TouchableOpacity style={styleBottonlayout.boxPopular}  onPress={() => navigation.navigate('PopularCours')}>
                    <Image source={require('../img/popularcourse/Popular.png')}></Image>
                    <Text style={styleBottonlayout.fontbutton}>PopularCours</Text>
               </TouchableOpacity>

               <TouchableOpacity style={styleBottonlayout.boxPopular} onPress={() => navigation.navigate('EnglishSkill')}>
                    <Image source={require('../img/popularcourse/English.png')}></Image>
                    <Text style={styleBottonlayout.Myfontbutton}>EnglishSkill</Text>
               </TouchableOpacity>

               <TouchableOpacity style={styleBottonlayout.boxPopular} onPress={() => navigation.navigate('Mobileskill')}>
                    <Image source={require('../img/popularcourse/Mobile.png')} ></Image>
                    <Text style={styleBottonlayout.Myfontbutton}>MobileSkill</Text>
               </TouchableOpacity>

               <TouchableOpacity style={styleBottonlayout.boxPopular} onPress={() => navigation.navigate('mycoourse')}>
                    <Image source={require('../img/popularcourse/mycourse.png')}></Image>
                    <Text style={styleBottonlayout.Myfontbutton}>MyCourse</Text>
               </TouchableOpacity>



            </View>
        )        
      }
 

      const AddandFilter = () => {
        return(
            <View style={styleAddandFilter.AddandFiltergroud}>
            
                <TouchableOpacity style={styleAddandFilter.boxAdd}>
                  <Text style={styleAddandFilter.Textadd}>Add</Text>
                </TouchableOpacity>
              
                <TouchableOpacity style={styleAddandFilter.boxAdd}>
                  <Text style={styleAddandFilter.Textadd}>Filter</Text>
                </TouchableOpacity>
            </View>
        )        
      }
 
      const Viewlayout = () => {
        return(
           
           
           <View style={stylesViewlayout.Viewlayoutgroud}>
               
{/*Box1*/}
                <View style={stylesViewlayout.boxview}>
                      <View style={stylesViewlayout.boxinside}>
                            <View style={stylesViewlayout.boximg}></View>
                    </View>
                </View>   

{/*Box2*/}
                <View style={stylesViewlayout.boxview2}>
                      <View style={stylesViewlayout.boxinside2}>
                            <View style={stylesViewlayout.boximg2}></View>
                    </View>
                </View>   

                {/*Box2*/}
                <View style={stylesViewlayout.boxview2}>
                      <View style={stylesViewlayout.boxinside2}>
                            <View style={stylesViewlayout.boximg2}></View>
                    </View>
                </View>   

                {/*Box2*/}
                <View style={stylesViewlayout.boxview2}>
                      <View style={stylesViewlayout.boxinside2}>
                            <View style={stylesViewlayout.boximg2}></View>
                    </View>
                </View>   
             
            </View>
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
 
 
{/*Output*/}
  return (
    <View style={styleHeader.container}>
      <Header />
      <Searchbar/>
      <Buttonlayout/>
      <AddandFilter/>
      <Viewlayout/>
      <Buttomlayoutmid/>
    </View>
  )
}

  /*style Header*/ 
  const styleHeader = StyleSheet.create({
      container:{
        flex:1,
        resizeMode:"cover"
      },
      headergroud:{
          width:'100%',
          height:'7%',
          backgroundColor:'#FFFFFF',
          justifyContent:'center'
          
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
        height:'14%',
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
      marginTop:-27
      
    }

})
 /*style Bottonlayout*/ 
const styleBottonlayout = StyleSheet.create({
  container:{
    flex:1
  },
  Bottonlayoutgroud:{
      width:'100%',
      height:'10%',
      backgroundColor:'#FFFFFF',
      padding:2,
      flexDirection:'row',
      alignItems:'center',
      justifyContent:'center'
  },
  boxPopular:{
    marginHorizontal:3,
    width: '21%',
    height:'100%',
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
    marginRight:-5
  },
  Myfontbutton:{
    width:'100%',
    fontWeight:'bold',
    fontSize:12,
    marginRight:-15
  }




})

 /*style AddandFilter*/ 
 const styleAddandFilter = StyleSheet.create({
  container:{
    flex:1
  },
  AddandFiltergroud:{
      flexDirection:'row',
      width:'100%',
      height:'7%',
      backgroundColor:'#FFFFFF',
      alignItems:'center',
      justifyContent:'center',   
  },
  boxAdd:{
      marginHorizontal:20,
      width: '20%',
      height:'60%',
      backgroundColor:'#FFFFFF',
      padding:4,
      borderRadius:20,
      alignItems:'center',
      justifyContent:'center',
      elevation: 4,   
  },
  boxfilter:{
    width: '40%',
    height:'60%',
    backgroundColor:'#FFFFFF',
    padding:1,
    borderRadius:10,
    alignItems:'center',
    justifyContent:'center',
    elevation: 4,
  },
  Textadd:{
    alignItems:'center',
    fontWeight:'bold',
    justifyContent:'center',
  }


})


/*View scrolllayout course*/ 

/*style scrollcourselayout*/ 
const stylesViewlayout = StyleSheet.create({
  container:{
    flex:1
  },
  Viewlayoutgroud:{
      width:'100%',
      height:'85%',
      backgroundColor:'#FFFFFF',
      padding:25,
      flexDirection:'row',
      flexWrap: 'wrap',
      elevation: 10, 

  },
  /*Box1*/ 
  boxview:{
      width: '100%',
      height:'30%',
      padding:4,
      borderRadius:20,      
  },
  boxinside:{
    width:'100%',
    height:'30%',
    flex:1,
    backgroundColor:'#FD9A4D',   
    borderRadius:20,
    padding:3  
  },
  boximg:{
    width:'40%',
    height:'30%',
    flex:2,
    backgroundColor:'#FFAD6C',   
    borderRadius:20,  
  },

   /*Box1*/ 
   boxview2:{
    width: '100%',
    height:'30%',
    padding:4,   
},
boxinside2:{
  width:'100%',
  height:'30%',
  flex:1,
  backgroundColor:'#FD9A4D',   
  borderRadius:20,
  padding:3  
},
boximg2:{
  width:'40%',
  height:'30%',
  flex:2,
  backgroundColor:'#FFAD6C',   
  borderRadius:20,  
},


})


const stylebotmid = StyleSheet.create ({
  Bottonlayoutgroud:{
    marginHorizontal:42,
    marginVertical:-210,
    width:'80%',
    height:'15%',
    backgroundColor:'#FFFFFF',
    padding:2,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    borderRadius:20,
    elevation:10,
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








export default Mobileskill