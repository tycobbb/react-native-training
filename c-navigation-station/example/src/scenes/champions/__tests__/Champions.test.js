/* eslint-env jest */
import React from 'react'
import { shallow } from 'enzyme'
import { Champions } from '../Champions'
import { fetchChampions } from '../fetchChampions'
import { championFixtures } from 'fixtures'

// mocks
jest.mock('../fetchChampions')

// setup
let subject

function loadSubject (props, options) {
  subject = shallow(<Champions {...props} />, options)
}

// spec
afterEach(() => {
  subject = null
})

describe('#render', () => {
  it('renders properly when loading', () => {
    loadSubject()
    expect(subject).toMatchSnapshot()
  })

  it('renders properly when loading is finished', () => {
    loadSubject()
    subject.setState({ isLoading: false, champions: championFixtures })
    expect(subject).toMatchSnapshot()
  })
})

describe('#renderChampion', () => {
  it('renders properly', () => {
    loadSubject()
    const champion = championFixtures[0]
    const view = shallow(subject.instance().renderChampion({ item: champion }))
    expect(view).toMatchSnapshot()
  })
})

describe('#componentDidMount', () => {
  it('finishes loading after fetching champions', async () => {
    const champions = ['champ-1', 'champ-2']
    fetchChampions.mockReturnValueOnce(Promise.resolve(champions))
    loadSubject({}, { disableLifecycleMethods: true })

    await subject.instance().componentDidMount()
    expect(subject.state('isLoading')).toBeFalsy()
    expect(subject.state('champions')).toEqual(champions)
  })
})

describe('when the champion is tapped', () => {
  it('shows the champion screen', () => {
    const navigate = jest.fn()
    loadSubject({ navigation: { navigate } })

    const champion = championFixtures[0]
    subject.instance().didTapChampion(champion)

    expect(navigate).toHaveBeenCalledWith('champion', { id: champion.id })
  })
})
