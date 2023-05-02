import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View, Animated } from 'react-native';
import React, {useEffect, useRef} from 'react';

//IN ORDER TO RUN IN EXPO GO:
//*
//cd into project directory
//npx expo start
//scan barcode in app

export default function App() {

  const fadeAnim = useRef(new Animated.Value(0)).current;
  
  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Animated.Text style={[styles.text, {opacity: fadeAnim}]}>Mind, Body, and Soul</Animated.Text>
        <StatusBar style="auto" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
    //justifyContent: 'center',
  },
  text: {
    fontSize: 34,
    paddingTop: 100,
  }
});
