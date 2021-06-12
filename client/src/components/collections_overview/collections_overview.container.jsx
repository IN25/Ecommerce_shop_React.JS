import { connect } from "react-redux";
import CollectionsOverView from "./collections_overview.component";
import withSpinner from "../with_spinner/with_spinner.component";

const mapStateToProps = (state) => {
  return {
    isLoading: state.collections.isFetching,
  };
};

//passing isLoading property to withSpinner
const CollectionsOverviewContainer = connect(mapStateToProps)(
  withSpinner(CollectionsOverView)
);

export default CollectionsOverviewContainer;
