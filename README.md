
# Dynamic User Availability and Event Scheduling System



## Project Overview

The Dynamic User Availability and Event Scheduling System is a feature-rich full-stack web application that allows users to dynamically manage their availability and enables admins to efficiently schedule one-on-one or multi-participant sessions. Built using the MERN stack, it boasts a modern, intuitive interface alongside robust functionality for both users and admins. The application ensures seamless user experience while maintaining scalability and performance through streamlined deployment on Render and Vercel.


## Features

 - Dynamic Availability Management: Users can easily log in, set and update their availability for specific days or across the entire week, offering flexibility in real-time.
 - Admin Scheduling Interface: Admins can visualize user availability in a clean dashboard and efficiently schedule sessions, whether for individual users or groups.
 - Session Management: A comprehensive session management system allows users and admins to view, reschedule, or cancel upcoming sessions.
 - User-Centric UI/UX: Responsive, modern design built with React, Vite, and Bootstrap ensures a smooth, engaging user experience across devices.

 ## Technology Stack

 - Frontend: React, Bootstrap
- Backend: Node.js, Express
- Database: MongoDB
- Deployment: Vercel (Frontend), Render (Backend)

## Setup Instructions


## Frontend

#### 1.Clone the Repository:

```http
git clone https://github.com/your-username/your-repo.git
cd your-repo/frontend

```


#### 2.Install Dependencies:

```http
npm install
```
#### 3.Build the Application:

```http
npm run build

```
#### 4.Start the Development Server:

```http
npm start

```


The frontend will be available at http://localhost:3000.

 
## Backend

#### 1.Navigate to the Backend Directory:

```http
cd your-repo/backend


```


#### 2.Install Dependencies:

```http
npm install
```
#### 3.Set Up Environment Variables: Create a .env file in the backend directory with the following content:

```http
MONGO_URI=your_mongodb_connection_string
PORT=5000


```
#### 4.Start the Development Server:

```http
npm start

```


The backend will be available at http://localhost:5000.

## Deployment Instructions

### Deploy Backend to Render
#### 1.Create a Render Account:

Sign up at [Render.](https://render.com/)

#### 2.Create a New Web Service:

- Go to the [Render dashboard.](https://dashboard.render.com/)
- Click on "New" and select "Web Service."
- Connect your GitHub repository containing the backend code.
- Configure the build command as npm install and the start command as npm run start.
- Add environment variables such as MONGO_URI.
- Click "Create Web Service."

### Deploy Frontend to Vercel

#### 1.Create a Vercel Account:
Sign up at [Vercel.](https://vercel.com/)
#### 2.Create a New Project:
- Go to the [Vercel dashboard.](https://vercel.com/adisharmaaxs-projects)
- Click on "New Project" and select your GitHub repository containing the frontend code.
- Vercel will automatically detect your framework. Ensure that the build command is set to npm run build and the output directory is dist (or build).
- Click "Deploy" to launch your frontend on Vercel.
## MongoDB Compass Setup
#### 1.Download and Install MongoDB Compass:
Get it from the MongoDB Compass Downloads page.
#### 2.Connect to MongoDB:
- Open [MongoDB Compass.](https://www.mongodb.com/products/tools/compass)
- Click on "New Connection."
- Enter your MongoDB connection string.
- Click "Connect."


## Usage
#### For Users

- Log In: Use your email to log in on the home page.
- Set Availability: Select the days and times you're available using the user-friendly form.
#### For Admins

- View Availability: Navigate to the Admin Dashboard to view user availability.
- Schedule Sessions: Choose open slots to schedule one-on-one or multi-participant sessions.

## Contributing
Feel free to submit issues or pull requests on [GitHub.](https://github.com)

## License
This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgements
- React: A JavaScript library for building user interfaces.
- Express: A web application framework for Node.js.
- MongoDB: A NoSQL database used for data storage.
- Vercel: A platform for deploying frontend applications.
- Render: A platform for deploying backend applications.