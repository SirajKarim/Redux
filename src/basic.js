import { createStore, combineReducers } from "redux";

function Todo(state = { name: "muneeb" }, action) {
  switch (action.type) {
    case "ADD TODO":
      return {
        ...state,
        text: "TODO ADDED",
      };
    case "DELETE TODO":
      return {
        ...state,
        text: "TODO ADDED",
      };

    default:
      return state;
      break;
  }
}

function User(state = { name: "muneeb" }, action) {
  switch (action.type) {
    case "ADD USER":
      return {
        ...state,
        text: "USER ADDED",
      };
    case "DELETE USER":
      return {
        ...state,
        text: "USER ADDED",
      };

    default:
      return state;
      break;
  }
}

const rootReducer = combineReducers({ Todo, User });

const store = createStore(rootReducer, {});

store.dispatch({
  type: "ADD_TODO",
});

console.log(store.getState());

export default store;
