import React from "react";
import PropTypes from "prop-types";
import {
  AlertIOS,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  NaitveModules
} from "react-native";
import TouchID from "react-native-touch-id";

class FingerPrint extends React.Component {
  const optionalConfigObject = {
    title: 'Authentication Required',
    color: '#e00606',
    fallbackLable: 'Show Password', //ios
  }
  pressHandler(){
    TouchID.authenticate('to demo this react-native component', optionalConfigObject)
    .then((success)=>{
      console.log('success is', success);
      alert('Authenticated Successfully')
    }).catch((error)=>{
      console.log('error is', error);
      alert('Authentication Failed')
    })
  }
  render() {
    return (
      <View>
        <TouchableHighlight onPress={this.pressHandler}>
          <Text>Authenticate with Touch ID</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

export default FingerPrint;
