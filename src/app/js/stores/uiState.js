import {observable, computed} from 'mobx'

class UiState {
  @observable language = "en";
}

uiState = new UiState()
export default uiState