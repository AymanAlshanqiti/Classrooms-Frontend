import React from "react";
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View
} from "react-native";

import { Button, Left, Text, Right, Badge, Icon, Body } from "native-base";
import MyClassrooms from "../components/Classrooms/List";
import ClassroomItem from "../components/MyClassrooms";

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: "My Classrooms"
  };

  render() {
    const myClassrooms = MyClassrooms.map(myClassroom => {
      return <ClassroomItem classroom={myClassroom} key={myClassroom.id} />;
    });
    return (
      <View style={styles.container}>
        <ScrollView
          style={styles.container}
          contentContainerStyle={styles.contentContainer}
        >
          {myClassrooms}
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

  contentContainer: {
    paddingTop: 30
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
  }
});
