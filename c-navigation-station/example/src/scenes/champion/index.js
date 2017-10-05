import { Champion } from './Champion'

export const champion = {
  screen: Champion,
  path: 'champion/:key',
  navigationOptions: () => ({
    title: 'Champion'
  })
}
