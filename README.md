# 🌿 HCHO Air Quality Monitoring System

A real-time **Formaldehyde (HCHO) Air Quality Monitoring System** built using **ESP8266**, **DFRobot HCHO Sensor**, **Firebase Realtime Database**, and a modern **HTML, CSS, JavaScript** dashboard with **Firebase Phone Authentication**.

---

## 📌 Project Overview

This project continuously monitors the concentration of **Formaldehyde (HCHO)** in the surrounding environment. The sensor data is transmitted from an ESP8266 to Firebase Realtime Database, where it is displayed on a responsive web dashboard in real time.

The dashboard provides:

- 📈 Live HCHO concentration graph
- 📊 Current HCHO value (ppm)
- 🟢 Air quality status
- 🕒 Last updated time
- 📋 Recent sensor readings
- 🔐 Secure login using Firebase Phone Authentication

---
## 📸 Project Screenshots

### 🔐 Login Page
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/893f8f1f-74a4-49f8-ae36-c5611da4310a" />


---

### 📊 Dashboard

<img width="1898" height="1077" alt="image" src="https://github.com/user-attachments/assets/1daf56a1-c754-4633-b05d-d6d43e802c1d" />


---

### 📈 Live HCHO Graph

![Live Graph](assets/live-graph.png)

---

### 🔥 Firebase Realtime Database

<img width="1851" height="935" alt="image" src="https://github.com/user-attachments/assets/64d6d393-f60e-40e7-9b5d-33876ec4b04e" />


---

### 🔌 Hardware Setup

![Hardware Setup](assets/hardware-setup.jpg)

---
## 🛠 Tech Stack

### Hardware
- ESP8266 NodeMCU
- DFRobot Gravity HCHO Sensor
- USB Power Supply

### Software
- HTML5
- CSS3
- JavaScript (ES6 Modules)
- Firebase Realtime Database
- Firebase Authentication
- Chart.js
- Arduino IDE

---

## 🚀 Features

- Real-time HCHO monitoring
- Live Firebase database updates
- Dynamic line chart using Chart.js
- Air quality classification
- Secure phone number login using OTP
- Responsive dashboard design
- Recent readings history
- Automatic dashboard refresh
- Logout functionality

---

## 📂 Project Structure

```
HCHO-Air-Quality-Monitoring/
│
├── index.html
├── login.html
├── script.js
├── login.js
├── style.css
├── firebase-configuration.js
│
├── README.md
│
└── Arduino/
    └── HCHO_ESP8266.ino
```

---

## 🔄 System Architecture

```
          DFRobot HCHO Sensor
                    │
                    ▼
              ESP8266 NodeMCU
                    │
            Wi-Fi Connection
                    │
                    ▼
      Firebase Realtime Database
                    │
                    ▼
      Firebase Authentication
                    │
                    ▼
        Web Dashboard (HTML/CSS/JS)
                    │
         Live Monitoring Dashboard
```

---

## 📡 Firebase Database Structure

```
Sensor
│
└── 1785136789
      │
      ├── HCHO : 0.015
      ├── Status : "Safe"
      └── Timestamp : 1785136789
```

---

## 📊 Dashboard

The dashboard displays:

- Current HCHO Level (ppm)
- Air Quality Status
- Last Updated Time
- Live HCHO Graph
- Recent Sensor Readings

---

## 🔐 Authentication

Firebase Phone Authentication is used for secure access.

Flow:

```
User
   │
   ▼
Login Page
   │
Enter Phone Number
   │
Receive OTP
   │
Verify OTP
   │
Dashboard Access
```

---

## ⚙️ Installation

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/HCHO-Air-Quality-Monitoring.git
```

### 2. Open the Project

Open the project using **Visual Studio Code**.

### 3. Configure Firebase

Update:

```
firebase-configuration.js
```

with your Firebase configuration.

### 4. Enable Firebase Authentication

Enable:

- Phone Authentication

### 5. Configure Realtime Database

Create the required database structure.

### 6. Upload ESP8266 Code

Upload the Arduino sketch using Arduino IDE.

### 7. Run the Project

Use **Live Server** in VS Code.

```
http://127.0.0.1:5500/login.html
```

---

## 📈 Air Quality Classification

| HCHO Concentration | Status |
|-------------------:|--------|
| < 0.08 ppm | 🟢 Safe |
| 0.08 – 0.30 ppm | 🟡 Moderate |
| > 0.30 ppm | 🔴 Unsafe |

---

## 📚 Libraries Used

### Arduino

- ESP8266WiFi
- Firebase ESP Client
- DFRobot HCHO Sensor Library

### Web

- Firebase JavaScript SDK
- Chart.js
- Font Awesome

---

## 🎯 Future Improvements

- Email notifications
- SMS alerts
- Historical analytics
- CSV/PDF report export
- Multiple sensor support
- Mobile application
- AQI prediction using Machine Learning

---

## 👩‍💻 Developed By

**Angelina Raj**

B.E. Computer Science and Engineering (AI & ML)

KGiSL Institute of Technology

---

## ⭐ If you found this project useful

Give this repository a ⭐ and feel free to contribute!
