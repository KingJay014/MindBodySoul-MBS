import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View, Animated } from 'react-native';
import React, {useEffect, useRef} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const MyStack = () => {

}

//IN ORDER TO RUN IN EXPO GO:
//*
//cd into project directory
//npx expo start
//scan barcode in app

//MISC NOTES FROM AIDAN:
//everyone might need to install -> npm install @react-navigation/native @react-navigation/native-stack
//                                  npm install react-native-gesture-handler
//                                  npx expo install react-native-screens react-native-safe-area-context








const HomePage = ({navigation}) => {
  
}

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
    <NavigationContainer>
      <SafeAreaView style={styles.container}>
        <View>
          <Animated.Text style={[styles.text, {opacity: fadeAnim}]}>Mind, Body, and Soul</Animated.Text>
          <StatusBar style="auto" />
        </View>
      </SafeAreaView>
    </NavigationContainer>
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
