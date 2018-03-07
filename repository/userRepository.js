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

var createUser = function(username,password,name,email,phone,picture,sex,city,state,country,age){
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
            country: country,
            age: age
        }).then((response) => {
            resolve(response)}).catch((err) => {eject(err)});
    })
}

var loginUser = function(username){
        models.users.update(
            {isLogin : 1},
            {where:{username: username}}
        ).then((response) => {console.log(response)}).catch((err) => {console.log(err) })
}

var logoutUser = function(username){
   return new Promise((resolve,reject) => { models.users.update(
        {isLogin : 0},
        {where:{username: username}}
    ).then((response) => {
        resolve(response)
    }).catch((err) => {reject(err) })})
}

module.exports = {
    getUserByUserName: getUserByUserName,
    createUser: createUser,
    loginUser: loginUser,
    logoutUser: logoutUser
}