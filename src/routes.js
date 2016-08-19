export function configRouter(router) {
  router.map({
    '/': {
      component: require('./components/Hello')
    }
  })
}
