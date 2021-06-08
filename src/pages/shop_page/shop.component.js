import React, { useEffect } from "react";
import { Route } from "react-router-dom";

import { connect } from "react-redux";
import { fetchCollectionsStart } from "../../redux/collections/collections.actions";

import CollectionsOverviewContainer from "../../components/collections_overview/collections_overview.container";
import CollectionPageContainer from "../collection_page/collection_page.container";

const ShopPage = ({ fetchCollectionsStart, match }) => {
  //getting shop data from firebase
  useEffect(() => {
    fetchCollectionsStart();
  }, [fetchCollectionsStart]);

  return (
    <div className="shop-page">
      <h1 style={{ marginLeft: "5.2rem", marginBottom: "1.8rem" }}>
        Collections
      </h1>

      <Route
        exact
        //${match.path} is the current path of this ShopPage - /shop. We do not hardcode it to make this component reusable.
        path={`${match.path}`}
        //render takes a function with a parameter of the properties that a component will receive
        component={CollectionsOverviewContainer}
      ></Route>

      <Route
        exact
        // /:collectionId. /: gives us an access to the parameters in match object
        path={`${match.path}/:collectionId`}
        component={CollectionPageContainer}
      ></Route>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCollectionsStart: () => dispatch(fetchCollectionsStart()),
  };
};

export default connect(null, mapDispatchToProps)(ShopPage);
