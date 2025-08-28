import React from "react";
import { useNavigate } from "react-router-dom";

function Hero() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/destinations"); // go to Destinations page
  };

  return (
    <section
      style={{
        height: "100vh",
        width: "100%",
        backgroundImage:
          "url('https://media.istockphoto.com/id/1502547874/vector/travel-to-world-on-banner-background-landscape-template-tourism-cards-road-trip-vacation-as.jpg?s=612x612&w=0&k=20&c=F-Rk863en4EVmErSk0iHlGB4lP_Uhazy77isXRlSD1Q=')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        color: "#fff",
        position: "relative",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(0,0,0,0.5)",
        }}
      ></div>
      <div style={{ position: "relative", zIndex: 1, maxWidth: "700px", padding: "20px" }}>
        <h1 style={{ fontSize: "3rem", marginBottom: "20px" }}>Explore The World With Us</h1>
        <p style={{ fontSize: "1.2rem", marginBottom: "30px" }}>
          Discover new destinations, experience adventures, and make unforgettable memories.
        </p>
        <button
          onClick={handleClick}
          style={{
            backgroundColor: "#ffcc00",
            color: "#222",
            border: "none",
            padding: "12px 30px",
            fontSize: "1rem",
            fontWeight: "bold",
            borderRadius: "25px",
            cursor: "pointer",
            transition: "0.3s",
          }}
        >
          Start Your Journey
        </button>
      </div>
    </section>
  );
}

export default Hero;
