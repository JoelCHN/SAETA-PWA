import Menu from '../components/ui/Menu';
import Footer from "../components/ui/Footer";
import Image from "next/image";

export default function Dashboard (){
    return (
        <div>
            <Menu/>
            <main className='w-full bg-white items-center p-10 border-[#6BC5E8]-top'>

                <div className='w-full text-center p-10 bg-[#6BC5E8] shadow-xl hover:bg-[#6BC] rounded-md mb-4 '>
                    <h2 className='text-center font-bold size-xl mb-6'> ¿SAETA? </h2>
                    <p className='text-sm text-black text-justify'>
                        lorem lorem ipsum dolor lorem ipsum dolor sit amet, consectetur adip lorem ipsum lorem ipsum dolor lorem ipsum...
                    </p>
                </div>

                <div className='w-full p-10 bg-[#6BC5E8] shadow-xl hover:bg-[#6BC] rounded-md mb-4 flex flex-col md:flex-row md:items-center md:gap-6'>
                    <div className='flex-1'>
                        <h2 className='text-center font-bold size-xl mb-6'> ¿Mis lugares favoritos? </h2>
                        <p className='text-sm text-black text-justify'>
                            lorem lorem ipsum dolor lorem ipsum dolor sit amet, consectetur adip lorem ipsum lorem ipsum dolor...
                        </p> 
                    </div>
                    <div className='flex justify-center md:justify-end'>
                        <Image 
                            src="/icon512_rounded.png"
                            alt="App logo"
                            width={100}
                            height={100}
                            priority
                        />
                    </div>
                </div>

                <div className='w-full text-center p-10 bg-[#6BC5E8] shadow-xl hover:bg-[#6BC] rounded-md mb-4'>
                    <h2 className='text-center font-bold size-xl mb-6'> ¿Donde me encuentro? </h2>
                    <p className='text-sm text-black text-justify'>
                        lorem lorem ipsum dolor lorem ipsum dolor sit amet, consectetur adip lorem ipsum lorem ipsum dolor lorem ipsum...
                    </p>
                </div>
            </main>
            <Footer/>
        </div>
    );
}
