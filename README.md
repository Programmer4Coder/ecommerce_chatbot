# ecommerceChatbot:-
An intelligent, full-stack chatbot-based e-commerce search and exploration platform built with Django REST Framework and React.js.

Features:-
- Chatbot interface for intelligent product search
- Dynamic response to user queries with related products
- User authentication (JWT-based login/logout)
- Product display with name, image, price, and description
- Responsive UI: works on desktop, tablet, and mobile
- Mock inventory of 100+ products with categories
- Protected APIs requiring authentication
  
Tech Stack:-
  Frontend: React.js
  Backend: Django REST Framework
  Database: SQLite
  Authentication: JWT (SimpleJWT)

Backend Setup (Django):-
 cd ecommerce_chatbot
 python manage.py makemigrations
 python manage.py migrate
 python manage.py createsuperuser
 python manage.py runserver

Frontend Setup (React):-
 cd chatbot-frontend
 npm install
 npm start

Authentication:-
- POST /api/token/ - login and get access + refresh tokens
- Token stored in localStorage and attached to API requests
- APIs like /api/product/ and /api/chat/ are protected

Sample Query:-
  User types: "I'm looking for a watch"
  Chatbot replies: Found 5 products
  Product cards are displayed with image, name, description, price
