import React, { useState } from "react";

function App() {
  const [incidents, setIncidents] = useState([
    { id: 1, title: "VPN not working", status: "New" },
    { id: 2, title: "Email issue", status: "In Progress" },
    { id: 3, title: "Laptop slow", status: "Resolved" }
  ]);

  const [newTitle, setNewTitle] = useState("");

  // CREATE INCIDENT
  const addIncident = () => {
    if (!newTitle.trim()) return;

    const newIncident = {
      id: incidents.length + 1,
      title: newTitle,
      status: "New"
    };

    setIncidents([...incidents, newIncident]);
    setNewTitle("");
  };

  // UPDATE STATUS
  const updateStatus = (id, newStatus) => {
    setIncidents(
      incidents.map((inc) =>
        inc.id === id ? { ...inc, status: newStatus } : inc
      )
    );
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>ITSM Incident Dashboard</h1>

      {/* CREATE */}
      <div style={{ marginBottom: "20px" }}>
        <input
          type="text"
          placeholder="New incident..."
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
        />
        <button onClick={addIncident} style={{ marginLeft: "10px" }}>
          Create
        </button>
      </div>

      {/* TABLE */}
      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {incidents.map((inc) => (
            <tr key={inc.id}>
              <td>{inc.id}</td>
              <td>{inc.title}</td>
              <td>
  <span
    style={{
      color:
        inc.status === "New"
          ? "blue"
          : inc.status === "In Progress"
          ? "orange"
          : inc.status === "Resolved"
          ? "green"
          : "gray",
      fontWeight: "bold"
    }}
  >
    {inc.status}
  </span>
</td>

              <td>
                {/* NEW → IN PROGRESS */}
                {inc.status === "New" && (
                  <button onClick={() => updateStatus(inc.id, "In Progress")}>
                    Start Progress
                  </button>
                )}

                {/* IN PROGRESS → RESOLVED */}
                {inc.status === "In Progress" && (
                  <button
                    onClick={() => updateStatus(inc.id, "Resolved")}
                    style={{ marginLeft: "10px" }}
                  >
                    Resolve
                  </button>
                )}

                {/* RESOLVED → CLOSED */}
                {inc.status === "Resolved" && (
                  <button
                    onClick={() => updateStatus(inc.id, "Closed")}
                    style={{ marginLeft: "10px" }}
                  >
                    Close
                  </button>
                )}

                {/* CLOSED */}
                {inc.status === "Closed" && (
                  <span style={{ color: "gray", fontWeight: "bold" }}>
                    No actions
                  </span>
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