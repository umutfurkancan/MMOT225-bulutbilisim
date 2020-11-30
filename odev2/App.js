

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

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
      <View style={styles.body}>
              <Text style={styles.Yazi}>AD SOYAD: UMUT FURKAN ÇAN</Text>
              <Text style={styles.Yazi}>YAŞ: 20</Text>
              <Text style={styles.Yazi}>MEMLEKET: KASTAMONU</Text>
              <Text style={styles.Yazi}>LİSE: GÜLTEPE MESLEKİ VE TEKNİK ANADOLU LİSESİ</Text>
              <Text style={styles.Yazi}>ÜNİVERSİTE: OKAN ÜNİVERSİTESİ</Text>
              <Text style={styles.Yazi}>İŞ DENEYİMİ: VAR</Text>
            </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  Yazi: {
    marginTop: 50,
    marginLeft: 5,
    fontSize: 15,
    fontWeight: '200',
    color: 'black',
  },
});

export default App;
