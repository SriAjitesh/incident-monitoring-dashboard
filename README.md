# Incident Monitoring Dashboard

A cloud-based real-time monitoring dashboard built using **React** and **Firebase Firestore**.

## 🌐 Features

- 📡 Logs external service requests (URL, status, latency, time)
- 🔥 Uses Firebase Firestore for real-time data updates
- 📊 Clean, responsive dashboard UI built with React
- 🟢 Works perfectly on free Firebase and Vercel plans
- 💬 Easy to extend with alerts, status highlights, or CSV exports

## 🛠️ Tech Stack

- **Frontend**: React, HTML/CSS
- **Database**: Firebase Firestore
- **Hosting**: Vercel

## 📁 Logs Schema (Firestore)
```json
{
  "url": "https://example.com",
  "status": 200,
  "latency": 123,
  "time": "2025-07-13T13:30:00.000Z"
}

