// const express = require('express')
// const { route } = require('express/lib/application')
// const router = express.Router()
// const path = require('path')
// const mysql = require('mysql')
// const app = express()
// const bodyParser = require('body-parser');

// app.use(express.static(path.join(__dirname , 'public')))
// app.use(bodyParser.urlencoded({ extended: false }))
// app.use(bodyParser.json())
 
// app.use(bodyParser.json());


// const con = mysql.createConnection({
//     host:"localhost",
//     user:"root",
//     password:"rankush0507",
//     database:"test"
// })


// router.get('/', function(req, res){
//     res.render('add');
//  });
 
// router.get('/home' , (req , res) => {
//      res.render('home')
//  })
 

// router.get('/about' , (req ,res) => {
//     res.render('about')
// })

// router.get('/contact' , (req , res) => {
//     res.render('contact')
// })


// router.post('/add' , (req , res) => {
//     const student ={
//         firstName:req.body.firstName,
//         lastName:req.body.lastName
//     }
  
// console.log(student)
// setTimeout( () => {
//     // res.send(` ${student.firstName} successfully added`)
//     res.render('success' , {student})

// },2000 )

// let sql =`insert into student (firstName , lastName) values (? , ?);`;

// con.query(sql , [student.firstName , student.lastName] , (err , result) => {
//     if(err){
//         res.statusCode=500;
//         throw err;
        
//     }
//     else{
//         console.log("Record has been inserted : " , result)
//         res.statusCode=200;
//     }
   
// })
// })


// router.get('*' , (req , res) => {
//     res.render('404')
// })

// module.exports= router;