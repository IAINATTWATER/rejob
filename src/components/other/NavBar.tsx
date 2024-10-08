'use client'

import Link from "next/link";
import Image from "next/image";
import { logout } from "@/actions/logout";


const NavBar = () => {



  const handleLogout = async () => {
    await logout();
  };



  return (
    <nav className="flex flex-wrap justify-between items-center px-4 py-2 bg-white">
      <div className="flex items-center bg-[#ff3e4c] rounded p-1 text-white">
        <Image
          src="/logo.svg"
          alt="ReJob Logo"
          width={48}
          height={41}
          className="mr-2"
        />
        <span className="font-bold text-2xl">ReJob</span>
      </div>
      
      <div className="hidden md:flex space-x-4">
        {["Home", "Pricing", "Learn", "FAQ", "Contact"].map((item) => (
          <span 
            key={item} 
            className="font-bold text-[#ff3e4c] hover:underline"
            onClick={() => {}} // Blank arrow function
          >
            {item}
          </span>
        ))}
      </div>
      
      <div className="flex items-center space-x-4">
        <>
          <button 
            onClick={handleLogout}
            className="bg-[#ff3e4c] hover:bg-[#ff5766] text-white font-bold py-2 px-4 rounded-full"
          >
            Logout
          </button>
          <Link href="/rejob/pricing" className="bg-[#ff3e4c] hover:bg-[#ff5766] text-white font-bold py-2 px-4 rounded-full">
            Pricing
          </Link>
        </>
        {/* Changed "Sign in" to "Log In" and made it a Link */}
        <Link href="/auth/login" className="bg-[#ff3e4c] hover:bg-[#ff5766] text-white font-bold py-2 px-4 rounded-full">
          Log In
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
