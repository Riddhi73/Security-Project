const fs = require('fs');
const NodeRSA = require('node-rsa');

const key = new NodeRSA({ b: 512 });

// Read the image file
const imageBuffer = fs.readFileSync('input.jpg');

// Encrypt the image data using the public key
const encryptedImageBuffer = key.encrypt(imageBuffer, 'buffer');

// Save the encrypted image to a file
fs.writeFileSync('encryptedImage.enc', encryptedImageBuffer);

console.log('Image encrypted and saved as encryptedImage.enc');
