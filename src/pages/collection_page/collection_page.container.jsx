import { connect } from "react-redux";
import withSpinner from "../../components/with_spinner/with_spinner.component";
import CollectionPage from "./collection_page.component";

const mapStateToProps = (state) => {
  return {
    // two !! convert to a Boolean value, and third ! inverts a value
    isLoading: !!!state.collections.collection,
  };
};

//passing isLoading property to withSpinner
const CollectionPageContainer = connect(mapStateToProps)(
  withSpinner(CollectionPage)
);

export default CollectionPageContainer;
