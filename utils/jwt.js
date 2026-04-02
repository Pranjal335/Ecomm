const jwt = require('jsonwebtoken');

exports.generateToken = (id) => {
    return jwt.sign({id}, process.env.JSON_WEB_TOKEN, {expiredIn: "1h"});
};