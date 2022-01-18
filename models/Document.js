const mongoose = require ("mongoose");

const Document = mongoose.model("document",{

_id:String,
date: Object,

})


module.exports = Document;