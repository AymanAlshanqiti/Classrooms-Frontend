import React from "react";
import { Icon } from "native-base";
import {
  createStackNavigator,
  createBottomTabNavigator
} from "react-navigation";

import TabBarIcon from "../components/TabBarIcon";
import MyClasses from "../screens/MyClassrooms";
import ClassroomsList from "../screens/Classrooms/List";
import ClassroomDetail from "../screens/Classrooms/Detail";
import Profile from "../screens/Profile";

const HomeStack = createStackNavigator({
  MyClasses: MyClasses,
  Detail: ClassroomDetail
});

HomeStack.navigationOptions = {
  tabBarLabel: "My Classes",
  tabBarIcon: (
    <Icon
      name="mortar-board"
      type="FontAwesome"
      style={{ fontSize: 25, color: "#F12580" }}
    />
  )
};

const LinksStack = createStackNavigator({
  Classrooms: ClassroomsList,
  Detail: ClassroomDetail
});

LinksStack.navigationOptions = {
  tabBarLabel: "Classrooms",
  tabBarIcon: ({ focused }) => (
    <Icon
      name="mortar-board"
      type="FontAwesome"
      style={{ fontSize: 25, color: "#CCC" }}
    />
  )
};

const SettingsStack = createStackNavigator({
  Profile: Profile
});

SettingsStack.navigationOptions = {
  tabBarLabel: "Profile",
  tabBarIcon: ({ focused }) => (
    <Icon
      name="mortar-board"
      type="FontAwesome"
      style={{ fontSize: 25, color: "#CCC" }}
    />
  )
};

export default createBottomTabNavigator({
  HomeStack,
  LinksStack,
  SettingsStack
});
