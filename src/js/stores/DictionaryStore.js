import { EventEmitter } from "events";

import dispatcher from "../dispatcher";

class DictionaryStore extends EventEmitter {
  constructor() {
    super();
    this.translation = {};
  }

  update(dictionary) {
    this.dictionary = dictionary;

    this.emit("change");
  }
  
  getData() {
    return this.dictionary;
  }

  handleActions(action) {
    switch(action.type) {
      // Handle data from API
      case "RECEIVE_DICT": {
        this.dictionary = action.payload;
        this.emit("change");
        break;
      }
    }
  }

}

const dictionaryStore = new DictionaryStore;
dispatcher.register(dictionaryStore.handleActions.bind(dictionaryStore));

export default dictionaryStore;