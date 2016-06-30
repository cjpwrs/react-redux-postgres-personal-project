/**
 * Created by cjpowers on 6/25/16.
 */
var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var massive = require('massive');
var db = massive.connectSync({db : "testdb"});
//console.log(db);
var app = express();
app.use(bodyParser.json());
app.use(cors());

var port = 3001;

var newProduct = ['glasses', 'Jewelry', 'I did', 'Finished Product', '2010-2016', 199.99, 10, 'http://images.clipartpanda.com/cookie-with-glasses-home_glasses.png'];
let newUser = ['cjpwrs', 'CJ', 'Powers', 'cjpwrs@gmail.com', '253-651-5971', 'password', '1234 Sunset Ave', '', 'Buena Vista', 'CA', '90310']

// db.dropTable(function(err, res){
//   console.log(res);
// })

// db.productTable(function(err, res){
//   console.log(res);
// })

// db.userTable(function(err, res) {
//   console.log(res);
// })

// db.addProduct(newProduct, function(err, res){
//   if(err) console.log(err);
//   console.log(res);
// })

// db.getProducts(function(err, res){
//   console.log(res);
// });

// db.addUser(newUser, function(err, res) {
//   console.log(res)
// });

// db.getUsers(function(err, res) {
//   console.log(res);
// });




app.post('/api/products', function(req, res) {
  //console.log(req);
  console.log(req.body);
  delete req.body.id;
  console.log(req.body);
  db.products.save(req.body, function(err,updated){
    if(err) return res.json(err);
    else return res.json(updated);
  });
  // db.addProduct(propsStr, valsStr, function(err, r){
  //   if(!err){
  //     return res.json(req.body);
  //   }
  //   else {
  //     return res.json(err)
  //   }
  // })
});

app.post('/api/users', function(req, res) {
  console.log(req.body);
  db.addUser(newUser, function(err, response){
    if(!err) return res.json(err);
    else  return res.json(req.body)
  })
})

app.get('/api/products', function(req, res) {
  db.getProducts(function(err, response){
    console.log(response);
    return res.json(response);
  });
});


app.delete('/api/products', function(req, res) {
  console.log(req.body);
  let id = req.body.id;
  db.deleteProduct(id, function(err, response){
    console.log(response);
    return res.end(JSON.stringify(req.body));
  })
});

app.put('/api/products', function(req, res) {
  db.products.save(req.body, function(err,updated){
    if(err) return res.json(err);
    else return res.json(updated);
  });
});

app.listen(port, function() {
  console.log("Started server on port", port);
});
