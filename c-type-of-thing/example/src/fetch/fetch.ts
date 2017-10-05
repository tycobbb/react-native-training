import champions from './champions.json'

// types
declare var global: GlobalFetch

// constants
const NETWORK_DELAY = 100
const ENDPOINT = 'https://na1.api.riotgames.com/lol/static-data/v3/champions'

// monkey-patch fetch
const { fetch: original } = global

function getChampions () {
  return Object.values(champions)
    .map(({ id, key, name, title, image, ...rest }) => ({
      id, key, name, title, image
    }))
}

function getResponse (url: string): any | null {
  if (!url) {
    return null
  }

  const [base, id] = url.split(ENDPOINT)
  if (base !== '') {
    return null
  } else if (id === '') { // champions api
    return { champions: getChampions() }
  } else { // champions/:id api
    return { champion: champions[id.slice(1, id.length)] }
  }
}

async function fetch () {
  const url = arguments[0]

  const response = getResponse(url)
  if (!response) {
    return original.apply(null, arguments)
  }

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        json: () => Promise.resolve(response)
      })
    }, NETWORK_DELAY)
  })
}

global.fetch = fetch
