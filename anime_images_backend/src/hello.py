import base64
import os.path

from flask import Flask, request, send_file, url_for
from flask_cors import CORS

app = Flask(__name__,
            static_folder="src/images")
CORS(app)

from animeGAN.test import process_image


@app.route('/')
def hello_world():
    return 'Hello, Docker!'


@app.route('/hello')
def hello():
    return 'HI!'


@app.route('/image')
def image():
    if process_image():
        return "Image is ready!"
    else:
        return "Something went wrong"


images_input_dir = os.path.join(app.root_path, "images/input")
images_output_dir = os.path.join(app.root_path, "images/output")
animegan_model_path = os.path.join(app.root_path, "animeGAN/models/Hayao_64.onnx")


@app.route('/get')
def get_img():
    return url_for("images/input/japan.jpeg")


@app.route('/anime-image', methods=['GET', 'POST'])
def turn_image_to_anime():
    if request.method == 'POST':
        print('got file')
        print(images_input_dir)
        imagefile = request.files['file']
        imageSavePath = os.path.join(images_input_dir, imagefile.filename)
        imageOutputPath = os.path.join(images_output_dir, imagefile.filename)
        imagefile.save(imageSavePath)
        print(imagefile.content_type)

        print(imageSavePath)
        if process_image(imageSavePath, imageOutputPath, animegan_model_path):
            print("all good")
            with open(imageOutputPath, "rb") as img_file:
                data = base64.b64encode(img_file.read())
            return data
            # send_file(imageOutputPath, mimetype="image/jpeg")
        else:
            return "Sorry something went wrong..."


if __name__ == '__main__':
    app.debug = True
    app.run(host='0.0.0.0', port=8000)
