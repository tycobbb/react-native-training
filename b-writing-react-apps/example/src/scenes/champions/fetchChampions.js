/* globals Request, fetch */
const { entries } = Object
const { isArray } = Array

function serializePair (key, value) {
  return `${key}=${value}`
}

function serializeParam ([key, valueOrValues]) {
  if (isArray(valueOrValues)) {
    return valueOrValues.map((value) => serializePair(key, value))
  } else {
    return [serializePair(key, valueOrValues)]
  }
}

function serializeParams (params) {
  return entries(params)
    .map(serializeParam)
    .reduce((memo, entries) => memo.concat(entries))
    .join('&')
}

function resolveUrl (endpoint, params) {
  const baseUrl = 'https://na1.api.riotgames.com'
  const query = serializeParams(params)
  return `${baseUrl}/${endpoint}?${query}`
}

function createRequest ({ endpoint, headers, params }) {
  const url = resolveUrl(endpoint, params)
  return new Request(url, { headers })
}

async function fetchChampionsWithTags (tags) {
  const params = {
    locale: 'en_US',
    dataById: 'true'
  }

  const response = await fetch(createRequest({
    endpoint: '/lol/static-data/v3/champions',
    headers: {
      'X-Riot-Token': 'RGAPI-8c2def06-2ec3-4eea-9b24-1b78542b22f8'
    },
    params: tags ? { ...params, tags } : params
  }))

  return response.json()
}

export async function fetchChampions () {
  const [response, imageResponse] = await Promise.all([
    fetchChampionsWithTags(null),
    fetchChampionsWithTags(['image'])
  ])

  const { data: champions } = response
  const { data: championImages } = imageResponse
  if (!champions && !championImages) {
    return []
  }

  const result = entries(champions)
    .map(({id, ...rest}) => ({ id, ...rest, ...championImages[id] }))

  return result
}
