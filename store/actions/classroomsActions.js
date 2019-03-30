import * as actionTypes from "./types";
import axios from "axios";

export const getClassrooms = () => {
  return async dispatch => {
    dispatch(setClassroomsLoading());
    try {
      const res = await axios.get("http://127.0.0.1:8000/api/classrooms/list/");
      const classrooms = res.data;
      dispatch({
        type: actionTypes.GET_CLASSROOMS,
        payload: classrooms
      });
    } catch (err) {
      console.error("Error while fetching shops", err);
    }
  };
};

export const setClassroomsLoading = () => ({
  type: actionTypes.CLASSROOMS_LOADING
});

export const getClassroomObj = classroomId => {
  return async dispatch => {
    try {
      let response = await axios.get(
        `http://127.0.0.1:8000/api/classrooms/detail/${classroomId}/`
      );
      let classroomObj = response.data;
      dispatch({
        type: actionTypes.GET_CLASSROOM_OBJ,
        payload: classroomObj
      });
    } catch (error) {
      console.error(
        "Error While Getting Classroom Object ",
        error.response.data
      );
    }
  };
};
