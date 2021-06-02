import React from "react";
import "./collections_overview.scss";

import { connect } from "react-redux";
import { PreviewCollection } from "../preview_collection/collection_preview.component";

const CollectionsOverview = ({ collections }) => {
  //because the collections state is object, we cannot map thorough it, so we have to iterate thorough keys and put them into an array
  const collectionArray = Object.keys(collections).map(
    (key) => collections[key]
  );

  return (
    <div className="collections_overview">
      {collectionArray.map((collection) => {
        return (
          <PreviewCollection
            key={collection.id}
            {...collection}
          ></PreviewCollection>
        );
      })}
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log("state = ", state);
  return { collections: state.collections };
};

export default connect(mapStateToProps)(CollectionsOverview);
