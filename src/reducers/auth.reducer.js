import { authconstants } from "../actions/constants";

const initState = {
  token: null,
  user: {
    firstname: "",
    lastname: "",
    picture: "",
    email: "",
  },
  authonticate: false,
  authonticating: false,
};

export default (state = initState, action) => {

  console.log(action)
    
  switch (action.type) {
    case authconstants.LOGIN_REQUEST:
      state = {
        ...state,
        authonticating: true,
      };
      break;

    case authconstants.LOGIN_SUCCESS:
      state = {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
        authonticate: true,
      };
      
      break;

      case authconstants.LOGIN_FAILURE:
      state = {
        ...state, 
        authonticate: false,
      };

      break;
  }
 
 

  return state;
};
