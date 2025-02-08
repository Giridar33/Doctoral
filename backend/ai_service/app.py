from flask import Flask, request, jsonify
from flask_cors import CORS
from langchain_ollama import OllamaLLM
from langchain_core.prompts import ChatPromptTemplate
import logging

app = Flask(__name__)
CORS(app)

# Configure logging for better debugging
logging.basicConfig(level=logging.DEBUG)

# Initialize the LLM
try:
    llm = OllamaLLM(model="llama3.1")  # Ensure this model is available
    logging.info("Ollama model initialized successfully.")
except Exception as e:
    logging.error(f"Error initializing Ollama model: {str(e)}")
    llm = None

# Function to generate predictions
def predict_disease(symptoms):
    try:
        prompt = ChatPromptTemplate.from_template(
            "Given the symptoms: {symptoms}, what possible diseases could the patient have?"
        )
        
        formatted_prompt = prompt.format(symptoms=symptoms)
        response = llm.invoke(formatted_prompt) if llm else "LLM not available"

        return response
    except Exception as e:
        logging.error(f"Error in prediction: {str(e)}")
        return "Error generating response"
@app.route('/predict', methods=['POST'])
def predict():
    try:
        data = request.get_json()

        if not data:
            logging.error("No JSON data received")
            return jsonify({'error': 'Invalid request. Expected JSON data'}), 400

        symptoms = data.get("symptoms", "").strip()

        if not symptoms:
            logging.error("Symptoms field missing or empty")
            return jsonify({'error': 'Symptoms cannot be empty'}), 400

        logging.info(f"Received symptoms: {symptoms}")

        prediction = predict_disease(symptoms)

        if not prediction:
            logging.error("Prediction function returned empty response")
            return jsonify({'error': 'Failed to generate prediction'}), 500

        return jsonify({'prediction': prediction})
    
    except Exception as e:
        logging.error(f"Unexpected error: {str(e)}", exc_info=True)
        return jsonify({'error': 'Internal server error'}), 500


if __name__ == '__main__':
    app.run(port=5001, debug=True)
