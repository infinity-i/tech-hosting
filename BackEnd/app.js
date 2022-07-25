require('./config/config');
const userModel = require('./src/model/UserModel');
const postModel = require('./src/model/PostModel');
const categoryModel = require('./src/model/CategoryModel');
const express= require('express');
const cors = require('cors');
const bodyparser = require('body-parser');
const jwt = require('jsonwebtoken');
const bcrypt = require ("bcryptjs");
const req = require('express/lib/request');
const posts = require('./src/model/PostModel');
const app = new express();

app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(cors());
app.use(bodyparser.urlencoded({ extended: true }));

//For test purpose
app.get('/', (req, res) => {
    res.send({
      status: 'online'
    })
});

//Register API
app.post('/register', async (req,res)=> {

        console.log('reached');
        const password= req.body.password;
        const confpassword= req.body.repeatPassword;
        if(password === confpassword){
            const userdata = new userModel({
                fullName : req.body.registerUserData.fullName,
                email : req.body.registerUserData.email,
                phoneNo: req.body.registerUserData.phoneNo,
                password : req.body.registerUserData.password,
                repeatPassword : req.body.registerUserData.repeatPassword
                //userType : req.body.userType
            })
        const user= await userdata.save();
        res.status(201);
        console.log('registration succefull')
        }else{
            res.send("Password not matching");
        }
    // } catch (error) {
    //     console.log('error catch');

    //     res.status(400).send(error);
        
    // }

    // var user = new userModel(user);
    //     console.log(user);
    //     user.save((err,user)=>{
    //         if(err){
    //             console.log("error saving user to db");
    //         }
    //         else{
    //             let payload={subject:user._id};
    //             let token = jwt.sign(payload,'secretKey');
    //             res.status(200).send({token});
              
    //         }
    //     });
        

})

//Login API
app.post('/login', async(req,res) => {

        const email = req.body.loginUserData.email;
        const password = req.body.loginUserData.password;
        const user = await userModel.findOne({email:email});
        const isMatch = await bcrypt.compare(password, user.password);
        if (isMatch){
            let payload = {subject: email+password}
            let token = jwt.sign(payload, 'secretKey')
            res.status(200).send({token})
            console.log("key value matches");
        }else {
            res.send("Invalid credentials");
        }     
    });
    


 


//create post
app.post('/posts/savepost', function(req,res){
   console.log(req.body);
   const post = {       
        title : req.body.item.title,
        content : req.body.item.content,
        username : req.body.item.username,
   }       
   const newpost = new postModel(post);
   newpost.save();
});

//Posts pending approval in admin page
app.get('/admin/pending', function(req,res){
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Methods:GET,POST,PUT,DELETE");
    postModel.find({approved:false})
    .then(function(post){
        console.log('All Approved Posts displayed');
        res.send(post);
    })
})

//To display all posts that are approved in home page
app.get('/posts', function(req,res){
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Methods:GET,POST,PUT,DELETE");
    postModel.find({approved:true})
    .then(function(post){
        console.log('All Approved Posts displayed');
        res.send(post);
    })
})

//To change approved value on approval by admin
app.get('/admin/approve', function(req,res){
    posts.find()
        .then((blog)=>{
            res.send(blog);
        })
    // console.log(req.body.title)
    // id=req.body._id,
    // postModel.findByIdAndUpdate({"_id":id},{$set:{"approved":true}})
    //         .then(function(){
    //             res.send();
    //         })
})

//Add categories 
app.post('/categories', async(req,res) => {
    const newcategory = new categoryModel(req.body);
    try{
        const savedcategory = await newcategory.save();
        res.status(200).json(savedcategory);
    }catch(err) {
        res.status(500).json(err);
    }
} );



//Port setup
app.listen(process.env.PORT,()=>{
    console.log(`Server up and running in ${process.env.PORT}`);
});


