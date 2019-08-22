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

describe('Testing SWAPI', function () {
    let sandbox = null;
    const _originGetResources = SWAPI.getResources;

    beforeEach(() => {
        sandbox = sinon.createSandbox();
    })

    afterEach(() => {
        sandbox.restore()
    })

    describe('Resources', function () {
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

    describe('People', () => {
        it('Send request with correct url & return results of page1', async () => {
            const people = { results: [] };
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

    describe('Person', () => {

        it('Send request with correct url & return specific object with input ID', async () => {
            const person = { id: 1 };
            const personRequest = sinon.fake.resolves(person);
            sandbox.stub(SWAPI, 'getResources').resolves(resourceMap);

            const swapi = new SWAPI({
                format,
                baseOrigin,
                request: () => ({})
            });
            swapi.option.request = personRequest;
            const result = await swapi.person(person.id);

            result.should.be.equal(person);

            personRequest.should.be.calledWith({
                url: `${baseOrigin}people/${person.id}/`,
                query: { format }
            });
        });
        it('Send request with correct url & return specific object with input URL', async () => {
            const person = { url: 'xxx' };
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
