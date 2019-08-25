const sinon = require('sinon');
const should = require('should');
require('should-sinon');

const { default: SWAPI } = require('../src/index.ts');
const { ResourceType } = require('../src/models/base');

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

describe('Testing SWAPI', function () {
    let sandbox = null;
    const _originGetResources = SWAPI.getResources;

    beforeEach(() => {
        sandbox = sinon.createSandbox();
    })

    afterEach(() => {
        sandbox.restore()
    })

    describe('Resource Url Map', function () {
        it('Send request with correct url', function () {
            const resourceRequest = sinon.fake.resolves(resourceMap);

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

    describe('Resources', () => {
        it('Send request with correct url & return results of page 1', async () => {
            const people = {
                results: [
                    { url: 'https://swapi.co/api/planets/0/' },
                    { url: 'https://swapi.co/api/planets/1/' },
                    { url: 'https://swapi.co/api/planets/2/' },
                ]
            };
            const peopleRequest = sinon.fake.resolves(people);

            const swapi = new SWAPI({
                format,
                baseOrigin,
                request: () => ({})
            });
            sandbox.stub(SWAPI, 'getResources').resolves(resourceMap);
            swapi.option.request = peopleRequest;
            const result = await swapi.people();

            result.should.be.equal(people);
            result.results.forEach((item) => {
                should.equal(item.id, `people-${item.url.split('/').reverse()[1]}`)
            });
            peopleRequest.should.be.calledWith({
                url: `${baseOrigin}people/`,
                query: { format, page: 1 }
            });
        });

        it('Send request with correct url & return specific results of input page', async () => {
            const people = { results: [] };
            const peopleRequest = sinon.fake.resolves(people);
            const page = 10;
            const swapi = new SWAPI({
                format,
                baseOrigin,
                request: () => ({})
            });
            sandbox.stub(SWAPI, 'getResources').resolves(resourceMap);
            swapi.option.request = peopleRequest;
            const result = await swapi.people(page);

            result.should.be.equal(people);

            peopleRequest.should.be.calledWith({
                url: `${baseOrigin}people/`,
                query: { format, page: page }
            });
        });

        it('Send request with correct url & return specific results of input URL', async () => {
            const people = { results: [] };
            const peopleRequest = sinon.fake.resolves(people);
            const url = 'xxxxx';
            const swapi = new SWAPI({
                format,
                baseOrigin,
                request: () => ({})
            });
            sandbox.stub(SWAPI, 'getResources').resolves(resourceMap);
            swapi.option.request = peopleRequest;
            const result = await swapi.people(url);

            result.should.be.equal(people);

            peopleRequest.should.be.calledWith({
                url,
                query: { format, page: 1 }
            });
        });
    });

    describe('Single Resource', () => {
        it('Send request with correct url & return specific object with input ID', async () => {
            const id = 100;
            const url = 'https://swapi.co/api/planets/100/';
            const person = { url };
            const personRequest = sinon.fake.resolves(person);
            sandbox.stub(SWAPI, 'getResources').resolves(resourceMap);

            const swapi = new SWAPI({
                format,
                baseOrigin,
                request: () => ({})
            });
            swapi.option.request = personRequest;
            const result = await swapi.person(id);

            result.should.be.equal(person);

            personRequest.should.be.calledWith({
                url: `${baseOrigin}people/${id}/`,
                query: { format }
            });
        });
        it('Send request with correct url & return specific object with input URL', async () => {
            const url = 'https://swapi.co/api/planets/100/';
            const person = { url };
            const personRequest = sinon.fake.resolves(person);
            sandbox.stub(SWAPI, 'getResources').resolves(resourceMap);

            const swapi = new SWAPI({
                format,
                baseOrigin,
                request: () => ({})
            });
            swapi.option.request = personRequest;
            const result = await swapi.person(person.url);

            result.should.be.equal(person);

            personRequest.should.be.calledWith({
                url: person.url,
                query: { format }
            });
        });
    });
});
