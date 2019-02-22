import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  AlertIOS,
  StyleSheet,
  TouchableHighlight,
  Text,
  View
} from "react-native";

import TouchID from "react-native-touch-id";

export default class FingerPrint extends Component {
  constructor(props) {
    super(props);
    this.state = {
      biometryType: null
    };
  }
  componentDidMount() {
    TouchID.isSupported().then(biometryType => {
      console.log("biometryType is", biometryType);
      this.setState({ biometryType });
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight
          style={styles.btn}
          onPress={this.clickHandler}
          underlayColor="#0380BE"
          activeOpacity={1}
        >
          <Text style={{ color: "#fff", fontWeight: "600" }}>
            {`Authenticate with ${this.state.biometryType}`}
          </Text>
        </TouchableHighlight>
      </View>
    );
  }

  clickHandler() {
    TouchID.isSupported()
      .then(authenticate)
      .catch(error => {
        console.log("error is", error);
        alert("ToucId not supported");
      });
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  btn: {
    borderRadius: 3,
    marginTop: 200,
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 15,
    paddingRight: 15,
    backgroundColor: "#0391D7"
  }
});
function authenticate() {
  return TouchID.authenticate()
    .then(success => {
      console.log("authenticate is sucess", success);
      alert("Authenticated SuccessFully");
    })
    .catch(error => {
      console.log("Authenticate error", error);
      alert(error.message);
    });
}
