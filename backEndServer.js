const express = require("express");
const bodyParser = require("body-parser");
const cors = require('cors');

const mockdb = require("./mockDB");


var app = express();
app.use(cors());
router = express.Router();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/api', router);


function begin() {
    app.listen(4000, () => {
        console.log('Server started');
    });
}

module.exports = {
    begin
}

// Add all routes here
router.route('/test')
    .get((req, res) =>{
        var userAuth = false;
        var userdetails = mockdb.getUser("ram");
        if(userdetails !== null)
        {
            if(userdetails.password === "ram12")
            {
                userAuth = true;
            }
        }
        
        res.send({status : userAuth});
	})
	.post((req, res) => {
        res.send({msg: "Hello from Test POST"});
    })


    router.route('/user')
    .post((req, res) =>{
        var username = req.body.username;
        var password = req.body.password;
        var userdetails = mockdb.getUser(username);
        if(userdetails !== null)
        {
            if(userdetails.password === password)
            {
                res.send({status : {
                                userid: userdetails.userid,
                                username: userdetails.username
                }});
            }
        }
        
        res.send({status : false});
    });
    

    router.route('/foodItems')
    .get((req, res) =>{
        var foodDetails = mockdb.getFoodItems();
        
        res.send({Data : foodDetails});
    });

    router.route('/foodItem/:id')
    .get((req, res) =>{
        var foodDetails = mockdb.getFoodItem(req.params.id);
        
        res.send({Data : foodDetails});
    });

    router.route('/orders/:userId')
    .get((req, res) =>{
        var orderDetails = mockdb.getOrder(req.params.userId);
        
        res.send({Data : orderDetails});
    });

    router.route('/orders')
    .post((req, res) =>{
        mockdb.addOrder(req.body);
        res.send({status : 'success'});
    })

    
