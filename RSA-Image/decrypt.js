const fs = require('fs');
const NodeRSA = require('node-rsa');

const key = new NodeRSA({ b: 512 });

// Read the encrypted image file
const encryptedImageBuffer = fs.readFileSync('encryptedImage.enc');

// Decrypt the encrypted image data using the private key
const decryptedImageBuffer = key.decrypt(encryptedImageBuffer, 'buffer');

// Save the decrypted image to a file
fs.writeFileSync('decryptedImage.jpg', decryptedImageBuffer);

console.log('Image decrypted and saved as decryptedImage.jpg');
