# 👨‍💻 Expert Tasks  

This folder contains the **final level tasks** of my **YoungDev Intern – Artificial Intelligence Internship**.  
These tasks demonstrate advanced applications of AI/ML, including **recipe health analysis** and a **CNN-based outfit recommendation system**.  

---

## 📂 Task 01 – Recipe Health Analyzer 🍲  

**Objective:**  
To build a system that takes the **name of a dish** as input and predicts the **nutritional tags** associated with it.  

**Details:**  
- 📊 Dataset: [RecipeNLG Dataset](https://www.kaggle.com/datasets/paultimothymooney/recipenlg)  
- ⚙️ Process:  
  - Used `title`, `ingredients`, and `NER` columns.  
  - Designed a `get_tags()` function to assign dietary labels.  
  - Applied **LightGBM Model** for prediction.  
- 🥗 Output: Provides dietary and nutrition-based insights for a given recipe.  

---

## 📂 Task 02 & Task 03 – CNN-based Clothing & Weather Recommender 👕🌦️  

**Objective:**  
To implement a **deep learning model** and integrate it into a **website**, based on the **Figma design** created earlier.  

**Details:**  
- 📊 Dataset: [Fashion Product Images (Small)](https://www.kaggle.com/datasets/paramaggarwal/fashion-product-images-small)  
- 🧠 Model:  
  - Custom-built **CNN** from scratch.  
  - Includes **Dropout** & **Batch Normalization** layers for better generalization.  
- 🌦️ Functionality:  
  - Predicts **clothing/accessory categories**.  
  - Checks **weather suitability** of the item.  
  - Suggests **alternative outfit recommendations** if the predicted item isn’t suitable.  
- 🌐 Deployment:  
  - Integrated into a **React-based website** using the Figma design.  
  - Backend powered with **Express.js**.  

---

## ✅ Key Learnings
- Advanced **Deep Learning (CNNs)** for image classification.  
- **Practical AI Applications** in health and fashion domains.  
- End-to-end project execution: **Dataset → ML Model → Deployment**.  
