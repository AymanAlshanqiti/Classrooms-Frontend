import { createStackNavigator } from "react-navigation";

import List from "../screens/Classrooms/List";
import Detail from "../screens/Classrooms/Detail";
import Create from "../screens/Classrooms/Create";

const ClassroomsStack = createStackNavigator({
  ClassroomsList: List,
  ClassroomsDetail: Detail
  // ClassroomsCreate: Create,
  // ClassroomsUpdate: Update,
  // ClassroomsRemove: Remove
});

export default ClassroomsStack;
