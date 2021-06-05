import { CollectionsTypes } from "./collections.types";

const INITIAL_STATE = {
  collection: null,
  isFetching: true,
  errorMessage: "",
};

const collectionsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CollectionsTypes.FETCH_COLLECTIONS_START:
      return {
        ...state,
        isFetching: true,
      };

    case CollectionsTypes.FETCH_COLLECTIONS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        collection: action.payload,
      };

    case CollectionsTypes.FETCH_COLLECTIONS_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload,
      };

    default:
      return state;
  }
};

export default collectionsReducer;
