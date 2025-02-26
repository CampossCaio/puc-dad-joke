import type { Metadata } from "next";
import "./globals.css";
import { ToastContainer } from "react-toastify";
import { AuthProvider } from "@src/context/auth";
import { Header } from "@src/components/Header";

export const metadata: Metadata = {
  title: "Puc Dad Joke",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ToastContainer theme="darks" autoClose={2000} />
        <AuthProvider>
          <Header />
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
