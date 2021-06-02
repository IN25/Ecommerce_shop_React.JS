import React from "react";
import "./collections_overview.scss";

import { connect } from "react-redux";
import { PreviewCollection } from "../preview_collection/collection_preview.component";

const CollectionsOverview = ({ collections }) => {
  console.log("collections = ", collections);
  return (
    <div className="collections_overview">
      {collections.map((collection) => {
        console.log("collection = ", collection);
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
