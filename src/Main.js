import React from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import { AboutPage, HomePage, SearchResultsPage, RouteNotFound } from "./Pages";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";

class Main extends React.Component {
    state = {
        searchText: ""
    };

    handleRoute = route => () => {
        this.props.history.push({ pathname: route });
    };

    handleSearchInput = event => {
        this.setState({
            searchText: event.target.value
        });
    };

    handleSearchSubmit = () => {
        if (this.state.searchText) {
            let text = this.state.searchText;
            this.setState({ searchText: "" })
            this.props.history.push({
                pathname: "/results",
                state: { searchText: text }
            });
        } else {
            alert("Please enter some search text!");
        }
    };

    handleSearchKeyUp = event => {
        event.preventDefault();
        if (event.key === 'Enter' && event.keyCode === 13) {
            this.handleSearchSubmit();
        }
    }

    handleFormSubmit = e => e.preventDefault();

    render() {
        return (
            <>
                <Navbar bg="dark" variant="dark">
                    <Nav className="mr-auto">
                        <Nav.Link onClick={this.handleRoute("/")}>Home</Nav.Link>
                        <Nav.Link onClick={this.handleRoute("/about")}>About</Nav.Link>
                    </Nav>
                    <Form inline onSubmit={this.handleFormSubmit}>
                        <FormControl
                            onChange={this.handleSearchInput}
                            value={this.state.searchText}
                            onKeyUp={this.handleSearchKeyUp}
                            type="text"
                            placeholder="Search"
                            className="mr-sm-2"
                        />
                        <Button onClick={this.handleSearchSubmit} variant="outline-info">
                            Search
            </Button>
                    </Form>
                </Navbar>
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route exact path="/about" component={AboutPage} />
                    <Route exact path="/results" component={SearchResultsPage} />
                    <Route component={RouteNotFound} />
                </Switch>
            </>
        );
    }
}

export default withRouter(Main);
