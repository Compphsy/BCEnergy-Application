<h1>BCEnergy-Application</h1>

BCEnergy-Application is an Ethereum-based MERN stack energy trading platform that allows consumers and prosumers to buy and sell energy using smart contracts. The platform also includes a smart meter prototype, which can be used to monitor energy usage and track energy transactions.

  <h2>Features</h2>

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

<h2>Technologies Used</h2>

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


<h2>Contributing</h2>

If you would like to contribute to the project, please follow these steps:

Fork the repository

Make your changes

Submit a pull request


<h2>Roadmap</h2>

Add functionality so that the smar meter is recognised from the user "smart meter id" input unstead of mondogDB User collections id object

Add support for energy generation, distribution and transmission.

Improve the user interface

Add support for more currencies

<h2>License</h2>

This project is licensed under the MIT License.


<h1>Smart Meter Prototype</h1>

<h2>Hardware Setup:</h2>

1. Connect the INA219 power sensor to the ESP8266 dev board as shown in the schematic diagram provided in the Smart Meter Prototype folder.
2. Connect the ESP8266 dev board to your computer using a USB cable.

<h2>Software Setup:</h2>

1. Open the Arduino IDE on your computer.
2. Select the correct board and port from the Tools menu.
3. Open the ConsumerSmartMeter.ino or the ProsumerSmartMeter.ino sketch from the Smart Meter Prototype folder.
4. Update the variables in the sketch to match your network settings and your BCEnergy-Application's IP address.
5. Copy the users objectID from the MongoDB Users ccollection to the UUID in the sketch.
6. Open the Serial Monitor in the Arduino IDE to view the output from the ESP8266 dev board.

<h2>Integrating with BCEnergy-Application:</h2>

1. When the smart meter prototype is set up and connected to the network, open the BCEnergy-Application.
6. The application will now display the real-time energy usage data from the smart meter prototype.
