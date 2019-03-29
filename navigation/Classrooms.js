import { createStackNavigator } from "react-navigation";

import List from "../screens/Classrooms/List";
import Detail from "../screens/Classrooms/Detail";

const ClassroomsStack = createStackNavigator({
  ClassroomsList: List,
  ClassroomsDetail: Detail,
  ClassroomsUpdate: Update
});

export default ClassroomsStack;
