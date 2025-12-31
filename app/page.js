export default function Home() {
  return (
    <main style={{ fontFamily: "system-ui, sans-serif", padding: 24, lineHeight: 1.5, maxWidth: 720 }}>
      <h1 style={{ fontSize: 48, margin: "0 0 12px 0" }}>CallReady</h1>

      <p style={{ fontSize: 18, margin: "0 0 18px 0" }}>
        Practice real phone calls with AI.
      </p>

      <p style={{ fontSize: 18, margin: "0 0 24px 0" }}>
        CallReady helps you prepare for difficult conversations.
      </p>

      <div style={{ padding: 16, border: "1px solid #ddd", borderRadius: 12, marginBottom: 24 }}>
        <div style={{ fontSize: 16, marginBottom: 10 }}>
          Call now:
        </div>

        <a
          href="tel:+18559761695"
          style={{
            display: "inline-block",
            padding: "12px 16px",
            borderRadius: 10,
            border: "1px solid #111",
            textDecoration: "none",
            color: "#111",
            fontSize: 18
          }}
        >
          +1 (855) 976-1695
        </a>

        <div style={{ marginTop: 10, fontSize: 14, color: "#555" }}>
          If you are on a phone, tap the button. If you are on a computer, dial the number from your phone.
        </div>
      </div>

      <h2 style={{ fontSize: 22, margin: "0 0 10px 0" }}>How it works</h2>
      <ul style={{ margin: 0, paddingLeft: 18, fontSize: 16 }}>
        <li>Call the number.</li>
        <li>Choose a scenario or say “you choose.”</li>
        <li>Practice the conversation, then hang up when you are done.</li>
      </ul>
    </main>
  );
}
