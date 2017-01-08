export default new class dictionaryApi {
  API_key = 'dict.1.1.20170105T052214Z.119002d988144be7.9879b198414db340d07ca89d02c9c337eb782188';
  API_url = 'https://dictionary.yandex.net/api/v1/dicservice.json/lookup';

  url(data) {
    return `${this.API_url}?key=${this.API_key}&text=${data.text}&lang=${data.direction}&flags=6`
  }
}