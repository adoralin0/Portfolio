"use client";
import Hero from "./Hero";
import Projects from "./Projects";
import ProjectExamples from "./ProjectExamples";
import Skills from "./Skills";
import Footer from "./Footer";
import { useState } from "react";

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLink = (href: string, label: string) => (
    <a
      href={href}
      className="nav-link-hover"
      style={{
        fontFamily: "'Lexend Giga', sans-serif",
        fontSize: "1rem",
        color: "#4a3a3a",
        textDecoration: "none",
        letterSpacing: "0.04em",
      }}
    >
      {label}
    </a>
  );

  return (
    <>
      {/* Navbar */}
      <nav style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "18px 6%",
        background: "rgba(245, 198, 198, 0.75)",
        backdropFilter: "blur(12px)",
        borderBottom: "1px solid rgba(200,160,160,0.2)",
      }}>
        {/* Logo */}
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{
            width: 34,
            height: 34,
            borderRadius: "50%",
            border: "1.5px solid #4a3a3a",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontFamily: "'Lexend Giga', sans-serif",
            fontSize: "0.9rem",
            color: "#4a3a3a",
          }}>
            A
          </div>
          <span style={{
            fontFamily: "'Lexend Giga', sans-serif",
            fontSize: "1rem",
            color: "#4a3a3a",
          }}>
            Adora
          </span>
        </div>

        {/* Links */}
        <div style={{ display: "flex", gap: 36 }}>
          {navLink("#home", "Home")}
          {navLink("#projects", "Projects")}
          {navLink("#contact", "Contact")}
        </div>
      </nav>

      {/* Page offset for fixed nav */}
      <div style={{ paddingTop: 70 }}>
        <Hero />
        <Projects />
        <ProjectExamples />
        <Skills />
        <Footer />
      </div>
    </>
  );
}
