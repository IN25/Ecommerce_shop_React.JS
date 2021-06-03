import React from "react";
import "./collection_page.scss";
import { connect } from "react-redux";

import CollectionItem from "../../components/collection_item/collection_item.component";

const CollectionPage = ({ collection }) => {
  console.log(collection);
  const { title, items } = collection;
  return (
    <div className="collection">
      <h2 className="title">{title}</h2>

      <div className="items">
        {items.map((item) => {
          return <CollectionItem key={item.id} item={item}></CollectionItem>;
        })}
      </div>
    </div>
  );
};

//ownProps is the second parameter of mapStateToProps that is the props of the CollectionPage component
const mapStateToProps = (state, ownProps) => {
  console.log("state = ", state);
  console.log("ownProps = ", ownProps);
  return {
    //here I pass the neccessary collection key of the object from the collections.reducer.js, for example if the url parameter is hats, we pass collections[hats]
    collection: state.collections[ownProps.match.params.collectionId],
  };
};

export default connect(mapStateToProps)(CollectionPage);
