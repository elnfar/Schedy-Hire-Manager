import ProductSection from "@/components/sections/product-section";
import CustomShape from "@/components/shapes/custom-shape";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
export default async function Home() {



  return (
    <main>
        <div className="bg-[#16182a] relative flex flex-col md:flex-row  items-center overflow-x-hidden">
              <div className=" container flex justify-center px-16 h-screen font-sans flex-col gap-4 text-start">
                <CustomShape/>
                <div className="md:w-[700px] leading-[1.1] space-y-6">
                  <h1 className="text-white md:text-[4rem] text-[2.2rem] font-extrabold">Manage Your Team and  Work <span className="text-purple-400">Force</span> With Only One Tool.</h1>
                  <p className=" text-gray-400 md:text-[1.5rem]  leading-[1.4]">For <span className="text-purple-400 font-bold">Hiry</span> helps thousands of businesses, from startups to large enterprises build a high performance culture.</p>
                </div>
          


                    <div className="my-4 space-x-6 text-start z-50">
                        <Button asChild type="button" className="border-2"><Link href='/get-demo'>Get Demo</Link></Button>
                        <Button asChild type="button" variant="secondary"><Link href='/get-demo'>Free Trial</Link></Button>
                    </div>


              </div>

         <div className="">
          <Image src='/a.png' alt="Image" width={400} height={400} className="ml-12 right-0 top-0 z-50 md:h-[400px] md:w-[1440px] object-cover"/>
         </div>
            
        </div>



      <ProductSection/>
    </main>
  )
}
