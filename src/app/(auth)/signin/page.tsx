"use client"

import { FormField } from "@/components/FormField"
import { Navbar } from "@/components/Navbar"
import { Button } from "@/components/ui/button"
import { useState } from "react"

const SignIn = () => {
    const [email, setEmail] = useState<string>()
    const [password, setPassword] = useState<string>()
    return (
        <>
            <Navbar />

            <div className="grid grid-cols-2 gap-2 p-2 place-items-center">
                <div className="w-[400px]">
                    <h2 className="text-center font-bold font-bricolage mt-20">PROFESSIONAL SUPPORT FOR EMOTIONAL WELLNESS</h2>
                    <p>Navigate life&apos;s challenges with expert guidance</p>
                </div>

                <div className="border rounded-2xl w-[400px] p-4 bg-[#d2e1f7] mt-8">
                   <p className="text-white font-bold text-center">Sign In</p>

                   <div className="mt-8">
                    <form className="space-y-4">
                    <FormField 
                        label="Email" 
                        value={email}
                        placeholder="Enter Your Email" 
                        type="email"
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <FormField 
                        label="Passowrd"
                        placeholder="Enter password" 
                        type="password" 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                       />
                    <Button type="submit">Log In</Button>
                    </form>

                   </div>
                </div>

            </div>
        </>
    )
}

export default SignIn