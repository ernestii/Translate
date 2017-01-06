import dispatcher from "../dispatcher";
import axios from "axios";
import * as helpers from "../helpers.js";

const API_key = "dict.1.1.20170105T052214Z.119002d988144be7.9879b198414db340d07ca89d02c9c337eb782188";

export function reloadDictionary(word) {
  if (word) {
    dispatcher.dispatch({type: "FETCH_DICT"});
    
    let direction = helpers.getLangDirection(word);

    let API_call = `https://dictionary.yandex.net/api/v1/dicservice.json/lookup?key=${API_key}&text=${word}&lang=${direction}&flags=6`;

    axios(API_call).then((data) => {
      if (data.status === 200) {
        dispatcher.dispatch({
          type: "RECEIVE_DICT",
          payload: data.data.def
        });
      } else {
        console.log('error occured', data.status);
      }
    });
  }
}