/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import NewsItem from './NewsItem.js';

const App: () => React$Node = () => {
  return (
    <SafeAreaView>
    <View><Text style={styles.bas}> Haberler </Text></View>
    <ScrollView>
    <NewsItem type='bilim' title='SARS virüsü dünyayı yeniden mi ele geçirecek.!!' description='Çinde yeniden görülen SARS virüsü korkutuyor.'/>

    <NewsItem type='spor' title='Ronaldo tarafından şok açıklama!!!' description='Futbol kariyerimi sonlandırıyorum.'/>
    <NewsItem type='bilim' title='COVID-19 aşısı bulundu!!!' description='Uzmanlar aşıyı bulduğunu açıkladı'/>
    <NewsItem type='spor' title='Fenerbahçe şike mi yaptı????' description='Fenerbahçenin şike yaptığı ortaya atılıyor.'/>
    <NewsItem type='bilim' title='Eczaneler virüsten ne kadar etkilendi??' description='Eczane çalışanlarına sorduk: İşlerimiz çok iyi herkes hasta olsun. Dediler....'/> 
    <NewsItem type='spor' title='Fenerbahçe Beşiktaş maçı sonucu!' description='Beşiktaş Fenerbahçeyi 4-3 yendi.'/>
    <NewsItem type='bilim' title='Elon Musk uzaya araba gönderdi!!!!' description='Tesla model arabasını uzaya gönderdi.'/>


    </ScrollView>
  </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  bas:{
    fontSize: 40,
    fontWeight: "bold", 
    alignItems: 'center',
    justifyContent:'center'
  }
});

export default App;
