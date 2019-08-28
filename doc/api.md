# Document

## Add dependency

```sh
# npm
npm install swapi-typescript

# yarn
yarn add swapi-typescript
```

```javascript
import SWAPI, { RequestParams } from 'swapi-typescript';
import { get } from './http';

function request<T>(params: RequestParams) {
  return get<T>(params.url, params.query);
}

const SWAPI_JSON = new SWAPI({
  request
});

SWAPI.people().then(res => {
  console.log(res.results);
});

export default SWAPI_JSON;
```

## Available Resources
```javascript
// People
SWAPI.people(input?); // input: page or url
SWAPI.person(input);  // input: People ID or People Url

// Films
SWAPI.films(input?);
SWAPI.film(input);

// Planets
SWAPI.Planets(input?);
SWAPI.planet(input);

// Species
SWAPI.speciesList(input?);
SWAPI.species(input);

// Starships
SWAPI.starships(input?);
SWAPI.starship(input);

// Vehicles
SWAPI.vehicles(input?);
SWAPI.vehicle(input);

```