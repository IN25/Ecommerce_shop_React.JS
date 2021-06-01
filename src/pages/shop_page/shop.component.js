import React from "react";
import { PreviewCollection } from "../../components/preview_collection/collection_preview.component";
import { connect } from "react-redux";

const ShopPage = ({ collections }) => {
  return (
    <>
      <div>
        <h1 style={{ marginLeft: "5.2rem", marginBottom: "1.8rem" }}>
          Collections
        </h1>
      </div>

      {collections.map((collection) => {
        return (
          <PreviewCollection
            key={collection.id}
            {...collection}
          ></PreviewCollection>
        );
      })}
    </>
  );
};

const mapStateToProps = (state) => {
  return { collections: state.collections.collectionsData };
};

export default connect(mapStateToProps)(ShopPage);
