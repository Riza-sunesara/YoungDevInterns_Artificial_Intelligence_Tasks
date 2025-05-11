from flask import Flask, request, jsonify
from flask_cors import CORS
import os
import json
import numpy as np
from tensorflow.keras.models import load_model
from tensorflow.keras.preprocessing import image
from PIL import Image

app = Flask(__name__)
CORS(app, resources={r"/api/*": {"origins": "*"}})  # Allow cross-origin requests from React

# Load model and labels
model = load_model("fashion_cnn_model.h5")
with open("class_labels.json", "r") as f:
    class_labels = json.load(f)
class_labels = {i: label for i, label in enumerate(class_labels)}

# Weather mapping
weather_suggestions = {
    'summer': ['Tshirts', 'Shorts', 'Sandals', 'Caps', 'Handbags', 'Heels', 'Casual Shoes', 'Tops', 'Watches', 'Sunglasses', 'Kurtas'],
    'winter': ['Sweatshirts', 'Coats', 'Jeans', 'Casual Shoes', 'Sports Shoes', 'Handbags', 'Watches', 'Sweaters', 'Tops', 'Kurtas', 'Shirts'],
    'rainy': ['Rain Coat', 'Crocs', 'Handbags', 'Kurtas', 'Tops', 'Sports Shoes']
}

# API: Get list of categories
@app.route('/api/categories', methods=['GET'])
def get_categories():
    categories = sorted(os.listdir("static/images"))
    return jsonify({"categories": categories})

# API: Get images for a selected category
@app.route('/api/category/<category>', methods=['GET'])
def get_images_by_category(category):
    img_dir = f"static/images/{category}"
    if not os.path.exists(img_dir):
        return jsonify({"error": "Category not found"}), 404

    # Pagination setup
    page = int(request.args.get("page", 1))
    per_page = 10  # You can adjust this value
    start = (page - 1) * per_page
    end = start + per_page

    all_images = sorted(os.listdir(img_dir))  # Optional: sort for consistent order
    paginated_images = all_images[start:end]
    image_urls = [f"/static/images/{category}/{img}" for img in paginated_images]

    return jsonify({
        "images": image_urls,
        "total": len(all_images),
        "page": page,
        "per_page": per_page
    })

# API: Predict image category and weather compatibility
@app.route('/api/predict', methods=['POST'])
def predict():
    data = request.json
    category = data.get("category")
    image_name = data.get("image")
    weather = data.get("weather")

    if not all([category, image_name, weather]):
        return jsonify({"error": "Missing data"}), 400

    img_path = os.path.join("static", "images", category, image_name)
    if not os.path.exists(img_path):
        return jsonify({"error": "Image not found"}), 404

    try:
        img = Image.open(img_path).resize((128, 128))
        img_array = image.img_to_array(img) / 255.0
        img_array = np.expand_dims(img_array, axis=0)

        pred = model.predict(img_array)
        predicted_class = class_labels[np.argmax(pred)]
        is_wearable = predicted_class in weather_suggestions[weather.lower()]
        alternatives = weather_suggestions[weather.lower()]
    except Exception as e:
        return jsonify({"error": str(e)}), 500

    return jsonify({
        "predicted_class": predicted_class,
        "selected_image": f"/static/images/{category}/{image_name}",
        "is_wearable": "Yes" if is_wearable else "No",
        "weather": weather,
        "suggested_for_weather": alternatives
    })

if __name__ == "__main__":
    app.run()
