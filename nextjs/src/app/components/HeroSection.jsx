"use client"
import React from 'react'
import Link from 'next/link'

const HeroSection = () => {
    const onButtonClick = () => {

        fetch("CV.pdf").then((response) => {
            response.blob().then((blob) => {

                const fileURL =
                    window.URL.createObjectURL(blob);

                let alink = document.createElement("a");
                alink.href = fileURL;
                alink.download = "CV.pdf";
                alink.click();
            });
        });
    };

    return (
        <>
            <section>
                <div className='grid grid-cols-1 sm:grid-cols-12 pb-1 sm:pb-72 pt-24 md:pb-72 lg:pb-80'>
                    <div className="col-span-7 place-self-center text-center sm:text-left">
                        <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
                            Привет, я Айдар
                        </h1>
                        <p className="text-[#ADB7BE] text-base sm:text-lg lg:text-xl">
                            Начинающий Backend-разработчик.
                        </p>
                        <p className="text-[#ADB7BE] text-base sm:text-lg lg:text-xl mb-6">
                            Здесь я буду размещать свои работы.
                        </p>
                        <div>
                            <Link target="_blank" href={"https://hh.ru/resume/23ff8ed1ff0e01d60d0039ed1f7a44566a3457"}>
                                <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-white hover:bg-slate-200 text-black ">Наймите меня</button>
                            </Link>
                            <button onClick={onButtonClick} className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-transparent hover:bg-slate-800 text-white border border-white mt-3">Скачать резюме</button>
                        </div>
                    </div>
                    <div className="col-span-5 place-self-center mt-4 lg:mt-0">
                        <div className="rounded-full w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
                            {/* Тут был не красивый логотип */}
                        </div>
                    </div>

                </div>

            </section>
        </>

    )
}

export default HeroSection
