from cryptography.hazmat.primitives import padding
from cryptography.hazmat.primitives.ciphers import Cipher, algorithms, modes
from cryptography.hazmat.backends import default_backend
import os
import sys

def pad(data):
    block_size = 16
    padder = padding.PKCS7(block_size * 8).padder()
    return padder.update(data) + padder.finalize()

def unpad(padded_data):
    unpadder = padding.PKCS7(128).unpadder()
    return unpadder.update(padded_data) + unpadder.finalize()

def encrypt_audio(input_path, output_path, key):
    with open(input_path, 'rb') as audio_file:
        audio_data = audio_file.read()

    audio_data = pad(audio_data)

    # Generate a random IV (Initialization Vector)
    iv = os.urandom(16)

    # Create an AES cipher in CBC mode with PKCS7 padding
    cipher = Cipher(algorithms.AES(key), modes.CFB(iv), backend=default_backend())
    encryptor = cipher.encryptor()

    # Encrypt the audio data
    encrypted_audio = encryptor.update(audio_data) + encryptor.finalize()

    # Save the encrypted audio to a file along with the IV
    with open(output_path, 'wb') as encrypted_file:
        encrypted_file.write(iv + encrypted_audio)

def decrypt_audio(input_path, output_path, key):
    with open(input_path, 'rb') as encrypted_file:
        iv = encrypted_file.read(16)
        encrypted_audio = encrypted_file.read()

    # Create an AES cipher in CBC mode with PKCS7 padding
    cipher = Cipher(algorithms.AES(key), modes.CFB(iv), backend=default_backend())
    decryptor = cipher.decryptor()

    # Decrypt the audio data
    decrypted_audio = unpad(decryptor.update(encrypted_audio) + decryptor.finalize())

    # Save the decrypted audio to a file
    with open(output_path, 'wb') as decrypted_file:
        decrypted_file.write(decrypted_audio)

def main():
    key = os.urandom(16)  # Replace with your own 128-bit AES key

    input_audio = input("enter the name of the audio file: ")
    encrypted_audio = 'encrypted_audio.enc'
    

    encrypt_audio(input_audio, encrypted_audio, key)
    print('Audio encrypted and saved as encrypted_audio.enc')

    decrypted_audio = input("rename your encrypted file: ")
    decrypt_audio(encrypted_audio, decrypted_audio, key)
    print(f'Audio decrypted and saved as {decrypted_audio}')

if __name__ == '__main__':
    main()
