import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import { Button, Left, Text, Badge, Icon } from "native-base";

class ClassroomItem extends Component {
  render() {
    const classroom = this.props.classroom;
    return (
      <Button bordered style={styles.ClassroomsContainer}>
        <Left style={{ left: 10 }}>
          <Text style={{ color: "#F12580" }}>{classroom.subject} </Text>

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
            <Text note>
              {" "}
              {classroom.year} {"    "}
            </Text>
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
              <Text note> {classroom.grade}</Text>
            </Icon>
          </Icon>
        </Left>

        <View style={{ right: 10 }}>
          <Badge style={{ backgroundColor: "#F12580" }}>
            <Text>2</Text>
          </Badge>
        </View>
      </Button>
    );
  }
}

export default ClassroomItem;

const styles = StyleSheet.create({
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
