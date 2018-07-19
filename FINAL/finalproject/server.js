const express=require('express');
const hbs=require('hbs');
const app=express();
const port=process.env.PORT||5000;
const bodyParser=require('body-parser');

const passport=require('passport');
const passportLocal=require('passport-local').Strategy;
const cookieParser=require('cookie-parser');
const session=require('express-session');
const userconfig=require('./userconfig.json');
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use(session({secret:'cat is here'}));
app.use(passport.initialize());
app.use(passport.session());

app.use(express.static('public'));
app.set('view engine','hbs');
app.set('views','views');

const sql=require('mysql');
let config={
    "host":'localhost',
    "user":'shradha-khapra',
    "password": 'shradha@123',
    "database":'libofly'

};
let connection =sql.createConnection(config);
function connect(){

    connection.connect();
}

app.post('/signup',function(req,res){
    addUser(req.body.username,req.body.password);
    res.render('main',{});
});

function addUser(user,pass){

    let query=`insert into users (username,password) values ('${user}','${pass}')`;
    connection.query(query,function(err,data){
        if(err) console.log("error");

    })
}
function checkUser(user,pass,abcd){

    let query=` SELECT password FROM users WHERE username='${user}'`;
    connection.query(query,function(err,data){
        if(data[0]==undefined)  {
            console.log("in if");
           let a= false;
           abcd(a);
        }
         else {
            console.log(" else");
            console.log(data[0].password);
           let a= true;
            abcd(a);
        }

    });

}

app.use(function(req,res,next){
    res.setHeader('Access-Control-Allow-Origin','*');
    next();
});
app.get('/',(req,res)=>{
    res.render('login',{});
});

app.post('/login',passport.authenticate('local',
    {
        successRedirect:'/login',
        failureRedirect:'/'
    }
));

passport.use(new passportLocal(
    function(username,password,done){
      checkUser(username,password,function(a){

          return done(null,a);
     });

        // if(username!=userconfig.username)
        // {   console.log("invalid username");
        //     return done(null,false);}
        // if(password!=userconfig.password)
        // {    console.log("invalid password");
        //     return  done(null,false);}


    }
));

passport.serializeUser(function(a, done) {

    return  done(null,a);
});

app.get('/abcd',function(req,res){
    console.log("shruti ka abcd");
    res.render('main',{});

});


passport.deserializeUser(function(a, done) {

    if(a){

    return  done(null, userconfig.username);}
});
app.get('/login',function(req,res){

    res.render('main',{});

});

app.get('/main',function(req,res){
    let xhr= require('xmlhttprequest').XMLHttpRequest;
    let xhttp= new xhr();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200)
        {
            let x=this.responseText;
            res.render('index2',{data:JSON.parse(x)});

        }
    };

    xhttp.open("GET", `https://www.googleapis.com/books/v1/volumes/${req.query.val}`, true);
    xhttp.send();

});
app.listen(port,function(){
    connect();
    console.log("application running on port "+port);

});
