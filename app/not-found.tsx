import Link from "next/link";

export const metadata = {
  title: "404 - Page Not Found | Arrow Constructions",
  description: "The page you're looking for could not be found.",
};

export default function NotFound() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        textAlign: "center",
        padding: "2rem",
        background: "linear-gradient(135deg, #f9f9f9 0%, #e8f4fd 100%)",
      }}
    >
      <div
        style={{
          maxWidth: "600px",
          padding: "3rem 2rem",
          background: "rgba(255, 255, 255, 0.95)",
          borderRadius: "20px",
          boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)",
        }}
      >
        <h1
          style={{
            fontSize: "6rem",
            margin: "0 0 1rem 0",
            background: "linear-gradient(135deg, #f78c4e, #e85d45)",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            fontWeight: "800",
          }}
        >
          404
        </h1>
        <h2
          style={{
            fontSize: "2rem",
            margin: "0 0 1rem 0",
            color: "#1a202c",
            fontWeight: "700",
          }}
        >
          Page Not Found
        </h2>
        <p
          style={{
            fontSize: "1.1rem",
            margin: "0 0 2rem 0",
            color: "#4a5568",
            lineHeight: "1.6",
            maxWidth: "480px",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          Sorry, we couldn't find the page you're looking for. The page may have
          been moved, deleted, or you may have entered an incorrect URL.
        </p>
        <div
          style={{
            display: "flex",
            gap: "1rem",
            justifyContent: "center",
            marginBottom: "2rem",
            flexWrap: "wrap",
          }}
        >
          <Link
            href="/"
            style={{
              background: "linear-gradient(135deg, #f78c4e, #e85d45)",
              color: "white",
              padding: "1rem 2rem",
              borderRadius: "50px",
              textDecoration: "none",
              fontWeight: "600",
              fontSize: "1rem",
              transition: "all 0.3s ease",
            }}
          >
            Go Home
          </Link>
          <Link
            href="/projects"
            style={{
              background: "transparent",
              color: "#448bf2",
              padding: "1rem 2rem",
              border: "2px solid #448bf2",
              borderRadius: "50px",
              textDecoration: "none",
              fontWeight: "600",
              fontSize: "1rem",
              transition: "all 0.3s ease",
            }}
          >
            View Projects
          </Link>
        </div>
        <p style={{ fontSize: "0.95rem", color: "#718096", margin: "0" }}>
          Need help?{" "}
          <Link
            href="/contact"
            style={{
              color: "#64ce8a",
              textDecoration: "none",
              fontWeight: "600",
            }}
          >
            Contact us
          </Link>
        </p>
      </div>
    </div>
  );
}
