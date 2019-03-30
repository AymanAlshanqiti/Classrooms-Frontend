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
  Spinner
} from "native-base";

// Components
import StudentsRows from "../../components/Classrooms/StudentsRows";

// Actions && Connections with Redux
import { connect } from "react-redux";
import * as actionCreators from "../../store/actions/classroomsActions";

class ClassroomDetail extends Component {
  static navigationOptions = {
    title: "Classroom Detail"
  };

  state = {
    loading: true
  };

  classroomId = this.props.navigation.getParam("classroomId");
  async componentDidMount() {
    await this.props.getClassroomObj(this.classroomId);
  }

  render() {
    const classroomObj = this.props.classroomObj;
    if (!classroomObj) {
      return (
        <View>
          <Spinner />
        </View>
      );
    } else {
      const students = this.props.classroomObj.students.map(student => {
        return (
          <StudentsRows student={student} key={student.id} color="#F12580" />
        );
      });
      return (
        <View style={styles.container}>
          <View
            style={styles.container}
            contentContainerStyle={styles.contentContainer}
          >
            <View bordered style={styles.ClassroomContainer}>
              <Text style={{ color: "#F12580", top: 20, fontSize: 20 }}>
                {classroomObj.subject}{" "}
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
                    <Text note style={{ color: "#F12580" }}>
                      {" "}
                      {classroomObj.year} {"    "}
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
                      <Text note style={{ color: "#F12580" }}>
                        {" "}
                        {classroomObj.grade}
                      </Text>
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
                    <Text note> Teacher: </Text>

                    <Text note style={{ color: "#F12580" }}>
                      {" "}
                      {classroomObj.teacher.username}
                    </Text>
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
              {students}
            </ScrollView>
          </View>
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FBFBFB"
  },

  contentContainer: {
    paddingTop: 5
  },

  ClassroomContainer: {
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

const mapStateToProps = state => ({
  classroomObj: state.classroomsReducer.classroomObj
});

const mapDispatchToProps = dispatch => ({
  getClassroomObj: classroomId =>
    dispatch(actionCreators.getClassroomObj(classroomId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ClassroomDetail);
