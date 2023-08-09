from cryptography.hazmat.primitives import padding
from cryptography.hazmat.primitives.ciphers import Cipher, algorithms, modes
from cryptography.hazmat.backends import default_backend
from PIL import Image

# Read the encrypted image and IV from files
with open("encrypted_image.enc", "rb") as encrypted_file:
    encrypted_image_data = encrypted_file.read()

with open("iv.txt", "rb") as iv_file:
    iv = iv_file.read()

# Generate the AES key (you should use the same key as used for encryption)
key = b'\xbb\xd4\x88-\xc9\xdc\x04\xe3\x87\xefG\x13\xcf\xa2\xedG'

# Create an AES cipher in CBC mode with PKCS7 padding
cipher = Cipher(algorithms.AES(key), modes.CFB(iv), backend=default_backend())
decryptor = cipher.decryptor()

# Decrypt the encrypted image data
decrypted_image_data = decryptor.update(encrypted_image_data) + decryptor.finalize()

# Save the decrypted image to a file
with open("decrypted_image.jpg", "wb") as decrypted_file:
    decrypted_file.write(decrypted_image_data)

print("Image decrypted and saved as decrypted_image.jpg")
