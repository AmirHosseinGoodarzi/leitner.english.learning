"use client";

import "./globals.scss";
import type { Metadata } from "next";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ThemeContextProvider from "@/contexts/themeContext";
import AuthContextProvider from "@/contexts/authContext";
import { Toaster } from "react-hot-toast";
import Navbar from "@/components/navbar";
import { AppProgressBar as ProgressBar } from "next-nprogress-bar";
import SidebarContextProvider from "@/contexts/sidebarContext";

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
      <QueryClientProvider client={queryClient}>
        <ThemeContextProvider>
          <AuthContextProvider>
            <SidebarContextProvider>
              <body>
                <Navbar />
                {children}
                <Toaster position="top-center" />
                <ProgressBar
                  height="4px"
                  color="#38BDF8"
                  options={{ showSpinner: true }}
                  shallowRouting
                />
              </body>
            </SidebarContextProvider>
          </AuthContextProvider>
        </ThemeContextProvider>
      </QueryClientProvider>
    </html>
  );
}
