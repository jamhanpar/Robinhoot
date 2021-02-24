import { connect } from "react-redux";
import { fetchSearch } from "../../actions/search_actions";
import Search from "./search";

const mStP = ({ entities }) => ({
  searchResults: entities.searchResults
});

const mDtP = (dispatch) => ({
  fetchSearch: (fragment, apiKey) => dispatch(fetchSearch(fragment, apiKey)),
});

export default connect(mStP, mDtP)(Search);
