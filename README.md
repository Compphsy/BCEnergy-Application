<h1>Introduction</h1>

<p>In recent years, there has been a growing interest in the development of blockchain-based applications in various industries, including energy. Blockchain technology can help create a more transparent and secure energy trading platform that allows consumers and prosumers to buy and sell energy using smart contracts. As part of my dissertation an energy trading platform that will utilise blockchain and smar contracts will be created using hardware and software.</p>

<h1>Blockchain Energy-Application</h1>
<p>Blockchain Energy-Application is an Ethereum-based MERN stack energy trading platform that provides a decentralized and secure environment for energy trading. The platform allows consumers and prosumers to trade energy using smart contracts, which are executed automatically once the terms of the contract are met. 
The platform also includes a smart meter prototype, which can be used to monitor energy usage and track energy transactions. The smart meter prototype is connected to the mongDb until reconcilation of the usage data to the blockchain, which ensures the accuracy and transparency of the data collected.</p>

<p>The energy usage data is stored in the smart contract, which allows for real-time tracking of energy consumption and billing. This provides consumers and prosumers with a more accurate and transparent view of their energy usage, and eliminates the need for traditional energy billing methods.</p>

<h1>Features</h1>

<p>Blockchain Energy-Application offers several features, including:</p>
<ol>
  <li>Decentralized and secure energy trading platform</li>
  <li>Smart meter prototype for real-time monitoring of energy usage</li>
  <li>Automatic execution of smart contracts</li>
  <li>Real-time tracking of energy consumption and billing</li>
</ol>



<h2>Running the Application</h2>

To run the application, follow these steps:

1.Set up a .env file:
***************************************************************
<ol>
  <li>NODE_ENV = [development or production]</li>
  <li>port = [Port number for backend]</li>
  <li>MONGO_URI = [MongoDB Atlas or MongoDB Compass URI]</li>
  <li>JWT_SECRET = [Add secret key]</li>
  <li>JWT_COOKIE_EXPIRE = [set number of days before cookie expires]</li>
</ol>
***************************************************************

2. Start the backend server using "npm run server"

3. Start the frontend client using "npm run client"

4. Or start both using 'npm run dev'


<h2>Technologies Used:</h2>
<ol>
  <li>Ethereum</li>
  <li>React</li>
  <li>Node.js</li>
  <li>MongoDB</li>
  <li>Express</li>
  <li>Axios</li>
  <li>Toastify</li>
  <li>MetaMask</li>
  <li>Truffle ganache</li>
  <li>Remix IDE</li>
  <li>Aruino IDE</li>
  <li>VS Code</li>
</ol>
<h2>Contributing</h2>

If you would like to contribute to the project, please follow these steps:

Fork the repository

Make your changes

Submit a pull request


<h2>Roadmap</h2>

Add functionality so that the smar meter is recognised from the user "smart meter id" input unstead of mondogDB User collections id object.

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
