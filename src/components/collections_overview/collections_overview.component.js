import React from "react";
import "./collections_overview.scss";

import { connect } from "react-redux";
import { PreviewCollection } from "../preview_collection/collection_preview.component";

const CollectionsOverview = ({ collections }) => {
  return (
    <div className="collections_overview">
      {collections.map((collection) => {
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
  return { collections: state.collections.collectionsData };
};

export default connect(mapStateToProps)(CollectionsOverview);
