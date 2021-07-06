import { useState, useEffect } from "react";

let state = {};
let listeners = [];
let actions = {};

const useStore = () => {
  const [, setState] = useState(state);

  const dispatch = (type, payload) => {
    const newState = actions[type](state, payload);
    state = { ...state, ...newState };

    listeners.forEach((listener) => listener(state));
  };

  useEffect(() => {
    listeners.push(setState);
    return () => {
      listeners = listeners.filter((listener) => listener !== setState);
    };
  }, [setState]);

  return [state, dispatch];
};

export const initStore = (userAction, userState) => {
  if (userState !== undefined) {
    state = { ...state, ...userState };
  }
  actions = { ...actions, ...userAction };
};

export default useStore;
