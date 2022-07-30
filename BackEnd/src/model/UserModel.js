const bcrypt = require('bcryptjs');
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI, (err) => {
    if (!err){
        console.log("connected to DB");
    }
    else {
        console.log("Error in connection to DB:" + JSON.stringify(err, undefined, 2));
    }
});

const userSchema = new mongoose.Schema({
    fullName: { type: String,required:false },
    email: { type: String,required:false, unique: true},
    phoneNo: {type: String, required:false},
    password: { type: String, required:false },
    repeatPassword: { type: String, required:false },
    userType: { type: String,required:true },
    createdttm : { type: Date, required: true, default: Date.now }
});

userSchema.pre("save", async function(next) {
    if (this.isModified("password")){
        console.log(`${this.password}`);
        this.password = await bcrypt.hash(this.password,1);       
        console.log(`${this.password}`);
        this.repeatPassword=undefined;

    }
    next();
})

const users =new  mongoose.model('User',userSchema);
module.exports = users;