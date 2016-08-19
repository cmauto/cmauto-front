import $ from 'jquery'
require('bootstrap-notify')

export const api = process.env.NODE_ENV !== 'production'
  ? 'http://api.learngp.local/'
  : 'http://api.learngp.codium.com.au/'

const rest = require('rest')
const mime = require('rest/interceptor/mime')
const pathPrefix = require('rest/interceptor/pathPrefix')
const defaultRequest = require('rest/interceptor/defaultRequest')
const jwtAuth = require('./interceptors/jwtInterceptor')
const errorCode = require('rest/interceptor/errorCode')
const timeout = require('rest/interceptor/timeout')

// configue our HTTP client
export const client = rest.wrap(pathPrefix, { prefix: api })
      .wrap(mime)
      .wrap(defaultRequest, {
        headers: { 'X-Requested-With': 'XMLHttpRequest', 'Content-Type': 'application/json' }
      })
      .wrap(errorCode, { code: 400 })
      .wrap(jwtAuth)
      .wrap(timeout, { timeout: 10000 })

export function notify(type, message) {
  $.notify(
    { message },
    { type, placement: { from: 'bottom', align: 'right' } }
  )
}

export default {
  api,
  client,
  notify
}
