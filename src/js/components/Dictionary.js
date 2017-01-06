import React from "react";

class Tr extends React.Component {
  render() {
    const tr = this.props.data;
    
    return (
      <div className="Tr">
        <ul className="syn">
          <li>{tr.text}</li>
          {tr.syn && tr.syn.map((syn, i) => <li key={i}>{syn.text}</li> )}
        </ul>
        <ul className="mean">
          {tr.mean && tr.mean.map((mean, i) => <li key={i}>{mean.text}</li> )}
        </ul>
        <ul className="ex">
          {tr.ex && tr.ex.map((ex, i) => <Def data={ex}/>) }
        </ul>
      </div>
    );
  }
}

class Def extends React.Component {
  render() {
    const def = this.props.data;
    console.log(def);
    
    let trItems;
    if ( def.tr.map ) {
      trItems = def.tr.map((data, index) =>
        <Tr key={index} data={data}/>
      );
    }
    
    return (
      <div className="Def">
        <div className="meta">
          <span className="def-text">{def.text} </span>
          <span className="def-ts">{def.ts} </span>
          <span className="def-pos">{def.pos} </span>
          <span className="def-fl">{def.fl} </span>
        </div>
        {trItems}
      </div>
    );
  }
}

export default class Dictionary extends React.Component {  
  render() {
    
    console.log(this.props.data);
    
    let defItems;
    
    if ( this.props.data.map ) {
      defItems = this.props.data.map((data, index) =>
        <Def key={index} data={data}/>
      );
    }
    
    return (
      <div>
        {defItems}
      </div>
    );
  }
}