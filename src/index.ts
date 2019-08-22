/*
 * @Date: 2019-08-22 14:40:00
 * @LastEditTime: 2019-08-22 15:39:48
 * @Description: 
 * @Author: Zhen
 * @LastEditors: Zhen
 */

import ResourceMap from './models/ResourceMap';
import PagedResults from './models/PagedResults';

import People from './models/People';

type Format = 'wookiee' | 'json';

export interface Option {
    format?: Format;
    /**
     * `Default`: https://swapi.co/api/
     */
    baseOrigin?: string;
    request<T>(params: { url: string; query?: { [key: string]: string | number } }): Promise<T>;
}

const defaultOption = {
    format: 'json',
    baseOrigin: 'https://swapi.co/api/'
};

const weakMap = new WeakMap<SWAPI, { requestResources: Promise<ResourceMap> }>();

class SWAPI {
    option: Option;
    static getResources(instance: SWAPI) {
        const privateFields = weakMap.get(instance);
        return privateFields.requestResources;
    }

    constructor(option: Option) {
        this.option = Object.assign({}, defaultOption, option);
        const requestResources = this.resources();
        weakMap.set(this, { requestResources });
    }

    async resources(query?: { format?: Format }) {
        return this.option.request<ResourceMap>({
            url: this.option.baseOrigin,
            query: {
                format: this.option.format,
                ...query
            }
        });
    }

    async people(input?: number | string) {
        const resourceMap = await SWAPI.getResources(this);
        const page = typeof input === 'number' ? input : 1;
        const url = typeof input === 'string' ? input : `${resourceMap.people}`;
        return this.option.request<PagedResults<People>>({
            url,
            query: {
                format: this.option.format,
                page
            }
        });
    }

    async person(input: number | string) {
        const resourceMap = await SWAPI.getResources(this);
        const id = typeof input === 'number' ? input : 0;
        const url = typeof input === 'string' ? input : `${resourceMap.people}${id}/`;
        return this.option.request<People>({
            url,
            query: {
                format: this.option.format,
            }
        });
    }
}

export default SWAPI;