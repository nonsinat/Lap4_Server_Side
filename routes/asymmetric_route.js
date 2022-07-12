const express = require("express");
const routers = express.Router();
const {getEncryption,getDecryption} = require("../controller/encrypt_controller")

routers.route("/encrypt").get(getEncryption)
routers.route("/decrypt").get(getDecryption)

module.exports = routers
