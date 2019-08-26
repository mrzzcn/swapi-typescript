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
    rotation_period: 'Rotation Period', // eslint-disable-line @typescript-eslint/camelcase
    orbital_period: 'Orbital Period', // eslint-disable-line @typescript-eslint/camelcase
    diameter: 'Diameter',
    climate: 'Climate',
    gravity: 'Gravity',
    terrain: 'Terrain',
    surface_water: 'Surface Water', // eslint-disable-line @typescript-eslint/camelcase
    population: 'Population',
    residents: 'Residents',
    films: 'Films',
    created: 'Created',
    edited: 'Edited',
    url: 'URL'
};

export const Species = {
    name: 'Name',
    classification: 'Classification',
    designation: 'Designation',
    average_height: 'Average Height', // eslint-disable-line @typescript-eslint/camelcase
    skin_colors: 'Skin Colors', // eslint-disable-line @typescript-eslint/camelcase
    hair_colors: 'Hair Colors', // eslint-disable-line @typescript-eslint/camelcase
    eye_colors: 'Eye Colors', // eslint-disable-line @typescript-eslint/camelcase
    average_lifespan: 'Average Lifespan', // eslint-disable-line @typescript-eslint/camelcase
    homeworld: 'Homeworld',
    language: 'Language',
    people: 'People',
    films: 'Films',
    created: 'Created',
    edited: 'Edited',
    url: 'URL'
};

export const Starship = {
    name: 'Name',
    model: 'Model',
    manufacturer: 'Manufacturer',
    cost_in_credits: 'Cost in Credits', // eslint-disable-line @typescript-eslint/camelcase
    length: 'Length',
    max_atmosphering_speed: 'Max Atmosphering Speed', // eslint-disable-line @typescript-eslint/camelcase
    crew: 'Crew',
    passengers: 'Passengers',
    cargo_capacity: 'Cargo Capacity', // eslint-disable-line @typescript-eslint/camelcase
    consumables: 'Consumables',
    hyperdrive_rating: 'Hyperdrive Rating', // eslint-disable-line @typescript-eslint/camelcase
    MGLT: 'MGLT',
    starship_class: 'Starship Class', // eslint-disable-line @typescript-eslint/camelcase
    pilots: 'Pilots',
    films: 'Films',
    created: 'Created',
    edited: 'Edited',
    url: 'URL'
};

export const Vehicle = {
    name: 'Name',
    model: 'Model',
    manufacturer: 'Manufacturer',
    cost_in_credits: 'Cost in Credits', // eslint-disable-line @typescript-eslint/camelcase
    length: 'Length',
    max_atmosphering_speed: 'Max Atmosphering Speed', // eslint-disable-line @typescript-eslint/camelcase
    crew: 'Crew',
    passengers: 'Passengers',
    cargo_capacity: 'Cargo Capacity', // eslint-disable-line @typescript-eslint/camelcase
    consumables: 'Consumables',
    vehicle_class: 'Vehicle Class', // eslint-disable-line @typescript-eslint/camelcase
    pilots: 'Pilots',
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
    Species,
    Starship,
    Vehicle
};
