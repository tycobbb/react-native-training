const baseUrl = 'https://na1.api.riotgames.com'

// fetch
export async function fetchChampions (): Promise<Riot$ListChampion> {
  const response = await fetch(`${baseUrl}/lol/static-data/v3/champions`)
  const data = await response.json()
  const { champions } = data
  return champions
}

// types
type Riot$ListChampion = {
  id: string,
  key: string,
  name: string,
  title: string
  image: Riot$Image
}

type Riot$Image = {
  full: string,
  sprite: string,
  group: string,
  x: number,
  y: number,
  w: number,
  h: number
}

// type Riot$Champion = {
//   id: string,
//   key: string,
//   name: string,
//   title: string,
//   blurb: string,
//   image: Riot$Image,
//   stats: Riot$Champion$Stats,
//   spells: [Riot$Champion$Spell]
// }

// type Riot$Champion$Spell = {
//   key: string,
//   name: string,
//   description: string,
//   image: Riot$Image
// }

// type Riot$Champion$Stats = {
//   armor: number,
//   armorperlevel: number,
//   attackdamage: number,
//   attackdamageperlevel: number,
//   attackrange: number,
//   attackspeedoffset: number,
//   attackspeedperlevel: number,
//   crit: number,
//   critperlevel: number,
//   hp: number,
//   hpperlevel: number,
//   hpregen: number,
//   hpregenperlevel: number,
//   movespeed: number,
//   mp: number,
//   mpperlevel: number,
//   mpregen: number,
//   mpregenperlevel: number,
//   spellblock: number,
//   spellblockperlevel: number
// }
