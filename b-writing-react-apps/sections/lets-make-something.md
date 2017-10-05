# let's make something of ourselves

let's make a tiny app using a mock version of the riot games api. the rate limiting on their api is too extreme to debug stuff live, so i'll supply a mock that supports the following endpoints:

## api
- url: `https://na1.api.riotgames.com`

##### `champions`
- returns an unpaginated list of all champions
- endpoint: `/lol/static-data/v3/champions`

##### `champion/:id`
- returns a specific champion by id
- endpoint: `/lol/static-data/v3/champions/{{id}}`

## image api
- url: ` http://ddragon.leagueoflegends.com/cdn`

##### `champion-icon`
- returns a champion's squre icon
- endpoint: `/7.10.1/img/champion/{{icon-filename}}`

##### `champion-portrait`
- returns a champion's portrait
- endpoint: `/img/champion/loading/{{champion-key}}.jpg`

##### `champion-splash`
- returns a champion's splash screen
- endpoint: `/img/champion/splash/{{champion-key}}_0.jpg`

##### `spell-icon`
- return a spell's square icon
- endpoint: `/6.24.1/img/spell/{{spell-icon-filename}}`
