import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Importadora y distribuidora Kayros",
  description: "Importadora y distribuidora Kayros",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta
          name="google-site-verification"
          content="q7FBL_YLhEvd6lYPLyibis4HWieTsdNBKZUscz8nu8A"
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
