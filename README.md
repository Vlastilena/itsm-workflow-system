# 🧩 Enterprise ITSM Workflow Platform

A ServiceNow-inspired IT Service Management (ITSM) system built with React and deployed on Vercel.

This project simulates enterprise-level incident management, workflow automation, and operational dashboards.

---

## 🌐 Live Demo

👉 https://itsm-workflow-system.vercel.app/

---

## 📸 Screenshots

### Dashboard Overview
![Dashboard](frontend/screenshots/dashboard.png)

### Filtering Incidents
![Filters](frontend/screenshots/filter.png)

### Workflow Actions
![Workflow](frontend/screenshots/workflow.png)

---

## 🎯 Business Context

ITSM platforms are used in enterprises to:
- Manage incidents and service requests
- Track operational issues
- Automate workflows
- Improve service efficiency

This project simulates a simplified version of these processes.

---

## ⚙️ Core Features

### 🧩 Incident Management
- Create incidents
- Track lifecycle:
  **New → In Progress → Resolved → Closed**
- Status-based actions (Start, Resolve, Close)

---

### 📊 Dashboard KPI
- Total incidents counter
- Status breakdown (New / In Progress / Resolved / Closed)
- Real-time updates

---

### 🔄 Workflow Simulation
- Button-based state transitions
- Conditional UI actions per status

---

### 🔍 Filtering System
- Filter by incident status
- Quick view of system state

---

### 🎨 UI Design
- SaaS-style dashboard layout
- Status color indicators
- Clean enterprise interface

---

## 🧠 Architecture

- React (functional components)
- useState for state management
- Component-driven UI
- Simple workflow logic simulation

---

## 🏗️ Tech Stack

- React (Create React App)
- CSS (custom styling)
- Vercel (deployment)
- GitHub (CI/CD)

---

## 🚀 Deployment

- GitHub → Vercel CI/CD pipeline
- Automatic deployment on push to `main`

---

## 📌 Future Improvements

- Backend API (Node.js / Express)
- Database (PostgreSQL / MongoDB)
- Authentication (roles: admin / agent / user)
- SLA tracking system
- Notifications engine
- Advanced analytics dashboard

---

## 💼 Portfolio Value

This project demonstrates:
- Understanding of ITSM systems (ServiceNow-like logic)
- Frontend architecture in React
- Workflow automation concepts
- Deployment & CI/CD pipeline setup