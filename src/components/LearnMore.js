import React from "react";

function LearnMore() {
  return (
    <div
      style={{
        padding: "80px 50px",
        minHeight: "100vh",
        backgroundColor: "#eef2f3",
        fontFamily: "sans-serif",
      }}
    >
      <h1 style={{ textAlign: "center", marginBottom: "30px", fontSize: "2.5rem", color: "#222" }}>
        Discover More With TravelX
      </h1>
      <p style={{ textAlign: "center", maxWidth: "800px", margin: "0 auto", fontSize: "1.2rem" }}>
        At TravelX, we go beyond just destinations. We offer curated travel guides, hidden gems,
        and personalized travel experiences. From adventure tours to cultural explorations, we help
        you create stories that last forever.
      </p>

      {/* Section with cards */}
      <div
        style={{
          marginTop: "50px",
          display: "flex",
          gap: "30px",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        <div
          style={{
            width: "300px",
            backgroundColor: "#fff",
            borderRadius: "15px",
            padding: "20px",
            boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
            textAlign: "center",
          }}
        >
          <img
            src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=500&q=80"
            alt="Adventure"
            style={{ width: "100%", borderRadius: "10px", marginBottom: "15px" }}
          />
          <h3>Adventure Tours</h3>
          <p>Experience thrilling adventures across the globe.</p>
        </div>

        <div
          style={{
            width: "300px",
            backgroundColor: "#fff",
            borderRadius: "15px",
            padding: "20px",
            boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
            textAlign: "center",
          }}
        >
          <img
            src="https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=500&q=80"
            alt="Culture"
            style={{ width: "100%", borderRadius: "10px", marginBottom: "15px" }}
          />
          <h3>Cultural Trips</h3>
          <p>Explore traditions, food, and heritage of unique places.</p>
        </div>

        <div
          style={{
            width: "300px",
            backgroundColor: "#fff",
            borderRadius: "15px",
            padding: "20px",
            boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
            textAlign: "center",
          }}
        >
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyD2N5bPe2lSI5yTZepoG8CgqTsWdXLFX7zg&s"
            alt="Relaxation"
            style={{ width: "100%", borderRadius: "10px", marginBottom: "15px" }}
          />
          <h3>Relaxing Getaways</h3>
          <p>Find peace and tranquility in the best destinations.</p>
        </div>
      </div>
    </div>
  );
}

export default LearnMore;
