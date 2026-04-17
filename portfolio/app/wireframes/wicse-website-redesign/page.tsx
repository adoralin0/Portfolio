import Image from "next/image";
import Link from "next/link";
import wicseWireframe from "../../WICSE_wireframe.png";

export default function WicseWebsiteRedesignPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#eacdc7",
        padding: "110px 7% 80px",
      }}
    >
      <div style={{ maxWidth: 980, margin: "0 auto" }}>
        <h1
          style={{
            fontFamily: "'Libre Caslon Text', Georgia, serif",
            fontSize: "clamp(2.1rem, 5vw, 3.4rem)",
            fontWeight: 400,
            color: "#4a3535",
            marginBottom: "1rem",
          }}
        >
          WiCSE Website Redesign
        </h1>
        <p
          style={{
            fontFamily: "'Lexend Giga', sans-serif",
            fontSize: "0.85rem",
            fontWeight: 300,
            color: "#5a4040",
            lineHeight: 1.8,
            marginBottom: "1.5rem",
            maxWidth: 700,
          }}
        >
          Scroll inside the frame to view the full wireframe.
        </p>

        <div
          style={{
            background: "#f0e3d3",
            border: "1px solid #b99f97",
            borderRadius: 12,
            padding: 12,
            maxHeight: "75vh",
            overflowY: "auto",
            boxShadow: "0 12px 30px rgba(84, 53, 53, 0.12)",
            marginBottom: "1.5rem",
          }}
        >
          <Image
            src={wicseWireframe}
            alt="WiCSE Website Redesign wireframe"
            style={{ width: "100%", height: "auto", display: "block", borderRadius: 8 }}
            priority
            unoptimized
          />
        </div>

        <Link
          href="/wireframes"
          style={{
            fontFamily: "'Lexend Giga', sans-serif",
            fontSize: "0.85rem",
            color: "#4a3535",
            textDecoration: "none",
            border: "1px solid #b99f97",
            padding: "10px 14px",
            borderRadius: 8,
            display: "inline-block",
            background: "#f0e3d3",
          }}
        >
          Back
        </Link>
      </div>
    </main>
  );
}

