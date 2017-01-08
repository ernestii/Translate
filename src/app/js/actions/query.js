import dictionaryApi from '../services/dictionaryApi'
import translateApi from '../services/translateApi'
import dictionaryStore from '../stores/dictionaryStore'
import translationStore from '../stores/translationStore'

export function setQuery(text, direction) {
  // Load Dictionary
  const dictionaryApiUrl = dictionaryApi.url({text, direction})
  dictionaryStore.loadDictionary(dictionaryApiUrl)

  // Load Translation
  const translateApiUrl = translateApi.url({text, direction})
  translationStore.loadTranslation(translateApiUrl)
}