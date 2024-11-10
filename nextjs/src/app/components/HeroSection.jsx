import React from 'react'
import Image from 'next/image'

const HeroSection = () => {
    return (
        <section>
            <div className='grid grid-cols-1 sm:grid-cols-12'>
                <div className="col-span-7 place-self-center text-center sm:text-left">
                    <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
                        Привет, меня зовут Айдар
                    </h1>
                    <p className="text-[#ADB7BE] text-base sm:text-lg lg:text-xl mb-6">
                        Я начинающий Backend-разработчик. Здесь я буду размещать свои работы в процессе обучения.
                    </p>
                    <div>
                        <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-white hover:bg-slate-200 text-black ">Наймите меня</button>
                        <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-transparent hover:bg-slate-800 text-white border border-white mt-3">Скачать резюме</button>
                    </div>
                </div>
                <div className="col-span-5 place-self-center mt-4 lg:mt-0">
                    <div className="rounded-full w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
                        <Image src="/images/hero-foto.png" alt="hero image" width={350} height={350} className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"/>
                    </div>
                </div>

            </div>

        </section>
    )
}

export default HeroSection
