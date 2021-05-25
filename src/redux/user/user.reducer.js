//A reducer is just a function that takes 2 arguments. 1 - state object that represents the last/initial state. 2 - it receives an action. Action is an object that consists of a type property(string value) and payload(can be anything, might pass object), used to modify the state
const INITIAL_STATE = {
  currentUser: null,
};

//if state is undefined, it will take the default parameter - "INITIAL_STATE"
export const userReducer = (state = INITIAL_STATE, action) => {
  console.log(action.type);
  switch (action.type) {
    case "SET_CURRENT_USER":
      return {
        ...state, //leave any other state values as they are
        currentUser: action.payload, //and only modify currentUser
      };
    //Every reducer gets action that gets fired, even if those actions are not related to this reducer. If none of the action types match inside our switch statement we just return state
    default:
      return state;
  }
};
