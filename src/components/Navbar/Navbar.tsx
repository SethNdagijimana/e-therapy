import Link from "next/link"
import { Logo } from "../Logo"
import { cn } from "@/lib/utils"

const Navbar = () => {
    return (
        <>
      <div className="container pt-[44px]">
      <nav className="flex items-center justify-between">
        <div className="text-[26px] md:text-[32px] font-bold font-bricolage">
          <Logo />
        </div>

        <ul className="hidden md:flex items-center justify-between gap-6">
          <li className="cursor-pointer">
            <Link href="#home">Home</Link>
          </li>
          <li className="cursor-pointer">
            <Link href="#about-us">About Us</Link>
          </li>
        </ul>

        <div className="hidden md:flex items-center justify-center gap-6">
          <Link
            href="/signin">
            <span className="md:px-2 md:py-[2px] text-[#212121] font-medium md:text-base text-sm">
              Sign in
            </span>
          </Link>
          <Link
            href="/signin">
            <span className="md:px-2 md:py-[2px] text-[#212121] font-medium md:text-base text-sm">
              Create Account
            </span>
          </Link>

       
        </div>

        <div>

        </div>

      </nav>
    </div>
        </>
    )
}

export default Navbar