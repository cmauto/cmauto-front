/* eslint-disable */

(function (define) {
  'use strict'

  define(function (require) {

    var interceptor = require('rest/interceptor')
    var api = require('./../api-client').api

    return interceptor({
      request: function handleRequest(request) {
        var headers = request.headers || (request.headers = {})
        var token = localStorage.getItem('jwt-token')

        if (token !== null && token !== undefined) {
          headers.Authorization = token
        }

        return request
      },

      response: function handleResponse(response) {
        if (response.status && response.status.code == 401) {
          localStorage.removeItem('jwt-token')

          window.location(api + 'login?tokenError=1')
        }

        if (response.headers && response.headers.Authorization) {
          localStorage.setItem('jwt-token', response.headers.Authorization)
        }

        if (response.entity && response.entity.token && response.entity.token.length > 10) {
          localStorage.setItem('jwt-token', 'Bearer ' + response.entity.token)
        }

        return response
      }
    })
  })
}(
  // Boilerplate for AMD and Node
  typeof define === 'function' && define.amd ? define : function (factory) { module.exports = factory(require) }
))
