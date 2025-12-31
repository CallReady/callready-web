import "./globals.css";

export const metadata = {
  title: "CallReady",
  description: "Practice real phone calls with calm, structured AI support.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
