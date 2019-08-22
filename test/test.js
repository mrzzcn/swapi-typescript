const sinon = require('sinon');
const should = require('should');
require('should-sinon');

const { default: SWAPI } = require('../src/index.ts');

const baseOrigin = 'https://swapi.xxx/';
const format = 'json';

const resourceMap = {
    "people": `${baseOrigin}people/`,
    "planets": `${baseOrigin}planets/`,
    "films": `${baseOrigin}films/`,
    "species": `${baseOrigin}species/`,
    "vehicles": `${baseOrigin}vehicles/`,
    "starships": `${baseOrigin}starships/`
};
const resourceRequest = sinon.fake.resolves(resourceMap);

const people = { results: [] };
const peopleRequest = sinon.fake.resolves(people);

describe('Testing SWAPI', function () {
    describe('resources', function () {
        it('Send request with correct url', function () {
            const swapi = new SWAPI({
                format,
                baseOrigin,
                request: resourceRequest
            });

            resourceRequest.should.be.calledWith({
                url: `${baseOrigin}`,
                query: { format }
            });
            // 'Should Use Cached ResourceMap'
            SWAPI.getResources(swapi).should.be.fulfilledWith(resourceMap);
        });
    });

    describe('people', function () {
        it('Send request with correct url', function () {
            const swapi = new SWAPI({
                format,
                baseOrigin,
                request: resourceRequest
            });

            swapi.option.request = peopleRequest;
            swapi.people();

            peopleRequest.should.be.fulfilledWith(people);
            // calledWith({
            //     url: `${baseOrigin}people/`,
            //     query: { format, page: 1 }
            // });
        });
    });

});
