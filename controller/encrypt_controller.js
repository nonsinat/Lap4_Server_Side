const {encryptedData,decryptedData,publicKey,privateKey} = require("../logic/generateKeypair")
var fs = require('fs')

const getEncryption = async function (req, res) {
    try {
      res.send({CipherText:encryptedData.toString('base64')})
      fs.writeFileSync("publicKey.pem", publicKey)
    } catch (error) {
      res.status(404).send({ message: "Task Not Found" });
    }
};

const getDecryption = async function (req,res){
    try {
       res.send({plainText:decryptedData.toString()})
       fs.writeFileSync("privateKey.pem", privateKey)
    } catch (error) {
        res.status(404).send({ message: "Not Found",});
    }
}
module.exports = { getEncryption,getDecryption };
