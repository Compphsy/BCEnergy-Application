#include <ESP8266WiFi.h>
#include <WiFiClient.h>
#include <ESP8266WebServer.h>
#include <ESP8266HTTPClient.h>
#include <NTPClient.h>
#include <WiFiUdp.h>
WiFiUDP ntpUDP;
NTPClient timeClient(ntpUDP);
 WiFiClient client;
const char* ssid = "*******************";
const char* password = "***************";
unsigned long Epoch_Time;
IPAddress serverIP(192, 168, 1, 102); // change to your laptop id
int serverPort = 3010; // add port numb
const String uid = "63c9e552ee911ffb95e804ae"; // used to idetify smart meter in MongoDB
float current_A = 0.8;
float busvoltage = 5.0;
float Ah = 8.9;
float shuntvoltage =1.6;
float batvoltage = 0.33;
#define ANALOG_PIN A0

void setup() {
    // Check if the serial connection is working properly.
    Serial.begin(9600);
    delay(10);

    // Connect to Wi-Fi
    WiFi.begin(ssid, password);
    while (WiFi.status() != WL_CONNECTED) {
        delay(500);
        Serial.println("Connecting to WiFi...");
    }

    Serial.println("Connected to WiFi");
}

void loop() {
    // Read the power value from A0
    int power = analogRead(ANALOG_PIN);
    // Calculate the time in seconds
  Epoch_Time = timeClient.getEpochTime();
  //get the length of the daa array
    if (client.connect(serverIP, serverPort)) {
    String postData = "{\"uid\":\"" + uid + "\",\"time\":\"" + String(Epoch_Time) + 
    "\",\"current_A\":\"" + String(current_A) +"\",\"busvoltage\":\"" + String(busvoltage) + 
    "\",\"shuntvoltage\":\"" + String(shuntvoltage) + "\",\"power\":\"" + String(power) + "\",\"batvoltage\":\"" + 
    String(batvoltage) + "\",\"Ah\":\"" + String(Ah) + "\"}";
    client.println("POST /data HTTP/1.1");
    client.println("Host: " + serverIP.toString() + ":" + String(serverPort));
    client.println("Content-Type: application/json");
    client.print("Content-Length: ");
    client.println(postData.length());
    client.println();
    client.println(postData);
    Serial.println("Data sent to server: " + postData);

  }
    // send data to server
    
}
