import React, { Component } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { Button, Text } from "native-base";

// Components
import ClassroomItem from "../components/Classrooms/ClassroomsRows";

// Actions && Connections with Redux
import { connect } from "react-redux";
import * as actionCreators from "../store/actions/classroomsActions";

class HomeScreen extends Component {
  static navigationOptions = {
    title: "My Classrooms"
  };

  async componentDidMount() {
    await this.props.fetchClassrooms();
  }

  render() {
    const myClassrooms = this.props.classrooms.map(myClassroom => {
      return (
        <ClassroomItem
          classroom={myClassroom}
          key={myClassroom.id}
          color="#00bcd4"
        />
      );
    });

    return (
      <View style={styles.container}>
        <ScrollView
          style={styles.container}
          contentContainerStyle={styles.contentContainer}
        >
          {myClassrooms}
        </ScrollView>

        <Button
          style={styles.createClassroomContainer}
          onPress={() => this.props.navigation.navigate("Create")}
        >
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
    borderRadius: 10,
    alignItems: "center",
    backgroundColor: "#00bcd4"
  }
});

const mapStateToProps = state => ({
  classrooms: state.classroomsReducer.classrooms
});

const mapDispatchToProps = dispatch => ({
  fetchClassrooms: () => dispatch(actionCreators.getClassrooms())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeScreen);
