var should = require('chai').should(),
    passmo = require('../index'),
    generateHash = passmo.generateHash;

describe("generateHash", function(){
    it('hashes a password', function() {
        generateHash('123456').should.equal('0cff774f73ff9af8d43912e47852374510e341a25370c292845a319373c8b1d46ee5b13b1a132a8a9aaa908487275c00d2679b157de884bed818da0125f9ea65')
    });
});
