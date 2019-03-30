import React, { Component } from "react";
import { ScrollView, StyleSheet, View } from "react-native";

// NativeBase Components
import {
  Text,
  Button,
  Body,
  List,
  ListItem,
  Form,
  Label,
  Input,
  Item,
  Content,
  Container,
  Icon,
  Header
} from "native-base";

// Actions && Connections with Redux
import { connect } from "react-redux";
import * as actionCreators from "../../store/actions/classroomsActions";

class CreateClassroom extends Component {
  state = {
    subject: null,
    grade: null,
    year: null
  };

  render() {
    return (
      <Container>
        <Content>
          <Body>
            <Text
              style={{
                marginTop: 100,
                marginBottom: 20,
                color: "#F12580",
                fontSize: 20,
                fontWeight: "bold"
              }}
            >
              Create a new classroom
            </Text>
          </Body>
          <Item
            regular
            style={{
              borderRadius: 10,
              marginLeft: 25,
              marginRight: 30,
              marginBottom: 10,
              top: 10
            }}
          >
            <Input
              placeholder="Subject"
              onChangeText={value => this.setState({ subject: value })}
            />
            <Icon
              name="star"
              type="AntDesign"
              style={{
                fontSize: 18,
                top: 0,
                color: "#C1C1C1"
              }}
            />
          </Item>

          <Item
            regular
            style={{
              borderRadius: 10,
              marginLeft: 25,
              marginRight: 30,
              marginBottom: 10,
              top: 10
            }}
          >
            <Input
              placeholder="Grade"
              onChangeText={value => this.setState({ grade: value })}
            />
            <Icon
              name="graduation-cap"
              type="Entypo"
              style={{
                fontSize: 18,
                top: 0,
                color: "#C1C1C1"
              }}
            />
          </Item>

          <Item
            regular
            style={{
              borderRadius: 10,
              marginLeft: 25,
              marginRight: 30,
              marginBottom: 10,
              top: 10
            }}
          >
            <Input
              placeholder="Year"
              onChangeText={value => this.setState({ year: value })}
            />
            <Icon
              name="calendar"
              type="AntDesign"
              style={{
                fontSize: 18,
                top: 0,
                color: "#C1C1C1"
              }}
            />
          </Item>

          <Button
            style={styles.createClassroomButton}
            onPress={() =>
              this.props.createClassroom({
                subject: "bobo",
                grade: 3,
                year: 2019
              })
            }
          >
            <Text style={styles.createClassroomText}>Create</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  createClassroomText: {
    color: "#FFF",
    fontSize: 20,
    paddingLeft: "40%",
    alignSelf: "center",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center"
  },
  createClassroomButton: {
    position: "absolute",
    bottom: 15,
    left: 25,
    top: 360,
    right: 30,
    height: 50,
    borderRadius: 10,
    alignItems: "center",
    backgroundColor: "#F12580"
  }
});

const mapDispatchToProps = dispatch => ({
  createClassroom: classroom =>
    dispatch(actionCreators.createClassroom(classroom))
});

export default connect(
  null,
  mapDispatchToProps
)(CreateClassroom);
