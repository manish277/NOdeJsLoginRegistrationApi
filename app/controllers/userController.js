const { User } = require("../models/user");
var { authenticate } = require("../middleware/authenticate");
const _ = require("lodash");

//Controller for User
const UserController = {
    //Create a User
    register: function (req, res) {
        var body = _.pick(req.body, ["email", "password"]);
        var user = new User(body);

        user
            .save()
            .then(() => {
                return user.generateAuthToken();
            })
            .then(token => {
                res.header("x-auth", token).send(user);
            })
            .catch(e => {
                res.status(400).send(e);
            });
    },

    login: function (req, res) {
        var body = _.pick(req.body, ["email", "password"]);

        User.findByCredentials(body.email, body.password)
            .then(user => {
                return user.generateAuthToken().then(token => {
                    res.header("x-auth", token).send(user);
                });
            })
            .catch(e => {
                res.status(400).send("No user found");
            });

       
    },
    logout:authenticate, function(req,res){
        req.user.removeToken(req.token).then(() => {
            res.status(200).send();
          }, () => {
            res.status(400).send();
          });
        
    }
};
module.exports = UserController;
