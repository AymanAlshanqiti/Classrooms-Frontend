import * as actionTypes from "../actions/types";

const initialState = {
  classrooms: [],
  loading: true,

  classroomObj: null
};

const classroomsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_CLASSROOMS:
      return {
        ...state,
        classrooms: action.payload,
        loading: false
      };

    case actionTypes.CLASSROOMS_LOADING:
      return {
        ...state,
        loading: true
      };

    case actionTypes.GET_CLASSROOM_OBJ:
      return {
        ...state,
        classroomObj: action.payload
      };

    case actionTypes.CREATE_CLASSROOM:
      return {
        ...state,
        classrooms: state.classrooms.concat(action.payload)
      };

    default:
      return state;
  }
};

export default classroomsReducer;
