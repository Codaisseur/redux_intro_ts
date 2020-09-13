// myCountingReducer.ts
const initialState = 0;

type Action =
  | { type: "ADD"; payload: number }
  | { type: "SUBTRACT"; payload: number };

export function myCountingReducer(state = initialState, action: Action) {
  switch (action.type) {
    case "ADD": {
      return state + action.payload;
    }
    case "SUBTRACT": {
      return state - action.payload;
    }
    default: {
      return state;
    }
  }
}
