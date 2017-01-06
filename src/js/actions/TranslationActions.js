import dispatcher from "../dispatcher";
import axios from "axios";
import * as helpers from "../helpers.js";

const API_key = "trnsl.1.1.20170105T002119Z.8f6d3d5d1ddc45b3.d332d91ec3c7e88f0f21bf180b63465e3b19940d";

export function reloadTranslation(word) {
  if (word) {
    dispatcher.dispatch({type: "FETCH_TRANSLATION"});
    
    let direction = helpers.getLangDirection(word);
    
    let API_call = `https://translate.yandex.net/api/v1.5/tr.json/translate?key=${API_key}&text=${word}&lang=${direction}`;

    axios(API_call).then((data) => {
      if (data.data.code === 200) {
        const word = data.data

        dispatcher.dispatch({
          type: "RECEIVE_TRANSLATION",
          payload: data.data.text[0]
        });
      } else {
        console.log('error occured', data.data.code);
      }
    });
  }
}