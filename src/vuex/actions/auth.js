import auth from 'api/auth'
import * as types from './../mutatin-types'

export const login = ({ dispatch }, credentials) => {
  auth.login(
    credentials,
    (response) => dispatch(types.SET_CURRENT_USER, response.entity.user.data),
    () => {}
  )
}
