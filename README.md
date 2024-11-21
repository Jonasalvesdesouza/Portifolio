# React + Vite

# Production Portfolio

## Description

This is my personal portfolio, currently in production. The objective is to display my projects, articles, professional and academic information. The portfolio has a front-end developed with React and Vite, and a back-end with a dashboard for managing posts and user information.

## Project Status

### Current Phase

Currently, I am in the final stage of development, focusing on the following points:

- **Responsiveness Testing**: Adjusting and refining responsiveness to ensure the site works well on different devices and screen sizes.
- **Implementation of Features**: Finalizing the implementation of features on the dashboard, such as creating, editing and deleting posts, as well as adjustments to user information.

## Planned Features

- **Full Header Responsiveness**: The header will be fully responsive and will adapt to different screen sizes.
- **Complete Dashboard**: Tools to manage article and project posts, as well as professional and academic information.
- **User Authentication**: Secure login and registration system using JWT.

## Technologies Used

- **Front-end**: React, Vite, SCSS
- **Backend**: Node.js, Express
- **Database**: PostgreSQL
- **Authentication**: JWT (JSON Web Token)
- **State Management**: Context API, Hooks
- **Other Libraries**: React Icons, Axios

## Installation and Use

### Prerequisites

- Node.js installed
- PostgreSQL configured

### Installation Steps

1. Clone the repository:

```sh
git clone https://github.com/Jonasalvesdesouza/Portifolio.git

```

2. CD Portfolio/Client

3. Install Client dependencies:

npm install

4. Install Server dependencies:
   CD Portfolio/Server
   npm install

### Environment Setting

1. Create a .env file in the server directory with the following environment variables:

DATABASE_URL=your_postgresql_connection_string
JWT_SECRET=your_jwt_secret

### Running the Project

1. Launch the backend
   CD Portfolio/BackEnd/Prototype
   npm run dev

2. Launch the frontend:
   cd Portifolio/FrontEnd/Prototype
   npm run dev

### Accessing the Dashboard

1. Navigate to http://localhost:3000/dashboard to access the post and user information management dashboard.

Responsiveness.

I'm currently testing and refining the site's responsiveness to ensure a great user experience across different devices. Here's an overview of the device widths I'm considering:

Device Width (in px)
Small Mobile ≤ 320 px
Mobile Medium 321 px - 375 px
Mobile Large 376 px - 425 px
Tablets 426 px - 768 px
Laptops 769 px - 1024 px
Desktops 1025 px - 1440 px
Large Monitors ≥ 1441 px

### Contribution

Feel free to contribute to this project. To do this, follow the steps below:

1. Fork the project
2. Create a branch for your feature (git checkout -b feature/nova-feature)
3. Commit your changes (git commit -m 'Add new feature')
4. Push to the branch (git push origin feature/nova-feature)
5. Open a Pull Request

### Contact

Jonas Alves de Souza - LinkedIn: https://www.linkedin.com/in/jonas-alves-de-souza-61540b114/
