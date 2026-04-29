# Enterprise ITSM Workflow Platform

This project is an enterprise-style IT Service Management (ITSM) system inspired by platforms such as ServiceNow.

It demonstrates how core service management capabilities can be designed and implemented using a custom full-stack architecture, focusing on workflow automation, data modeling, and role-based access control.

---

## 🚀 Live Demo

👉 https://vlastilena.github.io/itsm-workflow-system

> The frontend is deployed via GitHub Pages and runs directly in the browser.

---

## 🎯 Business Context

In enterprise environments, IT service platforms are used to:
- Manage incidents and service requests
- Automate support workflows
- Maintain knowledge base for self-service
- Enforce access control and governance rules
- Improve operational efficiency through automation

This project simulates these capabilities in a simplified but structured way.

---

## ⚙️ Core Capabilities

### 1. Incident & Request Management
- Full lifecycle ticket management
- Status flow: New → In Progress → Resolved → Closed
- Priority-based handling and assignment logic
- Interactive actions (Start, Resolve, Close)

### 2. Workflow Automation Engine
- Rule-based processing system (Business Rules simulation)
- Auto-assignment of tickets
- Escalation for overdue incidents
- Auto-close logic for resolved items

### 3. Role-Based Access Control (ACL)
- Users: manage own tickets only
- Agents: manage assigned workload
- Admins: full system access

### 4. Knowledge Base (planned)
- Articles linked to incidents
- Searchable knowledge repository
- Suggested solutions for recurring issues

### 5. API Layer (planned backend integration)
- RESTful backend architecture
- Structured endpoints for ITSM entities
- Separation of concerns (controllers/services/rules)

---

## 🧠 System Design Principles

- Modular architecture (service-oriented structure)
- Separation of business logic and data access
- Rule-driven automation model
- Enterprise-inspired data modeling

---

## 🏗️ Tech Stack

- Frontend: React
- Backend: Node.js (Express) *(planned/optional stage)*
- Architecture: Modular / layered design
- Deployment: GitHub Pages

---

## 🚀 Engineering Focus

This project emphasizes:
- ITSM domain understanding
- Workflow automation logic
- Platform-style thinking (similar to ServiceNow)
- Frontend system design
- Practical implementation of business rules

---

## 📸 UI Preview

*(Add screenshots here later — highly recommended for portfolio strength)*

---

## 📌 Future Enhancements

- SLA tracking system (critical for ITSM maturity)
- Notification engine (email / alerts simulation)
- Dashboard analytics (KPIs, incident trends)
- External system integration (mock REST APIs)
- Improved Service Portal UI experience
