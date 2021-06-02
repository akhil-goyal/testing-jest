const fetch = require('node-fetch');
const swapi = require('./script2');

// // assertions tells jest about how many tests it expects to execute.
// // done is like a callback, when it is called, it tells jest that the
// // asynchronous task has been completed.
// it('calls swapi to get people', (done) => {
//     expect.assertions(1);
//     swapi.getPeople(fetch).then(data => {
//         expect(data.count).toEqual(87);
//         done();
//     });
// });

// Other way to handle asynchronous functions is by using returns keyword.
it('calls swapi to get people', () => {
    expect.assertions(1);
    return swapi.getPeople(fetch).then(data => {
        expect(data.count).toEqual(87);
    });
});

it('calls swapi to get people with a promise', () => {
    expect.assertions(2);
    return swapi.getPeoplePromise(fetch).then(data => {
        expect(data.count).toEqual(87);
        expect(data.results.length).toBeGreaterThan(5);
    });
});