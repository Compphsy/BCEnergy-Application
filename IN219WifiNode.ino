#include <Wire.h>
#include <Adafruit_INA219.h>
#include <WiFiClient.h>
#include <NTPClient.h>
#include <WiFiUdp.h>
WiFiUDP ntpUDP;
NTPClient timeClient(ntpUDP);
// INA219 library
Adafruit_INA219 ina219;
// WiFi setup
const char* ssid = "Gates-of-Hell";
const char* password = "Iusedtohatefacebook1";
// Set the server IP and port
IPAddress serverIP(192, 168, 1, 102);
int serverPort = 3010;
WiFiClient client;
// Variables
float busvoltage = 0;
float shuntvoltage = 0;
float batvoltage = 0;
float current_A = 0;
float power = 0;
float Ah = 0;
unsigned long tick = 0;
unsigned long lastread = 0;
unsigned long previousMillisReadData = 0;
unsigned long previousMillisDisplay = 0;
// Interval for read and display data
unsigned long intervalReadData = 5000;
unsigned long intervalDisplay = 10000;
// LED blink
bool led = false;
// UID
const char* uid = "63c9e50eee911ffb95e804ab";
void setup() {
    // start serial
    Serial.begin(9600);
    // setup ina219
    ina219.begin();
    ina219.setCalibration_32V_2A();
    WiFi.begin(ssid, password);
    while (WiFi.status() != WL_CONNECTED) {
        delay(1000);
        Serial.println("Connecting to WiFi...");
    }
    // start WiFi
    Serial.println("WiFi connected");
    // connect to server
    if (client.connect(serverIP, serverPort)) {
        Serial.println("Connected to server");
    } else {
        Serial.println("Connection to server failed failed");
    }
    timeClient.begin();
    // setup led
    pinMode(13, OUTPUT);
}

void loop() {
  // check if connected to server
  timeClient.update();
  // check if it's time to read data
  if (millis() - previousMillisReadData >= intervalReadData) {
    previousMillisReadData = millis();
    // read ina219 data
    busvoltage = ina219.getBusVoltage_V();
    shuntvoltage = ina219.getShuntVoltaage_mV();
    current_A = ina219.getCurrent_mA();
    power = ina219.getPower_mW();
    // calculate battery voltage and Ah
    batvoltage = busvoltage + (shuntvoltage / 1000);
    Ah = Ah + (current_A / 3600);
    // create json data
    if (client.connect(serverIP, serverPort)) {
    String postData = "{\"uid\":\"" + String(uid) + 
    "\",\"time\":\"" + timeClient.getFormattedTime()  + "\",\"current_A\":\"" 
    + String(current_A) +"\",\"busvoltage\":\"" + String(busvoltage) + 
    "\",\"shuntvoltage\":\"" + String(shuntvoltage) + "\",\"power\":\"" 
    + String(power) + "\",\"batvoltage\":\"" + String(batvoltage) 
    + "\",\"Ah\":\"" + String(Ah) + "\"}";
    client.println("POST /data HTTP/1.1");
    client.println("Host: 192.168.1.102:3000");
    client.println("Content-Type: application/json");
    client.print("Content-Length: ");
    client.println(postData.length());
    client.println();
    client.println(postData);
    Serial.println("Data sent to server: " + postData);
    // blink led
    digitalWrite(13, led);
    led = !led;
    } else {
      Serial.println("Connection to server failed");
    }
  }
    // send data to server
  }
