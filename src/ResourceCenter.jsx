// src/ResourceCenter.jsx
import React from "react";

const ResourceCenter = () => {
  const resources = [
    { id: 1, title: "Solar Energy Guide", type: "Document" },
    { id: 2, title: "Carbon Tracker App", type: "Tool" },
    { id: 3, title: "Water Conservation Video", type: "Video" },
  ];

  return (
    <div style={{ padding: "1rem" }}>
      <h2>Resource Center</h2>
      {resources.map(r => (
        <div key={r.id}>
          <p>{r.title} - {r.type}</p>
        </div>
      ))}
    </div>
  );
};

export default ResourceCenter;
