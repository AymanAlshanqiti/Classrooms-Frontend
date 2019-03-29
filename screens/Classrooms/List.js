import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";

import Classrooms from "../../components/Classrooms/List";
import { Button, Left, Text, Right, Badge, Icon, Body } from "native-base";
import ClassroomItem from "../../components/Classrooms";

export default class ClassroomsList extends React.Component {
  static navigationOptions = {
    title: "Classrooms"
  };

  render() {
    const classrooms = Classrooms.map(classroom => {
      return <ClassroomItem classroom={classroom} key={classroom.id} />;
    });
    return (
      <View style={styles.container}>
        <ScrollView
          style={styles.container}
          contentContainerStyle={styles.contentContainer}
        >
          {classrooms}
        </ScrollView>
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

  ClassroomsContainer: {
    position: "relative",
    top: 0,
    marginBottom: 10,
    marginLeft: 20,
    marginRight: 20,
    height: 70,
    shadowColor: "black",
    shadowOffset: { height: -1 },
    shadowOpacity: 0.05,
    borderRadius: 8,
    borderColor: "#F9F9F9",
    shadowRadius: 3,
    alignItems: "center",
    backgroundColor: "#FFF"
  }
});
