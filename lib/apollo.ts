import { config } from 'next-apollo-hoc'

config.add({
  endpoint: 'https://api.graph.cool/simple/v1/cixmkt2ul01q00122mksg82pn',
  link: {
    credentials: 'include'
  }
})

export * from 'next-apollo-hoc'
