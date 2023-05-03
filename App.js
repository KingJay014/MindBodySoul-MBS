import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View, Animated, TouchableOpacity, Image } from 'react-native';
import React, {useEffect, useRef} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();




//IN ORDER TO RUN IN EXPO GO:
//*
//cd into project directory
//npx expo start
//scan barcode in app

//NOTES FROM AIDAN:
//everyone might need to install -> npm install @react-navigation/native @react-navigation/native-stack
//                                  npm install react-native-gesture-handler
//                                  npx expo install react-native-screens react-native-safe-area-context
//                                  npx expo install expo-font

//THE HOMEPAGE
const HomePage = ({navigation}) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const fadeAnim2 = useRef(new Animated.Value(0)).current;
  const fadeAnim3 = useRef(new Animated.Value(0)).current;
  const fadeAnim4 = useRef(new Animated.Value(0)).current;
  
  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: true,
    }).start();
    Animated.timing(fadeAnim2, {
      delay: 350,
      toValue: 1,
      duration: 2000,
      useNativeDriver: true,
    }).start();
    Animated.timing(fadeAnim3, {
      delay: 700,
      toValue: 1,
      duration: 2000,
      useNativeDriver: true,
    }).start();
    Animated.timing(fadeAnim4, {
      delay: 1050,
      toValue: 1,
      duration: 2000,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim, fadeAnim2, fadeAnim3, fadeAnim4]);


  return (
      <SafeAreaView style={styles.container}>
        <View style={styles.centered}>
          <Animated.Text style={[styles.text, {opacity: fadeAnim, paddingBottom: 40}]}>Mind, Body, and Soul</Animated.Text>

          {/*
          <TouchableOpacity style={{ padding: 100, backgroundColor: 'blue', borderRadius: 10 }} onPress={() => navigation.navigate('Mind')}>
          <Text style={{ color: 'white' }}>Go to "Mind"</Text>
          </TouchableOpacity>
          */}
          
      <TouchableOpacity style={{padding: 0, alignSelf: 'center' }} onPress={() => navigation.navigate('Mind')}>
      <Animated.Image source={require('./assets/MindButton.png')} style={[styles.buttonStyle, {opacity: fadeAnim2} ]} />
      </TouchableOpacity>

      <TouchableOpacity style={{padding: 0, alignSelf: 'center', opacity: fadeAnim3}} onPress={() => navigation.navigate('Body')}>
      <Animated.Image source={require('./assets/BodyButton.png')} style={[styles.buttonStyle, {opacity: fadeAnim3}]} />
      </TouchableOpacity>

      <TouchableOpacity style={{padding: 0, alignSelf: 'center', opacity: fadeAnim4}} onPress={() => navigation.navigate('Soul')}>
      <Animated.Image source={require('./assets/SoulButton.png')} style={[styles.buttonStyle, {opacity: fadeAnim4}]} />
      </TouchableOpacity>
      
          <StatusBar style="auto" />
        </View>
      </SafeAreaView>
  );
}
//END HOMEPAGE



//THE MIND PAGE
const MindPage = ({navigation}) => {

  const fadeAnim = useRef(new Animated.Value(0)).current;
  const fadeAnim2 = useRef(new Animated.Value(0)).current;
  const fadeAnim3 = useRef(new Animated.Value(0)).current;
  const fadeAnim4 = useRef(new Animated.Value(0)).current;
  
  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
    Animated.timing(fadeAnim2, {
      delay: 100,
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
    Animated.timing(fadeAnim3, {
      delay: 200,
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
    Animated.timing(fadeAnim4, {
      delay: 300,
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim, fadeAnim2, fadeAnim3, fadeAnim4]);

  return (
  <SafeAreaView style={styles.container}>
    <View style={styles.centered}>
    <TouchableOpacity style={{padding: 0, alignSelf: 'center' }} onPress={() => navigation.navigate('Breath')}>
      <Animated.Image source={require('./assets/BreathButton.png')} style={[styles.buttonStyle, {opacity: fadeAnim2} ]} />
      </TouchableOpacity>

      <TouchableOpacity style={{padding: 0, alignSelf: 'center', opacity: fadeAnim3}} onPress={() => navigation.navigate('Extra Information')}>
      <Animated.Image source={require('./assets/3DotsButton.png')} style={[styles.buttonStyle, {opacity: fadeAnim3}]} />
      </TouchableOpacity>

      {/*}
      <TouchableOpacity style={{padding: 0, alignSelf: 'center', opacity: fadeAnim4}} onPress={() => navigation.navigate('Soul')}>
      <Animated.Image source={require('./assets/SoulButton.png')} style={[styles.buttonStyle, {opacity: fadeAnim4}]} />
      </TouchableOpacity>
      */}
    </View>
  </SafeAreaView>
  );
}
//END MIND PAGE

const BreathingPage = ({navigation}) => {

  const fadeAnim5 = useRef(new Animated.Value(0)).current;
  const fadeAnim6 = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(fadeAnim5, {
          toValue: 1,
          duration: 2500,
          useNativeDriver: true,
        }),
        Animated.timing(fadeAnim5, {
          toValue: 0,
          duration: 1500,
          useNativeDriver: true,
        }),
        Animated.timing(fadeAnim5, {
          toValue: 0,
          duration: 6000,
          useNativeDriver: true,
        }),
      ])
    ).start(),
    Animated.loop(
      Animated.sequence([
        Animated.timing(fadeAnim6, {
          toValue: 0,
          duration: 4000,
          useNativeDriver: true,
        }),
        Animated.timing(fadeAnim6, {
          toValue: 1,
          duration: 4500,
          useNativeDriver: true,
        }),
        Animated.timing(fadeAnim6, {
          toValue: 0,
          duration: 1500,
          useNativeDriver: true,
        }),
      ]),
    ).start();
  }, [fadeAnim5]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={{paddingTop: 70}}>
        <Animated.Text style={{fontSize: 34, opacity: fadeAnim5}}>Breathe in.</Animated.Text>
        <Animated.Text style={{fontSize: 34, opacity: fadeAnim6}}>Breathe out.</Animated.Text>
      </View>
    </SafeAreaView>
  );
}

const MindInformationPage = ({navigation}) => {

}


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
        <Stack.Screen name="Breath" component={BreathingPage} />
        <Stack.Screen name="Extra Information" component={MindInformationPage} />
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
    paddingTop: 70,
  },
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonStyle: {
    margin: 20,
    resizeMode: 'contain',
    //margin: 5,
    height: 150,
    width: 150,
    //justifyContent: 'center',
    


  }
});
