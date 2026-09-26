import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WorkoutDetaileProvider from "./context/WorkoutDetaileProvider";
import logoImage from "@/assets/logo.png";
import { ToastContainer } from "react-toastify";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "FITLOG - Workout Tracker",
  description: "Track your daily workouts and plans",
  icons: {
    icon: logoImage.src,
    
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <WorkoutDetaileProvider>
        <body className="min-h-full flex flex-col w-full overflow-x-hidden">
          <Navbar></Navbar>
          {children}
          <Footer></Footer>
          <ToastContainer autoClose={2000} />
        </body>
        
      </WorkoutDetaileProvider>
    </html>
  );
}
