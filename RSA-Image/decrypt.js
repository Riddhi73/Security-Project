const fs = require('fs');
const NodeRSA = require('node-rsa');

const privateKeyPem = fs.readFileSync('private.pem'); // Replace with your private key file
const key = new NodeRSA(privateKeyPem, 'pkcs1-private-pem');

// Read the encrypted image file as binary data
const encryptedImageBuffer = fs.readFileSync('encryptedImage.enc');

// Decrypt the encrypted image data using the private key
const decryptedImageBuffer = key.decrypt(encryptedImageBuffer, 'buffer');

// Save the decrypted image to a file
fs.writeFileSync('decryptedImage.jpg', decryptedImageBuffer);

console.log('Image decrypted and saved as decryptedImage.jpg');
