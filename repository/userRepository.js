var models  = require('../models');

var getUserByUserName = function(name){
    return new Promise((resolve,reject) => {
        models.users.findAll({where :{"username":name}})
        .then((successResponse)=>{
           resolve(successResponse); 
        })
        .catch((err)=>{
            reject(err);
        })
    });
}

var createUser = function(username,password,name,email,phone,picture,sex,city,state,country){
    return new Promise((resolve,reject) => {
        models.users.create({
            username: username,
            password: password,
            phone: phone,
            name: name,
            email: email,
            picture_link: picture,
            sex: sex,
            city: city,
            state: state,
            country: country
        }).then((response) => {
            console.log(response.id);
            resolve(response)}).catch((err) => reject(err));
    })
}

module.exports = {
    getUserByUserName: getUserByUserName,
    createUser: createUser
}