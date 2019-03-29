import React from "react";
import { StyleSheet, Image, View } from "react-native";
import { Left, Thumbnail, Body, Text, Row } from "native-base";

export default class SettingsScreen extends React.Component {
  static navigationOptions = {
    title: "My Profile"
  };

  render() {
    return (
      <View>
        <Thumbnail
          source={require("../assets/images/robot-dev.png")}
          style={{ left: "45%", top: 20 }}
        />
        <Text style={{ left: "35%", top: 35 }}>Ayman Alshanqiti</Text>
        <Text note style={{ left: "40%", top: 45 }}>
          @AySh9014
        </Text>
      </View>
    );
  }
}
