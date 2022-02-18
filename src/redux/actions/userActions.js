import * as actionTypes from "./actionTypes";
import * as services from "../../services"

export const getUserInfo = (params) => {
    return (dispatch) => {
      dispatch({ type: actionTypes.USER_INFO, payload: params });
    };
  };

export const getUserList =()=>{
  return (dispatch) => {
    try {
      services.getUserList()
        .then((response) => {
          dispatch({ type: actionTypes.USER_LIST, payload: response.data });
        })
        .catch((error) => console.log("errrrror: ", error));
    } catch (error) {
      throw error;
    }
  };
}
