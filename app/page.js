export default function Home() {
  return (
    <main style={{ maxWidth: 720, margin: "0 auto", padding: 24, fontFamily: "system-ui, sans-serif" }}>
      <h1 style={{ fontSize: 40, lineHeight: 1.1, marginBottom: 12 }}>CallReady</h1>

      <p style={{ fontSize: 18, lineHeight: 1.6, marginTop: 0 }}>
        Practice real phone calls with an AI partner. Build confidence for interviews, difficult conversations, customer calls,
        and more.
      </p>

      <div style={{ marginTop: 24, padding: 16, border: "1px solid #ddd", borderRadius: 12 }}>
        <h2 style={{ fontSize: 20, marginTop: 0 }}>Coming soon</h2>
        <ul style={{ lineHeight: 1.8, marginBottom: 0 }}>
          <li>Choose a scenario and role</li>
          <li>Upgrade for more talk time</li>
          <li>Text message summaries after calls</li>
        </ul>
      </div>

      <div style={{ marginTop: 24, display: "flex", gap: 12, flexWrap: "wrap" }}>
        <a
          href="#"
          style={{
            display: "inline-block",
            padding: "12px 16px",
            borderRadius: 10,
            background: "#111",
            color: "#fff",
            textDecoration: "none",
            fontWeight: 600
          }}
          onClick={(e) => e.preventDefault()}
        >
          Join the waitlist
        </a>

        <a
          href="#"
          style={{
            display: "inline-block",
            padding: "12px 16px",
            borderRadius: 10,
            border: "1px solid #111",
            color: "#111",
            textDecoration: "none",
            fontWeight: 600
          }}
          onClick={(e) => e.preventDefault()}
        >
          How it works
        </a>
      </div>

      <p style={{ marginTop: 28, fontSize: 14, color: "#444", lineHeight: 1.6 }}>
        You are early. This page is a placeholder while we build the full experience.
      </p>
    </main>
  );
}
