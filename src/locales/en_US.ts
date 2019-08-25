export const format = 'json';

export const People = {
    id: 'ID',
    name: 'Name',
    height: 'Height',
    mass: 'Mass',
    hair_color: 'Hair Color', // eslint-disable-line @typescript-eslint/camelcase
    skin_color: 'Skin Color', // eslint-disable-line @typescript-eslint/camelcase
    eye_color: 'Eye Color', // eslint-disable-line @typescript-eslint/camelcase
    birth_year: 'Birth Year', // eslint-disable-line @typescript-eslint/camelcase
    gender: 'Gender',
    homeworld: 'Homeworld',
    films: 'Films',
    species: 'Species',
    vehicles: 'Vehicles',
    starships: 'Starships',
    created: 'Created',
    edited: 'Edited',
    url: 'URL'
};

export const Film = {
    title: 'Title',
    episode_id: 'Episode#', // eslint-disable-line @typescript-eslint/camelcase
    opening_crawl: 'Opening Crawl', // eslint-disable-line @typescript-eslint/camelcase
    director: 'Director',
    producer: 'Producer',
    release_date: 'Release Date', // eslint-disable-line @typescript-eslint/camelcase
    characters: 'Characters',
    planets: 'Planets',
    starships: 'Starships',
    vehicles: 'Vehicles',
    species: 'Species',
    created: 'Created',
    edited: 'Edited',
    url: 'URL'
};

export const Planet = {
    name: 'Name',
    rotation_period: 'Rotation Period',
    orbital_period: 'Orbital Period',
    diameter: 'Diameter',
    climate: 'Climate',
    gravity: 'Gravity',
    terrain: 'Terrain',
    surface_water: 'Surface Water',
    population: 'Population',
    residents: 'Residents',
    films: 'Films',
    created: 'Created',
    edited: 'Edited',
    url: 'URL'
};

export default {
    format,
    People,
    Film,
    Planet,
};
