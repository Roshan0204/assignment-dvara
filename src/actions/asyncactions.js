import { makeAsyncRequest } from "../constants/request";
import * as syncActions from "./syncactions";
import AppConstants from "../constants/appConstants";
import {message } from "antd";

export const register = (data,cbFunc) => dispatch => {
    makeAsyncRequest("post", `${AppConstants.baseURL}/action/register`, data)
      .then(resp => {
          if(resp.data.code==200){
              message.success(resp.data.msg,5);
              cbFunc();
          }
        // console.log(resp, "resp data");
      })
      .catch(err => {
        console.log(err);
      });
  };


  export const getCount= () => dispatch => {
    makeAsyncRequest("post", `${AppConstants.baseURL}/action/count`)
    .then(resp => {
        if(resp.data.code==200){
            message.success(resp.data.msg,5);
            dispatch(syncActions.gotCount(resp.data.data))
        }
      // console.log(resp, "resp data");
    })
    .catch(err => {
      console.log(err);
    });
  }


  export const getUserByMobile= (mobile) => dispatch => {
    makeAsyncRequest("post", `${AppConstants.baseURL}/action/search?mobile=${mobile}`)
    .then(resp => {
        if(resp.data.code==200){
            message.success(resp.data.msg,5);
            dispatch(syncActions.gotUser(resp.data.data))
        }
      // console.log(resp, "resp data");
    })
    .catch(err => {
      console.log(err);
    });
  }
