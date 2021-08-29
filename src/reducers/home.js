import ActionTypes from "../constants/actionTypes";
import initialState from "../stores/initialState";

export default (state = initialState.home, action) => {
  switch (action.type) {
    case ActionTypes.GOT_COUNT:
    return{
      ...state,
      total:action.payload[0]
    }
    case ActionTypes.GOT_COUNT:
    return{
      ...state,
      userData:action.payload[0]
    }
    default:
      return state;
  }
};
