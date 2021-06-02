import React from "react";
import "./collection_page.scss";
import { connect } from "react-redux";

import CollectionItem from "../../components/collection_item/collection_item.component";

const CollectionPage = ({ collection }) => {
  console.log(collection);
  return (
    <div className="collection">
      <h2>Collection Page</h2>
    </div>
  );
};

//ownProps is the second parameter of mapStateToProps that is the props of the CollectionPage component
const mapStateToProps = (state, ownProps) => {
  // console.log("state = ", state);
  // console.log("ownProps = ", ownProps);
  return {
    //here I match the url parameter with the id of collection to get the collection from the reducer based on url parameter
    collection: state.collections.collectionsData.find((collection) => {
      return collection.routeName === ownProps.match.params.collectionId;
    }),
  };
};

export default connect(mapStateToProps)(CollectionPage);
