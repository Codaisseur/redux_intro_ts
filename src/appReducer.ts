// src/appReducer.ts
type User = {
  name: string;
  email: string;
};

type AppState = {
  user: null | User;
};

type Action =
  | { type: "LOGOUT" }
  | { type: "LOGIN"; payload: User }
  | { type: "UPDATE_LOGGEDIN_USER"; payload: Partial<User> };

const initialState: AppState = {
  user: null,
};

export function appReducer(state = initialState, action: Action) {
  switch (action.type) {
    case "LOGOUT": {
      return {
        ...state,
        user: null,
      };
    }
    case "LOGIN": {
      // => Ask yourself: what is action.payload?
      return {
        ...state,
        user: action.payload,
      };
    }
    case "UPDATE_LOGGEDIN_USER": {
      // => Ask yourself: what is action.payload?
      if (!state.user) {
        // Not currently logged in,
        //  so this doesn't make sense
        return state;
      }
      return {
        ...state,
        user: {
          // Copy over all current user info,
          ...state.user,
          // and then add updates
          ...action.payload,
        },
      };
    }
    default: {
      return state;
    }
  }
}
