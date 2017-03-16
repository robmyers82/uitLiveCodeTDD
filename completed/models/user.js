var mongoose    =   require("mongoose");
mongoose.connect('mongodb://localhost:27017/livecodetdd');

var userHelpers = require('../helpers/userHelpers')
var Schema =   mongoose.Schema;

var userSchema  = new Schema({
	_id: Number,
    name: String,
    email: String,
    password: String
});

userSchema.methods.getName = function() {
	return this.name;
}

userSchema.methods.getRegisteredClassTotal = function(cb) {
	userHelpers.getRegisteredClassTotal(this._id, function(total) {
		cb(total);
	});
}

module.exports = mongoose.model('users', userSchema);