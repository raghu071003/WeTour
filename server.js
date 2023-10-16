const exp=require('express');
const app=exp();
app.listen(3000);
console.log("server is running on port 3000");
app.get('/',function(req,res){
    res.sendFile('./Main/HomePage.html',{root:__dirname});
    console.log('Homepage');
});
app.get('/login',function(req,res){
    res.sendFile('./Main/LoginPage.html',{root:__dirname});
    console.log('Login Page');
});
app.get('/signup',function(){
    res.sendFile('./Main/UserReg.html',{root:__dirname});
    console.log('sign up page');
})