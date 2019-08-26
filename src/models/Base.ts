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
  Planet = 'planets',
  Species = 'species',
  Starship = 'starships',
  Vehicle = 'vehicles'
}

/**
 * ResourceUrl String
 * 
 * e.g. "https://swapi.co/api/people/1/",
 */
export type ResourceUrl = string;

export default interface Resource {
  url: ResourceUrl;
  id: string;
  /**
   * "2014-12-09T13:50:51.644000Z"
   */
  created: string;
  /**
   * "2014-12-20T21:17:56.891000Z"
   */
  edited: string;
}; // eslint-disable-line
