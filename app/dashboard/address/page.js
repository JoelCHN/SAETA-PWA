import Menu from '../../components/ui/Menu';
import AsideMenu from '../../components/ui/AsideMenu';
import Image from 'next/image';
import Footer from '../../components/ui/Footer';
import Link from 'next/link';

export default function Address() {
  return (
    <>
    <Menu />
    <AsideMenu />

    <div className="p-4 sm:ml-64">
      <div className="p-4 mt-14">
<div className='w-full bg-white rounded-t-xl'>

              <div className='w-full text-sm text-center pb-4 pt-4'>
              <h1 className='text-black text-xl font-30 font-bold md:text-md'>Selecciona tu tipo de transporte</h1>
            </div>
            <div className='w-full pt-10 pb-5 rounded-t-full grid p-2 gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
              
      
              <Link href="#" className='bg-[#6BC5E8] rounded-xl shadow-xl p-4 h-60 relative overflow-hidden'>
                <p className='text-xl mb-4'>Ban</p>
                <div className='w-full h-full flex justify-center items-center'>
                  <Image
                    src="/icons/Ban.png"
                    alt="Ban"
                    width={160}
                    height={160}
                    className="object-contain max-h-full sm:w-32 sm:h-32"
                    priority
                  />
                </div>
              </Link>

              <Link href="#" className='bg-[#6BC5E8] rounded-xl shadow-xl p-4 h-60 relative overflow-hidden'>
                <p className='text-xl mb-4'>Camión liguero</p>
                <div className='w-full h-full flex justify-center items-center'>
                  <Image
                    src="/icons/Camionl.png"
                    alt="Camión liguero"
                    width={160}
                    height={160}
                    className="object-contain max-h-full"
                    priority
                  />
                </div>
              </Link>

              <Link href="#" className='bg-[#6BC5E8] rounded-xl shadow-xl p-4 h-60 relative overflow-hidden'>
                <p className='text-xl mb-4'>Camión</p>
                <div className='w-full h-full flex justify-center items-center'>
                  <Image
                    src="/icons/Camion.png"
                    alt="Camión"
                    width={160}
                    height={160}
                    className="object-contain max-h-full"
                    priority
                  />
                </div>
              </Link>

            </div>    
          </div>
      </div>
      <Footer />
    </div>
   </>
  );
}
