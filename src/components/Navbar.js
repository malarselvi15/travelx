import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [hoverIndex, setHoverIndex] = useState(null);

  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Destinations", path: "/destinations" },
    { name: "Contact ", path: "/contact" },
  ];

  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        // padding: "20px 20px", // 🔹 reduced padding from 60px → 40px
        backgroundColor: "transparent",
        color: "#ffcc00",
        position: "fixed",
        width: "100%",
        top: 0,
        zIndex: 1000,
        paddingRight:"70px",
        paddingTop:"40px",
        paddingLeft:"10px"
      }}
    >
      {/* Logo */}
      <div style={{ fontSize: "28px", fontWeight: "bold", color: "#ffcc00" }}>
        TravelX
      </div>

      {/* Links */}
      <ul
        style={{
          display: "flex",
          listStyle: "none",
          gap: "30px",
          margin: 0,
          padding: 0,
          fontSize: "18px",
          fontWeight: "600",
          paddingRight: "30px", // 🔹 move navbar links slightly left
        }}
      >
        {links.map((link, index) => (
          <li key={index}>
            <Link
              to={link.path}
              onMouseEnter={() => setHoverIndex(index)}
              onMouseLeave={() => setHoverIndex(null)}
              style={{
                textDecoration: "none",
                color: hoverIndex === index ? "#f7f4ebff" : "#ffcc00",
                transition: "0.3s",
              }}
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
