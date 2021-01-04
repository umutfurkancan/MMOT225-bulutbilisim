

import React from 'react';
import * as firebase from 'firebase';
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

componentDidmount=()=>{



  var firebaseConfig = {
    apiKey: "AIzaSyB9EIi9GOP3fzDnzJfntn4O4NdlR4tVGz0",
    authDomain: "virustakip-f6cfd.firebaseapp.com",
    projectId: "virustakip-f6cfd",
    storageBucket: "virustakip-f6cfd.appspot.com",
    messagingSenderId: "170129453822",
    appId: "1:170129453822:web:40073169f3bc6291162baf"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);




}





const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
       
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
