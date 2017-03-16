var chai = require('chai');
var sinon = require('sinon');
var expect = chai.expect; 	// we are using the "expect" style of Chai
var User = require('../models/user');
var userHelpers = require('../helpers/userHelpers');

describe('User Functions', function() {
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

	it('getName() testing', function() {
		var user = new User({first_name: 'Rob', last_name: 'Myers'});
		expect(user.getName()).to.equal('Rob Myers');

		var secondUser = new User();
		expect(secondUser.getName()).to.equal('Not supplied');
	});

	it('getClassTotal() should execute and get the total classes - 6', function() {
		var user = new User({
			_id: '123',
			first_name: 'Rob',
			last_name: 'Myers'
		});

		user.getRegisteredClassTotal(function(total) {
			expect(total).to.equal(6);
		});
	});

});