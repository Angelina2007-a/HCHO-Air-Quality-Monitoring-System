// Analog HCHO Sensor with NodeMCU ESP8266

#define HCHO_PIN A0

void setup()
{
  Serial.begin(115200);
}

void loop()
{
  int adc = analogRead(HCHO_PIN);

  float voltage = adc * (3.3 / 1023.0);

  Serial.print("ADC = ");
  Serial.print(adc);

  Serial.print("   Voltage = ");
  Serial.print(voltage, 3);
  Serial.println(" V");

  delay(1000);
}