# Currency Converter Web Application

A full-stack web application built to convert amounts between different international currencies based on exchange rates.

---

## Features

* **Date-Based Rates**: Select specific dates to check historical or current exchange values.
* **Currency Pair Selection**: Choose dynamically between source and target currencies.
* **Instant Calculation**: Input values directly in the source currency to compute target conversions.
* **Modern UI**: Styled with Tailwind CSS, featuring a responsive layout and dark mode styling.

---

## Tech Stack

### Frontend
* **React 18** (UI Library)
* **Tailwind CSS** (Utility-first styling)
* **React Scripts** (Create React App toolchain)

### Backend
* **Node.js** & **Express** (REST API framework)[cite: 1]
* **Axios** (HTTP client for external rate API calls)[cite: 1]
* **CORS** & **Dotenv** (Cross-origin configuration and environment management)[cite: 1]
* **Nodemon** (Development live-reloading)[cite: 1]

---

## Project Structure

```text
├── client/                 # React frontend application[cite: 1]
│   ├── public/             # Static assets & HTML template[cite: 1]
│   ├── src/
│   │   ├── pages/
│   │   │   └── MainPage.js # Main currency conversion form[cite: 1]
│   │   ├── App.js          # Root component[cite: 1]
│   │   └── index.css       # Tailwind directives & base styling[cite: 1]
│   ├── package.json        # Frontend dependencies & scripts[cite: 1]
│   └── tailwind.config.js  # Tailwind configuration[cite: 1]
└── server/                 # Express backend API[cite: 1]
    └── package.json        # Backend dependencies[cite: 1]
