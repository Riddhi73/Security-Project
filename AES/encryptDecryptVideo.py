from cryptography.hazmat.primitives import padding
from cryptography.hazmat.primitives.ciphers import Cipher, algorithms, modes
from cryptography.hazmat.backends import default_backend
import os

def pad(data):
    block_size = 16
    padder = padding.PKCS7(block_size * 8).padder()
    return padder.update(data) + padder.finalize()

def unpad(padded_data):
    unpadder = padding.PKCS7(128).unpadder()
    return unpadder.update(padded_data) + unpadder.finalize()

def encrypt_video(input_path, output_path, key):
    with open(input_path, 'rb') as video_file:
        video_data = video_file.read()

    video_data = pad(video_data)

    # Generate a random IV (Initialization Vector)
    iv = os.urandom(16)

    # Create an AES cipher in CBC mode with PKCS7 padding
    cipher = Cipher(algorithms.AES(key), modes.CFB(iv), backend=default_backend())
    encryptor = cipher.encryptor()

    # Encrypt the video data
    encrypted_video = encryptor.update(video_data) + encryptor.finalize()

    # Save the encrypted video to a file along with the IV
    with open(output_path, 'wb') as encrypted_file:
        encrypted_file.write(iv + encrypted_video)

def decrypt_video(input_path, output_path, key):
    with open(input_path, 'rb') as encrypted_file:
        iv = encrypted_file.read(16)
        encrypted_video = encrypted_file.read()

    # Create an AES cipher in CBC mode with PKCS7 padding
    cipher = Cipher(algorithms.AES(key), modes.CFB(iv), backend=default_backend())
    decryptor = cipher.decryptor()

    # Decrypt the video data
    decrypted_video = unpad(decryptor.update(encrypted_video) + decryptor.finalize())

    # Save the decrypted video to a file
    with open(output_path, 'wb') as decrypted_file:
        decrypted_file.write(decrypted_video)

def main():
    key = os.urandom(16)  # Replace with your own 128-bit AES key

    input_video = input("enter the name of the video file: ")
    encrypted_video = 'encrypted_video.enc'
    

    encrypt_video(input_video, encrypted_video, key)
    print('Video encrypted and saved as encrypted_video.enc')

    decrypted_video = input("rename the video file: ")
    decrypt_video(encrypted_video, decrypted_video, key)
    print(f'Video decrypted and saved as {decrypted_video}.mp4')

if __name__ == '__main__':
    main()
