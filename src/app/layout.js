import "./globals.css";

export const metadata = {
  title: "Next JWT Authentication",
  description: "Jwt Authentication using Next JS and External API.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
