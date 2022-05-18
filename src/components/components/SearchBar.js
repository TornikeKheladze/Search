import React, { Component } from "react";

class SearchBar extends Component {
  state = { input: "" };
  inputChangeHandler = (e) => {
    const newInput = e.target.value;
    this.setState({ input: newInput });
  };

  formSubmitHandler = (e) => {
    e.preventDefault();
    this.props.onFormSubmit(this.state.input);
  };
  render() {
    return (
      <div className="ui segment SearchBar ">
        <form className="ui form" onSubmit={this.formSubmitHandler}>
          <div className="field">
            <label>Video Search</label>
            <input
              type="text"
              onChange={this.inputChangeHandler}
              value={this.state.input}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
