export const format = 'json';

const People = {
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
    url: 'Url'
};

export {
    People
};

export default {
    format,
    People
};
