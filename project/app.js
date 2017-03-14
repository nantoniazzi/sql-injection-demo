// { autofold
var express = require('express');
var bodyParser = require('body-parser');
var sqlite3 = require('sqlite3').verbose();

var app = express();
app.use(express.static('.'));
app.use(bodyParser.urlencoded({extended: true}));

var db = new sqlite3.Database(':memory:');
db.serialize(function() {
  db.run("CREATE TABLE user (username TEXT, password TEXT, name TEXT)");
  db.run("INSERT INTO user VALUES ('admin', 'admin123', 'Adam Baldwin')");
});
// }
app.post('/login', function (req, res) {
    var username = req.body.username; // a valid username is admin
    var password = req.body.password; // a valid password is admin123
    var query = "SELECT name FROM user where username = '" + username + "' and password = '" + password + "'";

    console.log("username: " + username);
    console.log("password: " + password);
    console.log('query: ' + query);
    
    db.get(query , function(err, row) {
        var html = '<html><body><pre>';
        
        if(err) {
            html += err;
        } else if (!row) {
            html += 'User not found';
        } else {
            html += 'Hello <b>' + row.name + '</b>';
        }
        
        html += '</pre><a href="/index.html">Go back to login</a></body></html>';

        res.send(html);
    });

});

app.listen(3000);

