import { EventEmitter } from "events";

import dispatcher from "../dispatcher";

class TranslationStore extends EventEmitter {
  constructor() {
    super();
    this.translation = {
      word: "",
      translation: "Перевод..."
    };
  }

  update(word, translation) {
    this.translation = {
      word,
      translation
    };

    this.emit("change");
  }
  
  getTranslation() {
    return this.translation;
  }

  handleActions(action) {
    switch(action.type) {
      // Handle data from API
      case "RECEIVE_TRANSLATION": {
        this.translation = {word: "placeholder", translation: action.payload};
        this.emit("change");
        break;
      }
    }
  }

}

const translationStore = new TranslationStore;
dispatcher.register(translationStore.handleActions.bind(translationStore));

export default translationStore;