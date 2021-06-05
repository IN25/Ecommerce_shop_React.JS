import { CollectionsTypes } from "./collections.types";

export const updateCollections = (collectionsMap) => {
  return {
    type: CollectionsTypes.UPDATE_COLLECTIONS,
    payload: collectionsMap,
  };
};
