import React, { Component } from "react";
import { ScrollView, StyleSheet, View } from "react-native";

// Components
import ClassroomItem from "../../components/Classrooms/ClassroomsRows";

// Actions && Connections with Redux
import { connect } from "react-redux";
import * as actionCreators from "../../store/actions/classroomsActions";

class ClassroomsList extends Component {
  static navigationOptions = {
    title: "Classrooms"
  };

  async componentDidMount() {
    await this.props.fetchClassrooms();
  }

  render() {
    const classrooms = this.props.classrooms.map(classroom => {
      return (
        <ClassroomItem
          classroom={classroom}
          key={classroom.id}
          color="#F12580"
        />
      );
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

const mapStateToProps = state => ({
  classrooms: state.classroomsReducer.classrooms
});

const mapDispatchToProps = dispatch => ({
  fetchClassrooms: () => dispatch(actionCreators.getClassrooms())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ClassroomsList);
