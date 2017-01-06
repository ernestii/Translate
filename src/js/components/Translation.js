import React from "react";

export default class Translate extends React.Component {
  render() {
    let defClass = "normal";
    
    if ( this.props.def.length > 50 ) {
      defClass = "small";
    }
    if ( this.props.def.length > 100 ) {
      defClass = "smaller";
    }
    
    return (
      <div>
        <h1 className={defClass}>{this.props.def}</h1>
      </div>
    );
  }
}