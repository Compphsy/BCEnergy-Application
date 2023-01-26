#include <Wire.h>
#include "Adafruit_INA219.h"
#include <ESP8266WiFi.h>
#include <WiFiClient.h>
#include <ESP8266WebServer.h>
#include <NTPClient.h>
#include <WiFiUdp.h>
// Create an INA219 object
Adafruit_INA219 ina219;

// Define NTP Client
WiFiUDP ntpUDP;
NTPClient timeClient(ntpUDP, "pool.ntp.org");

// Variable to hold current epoch timestamp
unsigned long Epoch_Time; 


// Get_Epoch_Time() Function that gets current epoch time
unsigned long Get_Epoch_Time() {
  timeClient.update();
  unsigned long now = timeClient.getEpochTime();
  return now;
}
// Set the smart meter id
String uid = "";

// Set the Wi-Fi credentials
const char* ssid = "*******************";
const char* password = "***********************";

// Set the server IP and port, replace XXX with your computer ipconfig
IPAddress serverIP(192, 168, 1, XXX);
int serverPort = 3010;

// Create a WiFiClient object
WiFiClient client;

void setup() {
  // Start the serial communication
  Serial.begin(9600);
  Epoch_Time = Get_Epoch_Time();

  // Connect to Wi-Fi
  WiFi.begin(ssid, password);
  while (WiFi.status() != WL_CONNECTED) {
    delay(1000);
    Serial.println("Connecting to WiFi...");
  }
  Serial.println("Connected to WiFi");

  // Initialize the INA219 sensor
  ina219.begin();

  // Set the INA219 sensor to the highest resolution
  ina219.setCalibration_32V_2A();
}

void loop() {
  // Read the voltage and current sensor readings
  float voltage = ina219.getBusVoltage_V();
  float current = ina219.getCurrent_mA();
  current = 0.1;
  Epoch_Time = Get_Epoch_Time();
  // Calculate the power
  float power = voltage * current;
  // Get the time in epoch
  unsigned long epoch = timeClient.getEpochTime();
  Serial.print(epoch);
  // Send the data to the server
if (client.connect(serverIP, serverPort)) {
    String postData = "uid=" + uid + "&time=" + String(Epoch_Time) + "&voltage=" + String(voltage) + "&current=" + String(current) + "&power=" + String(power);
    client.println("POST /data HTTP/1.1");
    client.println("Host: 192.168.1.102:3000");
    client.println("Content-Type: application/x-www-form-urlencoded");
    client.print("Content-Length: ");
    client.println(postData.length());
    client.println();
    client.println(postData);
    Serial.println("Data sent to server: " + postData);
}

  // Wait for 1 second before taking the next reading
  delay(1000);
}
