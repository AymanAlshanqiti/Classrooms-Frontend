import React, { Component } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import {
  Left,
  Text,
  Right,
  Badge,
  Icon,
  Body,
  Row,
  Spinner,
  Button
} from "native-base";

class StudentsRows extends Component {
  render() {
    const studentObj = this.props.student;

    return (
      <Button bordered style={styles.StudentContainer}>
        <Left style={{ left: 10 }}>
          <Text style={{ color: "#F12580" }}>
            {`${studentObj.first_name} ${studentObj.last_name}`}{" "}
          </Text>

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
              {studentObj.dob} {"    "}
            </Text>
            <Icon
              name="star"
              type="AntDesign"
              style={{
                fontSize: 20,
                left: 10,
                top: 5,
                color: "#E1E1E1"
              }}
            >
              <Text note>
                {" "}
                {studentObj.exam_grade} {"    "}
              </Text>
            </Icon>

            <Icon
              name="transgender"
              type="FontAwesome"
              style={{
                fontSize: 20,
                left: 10,
                top: 5,
                color: "#E1E1E1"
              }}
            >
              <Text note> {studentObj.gender === "M" ? "Male" : "Female"}</Text>
            </Icon>
          </Icon>
        </Left>
      </Button>
    );
  }
}

const styles = StyleSheet.create({
  StudentContainer: {
    position: "relative",
    top: 10,
    marginBottom: 10,
    left: 10,
    right: 0,
    height: 70,
    width: "95%",
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

export default StudentsRows;
