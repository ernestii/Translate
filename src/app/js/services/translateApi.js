export default new class translateApi {
  API_key = 'trnsl.1.1.20170105T002119Z.8f6d3d5d1ddc45b3.d332d91ec3c7e88f0f21bf180b63465e3b19940d';
  API_url = 'https://translate.yandex.net/api/v1.5/tr.json/translate';

  url(data) {
    return `${this.API_url}?key=${this.API_key}&text=${data.text}&lang=${data.direction}`
  }
}