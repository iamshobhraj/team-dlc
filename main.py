from flask import Flask, render_template, request, jsonify
import numpy as np
from deepface import DeepFace
import cv2
import os

app = Flask(__name__)

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/verify", methods=["POST"])
def verify():
    frame = request.files["frame"]

    frame_cv2 = cv2.imdecode(np.frombuffer(frame.read(), np.uint8), cv2.IMREAD_COLOR)
    frame_np = np.array(frame_cv2)

    json_response = {"verified": False, "region": None,"name":None}####member = {"verified": False, "region": None,"name":None}
    img_path = "C:\\Users\\iamsh\\OneDrive\\Desktop\\DLC-main\\UI\\public\\uploads"

    for path in os.listdir(img_path):

        target_image_path = os.path.join(img_path,path)
        target_np = np.array(cv2.imread(target_image_path))
        target_name = f"{path[:-4]}"
        print(target_np.shape,frame_np.shape)
        faces = DeepFace.extract_faces(frame_np, enforce_detection=False)

        for face_dict in faces:
            face = face_dict['face']
            region = face_dict['facial_area']
            
            verified = DeepFace.verify(target_np, face, enforce_detection=False)

            if verified['verified']:
                json_response["verified"] = True
                json_response["region"] = region
                json_response["name"] = target_name
                print(target_name)
                return jsonify(json_response)

    return jsonify(json_response)

if __name__ == "__main__":
    app.run(debug=True)
