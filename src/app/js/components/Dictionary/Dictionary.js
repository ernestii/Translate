import "./Dictionary.sass"

import React from "react"
import {observer} from "mobx-react";

import Loader from "../Loader/Loader"

@observer
export default class Dictionary extends React.Component {
  render() {
    const store = this.props.store
    const def = store.definition
    const loaded = store.isLoading ? "loading" : ""

    return (
      <div className={`dictionary ${loaded}`}>
        {def.map((data, index) => <Def key={index} data={data}/>)}
      </div>
    )
  }
}

class Tr extends React.Component {
  render() {
    const tr = this.props.data;
    
    return (
      <div className="tr">
        <div className="text">{tr.text}</div>
        <ul className="syn">
          {tr.syn && tr.syn.map((syn, i) => <li key={i}>{syn.text}</li> )}
        </ul>
        <ul className="mean">
          {tr.mean && tr.mean.map((mean, i) => <li key={i}>{mean.text}</li> )}
        </ul>
        <ul className="ex">
          {tr.ex && tr.ex.map((ex, i) => <Def key={i} data={ex}/>) }
        </ul>
      </div>
    );
  }
}

class Def extends React.Component {
  render() {
    const def = this.props.data;

    return (
      <div className="def">
        <div className="meta">
          <span className="def-text">{def.text} </span>
          {def.ts && <span className="def-ts">{def.ts}</span>}
          <span className="def-pos">{def.pos} </span>
          <span className="def-fl">{def.fl} </span>
        </div>
        {def.tr.map && def.tr.map((data, index) => <Tr key={index} data={data}/>)}
      </div>
    );
  }
}