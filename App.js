import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View, Animated, TouchableOpacity, Image, ScrollView } from 'react-native';
import React, {useEffect, useRef, useCallback, useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Button, Alert } from "react-native";
import YoutubePlayer from "react-native-youtube-iframe";
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
//                                  npm install react-native-webview
//                                  npm install react-native-youtube-iframe
//                                  npx expo install react-native-webview

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

      <TouchableOpacity style={{padding: 0, alignSelf: 'center'}} onPress={() => navigation.navigate('Extra Information')}>
      <Animated.Image source={require('./assets/BrainButton.png')} style={[styles.buttonStyle, {opacity: fadeAnim3}]} />
      </TouchableOpacity>

    </View>
  </SafeAreaView>
  );
}
//END MIND PAGE



//START BREATHING PAGE
const BreathingPage = ({navigation}) => {

  const fadeAnim5 = useRef(new Animated.Value(0)).current;
  const fadeAnim6 = useRef(new Animated.Value(0)).current;

  const fadeAnim7 = useRef(new Animated.Value(0)).current;
  const fadeAnim8 = useRef(new Animated.Value(0)).current;
  const fadeAnim9 = useRef(new Animated.Value(0)).current;

  const fadeAnim10 = useRef(new Animated.Value(0)).current;
  const fadeAnim11 = useRef(new Animated.Value(0)).current;
  const fadeAnim12 = useRef(new Animated.Value(0)).current;

  //46 BREATHING START
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

    //478 BREATHING START
    Animated.loop(
      Animated.sequence([
        Animated.timing(fadeAnim7, {
          toValue: 1,
          duration: 2500,
          useNativeDriver: true,
        }),
        Animated.timing(fadeAnim7, {
          toValue: 0,
          duration: 1500,
          useNativeDriver: true,
        }),
        Animated.timing(fadeAnim7, {
          toValue: 0,
          duration: 15000,
          useNativeDriver: true,
        }),
      ]),
    ).start();
    Animated.loop(
      Animated.sequence([
        Animated.timing(fadeAnim8, {
          toValue: 0,
          duration: 4000,
          useNativeDriver: true,
        }),
        Animated.timing(fadeAnim8, {
          toValue: 1,
          duration: 4000,
          useNativeDriver: true,
        }),
        Animated.timing(fadeAnim8, {
          toValue: 0,
          duration: 3000,
          useNativeDriver: true,
        }),
        Animated.timing(fadeAnim8, {
          toValue: 0,
          duration: 8000,
          useNativeDriver: true,
        }),
      ]),
    ).start();
    Animated.loop(
      Animated.sequence([
        Animated.timing(fadeAnim9, {
          toValue: 0,
          duration: 11000,
          useNativeDriver: true,
        }),
        Animated.timing(fadeAnim9, {
          toValue: 1,
          duration: 5000,
          useNativeDriver: true,
        }),
        Animated.timing(fadeAnim9, {
          toValue: 0,
          duration: 3000,
          useNativeDriver: true,
        }),
      ]),
    ).start();

    //BOX BREATHING START
    Animated.loop(
      Animated.sequence([
        Animated.timing(fadeAnim10, {
          toValue: 1,
          duration: 2500,
          useNativeDriver: true,
        }),
        Animated.timing(fadeAnim10, {
          toValue: 0,
          duration: 1500,
          useNativeDriver: true,
        }),
        Animated.timing(fadeAnim10, {
          toValue: 0,
          duration: 12000,
          useNativeDriver: true,
        }),
      ]),
    ).start();
    Animated.loop(
      Animated.sequence([
        Animated.timing(fadeAnim11, {
          toValue: 0,
          duration: 4000,
          useNativeDriver: true,
        }),
        Animated.timing(fadeAnim11, {
          toValue: 1,
          duration: 2500,
          useNativeDriver: true,
        }),
        Animated.timing(fadeAnim11, {
          toValue: 0,
          duration: 1500,
          useNativeDriver: true,
        }),
        Animated.timing(fadeAnim11, {
          toValue: 0,
          duration: 4000,
          useNativeDriver: true,
        }),
        Animated.timing(fadeAnim11, {
          toValue: 1,
          duration: 2500,
          useNativeDriver: true,
        }),
        Animated.timing(fadeAnim11, {
          toValue: 0,
          duration: 1500,
          useNativeDriver: true,
        }),
      ]),
    ).start();
    Animated.loop(
      Animated.sequence([
        Animated.timing(fadeAnim12, {
          toValue: 0,
          duration: 8000,
          useNativeDriver: true,
        }),
        Animated.timing(fadeAnim12, {
          toValue: 1,
          duration: 2500,
          useNativeDriver: true,
        }),
        Animated.timing(fadeAnim12, {
          toValue: 0,
          duration: 1500,
          useNativeDriver: true,
        }),
        Animated.timing(fadeAnim12, {
          toValue: 0,
          duration: 4000,
          useNativeDriver: true,
        }),
      ]),
    ).start();
  }, [fadeAnim5, fadeAnim6, fadeAnim7, fadeAnim8, fadeAnim9, fadeAnim10, fadeAnim11, fadeAnim12]);

  return (
    
    <SafeAreaView style={styles.container}>
    <ScrollView>
      <View style={{paddingTop: 40}}>
       
        <Text style={styles.titletext}>
        Breathing can{'\n'}
        calm the mind.
        </Text>

        <Text style={styles.bodytext}>
        Deep breathing is a simple, yet powerful technique that has 
        been shown to have numerous benefits for the mind. Deep breathing 
        can help with stress, anxiety, emotional regulation, focus, and calm
        a chaotic mind.{'\n'}{'\n'}

        Below, you can find various breathing patterns to help alleviate
        whatever issue you may be having, or to simply help you relax.
        </Text>

        

        <Text style={styles.titletextunderlined}>
        "4:6" Method
        </Text>

        <View style={{padding: 50}}>
        <Animated.Text style={{textAlign: 'center', fontSize: 34, opacity: fadeAnim5}}>Breathe in.</Animated.Text>
        <Animated.Text style={{textAlign: 'center', fontSize: 34, opacity: fadeAnim6}}>Breathe out.</Animated.Text>
        </View>

        <Text style={styles.bodytext}>
        Here, we inhale as much as possible, comfortably, for 4 seconds through the nose and 6 seconds out the mouth. 
        This is a simple way to ground yourself, relieve stress and anxiety, and enter a calm state of mind.
        </Text>

        <Text style={styles.titletextunderlined}>
        "4-7-8" Method
        </Text>

        <View style={{padding: 50}}>
        <Animated.Text style={{textAlign: 'center', fontSize: 34, opacity: fadeAnim7}}>Breathe in.</Animated.Text>
        <Animated.Text style={{textAlign: 'center', fontSize: 34, opacity: fadeAnim8}}>Hold.</Animated.Text>
        <Animated.Text style={{textAlign: 'center', fontSize: 34, opacity: fadeAnim9}}>Breathe out.</Animated.Text>
        </View>

        <Text style={styles.bodytext}>
        Here, we inhale with our nose for 4 seconds, hold the breath for 7 seconds,
        and exhale out the mouth for 8 seconds. Use this breathing technique to decrease anxiety, sleep better, 
        manage food cravings and control emotional responses like anger.
        </Text>

        <Text style={styles.titletextunderlined}>
        "Box Breathing" Method
        </Text>

        <View style={{padding: 50}}>
        <Animated.Text style={{textAlign: 'center', fontSize: 34, opacity: fadeAnim10}}>Breathe in.</Animated.Text>
        <Animated.Text style={{textAlign: 'center', fontSize: 34, opacity: fadeAnim11}}>Hold.</Animated.Text>
        <Animated.Text style={{textAlign: 'center', fontSize: 34, opacity: fadeAnim12}}>Breathe out.</Animated.Text>
        </View>

        <Text style={styles.bodytext}>
        Here, we inhale with our nose for 4 seconds, hold the breath for 4 seconds,
        exhale out the mouth for 4 seconds, and hold again for 4 more seconds. This breathing technique, famous from its usage by the U.S. Navy Seals, helps reduce stress, anxiety, and fortifies focus.

        </Text>

      </View>
      </ScrollView>
    </SafeAreaView>
  );
}
//END BREATHING PAGE


//START MIND INFO PAGE
const MindInformationPage = ({navigation}) => {

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={{paddingTop: 40}}>
          
          <Text style={styles.titletext}>
            Tips to maintain {'\n'}
            a healthy mind.
          </Text>

          <Text style={styles.titletext}>1. Prioritize Self-Care:</Text><Text style={styles.bodytext}>Self-care involves taking care of your physical, emotional, and mental well-being. It includes activities such as getting enough sleep, eating healthy, exercising regularly, spending time outdoors, and engaging in activities that make you happy. Prioritizing self-care can help reduce stress and improve overall mental health.</Text>

<Text style={styles.titletext}>2. Connect with Others:</Text><Text style={styles.bodytext}>Social connection is essential for good mental health. It's important to build and maintain meaningful relationships with friends, family, and others who support and care about you. Spending time with others and participating in group activities can help reduce feelings of loneliness and isolation.</Text>

<Text style={styles.titletext}>3. Manage Stress:</Text><Text style={styles.bodytext}>Stress is a common part of life, but excessive stress can negatively impact mental health. Learning how to manage stress can help reduce its negative impact. Techniques like deep breathing, meditation, and mindfulness can help reduce stress and promote relaxation.</Text>

<Text style={styles.titletext}>4. Practice Gratitude:</Text><Text style={styles.bodytext}>Focusing on the positive aspects of life and expressing gratitude for them can help improve mental health. Practicing gratitude can help shift focus from negative thoughts and emotions to positive ones, promoting a more positive outlook on life.</Text>

<Text style={styles.titletext}>5. Seek Professional Help:</Text><Text style={styles.bodytext}>If you're struggling with mental health issues, seeking professional help can be beneficial. Mental health professionals can provide support, guidance, and treatment to help manage symptoms and improve overall mental health.</Text>

<Text style={styles.titletext}>6. Set Realistic Goals:</Text><Text style={styles.bodytext}>Setting realistic goals and working towards them can promote feelings of accomplishment and boost self-esteem. It's important to set goals that are achievable and meaningful to you.</Text>

<Text style={styles.titletext}>7. Engage in Meaningful Activities:</Text><Text style={styles.bodytext}>Engaging in activities that are meaningful and enjoyable can improve mental health. Activities like volunteering, creative pursuits, and hobbies can provide a sense of purpose and promote feelings of happiness and fulfillment.</Text>

<Text style={styles.titletext}>8. Practice Mindfulness:</Text><Text style={styles.bodytext}>Mindfulness involves being present in the moment and accepting thoughts and emotions without judgment. Practicing mindfulness can help reduce stress and promote relaxation, improving overall mental health.</Text>

<Text style={styles.titletext}>9. Take Breaks:</Text><Text style={styles.bodytext}>It's important to take breaks and prioritize relaxation. Engaging in activities that promote relaxation, like taking a walk or reading a book, can help reduce stress and improve mental health.</Text>

<Text style={styles.titletext}>10. Stay Positive:</Text><Text style={styles.bodytext}>Maintaining a positive outlook can improve mental health. Focusing on the positive aspects of life and practicing optimism can promote feelings of happiness and well-being.</Text>

        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
//END MIND INFO PAGE

//START BODY PAGE
const BodyPage = ({navigation}) => {
  
  const f1 = useRef(new Animated.Value(0)).current;
  const f2 = useRef(new Animated.Value(0)).current;
  const f3 = useRef(new Animated.Value(0)).current;
  const f4 = useRef(new Animated.Value(0)).current;
  
  useEffect(() => {
    Animated.timing(f1, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
    Animated.timing(f2, {
      delay: 100,
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
    Animated.timing(f3, {
      delay: 200,
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
    Animated.timing(f4, {
      delay: 300,
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, [f1, f2, f3, f4]);

  return (
  <SafeAreaView style={styles.container}>
    <View style={styles.centered}>
      <TouchableOpacity style={{padding: 0, alignSelf: 'center' }} onPress={() => navigation.navigate('Endurance')}>
      <Animated.Image source={require('./assets/EnduranceButton.png')} style={[styles.buttonStyle, {opacity: f1} ]} />
      </TouchableOpacity>

      <TouchableOpacity style={{padding: 0, alignSelf: 'center'}} onPress={() => navigation.navigate('Strength')}>
      <Animated.Image source={require('./assets/StrengthButton.png')} style={[styles.buttonStyle, {opacity: f2}]} />
      </TouchableOpacity>

      <TouchableOpacity style={{padding: 0, alignSelf: 'center' }} onPress={() => navigation.navigate('Balance')}>
      <Animated.Image source={require('./assets/BalanceButton.png')} style={[styles.buttonStyle, {opacity: f3} ]} />
      </TouchableOpacity>

      <TouchableOpacity style={{padding: 0, alignSelf: 'center'}} onPress={() => navigation.navigate('Flexibility')}>
      <Animated.Image source={require('./assets/FlexibilityButton.png')} style={[styles.buttonStyle, {opacity: f4}]} />
      </TouchableOpacity>

    </View>
  </SafeAreaView>
  );
}
//END BODY PAGE



//START ENDURANCE PAGE
const EndurancePage = ({navigation}) => {
  const [playing, setPlaying] = useState(false);

  const onStateChange = useCallback((state) => {
    if (state === "ended") {
      setPlaying(false);
      Alert.alert("video has finished playing!");
    }
  }, []);

  const togglePlaying = useCallback(() => {
    setPlaying((prev) => !prev);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
    <ScrollView>
      <View style={{paddingTop: 40}}>
       
        <Text style={styles.titletext}>Endurance.</Text>

        <Text style={styles.bodytext}>
        Endurance exercises, also known as aerobic exercises, are an important component of a healthy lifestyle. Regular endurance exercises have numerous benefits for both physical and mental health.{'\n'}{'\n'}These exercises improve cardiovascular health, enhance lung capacity, and increase energy levels.{'\n'}{'\n'}These exercises can also reduce symptoms of depression, anxiety, and stress, and can lead to an improved sense of well-being. Regular endurance exercises have even been linked to a longer lifespan and improved overall health.{'\n'}{'\n'}Below, you can find more information on endurance exercises, as well as some exercise examples.
        </Text>
      <YoutubePlayer
        height={300}
        play={playing}
        videoId={"N9C88z3g0Es"}
        onChangeState={onStateChange}
      />
      <YoutubePlayer
        height={300}
        play={playing}
        videoId={"K9VG26var34"}
        onChangeState={onStateChange}
      />
      <YoutubePlayer
        height={300}
        play={playing}
        videoId={"6KBBPOlyMWw"}
        onChangeState={onStateChange}
      />
      <YoutubePlayer
        height={300}
        play={playing}
        videoId={"Y6U728AZnV0"}
        onChangeState={onStateChange}
      />
    </View>
    </ScrollView>
    </SafeAreaView>
  );
}
//END ENDURANCE PAGE

//START STRENGTH PAGE
const StrengthPage = ({navigation}) => {
  const [playing, setPlaying] = useState(false);

  const onStateChange = useCallback((state) => {
    if (state === "ended") {
      setPlaying(false);
      Alert.alert("video has finished playing!");
    }
  }, []);

  const togglePlaying = useCallback(() => {
    setPlaying((prev) => !prev);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
    <ScrollView>
      <View style={{paddingTop: 40}}>
       
        <Text style={styles.titletext}>Strength.</Text>

        <Text style={styles.bodytext}>Strength training, also known as resistance training or weightlifting, is a type of exercise that involves using resistance to build and strengthen muscles.{'\n'}{'\n'}Strength training helps to increase muscle mass and bone density, reduce risk of physical age-related conditions, improves overall physical performance, reduces the risk of injury, help to regulate blood sugar levels, reduce blood pressure, improve heart health, boost cognitive function, improve mood, and improve self-confidence and body image.{'\n'}{'\n'}Below, you can find more information on strength training and example videos.
        </Text>
        <YoutubePlayer
        height={300}
        play={playing}
        videoId={"YvrKIQ_Tbsk"}
        onChangeState={onStateChange}
      />
      <YoutubePlayer
        height={300}
        play={playing}
        videoId={"LkXwfTsqQgQ"}
        onChangeState={onStateChange}
      />
      <YoutubePlayer
        height={300}
        play={playing}
        videoId={"9JHs7IZz_a4"}
        onChangeState={onStateChange}
      />
      <YoutubePlayer
        height={300}
        play={playing}
        videoId={"30PqX2zvK88"}
        onChangeState={onStateChange}
      />
    </View>
    </ScrollView>
    </SafeAreaView>
  );
}
//END STRENGTH PAGE

//START BALANCE PAGE
const BalancePage = ({navigation}) => {
    const [playing, setPlaying] = useState(false);
  
    const onStateChange = useCallback((state) => {
      if (state === "ended") {
        setPlaying(false);
        Alert.alert("video has finished playing!");
      }
    }, []);
  
    const togglePlaying = useCallback(() => {
      setPlaying((prev) => !prev);
    }, []);
  
    return (
      <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={{paddingTop: 40}}>
         
          <Text style={styles.titletext}>Balance.</Text>
  
          <Text style={styles.bodytext}>Balance exercises are a type of physical activity that focuses on improving an individual's stability and coordination. These exercises challenge the muscles and nervous system to maintain balance in various positions, helping to improve overall body control and alignment.{'\n'}{'\n'}Balance exercises can improve strength, flexibility, posture, coordination, focus, and overall stability, making them an important addition to any fitness routine for individuals of all ages to maintain good balance and prevent falls.{'\n'}{'\n'}Below, you can find more information on balance exercises and example videos.
          </Text>
          <YoutubePlayer
        height={300}
        play={playing}
        videoId={"E3j7nJyqLys"}
        onChangeState={onStateChange}
      />
      <YoutubePlayer
        height={300}
        play={playing}
        videoId={"eCpfX5rftYI"}
        onChangeState={onStateChange}
      />
      <YoutubePlayer
        height={300}
        play={playing}
        videoId={"b3yim1htlYQ"}
        onChangeState={onStateChange}
      />
      <YoutubePlayer
        height={300}
        play={playing}
        videoId={"kK9MQ0x5IDs"}
        onChangeState={onStateChange}
      />
      </View>
      </ScrollView>
      </SafeAreaView>
    );
}
//END BALANCE PAGE

//START FLEXIBILITY PAGE
const FlexibilityPage = ({navigation}) => {
  const [playing, setPlaying] = useState(false);
  
    const onStateChange = useCallback((state) => {
      if (state === "ended") {
        setPlaying(false);
        Alert.alert("video has finished playing!");
      }
    }, []);
  
    const togglePlaying = useCallback(() => {
      setPlaying((prev) => !prev);
    }, []);
  
    return (
      <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={{paddingTop: 40}}>
         
          <Text style={styles.titletext}>Flexibility.</Text>
  
          <Text style={styles.bodytext}>Flexibility exercises are an essential component of any fitness routine and can have numerous benefits for both physical and mental health. These exercises involve stretching and lengthening muscles and joints, which can improve range of motion, reduce muscle tension and soreness, and improve posture and balance.{'\n'}{'\n'}Flexibility exercises can help to prevent injuries and improve athletic performance, improve circulation, reduce stress and anxiety, and enhance overall relaxation.{'\n'}{'\n'}Below, you can find more information on flexibility exercises with example videos.
          </Text>
          <YoutubePlayer
        height={300}
        play={playing}
        videoId={"hqEbkpKztxw"}
        onChangeState={onStateChange}
      />
      <YoutubePlayer
        height={300}
        play={playing}
        videoId={"g1pb2aK2we4"}
        onChangeState={onStateChange}
      />
      <YoutubePlayer
        height={300}
        play={playing}
        videoId={"uKYZIC-67gY"}
        onChangeState={onStateChange}
      />
      <YoutubePlayer
        height={300}
        play={playing}
        videoId={"_8kV4FHSdNA"}
        onChangeState={onStateChange}
      />
      </View>
      </ScrollView>
      </SafeAreaView>
    );
}
//END FLEXIBILITY PAGE

//START SOUL PAGE
const SoulPage = ({navigation}) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const fadeAnim2 = useRef(new Animated.Value(0)).current;
  
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
  }, [fadeAnim, fadeAnim2]);

  return (
  <SafeAreaView style={styles.container}>
    <View style={styles.centered}>
    <TouchableOpacity style={{padding: 0, alignSelf: 'center' }} onPress={() => navigation.navigate('Meditation')}>
      <Animated.Image source={require('./assets/MeditationButton.png')} style={[styles.buttonStyle, {opacity: fadeAnim} ]} />
      </TouchableOpacity>

      <TouchableOpacity style={{padding: 0, alignSelf: 'center'}} onPress={() => navigation.navigate('Insight')}>
      <Animated.Image source={require('./assets/InsightButton.png')} style={[styles.buttonStyle, {opacity: fadeAnim2}]} />
      </TouchableOpacity>

    </View>
  </SafeAreaView>
  );
}
//END SOUL PAGE


//START MEDITATION PAGE
const MeditationPage = ({navigation}) => {

  const [time, setTime] = useState(0);
  const intervalRef = useRef(null);

  const handleStartTimer = (duration) => {
    clearInterval(intervalRef.current);
    setTime(duration * 60);
    intervalRef.current = setInterval(() => {
      setTime((t) => {
        if (t <= 0) {
          clearInterval(intervalRef.current);
          return 0;
        }
        return t - 1;
      });
    }, 1000);
  };

  const handleStopTimer = () => {
    clearInterval(intervalRef.current);
    setTime(0);
  };

  const formatTime = () => {
    const minutes = Math.floor(time / 60).toString().padStart(2, '0');
    const seconds = (time % 60).toString().padStart(2, '0');
    return `${minutes}:${seconds}`;
  };

  return (
    <SafeAreaView style={styles.container}>
    <ScrollView>
    <View style={{paddingTop: 40}}>
      <Text style={styles.timerText}>{formatTime()}</Text>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleStartTimer(1)}
        >
          <Text style={styles.buttonText}>1 min</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleStartTimer(3)}
        >
          <Text style={styles.buttonText}>3 min</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleStartTimer(5)}
        >
          <Text style={styles.buttonText}>5 min</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleStartTimer(10)}
        >
          <Text style={styles.buttonText}>10 min</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleStartTimer(15)}
        >
          <Text style={styles.buttonText}>15 min</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleStartTimer(30)}
        >
          <Text style={styles.buttonText}>30 min</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleStopTimer}>
          <Text style={styles.buttonText}>Stop</Text>
        </TouchableOpacity>
        
        <View style={{paddingTop: 40}}>

        <Text style={styles.titletext}>
        Meditation.
        </Text>

        <Text style={styles.bodytext}>Meditation has numerous benefits for the mind, body, and soul. It is an excellent tool for relaxation, stress reduction, and improving overall well-being. Through meditation, one can connect with their inner self and become more self-aware.{'\n'}{'\n'}It allows for a deeper understanding and acceptance of one's thoughts and emotions, leading to a greater sense of inner peace and harmony. In terms of the soul, meditation is believed to facilitate a connection with a higher power or divine consciousness. It can provide a spiritual experience and help individuals tap into their intuition and inner wisdom. Meditation is a powerful practice that can bring about a sense of calm, clarity, and deeper understanding of oneself and the world around them.{'\n'}{'\n'}To meditate, simply sit, or lay down in a comfortable position.  The goal here is the bring yourself to the present moment, one simple way to do this is to focus on your natural in-breath, and out-breath. If a thought comes into your head, look at the thought without judgement, and return back to the breath.{'\n'}{'\n'}Above, you can find a timer so you can meditate however long is comfortable to you. 
        </Text>
        </View>

      </View>
    </View>
    </ScrollView>
    </SafeAreaView>
  );
}

//END MEDITATION PAGE

//START INSIGHT PAGE
const InsightPage = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={{paddingTop: 40}}>
        <Text style={styles.titletext}>The benefits of meditation.</Text>
        <Text style={styles.titletext}>1. Reduces stress and anxiety:</Text>
<Text style={styles.bodytext}>Meditation has been shown to help reduce the production of stress hormones like cortisol and increase relaxation responses in the body. As a result, regular meditation practice can help reduce stress and anxiety levels.</Text>

<Text style={styles.titletext}>2. Improves focus and concentration:</Text>
<Text style={styles.bodytext}>Meditation is a practice that involves focusing one's attention on a specific object, like the breath or a mantra. Over time, this can help improve focus and concentration, making it easier to stay present and focused in daily life.</Text>

<Text style={styles.titletext}>3. Increases self-awareness:</Text>
<Text style={styles.bodytext}>Meditation involves becoming more aware of one's thoughts, feelings, and emotions. By practicing mindfulness and observing these inner experiences without judgment, individuals can gain a greater sense of self-awareness and a deeper understanding of their inner workings.</Text>

<Text style={styles.titletext}>4. Promotes emotional well-being:</Text>
<Text style={styles.bodytext}>Meditation has been shown to help individuals regulate their emotions and respond more skillfully to stressful situations. Regular meditation practice can help individuals cultivate feelings of compassion, gratitude, and kindness, leading to greater emotional well-being.</Text>

<Text style={styles.titletext}>5. Enhances overall mental health:</Text>
<Text style={styles.bodytext}>Meditation has been shown to have numerous mental health benefits, including reducing symptoms of depression and anxiety, improving mood, and enhancing overall mental health.</Text>

<Text style={styles.titletext}>6. Lowers blood pressure and reduces the risk of heart disease:</Text>
<Text style={styles.bodytext}>Regular meditation practice has been shown to lower blood pressure and reduce the risk of heart disease, potentially due to its ability to reduce stress and improve overall cardiovascular health.</Text>

<Text style={styles.titletext}>7. Boosts the immune system:</Text>
<Text style={styles.bodytext}>Meditation has been shown to boost the immune system by reducing inflammation in the body and increasing the production of antibodies that help fight off infection.</Text>

<Text style={styles.titletext}>8. Reduces symptoms of depression:</Text>
<Text style={styles.bodytext}>Regular meditation practice has been shown to reduce symptoms of depression and improve overall mood.</Text>

<Text style={styles.titletext}>9. Improves sleep:</Text>
<Text style={styles.bodytext}>Meditation has been shown to improve sleep quality and reduce insomnia by promoting relaxation and reducing stress.</Text>

<Text style={styles.titletext}>10. Helps manage chronic pain:</Text>
<Text style={styles.bodytext}>Meditation has been shown to be an effective tool for managing chronic pain by helping individuals develop a greater awareness of their physical sensations and emotional responses to pain.</Text>

<Text style={styles.titletext}>11. Enhances cognitive function:</Text>
<Text style={styles.bodytext}>Regular meditation practice has been shown to improve cognitive function by enhancing attention, memory, and decision-making abilities.</Text>

<Text style={styles.titletext}>12. Increases feelings of happiness and well-being:</Text>
<Text style={styles.bodytext}>Meditation has been shown to increase feelings of happiness, well-being, and overall life satisfaction by promoting a sense of inner peace and contentment.</Text>

<Text style={styles.titletext}>13. Provides a sense of inner peace and calm:</Text>
<Text style={styles.bodytext}>Regular meditation practice can help individuals cultivate a sense of inner peace and calm, even in the midst of daily stress and chaos.</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
//END INSIGHT PAGE

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
        <Stack.Screen name="Endurance" component={EndurancePage} />
        <Stack.Screen name="Strength" component={StrengthPage} />
        <Stack.Screen name="Balance" component={BalancePage} />
        <Stack.Screen name="Flexibility" component={FlexibilityPage} />
        <Stack.Screen name="Meditation" component={MeditationPage} />
        <Stack.Screen name="Insight" component={InsightPage} />
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
    paddingTop: 30,
  },
  titletext: {
    fontSize: 34,
    padding: 30,
    textAlign: 'center',
  },
  titletextunderlined: {
    fontSize: 34,
    padding: 30,
    textAlign: 'center',
    textDecorationLine: 'underline',
  },
  titletext2: {
    fontSize: 30,
    padding: 30,
    textAlign: 'center',
  },
  bodytext: {
    fontSize: 20,
    marginHorizontal: 10,
    textAlign: 'left',
    padding: 30,
    lineHeight: 30,
  },
  bodytextnotaligned: {
    fontSize: 24,
    marginHorizontal: 10,
    textAlign: 'left',
    padding: 30,
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
  },
  timerText: {
    fontSize: 60,
    //fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30,
  },
  buttonsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: 'black',
    padding: 10,
    borderRadius: 5,
    margin: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    //fontWeight: 'bold',
  },
    


  
});
