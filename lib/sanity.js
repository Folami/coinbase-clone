import sanityClient from '@sanity/client'

export const client = sanityClient({
  projectId: 'ig4n8lu9',
  dataset: 'production',
  apiVersion: '2022-04-01', // use current UTC date - see "specifying API version"!
  token:
    'skd50R593gul5u14rQ4oIwCFm1Q0WiTojxB1oNaOJuW5UmzcaskKrNx8MCmTmRNwvieth28f8JrTQRPkLrIEzwDLB8ZjdwBDlMpwzfM3vHbCTPqbgAwylTRVBBk8nBJSJqLNM9WojrRtRcRiTYdcvSFgmLG4df2Ovc23N7yU6dbfPgKrGgNp', // or leave blank for unauthenticated usage
  useCdn: false, // `false` if you want to ensure fresh data
})