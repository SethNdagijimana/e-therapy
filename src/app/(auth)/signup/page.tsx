"use client"

import { FormField } from "@/components/FormField"
import { Navbar } from "@/components/Navbar"
import { Button } from "@/components/ui/button"

const SignUp = () => {
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
                    <FormField label="Name" placeholder="Enter Your user Name" type="text"/>
                    <FormField label="Email" placeholder="Enter Your Email" type="email"/>
                    <FormField label="Passowrd" placeholder="Enter password" type="password"/>
                    <FormField label="Retype Password" placeholder="retype password" type="password"/>
                    <Button type="submit">Submit</Button>
                    </form>

                   </div>
                </div>

            </div>
        </>
    )
}

export default SignUp