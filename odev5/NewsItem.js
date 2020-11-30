import React from 'react';
import {
  View,
  Text,
  StatusBar,  
  SafeAreaView,
  StyleSheet,
  ScrollView

} from 'react-native';

export default class NewsItem extends React.Component{

  render (){

    const konu= this.props.type;
    let bgcolor = 'white';

    if (konu=='spor'){
      bgcolor = 'gray';
    } 
    else if (konu=='bilim') {
      bgcolor = 'black';
    } 


    const baslik= this.props.title;
    const aciklama= this.props.description;

    return(
      <View style={{backgroundColor:bgcolor}}>
        <Text style={styles.baslik}>{baslik}</Text>
        <Text style={styles.aciklama}>{aciklama}</Text>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  baslik:{
    fontSize: 30,
    fontWeight: "bold",
    color:'white'
  },
  aciklama:{
    fontSize: 20,
    padding:45,
    color:'white'
    
  }
});