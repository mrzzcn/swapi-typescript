import Resource, { ResourceUrl } from './Base';

export default interface Vehicle extends Resource {
    name: string;
    model: string;
    manufacturer: string;
    cost_in_credits: string;
    length: string;
    max_atmosphering_speed: string;
    crew: string;
    passengers: string;
    cargo_capacity: string;
    consumables: string;
    vehicle_class: string;
    pilots: ResourceUrl[];
    films: ResourceUrl[];
}; // eslint-disable-line
