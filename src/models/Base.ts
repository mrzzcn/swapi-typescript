/*
 * @Date: 2019-08-25 14:58:23
 * @LastEditTime: 2019-08-25 15:26:06
 * @Description: 
 * @Author: Zhen
 * @LastEditors: Zhen
 */

export enum ResourceType {
  Film = 'films',
  People = 'people',
  Plant = 'planets',
  Species = 'species',
  Starship = 'starships',
  Vehicle = 'vehicles'
}

export default interface Resource {
  url: string;
  id: string;
}; // eslint-disable-line