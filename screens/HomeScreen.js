import React from "react";
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View
} from "react-native";
import { WebBrowser } from "expo";

import { MonoText } from "../components/StyledText";
import { Button, Left, Text, Right, Badge, Icon, Body } from "native-base";

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: "My Classrooms"
  };

  render() {
    return (
      <View style={styles.container}>
        <ScrollView
          style={styles.container}
          contentContainerStyle={styles.contentContainer}
        >
          <Button bordered style={styles.myClassroomContainer}>
            <Left style={{ left: 10 }}>
              <Text style={{ color: "#00bcd4" }}>Classroom Subject </Text>

              <Icon
                name="calendar"
                type="AntDesign"
                style={{
                  fontSize: 18,
                  left: 10,
                  top: 5,
                  color: "#C1C1C1"
                }}
              >
                <Text note> 2019 {"    "}</Text>
                <Icon
                  name="graduation-cap"
                  type="Entypo"
                  style={{
                    fontSize: 20,
                    left: 10,
                    top: 5,
                    color: "#E1E1E1"
                  }}
                >
                  <Text note> 12</Text>
                </Icon>
              </Icon>
            </Left>

            <View style={{ right: 10 }}>
              <Badge style={{ backgroundColor: "#00bcd4" }}>
                <Text>2</Text>
              </Badge>
            </View>
          </Button>
        </ScrollView>

        <Button style={styles.createClassroomContainer}>
          <Text style={styles.createClassroomText}>New Classroom</Text>
        </Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FBFBFB"
  },
  developmentModeText: {
    marginBottom: 20,
    color: "rgba(0,0,0,0.4)",
    fontSize: 14,
    lineHeight: 19,
    textAlign: "center"
  },
  contentContainer: {
    paddingTop: 30
  },
  welcomeContainer: {
    alignItems: "center",
    marginTop: 10,
    marginBottom: 20
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: "contain",
    marginTop: 3,
    marginLeft: -10
  },
  getStartedContainer: {
    alignItems: "center",
    marginHorizontal: 50
  },
  homeScreenFilename: {
    marginVertical: 7
  },
  createClassroomText: {
    color: "#FFF",
    fontSize: 20,
    paddingLeft: "30%",
    alignSelf: "center",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center"
  },
  codeHighlightContainer: {
    backgroundColor: "rgba(0,0,0,0.05)",
    borderRadius: 3,
    paddingHorizontal: 4
  },
  getStartedText: {
    fontSize: 17,
    color: "rgba(96,100,109, 1)",
    lineHeight: 24,
    textAlign: "center"
  },
  myClassroomContainer: {
    position: "absolute",
    top: 15,
    left: 15,
    right: 15,
    height: 70,
    shadowColor: "black",
    shadowOffset: { height: -1 },
    shadowOpacity: 0.05,
    borderRadius: 8,
    borderColor: "#F9F9F9",
    shadowRadius: 3,
    alignItems: "center",
    backgroundColor: "#FFF"
  },
  createClassroomContainer: {
    position: "absolute",
    bottom: 15,
    left: 15,
    right: 15,
    height: 50,
    shadowColor: "black",
    shadowOffset: { height: -3 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    borderRadius: 18,
    alignItems: "center",
    backgroundColor: "#00bcd4"
  },
  tabBarInfoText: {
    fontSize: 17,
    color: "#FFF",
    textAlign: "center",
    padding: 10
  },
  navigationFilename: {
    marginTop: 5
  },
  helpContainer: {
    marginTop: 15,
    alignItems: "center"
  },
  helpLink: {
    paddingVertical: 15
  },
  helpLinkText: {
    fontSize: 14,
    color: "#2e78b7"
  }
});
