BCEnergy-Application

BCEnergy-Application is an Ethereum-based MERN stack energy trading platform that allows consumers and prosumers to buy and sell energy using smart contracts. The platform also includes a smart meter prototype, which can be used to monitor energy usage and track energy transactions.

Features

Buy and sell energy using smart contracts
Monitor energy usage with the smart meter prototype
View transaction history and energy usage data
Running the Application
To run the application, follow these steps:
Set up a .env file:
***************************************************************
NODE_ENV = [development or production]
port = [Port number for  backend]
MONGO_URI = [MongoDB Atlas or MongoDB Compass URI]
JWT_SECRET= [Add secret key]
JWT_COOKIE_EXPIRE = [set number of dasy before cocckie expires]
***************************************************************
Start the backend server using "npm run server"
Start the frontend client using "npm run client"
Start both using 'npm run dev'

Technologies Used

Ethereum
React
Node.js
MongoDB
Express
Axios
Toastify
MetaMask
Truffle ganache
Remix IDE
Aruino IDE
VS Code


Contributing

If you would like to contribute to the project, please follow these steps:

Fork the repository
Make your changes
Submit a pull request


Roadmap

Add support for additional energy sources (e.g. solar, wind)
Improve the user interface
Add support for more currencies

License

This project is licensed under the MIT License.
