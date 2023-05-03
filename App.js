import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View, Animated, TouchableOpacity, Image } from 'react-native';
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


//THE HOMEPAGE
const HomePage = ({navigation}) => {
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
          <Animated.Text style={[styles.text, {opacity: fadeAnim, paddingBottom: 40}]}>Mind, Body, and Soul</Animated.Text>

          {/*
          <TouchableOpacity style={{ padding: 100, backgroundColor: 'blue', borderRadius: 10 }} onPress={() => navigation.navigate('Mind')}>
          <Text style={{ color: 'white' }}>Go to "Mind"</Text>
          </TouchableOpacity>
          */}

      <TouchableOpacity style={{padding: 0, alignSelf: 'center'}} onPress={() => navigation.navigate('Mind')}>
      <Image source={require('./assets/MindButton.png')} style={styles.buttonStyle} />
      </TouchableOpacity>

      <TouchableOpacity style={{padding: 0, alignSelf: 'center'}} onPress={() => navigation.navigate('Body')}>
      <Image source={require('./assets/BodyButton.png')} style={styles.buttonStyle} />
      </TouchableOpacity>

      <TouchableOpacity style={{padding: 0, alignSelf: 'center'}} onPress={() => navigation.navigate('Soul')}>
      <Image source={require('./assets/SoulButton.png')} style={styles.buttonStyle} />
      </TouchableOpacity>
      
          <StatusBar style="auto" />
        </View>
      </SafeAreaView>
  );
}
//END HOMEPAGE



//THE MIND PAGE
const MindPage = ({navigation}) => {

}
//END MIND PAGE



//START BODY PAGE
const BodyPage = ({navigation}) => {

}
//END BODY PAGE



//START SOUL PAGE
const SoulPage = ({navigation}) => {

}
//END SOUL PAGE


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomePage} />
        <Stack.Screen name="Mind" component={MindPage} />
        <Stack.Screen name="Body" component={BodyPage} />
        <Stack.Screen name="Soul" component={SoulPage} />
      </Stack.Navigator>
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
  },
  buttonStyle: {
    
    margin: 15,
    resizeMode: 'contain',
    //margin: 5,
    height: 150,
    width: 150,
    //justifyContent: 'center',
    


  }
});
