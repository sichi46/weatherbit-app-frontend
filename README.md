# Weather Application 🌦️

click here for <a href="https://weatherbit-app-frontend.vercel.app/">demo</a>

### Table of Contents

1. Project Overview
2. Features
3. Technologies Used
4. Installation and Setup
5. Usage
6. API Key Setup
7. Search History Persistence

## 1. Project Overview

This is a full-stack Weather Application that provides users with real-time weather information and a 16-day weather forecast for any city, powered by the Weatherbit API. The app allows users to search for a city, view current weather conditions, and check the upcoming forecast. It also keeps track of the last five searches for easy access.

## 2. Features

Current Weather Display: Provides real-time data including temperature, weather description, wind speed, humidity, air quality index, etc.
16-day Forecast: Displays a detailed weather forecast for the upcoming 16 days.
Search History: Tracks and displays the last five searches.
Responsive Design: Works seamlessly on both desktop and mobile devices.
Error Handling: Displays meaningful error messages if a city is not found or the API call fails.

## 3. Technologies Used

### Frontend

React.js: Component-based UI framework.<br>
Axios: For making HTTP requests.<br>
Tailwind CSS: For responsive design and styling.<br>
React Query: For caching and data fetching.<br>
ShadCN UI: For accessible UI components (Dialog, Toast).<br>
Lucide React: For icons.<br>

### Backend

Node.js: Backend environment.<br>
Express.js: Backend framework to handle API routes.<br>
Axios: For fetching data from the Weatherbit API.<br>
CORS: Middleware to enable Cross-Origin Resource Sharing.<br>
Morgan: HTTP request logger middleware for Node.js.<br>
dotenv: For loading environment variables from a .env file.<br>
TypeScript: Superset of JavaScript for type safety.<br>

### Database / Persistence

LocalStorage: Used for storing search history.

## 4. Installation and Setup

To run this project locally, follow these steps:

- create a folder where you intend to clone the project

- clone both the frontend and backend and install the required dependencies<b>

```bash

git clone https://github.com/sichi46/weatherbit-app-frontend.git
cd weatherbit-app-frontend
npm i
```

```bash

git clone https://github.com/sichi46/weatherbit-app-server.git
cd weatherbit-app-server
npm install
```

- run both your application and server <br>

-- in your front end folder

```bash
npm run dev
```

-- in your backend folder

```bash

npm run dev
```

## 5. API Key Setup

To use the Weatherbit API, you need an API key. Follow these steps to set it up:

Get the API Key:

Go to the Weatherbit API and sign up for an account.
Once you have an API key, copy it.
Setup API Key in .env file:

In the project’s server directory, create a file called .env:
bash

```plaintext
BASE_URL=https://api.weatherbit.io/v2.0
API_KEY = Your_API_key here
```

## 6. Usage

Open the app in your browser (usually at http://localhost:3000).
Enter the city and country code (e.g., Lusaka, ZM).
Click Search to fetch the current weather and forecast.
The app will display real-time weather data and the 16-day forecast.
Recent searches will be saved and displayed below the search bar.

## 7. Search History Persistence

The app stores the last 5 city searches in localStorage for easy revisiting. To access your search history:

Enter and search for a city.
The city is automatically added to the search history.
You can click on any previously searched city to retrieve its weather data.
