import { render } from "./render.js";

let state = {
theme: "light",
  lastUpdatedKey: null,
};
export function getState () {
    return state
}
export function dispatch(stateUpdater) {
  state = { ...state, ...stateUpdater(state) };

  render(state);
}
