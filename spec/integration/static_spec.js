
const request = require('request');


const server = require('../../src/server');

const base = "http://localhost:3000/";


// scope all suites under a describe call with the title 'routes : static'
describe('routes : static', () => {
    
    //As a good practice, we title our route tests with the HTTP verb the request will make along with the URI for the request.
    describe('GET /', () => {
        
        it('should return status code 200 and have "Welcome to Bloccit" in the body of the resonse', (done) => {
            request.get(base, (error, response, body) => {
                expect(response.statusCode).toBe(200);
                expect(body).toContain('Welcome to Bloccit')
                
                //We call the done method to let Jasmine know our test is completed. This is necessary because our test is making an async request to the server which will not complete before the spec is executed. If we remove the done parameter on the spec implementation fn as well as the done() method call, our test will pass. This is because the expect call won't be made before the test finishes and Jasmine assumes that no expect means the test is successful. Passing done as a parameter to the function tells Jasmine to wait until it is called.
                done();
            });
        });
    
    });
    
    describe('GET /about', () => {
        
        it('should contain the string "about us"', (done) => {
            request(`${base}about`, (error, response, body) => {
                expect(response.statusCode).toBe(200);
                expect(response.body).toContain('about us')
                done();
            })
        })
        
    })
    
    
});



