import "./App.sass"

import React from "react"

import Query from "../Query/Query"
import Dictionary from "../Dictionary/Dictionary"
import Translation from "../Translation/Translation"

import queryStore from '../../stores/queryStore'
import dictionaryStore from '../../stores/dictionaryStore'
import translationStore from '../../stores/translationStore'

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Query store={queryStore}/>
        <Translation store={translationStore}/>
        <Dictionary store={dictionaryStore}/>
      </div>
    )
  }
}
