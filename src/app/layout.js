import "./globals.css";
import { PlanProvider } from "@/context/PlanContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "FitLog — Workout Library",
  description:
    "FitLog is a dark, no-nonsense gym companion: pick a lift, lock it into today's plan, and watch the week's work add up.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-fitlog-bg text-white antialiased">
        <PlanProvider>
            <Navbar />
            <main>{children}</main>
            <Footer />
          </PlanProvider>
      </body>
    </html>
  );
}
