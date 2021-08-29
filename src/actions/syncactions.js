import ActionTypes from "../constants/actionTypes";

export const gotEventList = data => ({
  type: ActionTypes.GOT_EVENT_LIST,
  payload: data
});

export const saveVerification =(data,number) =>({
  type: ActionTypes.GOT_TOKEN,
  payload: data,
  number
})