const utils = require('./utils');
const expect = require('expect');

describe('Utils ', () => {
    
    
    describe('#Add ', () => {
        
        it('should add two numbers', () => {
            expect(utils.add(33, 11)).toBe(44).toBeA('number');
            
        });
    
    it('Should async add two numbers', (done) => {
        utils.asyncAdd(5, 4, (sum) => {
            expect(sum).toBe(9).toBeA('number');
            done();
        });
    });
    
    });
    
    
    describe('#Square ', () => {
        
        it('should add square a number', () => {
            expect(utils.square(5)).toBe(25);
            
        });
        
        it('Should async square two numbers', (done) => {
            utils.asyncSquare(9, (result) => {
                expect(result).toBe(81).toBeA('number');
                done();
            });
        });
    });
    
    
    it('should expect some values', () => {
        expect(12).toNotBe(11);
        expect({name: 'Jordan'}).toEqual({name: "Jordan"})
        expect([1, 2, 3]).toInclude(2).toExclude(8);
        
        expect({
            name: 'Jordan',
            age: 35,
            location: 'Dunfermline'
        }).toInclude({age: 35});
        
    });
    
    it('should verify first and last name set ', () => {
        let user = {
            age: 35,
            location: 'Dunfermline'
        };
        let returnedUser = utils.setName(user, "Jordan Dick");
        
        expect(returnedUser).toInclude({firstName: 'Jordan', lastName: 'Dick'});
        
        
        expect(returnedUser.firstName).toBeA('string');
        
        
    });
    
    
});