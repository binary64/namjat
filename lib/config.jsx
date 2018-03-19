const defaultConfig = {
  base: {
    endpoint: null,
    cookieSource: null,
    link: {
      credentials: 'same-origin'
    }
  },
  auth: {
    tokenType: 'Bearer',
    defaultToken: null,
    login: {
      variables: null,
      updateStore: null,
      update: async (apolloClient, data, updateStore) => {
        await apolloClient.resetStore()
        if (updateStore)
          await apolloClient.writeQuery(updateStore(data))
      },
      next: null,
      authToken: null
    },
    logout: {
      updateStore: null,
      update: async (apolloClient, data, updateStore) => {
        await apolloClient.resetStore()
        if (updateStore)
          await apolloClient.writeQuery(updateStore(data))
      },
      next: null
    }
  },
  guards: []
}

class Config {
  config = null

  constructor() {
    this.reset()
  }

  reset() {
    this.config = defaultConfig
  }

  static assign(config1, config2) {
    if (config1 && config1.base && config2 && config2.base) {
      config1.base.link = Object.assign(config1.base.link || {}, config2.base.link || {})
      delete config2.link
    }

    if (config1 && config1.auth && config2 && config2.auth) {
      config1.auth.login = Object.assign(config1.auth.login || {}, config2.auth.login || {})
      delete config2.auth.login

      config1.auth.logout = Object.assign(config1.auth.logout || {}, config2.auth.logout || {})
      delete config2.auth.logout
    }

    if (config1 && config1.auth && config1.auth.guards && config2 && config2.auth && config2.auth.guards) {
      config1.auth.guards.forEach((guard1, index1) => {
        config2.auth.guards.forEach((guard2, index2) => {
          if (guard1.name === guard2.name) {
            config1.auth.guards[index1] = Object.assign(guard1, guard2)
            delete config2.auth.guards[index2]
          }
        })
      })

      if (config2.auth.guards.length) {
        config2.auth.guards.forEach(guard => {
          if (guard.name)
            config1.auth.guards.push(guard || [])
        })
      }

      delete config2.auth.guards
    }

    if (config1 && config2) {
      config1.base = Object.assign(config1.base || {}, config2.base || {})
      delete config2.base

      config1.auth = Object.assign(config1.auth || {}, config2.auth || {})
      delete config2.auth
    }

    config1 = Object.assign(config1, config2)

    return config1
  }

  add(config) {
    this.config = Config.assign(this.config, { base: config })
  }

  addAuth(config) {
    this.config = Config.assign(this.config, { auth: config })
  }

  addGuard(config) {
    this.config = Config.assign(this.config, { guards: [config] })
  }

  addGuards(config) {
    this.config = Config.assign(this.config, { guards: config })
  }

  get() {
    return this.config.base
  }

  getAuth() {
    return this.config.auth
  }

  getGuard(name) {
    return this.config.guards.find(guard => name === guard.name)
  }

  getGuards() {
    return this.config.guards
  }
}

export default new Config()
