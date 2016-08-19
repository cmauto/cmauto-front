import { client } from 'vue'

export default {
  login(credentials, cb, errorCb) {
    client({ path: 'login', method: 'post', entity: credentials }).then(cb, errorCb)
  }
}
