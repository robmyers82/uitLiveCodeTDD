var chai = require('chai');
var sinon = require('sinon');
var expect = chai.expect; 	// we are using the "expect" style of Chai
var Class = require('../models/classes');

describe('Classes functionality', function() {

	it('Print class title', function() {

		var theClass = new Class({name: 'Introduction to Programming', code: 'UIT 101', teacher: 'Rob Myers'});
		expect(theClass.getTitle()).to.equal('UIT 101 - Introduction to Programming');
	});

});