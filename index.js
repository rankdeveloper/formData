const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql')
const path = require('path')
const app = express();

// const router = require('./views/router/index.js')
// app.use('/' , router)


app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.static(path.join(__dirname, 'public')))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(bodyParser.json());


const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "rankush0507",
    database: "test"
})


app.get('/', function (req, res) {
    res.render('add');
});

app.get('/add', function (req, res) {
    res.render('add');
});



app.get('/home', (req, res) => {
    res.render('home')
})


app.get('/about', (req, res) => {
    res.render('about')
})

app.get('/contact', (req, res) => {
    res.render('contact')
})

app.get('/update' , (req ,res) => {
    res.render('update')
})

app.post('/add', (req, res) => {
    const student = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email
    }

    console.log(student)
    setTimeout(() => {
        // res.send(` ${student.firstName} successfully added`)
        res.render('success', { student })

    }, 2000)

    let sql = `insert into student (firstName , lastName , email) values (? , ? , ?);`;

    con.query(sql, [student.firstName, student.lastName, student.email], (err, result) => {
        if (err) {
            res.statusCode = 500;
            throw err;

        }
        else {
            console.log("Record has been inserted : ", result)
            res.statusCode = 200;
        }

    })
})


//updating data
app.get('/update' , (req ,res) => {
    res.render('update')
})

app.post('/update', (req, res) => {
    const student = {
        userID: req.body.userID,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email
    }

    const update = `update student  set firstName =(?) , lastName=(?) , email=(?) where id =(?)`;
    con.query(update ,[student.firstName , student.lastName , student.email , student.userID] , (err , result) => {
        if(err) throw err
        console.log(result.affectedRows+"updated rows")
    })

    setTimeout( () => {
        // res.send(`${student.firstName} data updated successfully`)
        res.render('updated-data' , {student})
    },2000)
})


app.get('*', (req, res) => {
    res.render('404')
})

const port = (process.env.PORT || 2000)

app.listen(port, () => {
    console.log(`server is listening on port ${port}`)
})

