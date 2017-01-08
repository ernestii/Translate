import "./Query.sass"

import React from "react"
import {observer} from "mobx-react";
import * as actions from "../../actions/query";
import DebounceInput from 'react-debounce-input';

@observer
export default class Query extends React.Component {

  setQuery(e) {
    let store = this.props.store
    store.text = e.target.value
    actions.setQuery(store.text, store.direction)
  }

  render() {
    return (
      <form className="query">
        <DebounceInput
          autoFocus
          value={this.props.store.text}
          placeholder="···"
          debounceTimeout={150}
          onChange={this.setQuery.bind(this)}/>
      </form>
    )
  }
}
