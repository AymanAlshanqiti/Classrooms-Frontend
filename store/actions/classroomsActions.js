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
        "Error while getting classroom object ",
        error.response.data
      );
    }
  };
};

export const createClassroom = classroomObj => {
  return async dispatch => {
    try {
      let response = await axios.post(
        `http://127.0.0.1:8000/api/classrooms/create/`,
        classroomObj
      );

      let newClassroomObj = response.data;
      dispatch({
        type: actionTypes.CREATE_CLASSROOM,
        payload: newClassroomObj
      });
    } catch (error) {
      console.error("Error while create a new classroom ");
    }
  };
};

export const removeClassroom = classroomId => {
  return async dispatch => {
    try {
      let response = await axios.post(
        `http://127.0.0.1:8000/api/classrooms/delete/${classroomId}/`
      );
    } catch (error) {
      console.error("Error while deletting the classroom ");
    }
  };
};
