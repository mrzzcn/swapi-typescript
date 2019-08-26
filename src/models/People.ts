/*
 * @Date: 2019-08-22 15:17:20
 * @LastEditTime: 2019-08-25 15:26:08
 * @Description: 
 * @Author: Zhen
 * @LastEditors: Zhen
 */
import Resource, { ResourceUrl } from './Base';

export default interface People extends Resource {
    birth_year: string;
    eye_color: string;
    films: ResourceUrl[];
    gender: string;
    hair_color: string;
    height: string;
    homeworld: string;
    mass: string;
    name: string;
    skin_color: string;
    species: ResourceUrl[];
    starships: ResourceUrl[];
    vehicles: ResourceUrl[];
}; // eslint-disable-line
