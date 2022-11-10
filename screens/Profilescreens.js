import { View, Text,ScrollView,StyleSheet,SafeAreaView,Image,TouchableOpacity } from 'react-native'
import React from 'react'

const Profilescreens = () => {
  
    const Headerimg = () => {
      return(
            <View>
                <Image source={require('../img/profile/bgimg.png')} style={styleheder.bgimg}></Image>
            </View>
      )
    }

    const Profileimg = () => {
      return(
        <View style={stylecon.boximg}>
            <Image source={require('../img/profile/profile.png')}
            style={stylecon.imgprofile}></Image>
        </View>
      )
    }
    const Namefile = () => {
      return(
        <View style={stylenamefill.ground}>
            <Text style={stylenamefill.textfill}>Wiwat</Text>
            <View style={stylenamefill.boxdetail}>
              <Image Image source={require('../img/profile/call.png')} style={stylenamefill.img}></Image>
              <Text style={stylenamefill.textfilldetail}>096-XXXX-XXX</Text>
            </View>
            <View style={stylenamefill.boxdetail}>
              <Image Image source={require('../img/profile/sms.png')} style={stylenamefill.img2}></Image>
              <Text style={stylenamefill.textfilldetail2}>sirt2e@gmail.com</Text>
            </View>
            <View style={stylenamefill.boxdetail}>
              <Image Image source={require('../img/profile/location.png')} style={stylenamefill.img2}></Image>
              <Text style={stylenamefill.textfilldetail2}>Suranaree,Thailand</Text>
            </View>


        </View>
      )
    }
    const Layoutfollow = () => {
      return(
          <View style={styfollow.ground}>
            <View style={styfollow.boxfriend}>
                  <Text style={styfollow.textfirend}>20</Text>
                  <Text style={styfollow.textfirend2}>Friend</Text>
            </View>
            <View style={styfollow.boxfriend}>
                  <Text style={styfollow.textfirend}>20</Text>
                  <Text style={styfollow.textfirend2}>Followers</Text>
            </View>

            <View style={styfollow.boxfriend}>
                  <Text style={styfollow.textfirend}>20</Text>
                  <Text style={styfollow.textfirend2}>Following</Text>
            </View>

          </View>
      )
    }
    const Info = () => {
      return(
        <View  style={styinfo.ground}>
              <TouchableOpacity style={styinfo.boxinfo}> 
                    <Image Image source={require('../img/profile/info.png')}></Image>
                    <Text style={styinfo.text}>Info</Text>
              </TouchableOpacity>
              <View style={styinfo.boxinfo}> 
                    <Image Image source={require('../img/profile/Resume.png')}></Image>
                    <Text style={styinfo.text}>Resume</Text>
              </View>
        </View>
      )
    }
    const Highlight = () => {
      return(
        <View style={styleHighlight.ground}>
              <Text style={styleHighlight.text}>Highlight</Text>
              <View style={styleHighlight.boxhl}>
                    <TouchableOpacity style={styleHighlight.boxView}>
                          <TouchableOpacity style={styleHighlight.boxView2}> 
                          
                          </TouchableOpacity>
                    </TouchableOpacity>

                    <TouchableOpacity style={styleHighlight.boxView}>
                          <TouchableOpacity style={styleHighlight.boxView2}> 
                          
                          </TouchableOpacity>
                    </TouchableOpacity>

                    <TouchableOpacity style={styleHighlight.boxView}>
                          <TouchableOpacity style={styleHighlight.boxView2}> 
                          
                          </TouchableOpacity>
                    </TouchableOpacity>
                    
              </View>
        </View>
      )
    }
    const Activity = () => {
      return(
        <View style={styleActivi.ground}>
              <Text style={styleActivi.text}>My Activities</Text>
                <View style={styleActivi.boxView}>
                        <View style={styleActivi.boxdetail}>
                          <Image Image source={require('../img/profile/matching.png')} style={styleActi2.img}></Image>
                          <Text style={styleActi2.text2}> 0 </Text>
                          <Text style={styleActi2.text}> Mactching </Text>
                        </View>

                        <View style={styleActivi.boxdetail}>
                          <Image Image source={require('../img/profile/cours.png')} style={styleActi2.img}></Image>
                          <Text style={styleActi2.text2}> 0 </Text>
                          <Text style={styleActi2.text}> Course </Text>
                        </View>

                        <View style={styleActivi.boxdetail2}>
                          <Image></Image>
                            <Image Image source={require('../img/profile/flag.png')} style={styleActi2.img2}></Image>
                            <Text style={styleActi2.text4}> 0 </Text>
                            <Text style={styleActi2.text3}> Co-op </Text>
                        </View>

                        <View style={styleActivi.boxdetail3}>
                            <Image Image source={require('../img/profile/certi.png')} style={styleActi2.img2}></Image>
                            <Text style={styleActi2.text4}> 0 </Text>
                            <Text style={styleActi2.text3}> Certificate</Text>
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
              <Headerimg/> 
                <View style={stylecon.bgbox}>
                      <Profileimg/>
                      <Namefile/>
                      <Layoutfollow/>
                      <Info/>
                      <Highlight/>
                      <Activity/>
                </View>
          </ScrollView>
          <Bottommid/>
    </SafeAreaView>
  )
}
/** stylecon */
  const stylecon = StyleSheet.create({
    container:{
      flex:1,
      backgroundColor:'#fff'
    },
    bgbox:{
      height:1000,
      width:'100%',
      borderRadius:60,
      backgroundColor:'#fff',
      marginVertical:-80,
      alignItems:'center'  
    },
    imgprofile:{
      width:180,
      height:180,
      marginVertical:-100
    },
   
  })


/** styleheder */
  const styleheder = StyleSheet.create({
    bgimg:{
      width:'100%'
    }
  })
/** stylenamefill */
  const stylenamefill = StyleSheet.create({
    ground:{
      height:140,
      width:'100%',
      marginVertical:80,
      alignItems:'center'
    },
    textfill:{
      fontSize:18,
      fontWeight:'bold',
      color:'#FD9A4D',   
    },

    boxdetail:{
      width:180,
      height:20,
      
    },
    textfilldetail:{
      fontSize:15,
      
      marginTop:-16,  
      width:240,
      textAlign:'center', 
      marginHorizontal:-20
    },
    textfilldetail2:{
      fontSize:15,
      marginTop:-16,  
      width:240,
      textAlign:'center', 
      marginHorizontal:-5
    },
    img:{
      marginVertical:-2,
      width:15,
      height:15,
      alignItems:'center',
      marginHorizontal:35
    },
    img2:{
      marginVertical:-3,
      width:15,
      height:15,
      alignItems:'center',
      marginHorizontal:35
    },
  })
/** styfollow */
  const styfollow = StyleSheet.create({
    ground:{
      width:280,
      height:60,
      backgroundColor:'#fff',
      elevation:10,
      borderRadius:20,
      marginVertical:-130,
      alignItems:'center',
      justifyContent:'center',
      flexDirection:'row'
    },
    boxfriend:{
      height:50,
      width:70,
      backgroundColor:'#fff',
      borderRadius:10,
      marginHorizontal:5,
      elevation:2
      
    },
    textfirend:{
      textAlign:'center',
      fontWeight:'bold',
      color:'#FD9A4D',
      marginTop:5
    },
    textfirend2:{
      textAlign:'center',
      color:'#FD9A4D'
    }
  })
/** styinfo */
  const styinfo = StyleSheet.create({
    ground:{
      width:280,
      height:60,
      backgroundColor:'#fff',
      marginVertical:140,
      alignItems:'center',
      justifyContent:'center',
      flexDirection:'row'
    },
    boxinfo:{
      height:50,
      width:70,
      backgroundColor:'#FFAD7B',
      borderRadius:10,
      marginHorizontal:5,
      elevation:2,
      alignItems:'center',
      justifyContent:'center'
    },
    text:{
      fontWeight:'bold',
      color:'#fff'
      
    }
  })

  const styleHighlight = StyleSheet.create({
    ground:{
        width:340,
        height:60,
        marginVertical:-130,
        
    },
    boxhl:{
      width:340,
      height:60,
      alignItems:'center',
      justifyContent:'center',
      flexDirection:'row',
      marginVertical:10
    },
    boxView:{
      height:70,
      width:70,
      backgroundColor:'#fff',
      borderColor:'#FFAD7B',
      borderRadius:60,
      marginHorizontal:5,
      alignItems:'center',
      justifyContent:'center',
      elevation:5
      
    },
    boxView2:{
      height:60,
      width:60,
      backgroundColor:'#FFAD7B',
      borderRadius:60,
      marginHorizontal:5,
      alignItems:'center',
      justifyContent:'center'
    },
    text:{
        textAlign:'left',
        fontWeight:'bold'
    }
  })

  const styleActivi = StyleSheet.create({
    ground:{
      flex:1,
      width:360,
      height:200,
      marginVertical:200,
    },
    boxView:{
      width:'100%',
      height:230,
      marginVertical:5,
      marginHorizontal:10,
      flexDirection:'column',
      
      
    },
    boxdetail:{
        width:160,
        height:80,
        marginHorizontal:5,
        marginVertical:5,
        justifyContent:'center',
        
        
        
    },
    boxdetail2:{
      width:160,
      height:80,
      marginHorizontal:170,
      marginVertical:-175,
      justifyContent:'center'
    },
    boxdetail3:{
      width:160,
      height:80,
      marginHorizontal:170,
      marginVertical:185,
      justifyContent:'center'
    },
    text:{
      fontSize:18,
      fontWeight:'bold',
      color:'#FD9A4D',
      textAlign:'left'
    }
  })
  const styleActi2 = StyleSheet.create({
    img:{
      width:50,
      height:50,
      marginBottom:-65
    },
    img2:{
      width:50,
      height:50,
      marginBottom:-65
    },

    text:{
      width:100,
      height:30,
      fontSize:16,
      fontWeight:'bold',
      textAlign:'left',
      marginHorizontal:60,
      marginVertical:-10,
      color:'#494949'
    },
    text2:{
      marginHorizontal:60,
      marginVertical:10,
      width:100,
      height:30,
      fontSize:16,
      fontWeight:'bold',
      color:'#573380'
    },

    text3:{
      width:100,
      height:30,
      fontSize:16,
      fontWeight:'bold',
      textAlign:'left',
      marginHorizontal:60,
      marginVertical:-10,
      color:'#494949'
    },
    text4:{
      color:'#573380',
      marginHorizontal:60,
      marginVertical:10,
      width:100,
      height:30,
      fontSize:16,
      fontWeight:'bold',
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

export default Profilescreens