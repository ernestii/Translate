import { computed, observable } from "mobx"
import axios from "axios";

class DictionaryStore {
  @observable definition = []
  @observable isLoading = false
  @observable error = false

  loadDictionary(url) {
    this.isLoading = true
    
    axios(url).then((data) => {
      this.isLoading = false

      if (data.status === 200) {
        this.error = false
        this.definition.replace(data.data.def)
      } else {
        this.error = true
      }
    });

  }
}

const dictionaryStore = new DictionaryStore()
export default dictionaryStore