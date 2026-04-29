import React, { useState } from "react";
import "./App.css";

function App() {
  const [incidents, setIncidents] = useState([
    { id: "INC0001", title: "VPN not working", status: "New" },
    { id: "INC0002", title: "Email issue", status: "In Progress" },
    { id: "INC0003", title: "Laptop slow", status: "Resolved" }
  ]);

  const [title, setTitle] = useState("");
  const [filter, setFilter] = useState("All");
  const [counter, setCounter] = useState(4);

  // ➕ CREATE INCIDENT
  const addIncident = () => {
    if (!title.trim()) return;

    const newIncident = {
      id: `INC${String(counter).padStart(4, "0")}`,
      title,
      status: "New"
    };

    setIncidents([newIncident, ...incidents]);
    setCounter(counter + 1);
    setTitle("");
  };

  // 🔄 UPDATE STATUS
  const updateStatus = (id, status) => {
    setIncidents(
      incidents.map((inc) =>
        inc.id === id ? { ...inc, status } : inc
      )
    );
  };

  // 🔍 FILTER
  const filteredIncidents =
    filter === "All"
      ? incidents
      : incidents.filter((i) => i.status === filter);

  // 📊 KPI
  const total = incidents.length;
  const newCount = incidents.filter(i => i.status === "New").length;
  const inProgress = incidents.filter(i => i.status === "In Progress").length;
  const resolved = incidents.filter(i => i.status === "Resolved").length;
  const closed = incidents.filter(i => i.status === "Closed").length;

  return (
    <div style={{ padding: "20px" }}>
      <h2>🧩 ITSM Incident Dashboard</h2>

      {/* KPI CARDS */}
      <div className="kpi-grid">
        <div className="kpi-card">
          <div className="kpi-title">Total</div>
          <div className="kpi-value">{total}</div>
        </div>

        <div className="kpi-card">
          <div className="kpi-title">New</div>
          <div className="kpi-value">{newCount}</div>
        </div>

        <div className="kpi-card">
          <div className="kpi-title">In Progress</div>
          <div className="kpi-value">{inProgress}</div>
        </div>

        <div className="kpi-card">
          <div className="kpi-title">Resolved</div>
          <div className="kpi-value">{resolved}</div>
        </div>

        <div className="kpi-card">
          <div className="kpi-title">Closed</div>
          <div className="kpi-value">{closed}</div>
        </div>
      </div>

      {/* CREATE */}
      <div style={{ margin: "20px 0" }}>
        <input
          type="text"
          placeholder="Create new incident..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button onClick={addIncident} style={{ marginLeft: "10px" }}>
          Create
        </button>
      </div>

      {/* FILTERS */}
      <div className="filters">
        {["All", "New", "In Progress", "Resolved", "Closed"].map((f) => (
          <button
            key={f}
            className={`filter-btn ${filter === f ? "active" : ""}`}
            onClick={() => setFilter(f)}
          >
            {f}
          </button>
        ))}
      </div>

      {/* TABLE */}
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {filteredIncidents.map((inc) => (
            <tr key={inc.id}>
              <td>{inc.id}</td>
              <td>{inc.title}</td>

              <td>
                <span
                  className={`badge ${
                    inc.status === "New"
                      ? "new"
                      : inc.status === "In Progress"
                      ? "progress"
                      : inc.status === "Resolved"
                      ? "resolved"
                      : "closed"
                  }`}
                >
                  {inc.status}
                </span>
              </td>

              <td>
                {inc.status === "New" && (
                  <button
                    className="action-btn"
                    onClick={() => updateStatus(inc.id, "In Progress")}
                  >
                    Start
                  </button>
                )}

                {inc.status === "In Progress" && (
                  <button
                    className="action-btn resolve"
                    onClick={() => updateStatus(inc.id, "Resolved")}
                  >
                    Resolve
                  </button>
                )}

                {inc.status === "Resolved" && (
                  <button
                    className="action-btn close"
                    onClick={() => updateStatus(inc.id, "Closed")}
                  >
                    Close
                  </button>
                )}

                {inc.status === "Closed" && (
                  <span style={{ color: "#6b7280" }}>No actions</span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;