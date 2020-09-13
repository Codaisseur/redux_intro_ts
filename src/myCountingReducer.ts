// myCountingReducer.ts
const initialState = 0;

type Action =
  | { type: "ADD"; payload: number }
  | { type: "SUBTRACT"; payload: number }
  | { type: "MULTIPLY"; payload: number }
  | { type: "RESET" };

export function myCountingReducer(state = initialState, action: Action) {
  switch (action.type) {
    case "ADD": {
      return state + action.payload;
    }
    case "SUBTRACT": {
      return state - action.payload;
    }
    case "MULTIPLY": {
      return state * action.payload;
    }
    case "RESET": {
      return initialState;
    }
    default: {
      return state;
    }
  }
}
