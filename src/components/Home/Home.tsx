import { Button } from "../ui/button"

const HomeSection = () => {
    return (
        <>
        <section className="grid grid-cols-2 gap-8 bg-[#d2e1f7] h-[500px]">
        
        <div className="w-1/2 flex items-center justify-center flex-col mx-auto gap-[14px] font-bold font-bricolage">
 
        <p className="font-bold text-[#141414] text-[40px] text-center leading-[40px]">WELCOME TO<br /> BAHO SERVICES</p>
         
        <p className="text-[#141414]">Your Path to Healing Starts Here</p>
 
        <div>
         <Button>Learn More</Button>
        </div>
        </div>
        
        <div>
        <img src="/home1.png" alt="image" />
 
   
        </div>
         </section>

         <section className="grid grid-cols-2  bg-[#e3f0fa] h-[500px]">

         <div className="w-1/2 mx-auto gap-[14px] mt-24">
        <img src="/hero2.png" alt="image" />   
        </div>

        <div className="w-1/2 flex items-center justify-center flex-col mx-auto gap-[14px] ">
 
        <div className="font-bold font-bricolage">
        <p className=" text-[#141414] text-[40px] leading-[40px]">Promoting Healing Through Compassion</p>
        </div>
         
        <div className="space-y-2">
        <p className="text-[#141414] leading-[28px]">At SR Psychological Services, we offer a range of personalized psychotherapy services tailored to meet your unique needs. </p>
        
        <p className="text-[#141414] leading-[28px]">At SR Psychological Services, we offer a range of personalized psychotherapy services tailored to meet your unique needs. </p>
        </div>

        </div>

         </section>


         <section className="grid grid-cols-3 place-items-center gap-2 pt-[75px] pr-[20px] pl-[20px] pb-[75px] w-full">
            <div className="w-[33%] mx-auto">
                <img src="/hero3.png" alt="hero3"/>
                <h4 className="text-center mt-1 text-[28px] leading-[28px] font-bricolage font-bold">
                Telethealth<br />Sessions
                </h4>

           <div className="w-[200px] mx-auto mt-1">
           <p className="text-center">Our telehealth services make it easier for you to maintain consistency in therapy, regardless of your schedule or location.</p>
           </div>
            
            </div>
            <div className="w-[33%] mx-auto">
                <img src="/hero5.png" alt="hero3"/>
                <h4 className="text-center mt-1 text-[28px] leading-[28px] font-bricolage font-bold">
                Group<br />Sessions
                </h4>

           <div className="w-[200px] mx-auto mt-1">
           <p className="text-center"> Group therapy can be an effective way to address specific issues, while also building a sense of community and belonging.</p>
           </div>
            
            </div>
            <div className="w-[33%] mx-auto">
                <img src="/hero4.png" alt="hero3"/>
                <h4 className="text-center mt-1 text-[28px] leading-[28px] font-bricolage font-bold">
                Individual<br />Sessions
                </h4>

           <div className="w-[200px] mx-auto mt-1">
           <p className="text-center"> Our core mission is to offer individualized psychotherapy sessions that cater to the unique needs of each client.</p>
           </div>
            
            </div>
           

         </section>

         <section className="grid grid-cols-2  bg-[#e3f0fa] h-[660px]">

        <div className="w-1/2 mx-auto gap-[14px] mt-24">
            <img src="/hero6.png" alt="image" />   
            </div>

            <div className="w-1/2 flex items-center justify-center flex-col mx-auto gap-[14px] ">

            <div className="font-bold font-bricolage">
            <p className=" text-[#141414] text-[40px] leading-[40px]">Don&apos;t let mental health challenges</p>
            <p className=" text-[#141414] text-[40px] leading-[40px]">hold you back from living your best life.</p>
            </div>

            <div className="space-y-4 ">
            <p className="text-[#141414] leading-[28px]">Whether you are struggling with anxiety, depression, trauma, or relationship issues, we&apos;re here to support you every step of the way.</p>

            <p className="text-[#141414] leading-[28px]">Take the first step towards healing and schedule an appointment with us today.</p>
            <p className="text-[#141414] ">Your journey to better mental health starts here.</p>
            </div>

            </div>

          </section>
        </>
    )
}

export default HomeSection