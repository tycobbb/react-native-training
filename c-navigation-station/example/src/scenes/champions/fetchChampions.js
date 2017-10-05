/* globals fetch */
const baseUrl = 'https://na1.api.riotgames.com'

export async function fetchChampions () {
  const response = await fetch(`${baseUrl}/lol/static-data/v3/champions`)
  const { champions } = await response.json()
  return champions
}
