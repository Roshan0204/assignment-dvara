import { makeAsyncRequest } from "../constants/request";
import ActionTypes from "../constants/actionTypes";
import * as syncActions from "./syncactions";
import AppConstants from "../constants/appConstants";
import { Alert, message } from "antd";

export const verifyNumber = (data) => dispatch => {
    makeAsyncRequest("post", `${AppConstants.baseURL}/users/phone`, data)
      .then(resp => {
          if(resp.data.success){
              message.success(resp.data.message,5)
              localStorage.setItem("token",resp.data.results.token)
              dispatch(syncActions.saveVerification(resp.data.results,data.phoneNumber))
          }
        // console.log(resp, "resp data");
      })
      .catch(err => {
        console.log("Login failed");
      });
  };

  export const verifyOtp = (data, cbFunc) => dispatch => {
    makeAsyncRequest("post", `${AppConstants.baseURL}/users/phone/verify`, data)
      .then(resp => {
          if(resp.data.success){
              message.success(resp.data.message,5)
              cbFunc(resp.data.results)
              // dispatch(syncActions.saveVerification(resp.data.results,data.phoneNumber))
          }else{
            message.error(resp.data.message,5)
          }
        console.log(resp, "resp data");
      })
      .catch(err => {
        console.log("Login failed");
      });
  };
