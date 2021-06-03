import React from "react";
import { Route } from "react-router-dom";

import CollectionsOverview from "../../components/collections_overview/collections_overview.component";
import CollectionPage from "../collection_page/collection_page.component.jsx";

const ShopPage = ({ match }) => {
  return (
    <div className="shop-page">
      {/* <h1 style={{ marginLeft: "5.2rem", marginBottom: "1.8rem" }}>
        Collections
      </h1>
      <CollectionsOverview></CollectionsOverview> */}
      <Route
        exact
        //${match.path} is the current path of this ShopPage - /shop. We do not hardcode it to make this component reusable.
        // /:categoryId. /: gives us access to the parameters in match object
        path={`${match.path}`}
        component={CollectionsOverview}
      ></Route>

      <Route
        exact
        path={`${match.path}/:collectionId`}
        component={CollectionPage}
      ></Route>
    </div>
  );
};

export default ShopPage;
