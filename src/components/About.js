import React from "react";
import { useNavigate } from "react-router-dom";

function About() {
  const navigate = useNavigate();

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "50px 50px",
        minHeight: "100vh",
        fontFamily: "sans-serif",
        gap: "50px",
        flexWrap: "wrap",
        backgroundColor: "#f9f6f2",
      }}
    >
      {/* Left Side: Text */}
      <div style={{ flex: "1 1 400px", maxWidth: "600px" }}>
        <h1 style={{ fontSize: "2.5rem", marginBottom: "20px", color: "#222" }}>
          About TravelX
        </h1>
        <p style={{ fontSize: "1.2rem", marginBottom: "15px", lineHeight: "1.6" }}>
          TravelX is your ultimate travel companion. We help you discover amazing destinations,
          plan adventures, and create memories that last a lifetime.
        </p>
        <p style={{ fontSize: "1.2rem", marginBottom: "15px", lineHeight: "1.6" }}>
          Whether you are looking for a relaxing getaway or an exciting journey, we have something
          for everyone. Join us and explore the world in a unique and unforgettable way.
        </p>
        <button
          onClick={() => navigate("/learnmore")}
          style={{
            backgroundColor: "#ffcc00",
            color: "#222",
            border: "none",
            padding: "12px 25px",
            fontSize: "1rem",
            fontWeight: "bold",
            borderRadius: "25px",
            cursor: "pointer",
            marginTop: "20px",
          }}
        >
          Learn More
        </button>
      </div>

      {/* Right Side: Image */}
      <div style={{ flex: "1 1 400px", maxWidth: "500px" }}>
        <img
          src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80"
          alt="Travel"
          style={{
            width: "100%",
            borderRadius: "15px",
            boxShadow: "0 10px 20px rgba(0,0,0,0.2)",
          }}
        />
      </div>
    </div>
  );
}

export default About;
