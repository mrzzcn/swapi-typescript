/*
 * @Date: 2019-08-22 15:17:20
 * @LastEditTime: 2019-08-25 15:26:08
 * @Description: 
 * @Author: Zhen
 * @LastEditors: Zhen
 */
import Resource from './Base';

export default interface People extends Resource {
  birth_year: string;
  created: string;
  edited: string;
  eye_color: string;
  films: string[];
  gender: string;
  hair_color: string;
  height: string;
  homeworld: string;
  mass: string;
  name: string;
  skin_color: string;
  species: string[];
  starships: string[];
  vehicles: string[];
}; // eslint-disable-line