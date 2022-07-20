const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI, (err) => {
    if (!err){
        console.log("connected to DB");
    }
    else {
        console.log("Error in connection to DB:" + JSON.stringify(err, undefined, 2));
    }
});

const categorySchema = new mongoose.Schema(
    {
        name: {type: String,required: true}
    }
    
);

const categories = new  mongoose.model('Category',categorySchema);
module.exports = categories;