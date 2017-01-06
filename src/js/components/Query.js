import React from "react";

export default class Query extends React.Component {  
  
  handleChange(e) {
    const word = e.target.value;
    this.props.setQuery(word);
  }
  
  render() {
    return (
      <form>
        <input placeholder="..." onChange={this.handleChange.bind(this)} />
      </form>
    );
  }
}