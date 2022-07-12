const crypto = require("crypto");
const nodeRSA = require('node-rsa')
// const { publicKey, privateKey } = crypto.generateKeyPairSync("rsa",{modulusLength: 2048,});


const data = 'Hello world Asymmetric'
const key = new nodeRSA().generateKeyPair();
const publicKey = key.exportKey("pkcs8-public-pem");
const privateKey = key.exportKey("pkcs1-pem");

const encryptedData = crypto.publicEncrypt(
    {
      key: publicKey,
      padding: crypto.constants.RSA_PKCS1_OAEP_PADDING,
      oaepHash: "sha256",
    },
    Buffer.from(data),
);

const decryptedData = crypto.privateDecrypt(
    {
      key: privateKey,
      padding: crypto.constants.RSA_PKCS1_OAEP_PADDING,
      oaepHash: "sha256",
    },
    encryptedData,
  );

module.exports = {encryptedData,decryptedData,publicKey,privateKey}