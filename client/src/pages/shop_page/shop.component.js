import React, { useEffect, lazy, Suspense } from "react";
import "./shop.styles.scss";
import { Route } from "react-router-dom";

import { connect } from "react-redux";
import { fetchCollectionsStart } from "../../redux/collections/collections.actions";
import Spinner from "../../components/spinner/spinner.component";

const CollectionsOverviewContainer = lazy(() =>
  import("../../components/collections_overview/collections_overview.container")
);
const CollectionPageContainer = lazy(() =>
  import("../collection_page/collection_page.container")
);

const ShopPage = ({ fetchCollectionsStart, match }) => {
  //getting shop data from firebase
  useEffect(() => {
    fetchCollectionsStart();
  }, [fetchCollectionsStart]);

  return (
    <div className="shop-page">
      <h1 className="collections_title">Collections</h1>
      <Suspense fallback={<Spinner />}>
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
      </Suspense>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCollectionsStart: () => dispatch(fetchCollectionsStart()),
  };
};

export default connect(null, mapDispatchToProps)(ShopPage);
