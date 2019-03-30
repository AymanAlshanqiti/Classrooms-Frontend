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
import ClassroomCreate from "../screens/Classrooms/Create";

import Profile from "../screens/Profile";

const HomeStack = createStackNavigator(
  {
    MyClasses: MyClasses,
    Detail: ClassroomDetail,
    Create: ClassroomCreate
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: "#FFF"
      },
      headerTitleStyle: {
        fontWeight: "bold",
        color: "gray"
      },
      headerTintColor: "#F12580"
    }
  }
);

HomeStack.navigationOptions = {
  tabBarLabel: "My Classes",
  tabBarIcon: ({ tintColor }) => {
    let iconName = "class";
    let iconType = "MaterialIcons";
    return (
      <Icon
        name={iconName}
        type={iconType}
        style={{ color: tintColor, fontSize: 25 }}
      />
    );
  },
  tabBarOptions: {
    activeTintColor: "#F12580",
    inactiveTintColor: "#CCC"
  }
};

const LinksStack = createStackNavigator(
  {
    Classrooms: ClassroomsList,
    Detail: ClassroomDetail
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: "#FFF"
      },
      headerTitleStyle: {
        fontWeight: "bold",
        color: "gray"
      },
      headerTintColor: "#F12580"
    }
  }
);

LinksStack.navigationOptions = {
  tabBarLabel: "Classrooms",
  tabBarIcon: ({ tintColor }) => {
    let iconName = "mortar-board";
    let iconType = "FontAwesome";
    return (
      <Icon
        name={iconName}
        type={iconType}
        style={{ color: tintColor, fontSize: 25 }}
      />
    );
  },

  tabBarOptions: {
    activeTintColor: "#F12580",
    inactiveTintColor: "#CCC"
  }
};

const SettingsStack = createStackNavigator(
  {
    Profile: Profile
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: "#FFF"
      },
      headerTitleStyle: {
        fontWeight: "bold",
        color: "gray"
      },
      headerTintColor: "#F12580"
    }
  }
);

SettingsStack.navigationOptions = {
  tabBarLabel: "Profile",
  tabBarIcon: ({ tintColor }) => {
    let iconName = "user";
    let iconType = "FontAwesome";
    return (
      <Icon
        name={iconName}
        type={iconType}
        style={{ color: tintColor, fontSize: 25 }}
      />
    );
  },

  tabBarOptions: {
    activeTintColor: "#F12580",
    inactiveTintColor: "#CCC"
  }
};

export default createBottomTabNavigator({
  HomeStack,
  LinksStack,
  SettingsStack
});
