"use client";
import "./globals.scss";
import type { Metadata } from "next";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ThemeContextProvider from "@/contexts/themeContext";
import AuthContextProvider from "@/contexts/authContext";
import { Toaster } from "react-hot-toast";
import Navbar from "@/components/navbar";

export const metadata: Metadata = {
  title: "Learn English",
  description: "Rapidly Learning English with Leitner's method.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: Infinity,
      },
    },
  });
  return (
    <html lang="en">
      {/* <ErrorBoundary> */}
      <QueryClientProvider client={queryClient}>
        <ThemeContextProvider>
          <AuthContextProvider>
            <body>
              <Navbar />
              {children}
              <Toaster position="top-center" />
            </body>
          </AuthContextProvider>
        </ThemeContextProvider>
      </QueryClientProvider>
      {/* </ErrorBoundary> */}
    </html>
  );
}
