import { CollectionsTypes } from "./collections.types";

const INITIAL_STATE = {
  collection: null,
};

const collectionsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CollectionsTypes.UPDATE_COLLECTIONS:
      return {
        ...state,
        collection: action.payload,
      };
    default:
      return state;
  }
};

export default collectionsReducer;
