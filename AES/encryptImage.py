from cryptography.hazmat.primitives import padding
from cryptography.hazmat.primitives.ciphers import Cipher, algorithms, modes
from cryptography.hazmat.backends import default_backend
from PIL import Image
import os
import sys

# Read the image as bytes
image_path = input("enter the name of the image file: ")
with open(image_path, "rb") as image_file:
    image_data = image_file.read()

# Generate a random 128-bit AES key
key = os.urandom(16)
print(key)

# Generate a random IV (Initialization Vector)
iv = os.urandom(16)

# Create an AES cipher in CBC mode with PKCS7 padding
cipher = Cipher(algorithms.AES(key), modes.CFB(iv), backend=default_backend())
encryptor = cipher.encryptor()

# Encrypt the image data
encrypted_image_data = encryptor.update(image_data) + encryptor.finalize()

# Save the encrypted image to a file
with open("encrypted_image.enc", "wb") as encrypted_file:
    encrypted_file.write(encrypted_image_data)

# Save the IV to a file
with open("iv.txt", "wb") as iv_file:
    iv_file.write(iv)

print("Image encrypted and saved as encrypted_image.enc")
print("IV saved as iv.txt")
