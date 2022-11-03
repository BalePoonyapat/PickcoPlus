import { View, Text,StyleSheet } from 'react-native'
import React from 'react'

const EnglishSkill = () => {
 
      const Header = () => {
        return(
            <View style={styleHeader.headergroud}>
                <Text>Header</Text>
            </View>
        )        
      }
 
      const Searchbar = () => {
        return(
            <View style={styleSearchbar.searchgroud}>
                <Text>Searchbar</Text>
            </View>
        )        
      }

      const Buttonlayout = () => {
        return(
            <View style={styleBottonlayout.Bottonlayoutgroud}>
                <Text>buttonlayot</Text>
            </View>
        )        
      }
 

      const AddandFilter = () => {
        return(
            <View style={styleAddandFilter.AddandFiltergroud}>
                <Text>AddandFilter</Text>
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
                    </View>
                </View>  


            </View>
        )        
      }
 
 
 
  return (
    <View style={styleHeader.container}>
      <Header/>
      <Searchbar/>
      <Buttonlayout/>
      <AddandFilter/>
      <Viewlayout/>

    </View>
  )
}

  /*style Header*/ 
  const styleHeader = StyleSheet.create({
      container:{
        flex:1
      },
      headergroud:{
          width:'100%',
          height:'7%',
          backgroundColor:'#c8c8c8'
      },
  })
 /*style Searchbar*/ 
  const styleSearchbar = StyleSheet.create({
    container:{
      flex:1
    },
    searchgroud:{
        width:'100%',
        height:'14%',
        backgroundColor:'#494949'
    },

})
 /*style Bottonlayout*/ 
const styleBottonlayout = StyleSheet.create({
  container:{
    flex:1
  },
  Bottonlayoutgroud:{
      width:'100%',
      height:'10%',
      backgroundColor:'#c8c8c8'
  },

})

 /*style AddandFilter*/ 
 const styleAddandFilter = StyleSheet.create({
  container:{
    flex:1
  },
  AddandFiltergroud:{
      width:'100%',
      height:'7%',
      backgroundColor:'#494949'
  },

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
      backgroundColor:'#c8c8c8',
      padding:25,
      flexWrap: 'wrap'
      

  },
  /*Box1*/ 
  boxview:{
      width: '100%',
      height:'30%',
      padding:4,
      borderRadius:20,
      backgroundColor:'#FFAD6C',      
  },
  boxinside:{
    width:'100%%',
    height:'30%',
    flex:1,
    backgroundColor:'#FFAD6C',   
    borderRadius:20,  
  },
  boximg:{
    width:'80%',
    height:'70%',
    flex:1,
    backgroundColor:'#FD9A4D',   
    borderRadius:20,  
  },


/*Box2*/ 
  boxview2:{
    width: '100%',
    height:'30%',
    backgroundColor:'#FD9A4D',
    padding:4,
    borderRadius:20      
},
boxinside2:{
  width:'40%',
  height:'85%',
  flex:1,
  backgroundColor:'#FFAD6C',   
  borderRadius:20,
  
}


})








export default EnglishSkill