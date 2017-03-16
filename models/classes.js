var mongoose    =   require("mongoose");

var Schema =   mongoose.Schema;

var classSchema  = new Schema({
	_id: Number,
    name: String,
    teacher: String,
    code: String
});

classSchema.methods.getTitle = function() {
	return this.code+' - '+this.name;
}

module.exports = mongoose.model('classes', classSchema);