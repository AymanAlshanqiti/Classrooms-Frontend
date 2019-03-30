import * as actionTypes from "../actions/types";

const initialState = {
  classrooms: [],
  loading: true
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
    default:
      return state;
  }
};

export default classroomsReducer;
