"use client"

import { FormField } from "@/components/FormField"
import { Navbar } from "@/components/Navbar"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useState } from "react"

const SignUp = () => {
    const [name, setName] = useState<string>()
    const [email, setEmail] = useState<string>()
    const [password, setPassword] = useState<string>()
    const [retypePassword, setRetypePassword] = useState<string>()
    return (
        <>
            <Navbar />

            <div className="grid grid-cols-2 gap-2 p-2 place-items-center">
                <div className="w-[400px]">
                    <h2 className="text-center font-bold font-bricolage mt-20">PROFESSIONAL SUPPORT FOR EMOTIONAL WELLNESS</h2>
                    <p>Navigate life&apos;s challenges with expert guidance</p>
                </div>

                <div className="border rounded-2xl w-[400px] p-4 bg-[#d2e1f7] mt-8">
                   <p className="text-white font-bold text-center">Sign Up</p>

                   <div className="mt-8">
                    <form className="space-y-4">
                    <FormField 
                        label="Name" 
                        placeholder="Enter Your user Name" 
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />

                    <FormField 
                        label="Email" 
                        placeholder="Enter Your Email" 
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <FormField 
                        label="Passowrd" 
                        placeholder="Enter password" 
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    <FormField 
                        label="Retype Password" 
                        placeholder="retype password" 
                        type="password"
                        value={retypePassword}
                        onChange={(e) => setRetypePassword(e.target.value)}
                    />

              
                   <Button type="submit">Submit</Button>
                    </form>

                   <div className="mt-2 cursor-pointer">
                   <Link href="/signin" className="font-bold font-bricolage">Already Have An Account.. Sign in</Link>
                   </div>
                   </div>
                </div>

            </div>
        </>
    )
}

export default SignUp