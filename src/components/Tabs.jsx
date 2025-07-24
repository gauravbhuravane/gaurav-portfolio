import React, { useState, useEffect } from "react";

export function Tabs({ children, defaultValue }) {
  const [activeTab, setActiveTab] = useState(defaultValue);

  return (
    <div>
      {children.map((child, index) =>
        child.type.displayName === "TabsList"
          ? React.cloneElement(child, { key: index, setActiveTab, activeTab })
          : null
      )}

      <div style={{ marginTop: "1rem" }}>
        {children.map((child, index) =>
          child.type.displayName === "TabsContent" &&
          child.props.value === activeTab
            ? React.cloneElement(child, { key: index })
            : null
        )}
      </div>
    </div>
  );
}

export function TabsList({ children, setActiveTab, activeTab }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        gap: "1rem",
        flexWrap: "wrap",
        marginBottom: "1rem",
      }}
    >
      {children.map((child, index) =>
        React.cloneElement(child, {
          key: index,
          isActive: child.props.value === activeTab,
          onClick: () => setActiveTab(child.props.value),
        })
      )}
    </div>
  );
}
TabsList.displayName = "TabsList";

export function TabsTrigger({ value, children, onClick, isActive }) {
  return (
    <button
      onClick={onClick}
      className={`tab-trigger ${isActive ? "active-tab" : ""}`}
      style={{
        padding: "0.6rem 1.2rem",
        fontWeight: "bold",
        fontSize: "1rem",
        border: "none",
        background: isActive ? "#6200ea" : "#eee",
        color: isActive ? "#fff" : "#222",
        borderRadius: "8px",
        cursor: "pointer",
        boxShadow: isActive ? "0 4px 12px rgba(0,0,0,0.3)" : "none",
        transition: "all 0.25s ease",
      }}
    >
      {children}
    </button>
  );
}
TabsTrigger.displayName = "TabsTrigger";

export function TabsContent({ children }) {
  return <div>{children}</div>;
}
TabsContent.displayName = "TabsContent";
