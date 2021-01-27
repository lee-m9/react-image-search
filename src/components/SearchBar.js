import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };

  /**
   * Other Way to bind 'this' to a function when handling events is through constructor. As below
        constructor(props){
            super(props);
            this.onFormSubmit = this.onFormSubmit.bind(this); //This Line here binds 'this' keyword and returns new function
        }
    * Without binding 'this' application throws error because when events triggered 'this' would be undefined
   */

  //Using Arrow functions will automatically bind 'this'
  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.onSearchTermSubmit(this.state.term);
  };

  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Search Term</label>
            <input
              value={this.state.value}
              onChange={(event) => this.setState({ term: event.target.value })}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
