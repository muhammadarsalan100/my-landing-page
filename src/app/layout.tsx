import { Inter } from "next/font/google";
import "./globals.css"; // Tailwind
import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";
import { ThemeProvider } from "next-themes";
import ScrollToTop from "@/components/ScrollToTop";
import Aoscompo from "@/utils/aos";
import NextTopLoader from "nextjs-toploader";
import SessionProviderComp from "@/components/nextauth/SessionProvider";
import { AuthDialogProvider } from "./context/AuthDialogContext";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
  session,
}: {
  children: React.ReactNode;
  session: any;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        {/* Top loader for page transitions */}
        <NextTopLoader />

        {/* Auth Dialog context */}
        <AuthDialogProvider>

          {/* NextAuth session provider */}
          <SessionProviderComp session={session}>

            {/* Theme provider for dark/light mode */}
            <ThemeProvider
              attribute="class"
              enableSystem={true}
              defaultTheme="system"
            >
              {/* Animate on scroll wrapper */}
              <Aoscompo>
                <Header />
                {children}
                <Footer />
              </Aoscompo>

              {/* Scroll to top button */}
              <ScrollToTop />
            </ThemeProvider>
          </SessionProviderComp>
        </AuthDialogProvider>
      </body>
    </html>
  );
}
