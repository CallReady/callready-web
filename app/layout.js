import "./globals.css";

export const metadata = {
  title: "Practice Phone Calls Without Pressure | CallReady",
  description: "A calm, supportive way to practice phone calls when real calls feel overwhelming. Designed for teens and adults who want to build phone confidence without pressure.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <script src="/cr-header.js" defer>
        </script>
</body>
    </html>
  );
}
