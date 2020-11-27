import React, { Component, useState } from 'react';
import { View, Text, StyleSheet, FlatList,TouchableOpacity, ScrollView} from 'react-native';

export default App= () =>{
  const [sehir,setSehir]=useState([
      {name:'MARMARA', id:'1'},
      {name:'EGE', id:'2'},
      {name:'AKDENİZ', id:'3'},
      {name:'KARADENİZ', id:'4'},
      {name:'İÇ ANADOLU', id:'5'},
      {name:'DOĞU ANADOLU', id:'6'},
      {name:'GÜNEYDOĞU ANADOLU', id:'7'},
  ]);


  
  return(
    <View style={styles.container}>
      <FlatList
      numColumns={1}
      data={sehir}
      renderItem={({item})=>(
        <TouchableOpacity>
        <Text style={styles.item}>{item.name}</Text>
        </TouchableOpacity>

      )}
      />
   <ScrollView style={styles.scrollView}>
     
    <Text style={styles.text}>
      Şehirler:
    </Text>
  </ScrollView>
    </View>
 


    )
  }
const styles=StyleSheet.create({
container:{
flex:1,
backgroundColor:'#FFF',



},
item:{
  marginTop:15,
  padding:10,
  backgroundColor:'pink',
  fontSize:15,
  alignContent:'center',
  fontWeight: 'bold',
  

},
scrollView:{
  backgroundColor:'pink',
  width:400,
  height:300,
  flex:1,
  
},
text:{
  fontWeight: 'bold',
}
})