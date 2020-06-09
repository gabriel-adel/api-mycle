
const Sequelize = require('sequelize');
const db = require('../config/con');



var Person = db.define('person', {
    first_name: Sequelize.STRING,
    last_name: Sequelize.STRING
});

var User = db.define('user', {});

Person.hasOne(User);

db.sync({ force: true })
            .then(() =>{
                Person.create({ first_name: 'Markus', last_name: 'Hedlund' }).then((person) => {
                    User.create().then((user) => {
                         person.setUser(user);
                    });
                });
            });
