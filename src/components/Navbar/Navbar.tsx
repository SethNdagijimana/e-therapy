import Link from "next/link"
import { Logo } from "../Logo"
import { cn } from "@/lib/utils"
import { useRouter } from "next/router"

const Navbar = () => {
    return (
        <>
      <div className="p-8 pt-[44px] border border-b-2 border-b-[#cccccc]">
      <nav className="flex items-center justify-between">
        <div className="text-[26px] md:text-[32px] font-bold font-bricolage">
          <Logo />
        </div>

        <ul className="hidden md:flex items-center justify-between gap-6">
          <li className="cursor-pointer">
            <Link href="/">Home</Link>
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
            href="/signup">
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