import { config } from 'next-apollo-hoc'

config.add({
  endpoint: 'https://myendpoint.com',
  link: {
    credentials: 'include'
  }
})

export * from 'next-apollo-hoc'
