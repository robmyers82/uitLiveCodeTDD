var chai = require('chai');
var sinon = require('sinon');
var expect = chai.expect; 	// we are using the "expect" style of Chai
var User = require('../models/user');
var userHelpers = require('../helpers/userHelpers');

describe('Users', function() {
	beforeEach(function() {
		sinon.stub(userHelpers, 'getRegisteredClassTotal', function(userId, done) {
			setTimeout(function() {
				done(6);
			}, 0);
		});
	});

	afterEach(function() {
		userHelpers.getRegisteredClassTotal.restore();
	});

	it('getName() should return \'Rob\'', function() {
		var user = new User({name: 'Rob'});
		expect(user.getName()).to.equal('Rob');
	});

	it('getName() should return \'Robert\'', function() {
		var user = new User();
		user.name = 'Robert';
		expect(user.getName()).to.equal('Robert');
	});

	it('getClassTotal() should execute and get the total classes - 6', function() {
		var user = new User({
			_id: '123',
			name: 'Rob'
		});

		user.getRegisteredClassTotal(function(total) {
			expect(total).to.equal(6);
		});
	});

});