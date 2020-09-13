// src/myCountingReducer.spec.ts
import { createStore } from "redux";
import { myCountingReducer } from "./myCountingReducer";

test("Initial state should be 0", () => {
  const store = createStore(myCountingReducer);
  expect(store.getState()).toBe(0);
});

test("ADD should work as expected", () => {
  const store = createStore(myCountingReducer);

  store.dispatch({
    type: "ADD",
    payload: 1,
  });
  expect(store.getState()).toBe(1);

  store.dispatch({
    type: "ADD",
    payload: 99,
  });
  expect(store.getState()).toBe(100);
});

test("SUBTRACT should work as expected", () => {
  const store = createStore(myCountingReducer);

  store.dispatch({
    type: "ADD",
    payload: 10,
  });
  expect(store.getState()).toBe(10);

  store.dispatch({
    type: "SUBTRACT",
    payload: 5,
  });
  expect(store.getState()).toBe(5);

  store.dispatch({
    type: "SUBTRACT",
    payload: 5,
  });
  expect(store.getState()).toBe(0);
});
