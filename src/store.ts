// src/store.ts
import { createStore } from "redux";
import { myCountingReducer } from "./myCountingReducer";

const store = createStore(myCountingReducer);
console.log("Initial state of the store:", store.getState());
