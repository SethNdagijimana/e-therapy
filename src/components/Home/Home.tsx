import { Button } from "../ui/button"

const HomeSection = () => {
    return (
        <div className="grid grid-cols-2 gap-8 bg-[#212121]">
        
       <div>
       <img src="/home.jpeg" className="w-full h-[700px]"/>
       </div>
       
       <div className="flex items-center flex-col justify-center text-white text-4xl font-bricolage text-center">
       <p> In therapy, it’s important to make sure we’re addressing the most important issues. It’s easy to get off track, so I like to ask this question from time to time. Are you aware of anything that deserves closer attention?</p>

       <div className="mt-8">
        <Button type="button" className="font-bricolage bg-white text-black w-[200px] hover:text-white"> Join Us Now</Button>
       </div>
       </div>
        </div>
    )
}

export default HomeSection