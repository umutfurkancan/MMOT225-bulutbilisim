import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  ActivityIndicator,
  FlatList,

} from 'react-native';


import Loginregister from "./loginregister"
import Kokteyl from "./kokteyl"
const App: () => React$Node = () => {
  return (

        <View style={styles.view}>
       <Kokteyl/>
       <View style={styles.view}>
       <Loginregister/>


    </View>

    </View>


  );
};

const styles = StyleSheet.create({
  view:{
    flex:1
  }
});

export default App;
