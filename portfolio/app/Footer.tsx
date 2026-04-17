"use client";
import OmbreBlob from "./OmbreBlob";
export default function Footer() {
  return (
    <footer
      id="contact"
      style={{
        background: "#eacdc7",
        padding: "110px 7% 130px",
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <OmbreBlob
        size={360}
        blur={65}
        opacity={0.5}
        style={{ right: -80, bottom: -120, zIndex: 0 }}
      />

      {/* Center card */}
      <div
        style={{
          width: "100%",
          maxWidth: 900,
          background: "rgba(240, 227, 211, 0.72)",
          padding: "82px 46px 90px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          boxSizing: "border-box",
          position: "relative",
          zIndex: 1,
        }}
      >
        <p
          style={{
            fontFamily: "'Lexend Giga', sans-serif",
            fontSize: "clamp(1.45rem, 2.8vw, 2rem)",
            fontWeight: 300,
            letterSpacing: "0.12em",
            textTransform: "none",
            color: "#6e6464",
            margin: 0,
          }}
        >
          Get in touch
        </p>

        <a
          href="mailto:adoraloin@gmail.com"
          className="footer-email-hover"
          style={{
            marginTop: 42,
            padding: "18px 62px",
            borderRadius: 6,
            border: "1px solid #b59ea0",
            background: "#ffffff",
            fontFamily: "'Lexend Giga', sans-serif",
            fontSize: "1.05rem",
            fontWeight: 300,
            letterSpacing: "0.14em",
            textDecoration: "none",
            color: "#7a6c6d",
          }}
        >
          adoraloin@gmail.com
        </a>
      </div>

      {/* Follow me row */}
      <div
        style={{
          marginTop: 56,
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 24,
          position: "relative",
          zIndex: 1,
        }}
      >
        <span
          style={{
            fontFamily: "'Lexend Giga', sans-serif",
            fontSize: "1rem",
            fontWeight: 300,
            letterSpacing: "0.16em",
            color: "#7f6f70",
          }}
        >
          follow me:
        </span>

        <div style={{ display: "flex", gap: 34 }}>
          <a
            href="https://www.linkedin.com/in/adora-lin-"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-icon-hover"
            style={{
              width: 54,
              height: 54,
              borderRadius: "50%",
              background: "#e5e6d8",
              border: "1px solid #cfc1b4",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#6e6464",
              textDecoration: "none",
              fontFamily: "'Lexend Giga', sans-serif",
              fontSize: "1rem",
            }}
          >
            in
          </a>

          <a
            href="https://github.com/adoralin0"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-icon-hover"
            style={{
              width: 54,
              height: 54,
              borderRadius: "50%",
              background: "#e5e6d8",
              border: "1px solid #cfc1b4",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#6e6464",
              textDecoration: "none",
            }}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.387.6.113.82-.262.82-.582 0-.287-.01-1.046-.016-2.054-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.09-.745.083-.73.083-.73 1.205.085 1.84 1.237 1.84 1.237 1.07 1.835 2.807 1.305 3.492.997.108-.776.42-1.305.763-1.605-2.665-.303-5.467-1.332-5.467-5.93 0-1.31.468-2.382 1.235-3.222-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.3 1.23a11.5 11.5 0 0 1 3.003-.404c1.018.005 2.045.138 3.003.404 2.29-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.873.118 3.176.77.84 1.233 1.912 1.233 3.222 0 4.61-2.807 5.625-5.48 5.922.431.372.815 1.102.815 2.222 0 1.604-.015 2.896-.015 3.286 0 .322.216.7.825.58C20.565 21.796 24 17.297 24 12 24 5.37 18.63 0 12 0Z" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}

