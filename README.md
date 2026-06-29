# EcoFlow — Full-Stack AI Ecosystem

An AI-powered full-stack supply chain synchronization engine designed to detect industrial resource waste channels, chart real-time infrastructure logistics on a spatial Leaflet grid, and map high-yield circular economy exchange loops.

## Architecture Overview

This project is structured as a unified monorepo containing both the decoupled client interface and the server architecture:
*   **`Ecoflow-frontend/`**: Single Page Application built using React, Vite, Tailwind CSS, and structured routing hooks.
*   **`Ecoflow-backend/`**: Server-side engine utilizing Node.js, Express, and structural middleware integrations.

---

## Tech Stack

### Frontend
*   **Framework:** React 18 (Vite build toolchain)
*   **Styling:** Tailwind CSS + PostCSS configuration
*   **Mapping UI:** Spatial Leaflet grid framework

### Backend & AI
*   **Core Engine:** Node.js & Express.js
*   **AI Integration:** Gemini Vision API integration for multi-modal resource channel analysis
*   **Environment Management:** Dotenv isolation layer

---

## Installation & Setup

### 1. Backend Configuration
Navigate to the server directory and install dependencies:
```bash
cd Ecoflow-backend
npm install

### 2. Frontend Configuration
Navigate to the frontend directory, install the required interface dependencies, and boot up the development server:
```bash
cd ../Ecoflow-frontend
npm install
npm run dev