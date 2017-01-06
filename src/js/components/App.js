import React from "react";
import _ from "underscore";

import Query from "./Query";
import Translation from "./Translation";
import Dictionary from "./Dictionary";

import * as TranslationActions from "../actions/TranslationActions";
import TranslationStore from "../stores/TranslationStore";

import * as DictionaryActions from "../actions/DictionaryActions";
import DictionaryStore from "../stores/DictionaryStore";

export default class App extends React.Component {
  constructor() {
    super();
    this.setTranslation = this.setTranslation.bind(this);
    this.setDictionary = this.setDictionary.bind(this);
    
    this.state = {
      translation: TranslationStore.getTranslation(),
      dictionary: {}
    };
  }
  
  componentWillMount() {
    TranslationStore.on("change", this.setTranslation);
    DictionaryStore.on("change", this.setDictionary);
  }
  
  setTranslation() {
    this.setState({
      translation: TranslationStore.getTranslation(),
    });
  }
  
  setDictionary() {
    this.setState({
      dictionary: DictionaryStore.getData(),
    });
  }
  
  setQuery = _.debounce(function(text) {
    TranslationActions.reloadTranslation(text);
    DictionaryActions.reloadDictionary(text);
  }, 150);
  
  render() {
    
    if ( window.require ) {
      setTimeout(function() {
        const remote = window.require('electron').remote;
        const win = remote.getCurrentWindow();
        let height = document.body.clientHeight;
        win.setSize(300, height);
      }, 50);
    }
    
    return (
      <div>
        <Query setQuery={this.setQuery.bind(this)}/>
        <Translation def={this.state.translation.translation}/>
        <Dictionary data={this.state.dictionary}/>
      </div>
    );
  }
}