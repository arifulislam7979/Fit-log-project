import Link from "next/link";
import Image from "next/image";
import logoimage from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-[#0b0c0e] text-white border-t border-zinc-800/80 px-4 sm:px-8 py-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        
        {/* Left Side: Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 text-xl font-black tracking-wider"
        >
          <Image
            src={logoimage}
            alt="FITLOG Logo"
            className="w-6 h-6 "
          />
          <span>FITLOG</span>
        </Link>

        {/* Right Side: Copyright & Tagline */}
        <div className="text-zinc-400 text-xs sm:text-sm text-center md:text-right">
          © 2026 FitLog — Workout Library. Train hard, log honest.
        </div>

      </div>
    </footer>
  );
};

export default Footer;