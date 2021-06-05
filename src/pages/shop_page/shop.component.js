import React from "react";
import { Route } from "react-router-dom";

import { connect } from "react-redux";
import { updateCollections } from "../../redux/collections/collections.actions";

import CollectionsOverview from "../../components/collections_overview/collections_overview.component";
import CollectionPage from "../collection_page/collection_page.component.jsx";
import withSpinner from "../../components/with_spinner/with_spinner.component";

import {
  firestore,
  convertCollectionsSnapshotToMap,
} from "../../assets/firebase/firebase.utils";

const CollectionsOverviewWithSpinner = withSpinner(CollectionsOverview);
const CollectionPageWithSpinner = withSpinner(CollectionPage);

class ShopPage extends React.Component {
  //we can declare our state without a constructor, super gets called under the hood
  state = {
    isLoading: true,
  };

  unsubscribeFromSnapshot = null;

  //getting shop data from firebase
  componentDidMount() {
    const { updateCollections } = this.props;
    const collectionRef = firestore.collection("collections");

    //collectionRef.onSnapshot() means whenever the collectionRef updates or is run for the first time, this will send us a snapshot object of our collection
    collectionRef.onSnapshot(async (snapshot) => {
      //we call convertCollectionsSnapshotToMap to add id and routeName to the collections object. We didn't add these properties to Firestore because for example the mobile app does not need a routeName and Firesotre generates the id automatically
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
      updateCollections(collectionsMap);
      this.setState({ isLoading: false });
    });
  }

  render() {
    const { match } = this.props;
    const { isLoading } = this.state;

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
            <CollectionsOverviewWithSpinner isLoading={isLoading} {...props} />
          )}
        ></Route>

        <Route
          exact
          // /:collectionId. /: gives us an access to the parameters in match object
          path={`${match.path}/:collectionId`}
          render={(props) => (
            <CollectionPageWithSpinner isLoading={isLoading} {...props} />
          )}
        ></Route>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateCollections: (collectionsMap) => {
      dispatch(updateCollections(collectionsMap));
    },
  };
};

export default connect(null, mapDispatchToProps)(ShopPage);
