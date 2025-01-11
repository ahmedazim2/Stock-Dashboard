# Stock Project

This project is a stock analysis and dashboard application that includes both a backend and a frontend. The backend is built with FastAPI and handles data processing and sentiment analysis. The frontend is built with React and provides a user interface for interacting with the stock data.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Backend Setup](#backend-setup)
- [Frontend Setup](#frontend-setup)


## Features

- Sentiment analysis of stock-related text using a pre-trained model
- Interactive dashboard for visualizing stock data
- RESTful API for data processing and analysis

## Installation

### Prerequisites

- Python 3.8 or higher
- Node.js and npm
- Git

### Clone the Repository



```sh
git clone https://github.com/ahmedazim2/Stock-Dashboard.git
cd Stock-Dashboard
```


## Backend Setup
1. Go to the Backend Directory: 
```sh
cd backend
```
2. Create a virtual environment:
```sh 
python -m venv venv
source venv/bin/activate 
```
3. Install Dependencies:
```sh
pip install -r requirements.txt
```
## Frontend Setup
1. Navigate to the Frontend Directory:
```sh
cd ../frontend
```
2. Install Dependencies
3. Set up Environment:
    - Go to Finnhub.io and create an account to obtain API key
    - Go to Gemini AI and create an API key for your account
    - Create an .env file and add the following:
        - VITE_API_KEY = your_finnhub_api
        - VITE_GEMINI_API_KEY = your_gemini_api




