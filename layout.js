export const metadata = {
  title: "CallReady",
  description: "A safe place to practice real phone calls before they matter"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: "system-ui, sans-serif" }}>
        {children}
      </body>
    </html>
  );
}
