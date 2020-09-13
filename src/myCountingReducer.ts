// myCountingReducer.ts
const initialState = 0;

type Action = { type: "ADD"; payload: number };

export function myCountingReducer(state = initialState, action: Action) {
  switch (action.type) {
    case "ADD": {
      return state + action.payload;
    }
    default: {
      return state;
    }
  }
}

// predict: what will be console logged?
// console.log(myCountingReducer(undefined, {}));

// predict: what will be console logged?
console.log(myCountingReducer(0, { type: "ADD", payload: 5 }));

// predict: what will be console logged?
console.log(myCountingReducer(10, { type: "ADD", payload: 10 }));

// predict: what will be console logged?
console.log(myCountingReducer(10, { type: "ADD", payload: 10 }));
