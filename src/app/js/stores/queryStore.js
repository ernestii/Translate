import { computed, observable } from "mobx"

class QueryStore {
  @observable text

  @computed get direction() {
    const cyrillicPattern = /[\u0400-\u04FF]/;
    return cyrillicPattern.test(this.text) ? "ru-en" : "en-ru";
  }
}

const queryStore = new QueryStore()
export default queryStore
