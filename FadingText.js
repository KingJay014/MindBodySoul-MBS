
import React, {Component} from 'react-native';


class FadingText extends Component {
    constructor(props) {
      super(props);
  
      this.state = {
        opacity: new Animated.Value(0),
      };
    }
  
    componentDidMount() {
      this.animate();
    }
  
    animate() {
      Animated.loop(
        Animated.sequence([
          Animated.timing(this.state.opacity, {
            toValue: 1,
            duration: 1000,
          }),
          Animated.timing(this.state.opacity, {
            toValue: 0,
            duration: 1000,
          }),
        ]),
      ).start();
    }
  
    render() {
      const { opacity } = this.state;
      const { text } = this.props;
  
      return (
        <View style={styles.container}>
          <Animated.Text style={[styles.text, { opacity }]}> Test </Animated.Text>
        </View>
      );
    }
  }