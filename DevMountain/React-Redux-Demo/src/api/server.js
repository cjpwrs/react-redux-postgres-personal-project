/**
 * Created by cjpowers on 6/25/16.
 */
var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var massive = require('massive');
var db = massive.connectSync({db : "testdb"});
//console.log(db.tables);
var app = express();

app.use(bodyParser.json());
app.use(cors());

var port = 3001;

var newProduct = ['glasses', 'Jewelry', 'I did', 'Finished Product', '2010-2016', 199.99, 10, 'http://images.clipartpanda.com/cookie-with-glasses-home_glasses.png', 1];
let newUser = ['cjpwrs', 'CJ', 'Powers', 'cjpwrs@gmail.com', '253-651-5971', 'password', '1234 Sunset Ave', '', 'Buena Vista', 'CA', '90310']
let shoppingcartitem = {
  "cartid": 1,
  "productid": 23,
  "quantity": 5
}
// db.dropTable(function(err, res){
//   console.log(res);
// })

// db.product(function(err, res){
//   console.log(res);
// });

// db.productInitializers(function(err, res){
//   console.log(res);
// });

// db.addProduct(newProduct, function(err, res){
//   if(err) console.log(err);
//   console.log(res);
// })

// db.getProducts(function(err, res){
//   console.log(res);
// });

// db.userTable(function(err, res) {
//   console.log(res);
// })

// db.addUser(newUser, function(err, res) {
//   console.log(res)
// });

// db.getUsers(function(err, res) {
//   console.log(res);
// });

//
// db.products.save(newProduct, function(err,updated){
//   console.log(err);
//   console.log(updated);
// });

// db.cartitems.save(shoppingcartitem, function(err, response){
//   console.log(err);
//   console.log(response);
//   if(err) return console.log(err);
//   // else return console.log(shoppingcartitem);
// })




app.post('/api/products', function(req, res) {
  delete req.body.id;
  console.log(req.body);
  db.products.save(req.body, function(err,updated){
    if(err) return res.json(err);
    else return res.json(updated);
  });
});

app.post('/api/user/register', function(req, res) {
  console.log('The new user ',req.body);
  //db is my connection to the database
  //users is the name of my table in the database
  db.users.save(req.body, function(err, response){
    if(!err) return res.json(req.body);
    else  return res.json(err)
  })
});

app.post('/api/cartcreate', function(req, res){
  console.log(req.body);
    db.shoppingcart.save({ownerid: req.body.userid}, function(err, response){
      if(err) console.log(err);
      else {
        db.shoppingcart.findOne({ownerid: req.body.userid}, function(err, cart){
          console.log(cart);
          req.body.cartid = cart.id;
          console.log(req.body);
          res.json(req.body);
        });
      }
    })
})

app.post('/api/cart', function(req, res) {
console.log(req.body);
  db.cartitems.save({cartid: req.body.cartid, productid:req.body.productid, quantity:req.body.quantity}, function(err, response){
    if(err) {
      console.log(err);
      return res.json(err);
    }
    else{
      db.shoppingcartquery(req.body.userid, function(err, response){
        console.log(response);
        return res.json(response);
      })
    }
  })
});

//user login
app.post('/api/user/authenticate', function(req, res){
  //console.log('This is the info that we received: ',req.body);
  db.users.findOne({username:req.body.username}, function(err, user){
    //console.log('this is the user that we found', user);
    if(err) return res.end(JSON.stringify(err));
    else {
      if(user.password === req.body.password) {
        console.log(user);
        res.end(JSON.stringify(user));
      }
      else res.end(JSON.stringify({"error": "Username or password is incorrect"}))
    }
  })
});

app.get('/api/shopper/products', function(req, res) {
  var category = req.query.category;
  console.log(category);
  if(req.query.category) {
    db.products.find({"category": category}, function (err, response) {
      //console.log(response);
      return res.json(response);
    })
  }else {
    db.products.find({}, function (err, response) {
      //console.log(response);
      return res.json(response);
    })
  }
});



app.get('/api/products/:id', function(req, res) {
  db.queryProducts(req.params.id, function(err, response){
    console.log(response);
    return res.json(response);
  });
});

app.get('/api/users', function(req, res){
  db.getUsers(function(err, response){
    //console.log(response);
    return res.json(response);
  })
});

app.get('/api/cart/:id', function(req, res){
  db.shoppingcartquery(req.params.id, function(err, response){
    console.log(response);
    return res.json(response);
  })
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
  console.log("Started server on port ", port);
});
