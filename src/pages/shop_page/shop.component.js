import React from "react";
import { Route } from "react-router-dom";

import { connect } from "react-redux";
import { fetchCollectionsStartAsync } from "../../redux/collections/collections.actions";

import CollectionsOverview from "../../components/collections_overview/collections_overview.component";
import CollectionPage from "../collection_page/collection_page.component.jsx";
import withSpinner from "../../components/with_spinner/with_spinner.component";

const CollectionsOverviewWithSpinner = withSpinner(CollectionsOverview);
const CollectionPageWithSpinner = withSpinner(CollectionPage);

class ShopPage extends React.Component {
  unsubscribeFromSnapshot = null;

  //getting shop data from firebase
  componentDidMount() {
    const { fetchCollectionsStartAsync } = this.props;
    fetchCollectionsStartAsync();
  }

  render() {
    const { match, isCollectionFetching, isCollectionsLoaded } = this.props;

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
          render={(props) => (
            <CollectionsOverviewWithSpinner
              isLoading={isCollectionFetching}
              {...props}
            />
          )}
        ></Route>

        <Route
          exact
          // /:collectionId. /: gives us an access to the parameters in match object
          path={`${match.path}/:collectionId`}
          render={(props) => (
            <CollectionPageWithSpinner
              isLoading={!isCollectionsLoaded}
              {...props}
            />
          )}
        ></Route>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isCollectionFetching: state.collections.isFetching,
    isCollectionsLoaded: !!state.collections.collection, //!!convert a value to boolean one
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);
