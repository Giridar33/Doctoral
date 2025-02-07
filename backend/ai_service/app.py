from flask import Flask, request, jsonify
from flask_cors import CORS
from transformers import pipeline
import torch

app = Flask(__name__)
CORS(app)

# Initialize AI models
try:
    # Use valid Hugging Face models or local paths
    disease_predictor = pipeline("text-classification", model="distilbert-base-uncased")
    medication_recommender = pipeline("text-classification", model="distilbert-base-uncased")
except Exception as e:
    print(f"Error loading models: {e}")
    # Fallback to dummy predictions for development
    disease_predictor = None
    medication_recommender = None

@app.route('/predict', methods=['POST'])
def predict_disease():
    try:
        data = request.json
        symptoms = data.get('symptoms', '')
        
        if disease_predictor:
            prediction = disease_predictor(symptoms)
            return jsonify(prediction)
        else:
            # Dummy response for development
            return jsonify({
                'disease': 'Sample Disease',
                'confidence': 0.85
            })
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@app.route('/medications', methods=['POST'])
def recommend_medications():
    try:
        data = request.json
        condition = data.get('condition', '')
        patient_data = data.get('patientData', {})
        
        if medication_recommender:
            recommendations = medication_recommender(condition)
            return jsonify(recommendations)
        else:
            # Dummy response for development
            return jsonify({
                'medications': ['Med A', 'Med B'],
                'dosage': '100mg daily',
                'confidence': 0.9
            })
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@app.route('/risk-score', methods=['POST'])
def calculate_risk_score():
    try:
        data = request.json
        patient_data = data.get('patientData', {})
        
        # Calculate risk score based on patient data
        # This is a simplified example
        risk_factors = len(patient_data.get('diseaseHistory', []))
        age_factor = patient_data.get('age', 0) / 100
        
        risk_score = min((risk_factors * 0.2 + age_factor) * 100, 100)
        
        return jsonify({
            'riskScore': risk_score,
            'riskLevel': 'High' if risk_score > 70 else 'Medium' if risk_score > 30 else 'Low',
            'factors': ['Age', 'Disease History']
        })
    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(port=5001, debug=True)