import { computed, observable } from "mobx"
import axios from "axios";

class TranslationStore {
  @observable translation
  @observable isLoading = false
  @observable error = false

  loadTranslation(url) {
    this.isLoading = true
    axios(url).then((data) => {
      this.isLoading = false

      if (data.status === 200) {
        this.error = false
        this.translation = data.data.text[0]
      } else {
        this.error = true
      }
    });
  }
}

const translationStore = new TranslationStore()
export default translationStore