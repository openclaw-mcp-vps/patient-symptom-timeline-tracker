import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Patient Symptom Timeline Tracker",
  description: "Track symptom patterns for better doctor visits"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="6b74c6d2-9cd6-4b5e-a991-b8046e1dbc46"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">{children}</body>
    </html>
  );
}
