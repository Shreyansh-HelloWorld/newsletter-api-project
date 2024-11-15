const express = require("express");
const bodyParser = require("body-parser");
const https=require("https");
// const axios = require("axios");
const app = express();


app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static("public"));

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/signup.html");
});





app.post("/",function(req,res)
{
    const firstName=req.body.fname;
    const lastName=req.body.lname;
    const email=req.body.email;


    const data ={
members: [
    {
email_address: email,
 status: "subscribed", 
merge_fields:{
FNAME: firstName,
LNAME:lastName
}
}
] 
};
const jsonData = JSON.stringify(data);
const url="https://us10.api.mailchimp.com/3.0/lists/bd194994c0";
const options ={
    method:"POST",
    auth: "shrey2:353d7dfdac67112cf89fa83e5bd62e9a-us10"

}



const request=https.request(url,options,function(response)
{
    if (response.statusCode===200)
        {
            res.sendFile(__dirname+"/success.html");
        }
        else{
            res.sendFile(__dirname+"/failure.html");        }
    response.on("data",function(data){
        console.log(JSON.parse(data))
    })
})

request.write(jsonData);
request.end();

});



app.post("/failure",function(req,res){

    res.redirect("/");
});



app.listen(process.env.PORT || 3000, function () {
    console.log("Server 3000 is running");
});




//API KEY
//  353d7dfdac67112cf89fa83e5bd62e9a-us10

//List ID or Audience ID
//  bd194994c0
 