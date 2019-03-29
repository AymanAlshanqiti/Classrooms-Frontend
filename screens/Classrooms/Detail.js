import React, { Component } from "react";
import { ScrollView, StyleSheet, View } from "react-native";

import Classrooms from "../../components/Classrooms/List";
import { Left, Text, Right, Badge, Icon, Body, Row } from "native-base";
import ClassroomItem from "../../components/Classrooms";

export default class ClassroomDetail extends React.Component {
  static navigationOptions = {
    title: "Classroom Detail"
  };

  render() {
    return (
      <View style={styles.container}>
        <View
          style={styles.container}
          contentContainerStyle={styles.contentContainer}
        >
          <View bordered style={styles.ClassroomsContainer}>
            <Text style={{ color: "#F12580", top: 20, fontSize: 20 }}>
              {Classrooms[1].subject}{" "}
            </Text>
            <Row style={{ position: "absolute", top: 45 }}>
              <Body>
                <Icon
                  name="calendar"
                  type="AntDesign"
                  style={{
                    fontSize: 18,
                    top: 15,
                    color: "#C1C1C1"
                  }}
                >
                  <Text note>
                    {" "}
                    {Classrooms[1].year} {"    "}
                  </Text>
                  <Icon
                    name="graduation-cap"
                    type="Entypo"
                    style={{
                      fontSize: 20,
                      top: 15,
                      color: "#E1E1E1"
                    }}
                  >
                    <Text note> {Classrooms[1].grade}</Text>
                  </Icon>
                </Icon>
              </Body>
            </Row>

            <Row style={{ position: "absolute", top: 75 }}>
              <Body>
                <Icon
                  name="person"
                  type="Octicons"
                  style={{
                    fontSize: 18,
                    top: 15,
                    color: "#C1C1C1"
                  }}
                >
                  <Text note> Teatcher: </Text>

                  <Text note> {Classrooms[1].subject}</Text>
                </Icon>
              </Body>
            </Row>

            <Row style={{ position: "absolute", top: 125 }}>
              <Body>
                <Text note> Class's Students </Text>
                <Icon
                  name="ios-arrow-down"
                  type="Ionicons"
                  style={{
                    fontSize: 18,
                    top: 10,
                    color: "#C1C1C1"
                  }}
                />
              </Body>
            </Row>
          </View>

          <ScrollView
            style={styles.container}
            contentContainerStyle={styles.contentContainer}
          >
            <View bordered style={styles.ClassroomsContainer}>
              <Left style={{ left: 10 }}>
                <Text style={{ color: "#F12580" }}>dffddf </Text>

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
                  <Text note> ddd {"    "}</Text>
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
                    <Text note> dadd</Text>
                  </Icon>
                </Icon>
              </Left>
            </View>
          </ScrollView>
        </View>
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
    top: 10,
    marginBottom: 10,
    marginLeft: 10,
    marginRight: 10,
    height: 180,
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
