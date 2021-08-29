import ActionTypes from "../constants/actionTypes";
import initialState from "../stores/initialState";

export default (state = initialState.home, action) => {
  switch (action.type) {
    case ActionTypes.GOT_TOKEN:
    return {
      ...state,
      verifyData: action.payload,
      mobile: action.number
    };
    default:
      return state;
  }
};
