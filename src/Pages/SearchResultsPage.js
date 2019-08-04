import React from "react";
import ApiData from "../API";

export default class SearchResultsPage extends React.Component {
  state = {
    isLoading: true,
    searchText: "",
    searchResults: []
  };

  handleSearch = () => {
    let searchText = this.props.location.state.searchText;
    let results = ApiData.filter(item => item.title.includes(searchText));
    this.setState({
      isLoading: false,
      searchText: searchText,
      searchResults: results
    });
  };

  componentDidMount() {
    this.handleSearch();
  }

  componentDidUpdate(prevProps) {
    let prevSearch = prevProps.location.state.searchText;
    let newSearch = this.props.location.state.searchText;
    if (prevSearch !== newSearch) {
      this.handleSearch();
    }
  }

  render() {
    let toRender = this.state.isLoading ? (
      <h1>Loading...</h1>
    ) : (
      <>
        <h1>Your Search Results</h1>
        <ul>
          <li>Search: "{this.state.searchText}"</li>
          <li>Count: {this.state.searchResults.length}</li>
        </ul>
        {this.state.searchResults.length > 0 ? (
          <pre>
            <small>{JSON.stringify(this.state.searchResults, null, 2)}</small>
          </pre>
        ) : (
          <p>NO RESULTS FOUND</p>
        )}
      </>
    );

    return <div style={{ margin: "20px 0px 0px 20px" }}>{toRender}</div>;
  }
}
