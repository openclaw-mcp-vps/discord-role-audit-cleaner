import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Discord Role Audit Cleaner – Clean Up Server Role Bloat",
  description: "Automatically scan Discord servers for unused roles, inactive members with elevated permissions, and get cleanup recommendations."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="a1a7e1ea-548d-4426-9bce-50ebef12f982"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">{children}</body>
    </html>
  );
}
