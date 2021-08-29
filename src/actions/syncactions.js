import ActionTypes from "../constants/actionTypes";

export const gotCount = data => ({
  type: ActionTypes.GOT_COUNT,
  payload: data
});

export const gotUser =(data,number) =>({
  type: ActionTypes.GOT_USER,
  payload: data
})