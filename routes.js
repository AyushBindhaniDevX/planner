var admin = require('firebase-admin');

var db = admin.database();
var fs = require('fs');

var routes = function(app) {
  
   app.get("/",function(req, res) {
     var obj = JSON.parse(fs.readFileSync('./calander.json', 'utf8'));
     console.log("claled")
         var ref = db.ref("flights")
    
         
    ref.on("value", function(snapshot) {
      console.log(snapshot.val());
           return res.send(snapshot.val())
    }, function (errorObject) {
      console.log("the read failed: " + errorObject.code);
      return res.send("the read failed: " + errorObject.code)
    });
     

     
   });
  
}

module.exports = routes;