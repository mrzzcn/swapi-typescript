/*
 * @Date: 2019-08-22 14:40:00
 * @LastEditTime: 2019-08-25 15:26:58
 * @Description: 
 * @Author: Zhen
 * @LastEditors: Zhen
 */

import PagedResults from './models/PagedResults';
import Resource, { ResourceType } from './models/Base';
import People from './models/People';

export type Format = 'wookiee' | 'json';

type ResourceUrlMap = {
    [ResourceType.Film]: string;
    [ResourceType.People]: string;
    [ResourceType.Plant]: string;
    [ResourceType.Species]: string;
    [ResourceType.Starship]: string;
    [ResourceType.Vehicle]: string;
}

/**
 * Get Id from URL
 * @param url https://swapi.co/api/planets/1/
 * @return Resource Identifier: 1
 */
function getIdFromUrl(url: string) {
    const parts = url.split('/').reverse();
    return parts[1];
}

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

const weakMap = new WeakMap<SWAPI, { requestResources: Promise<ResourceUrlMap> }>();

class SWAPI {
    option: Option;
    static getResources(instance: SWAPI) {
        const privateFields = weakMap.get(instance);
        return privateFields.requestResources;
    }

    constructor(option: Option) {
        this.option = Object.assign({}, defaultOption, option);
        const requestResources = this.resourceMap();
        weakMap.set(this, { requestResources });
    }

    async resourceMap(query?: { format?: Format }) {
        return this.option.request<ResourceUrlMap>({
            url: this.option.baseOrigin,
            query: {
                format: this.option.format,
                ...query
            }
        });
    }

    async resources<T extends Resource>(resourceType: ResourceType, input?: number | string) {
        const resourceMap = await SWAPI.getResources(this);
        const page = typeof input === 'number' ? input : 1;
        const url = typeof input === 'string' ? input : `${resourceMap[resourceType]}`;
        const results = await this.option.request<PagedResults<T>>({
            url,
            query: {
                format: this.option.format,
                page
            }
        });
        results.results.forEach(model => {
            model.id = `${resourceType}-${getIdFromUrl(model.url)}`;
        });
        return results;
    }

    async resource<T extends Resource>(resourceType: ResourceType, input: number | string) {
        const resourceMap = await SWAPI.getResources(this);
        const id = typeof input === 'number' ? input : 0;
        const url = typeof input === 'string' ? input : `${resourceMap[resourceType]}${id}/`;
        const model = await this.option.request<T>({
            url,
            query: {
                format: this.option.format,
            }
        });
        model.id = `${resourceType}-${getIdFromUrl(model.url)}`;
        return model;
    }

    async people(input?: number | string) {
        return this.resources<People>(ResourceType.People, input);
    }

    async person(input?: number | string) {
        return this.resource<People>(ResourceType.People, input);
    }
}

export default SWAPI;