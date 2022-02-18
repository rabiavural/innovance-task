import * as actionTypes from "../actions/actionTypes";

export const initialState = {
    userInfo: {},
    userList : []
};

export default (state = initialState, action) => {
    switch (action.type) {  
      case actionTypes.USER_INFO: {
        return {
          ...state,
          userInfo: action.payload,
        };
      }
      case actionTypes.USER_LIST: {
      return {
        ...state,
        userList: action.payload,
      };
    }
      default:
        return { ...state };
    }
  };