const request = require('supertest');
const expect = require('expect');
let app = require('./server').app;

describe('Server ', () => {
    
    
    describe('# /  ', () => {
        
        it('Should return hello world', (done) => {
            
            request(app).get('/').expect(200).expect('Hello World').end(done);
        })
        
    })
    
    
    describe('# /Users  ', () => {
        
        it('Should return four users ', (done) => {
            
            request(app).get('/users').expect(200).expect((response) => {
                expect(response.body.length).toBe(4);
                expect(response.body[2].name).toEqual('darcy');
                expect(response.body).toInclude({name: 'jordan', age: 35});
                
                
            }).end(done);
        })
    });
})
