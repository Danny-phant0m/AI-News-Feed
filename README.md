#AI-Powered News Feed
This project is an AI-powered news feed application that fetches the latest news articles, summarizes them using a text summarization model, and displays them on the frontend. Users can click on each article to read the full content on the original website.

Features
-Fetches news articles from NewsAPI.
-Uses AI (Hugging Face Transformers) for summarizing the news articles.
-Displays summaries of the news articles in a clean, responsive UI.
-Allows users to click on an article to read the full news on the original website.

Tech Stack
-Frontend: React, Material UI (MUI)
-Backend: Node.js, Express.js
-AI Model: Hugging Face Transformers (facebook/bart-large-cnn)
-API: NewsAPI for fetching the latest news articles

Installation
Prerequisites
-Node.js and Yarn installed on your machine.
-A NewsAPI API Key.
-Hugging Face API setup for text summarization.

Steps
-Clone the Repository
-cd ai-news-feed

Install Backend Dependencies
-cd backend
-yarn install

Install Frontend Dependencies
-cd frontend
-yarn install

Create Environment Variables: In the backend directory, create a .env file with your NewsAPI, Hugging Face keys and port:
-NEWS_API_KEY=your_news_api_key
-HUGGING_FACE_API_KEY=your_hugging_face_api_key
-PORT=portnumber

Run the Backend Server: In the backend folder, start the server:
-yarn dev
Run the Frontend: In the frontend folder, start the frontend:
-yarn start
Run the Frontend and Backend: In the backend folder:
-yarn dev-all

Usage
Once the app is running, you can open the frontend by navigating to http://localhost:3000 or the backend by http://localhost:5000/news in your browser. The app will fetch and summarize news articles, displaying them in a card format. Clicking on a card will take you to the full article.
