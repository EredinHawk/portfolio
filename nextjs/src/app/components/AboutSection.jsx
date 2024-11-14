"use client";
import Image from "next/image";
import { useState, useTransition } from "react";
import TabButton from "./TabButton";

const TAB_DATA = [
    {
        title: "Навыки",
        id: "skills",
        content: (
            <ul className="list-disc pl-2">
                <li>Go</li>
                <li>SQL / PostgreSQL</li>
                <li>Git</li>
                <li>Docker</li>
                <li>REST API</li>
            </ul>
        ),
    },
    {
        title: "Образование",
        id: "education",
        content: (
            <ul className="list-disc pl-2">
                <li>Высшее образование — "Инженер"</li>
                <li>Специальность — "Применение и эксплуатация автоматизированных систем"</li>
            </ul>
        ),
    }
];

const AboutSection = () => {
    const [tab, setTab] = useState("skills");
    const [isPending, startTransition] = useTransition();

    const handleTabChange = (id) => {
        startTransition(() => {
            setTab(id);
        });
    };

    return (
        <section className="text-white px-2" id="about">
            <div className="md:grid md:grid-cols-2 gap-8 xl:gap-16 items-center sm:py-8">
                <Image src="/images/about_foto.jpg" width={700} height={700} alt="abou_foto" className="sm:mb-8"/>
                <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
                    <h2 className="text-4xl font-bold text-white mb-4">Обо мне</h2>
                    <p className="text-base lg:text-lg">
                        Я начинающий Backend-разработчик. Мое знакомство с программированием произошло в институте,
                        где мы изучали C++, C#, HTML, CSS, принципы ООП и т.п. Это направление мне безумно нравилось, и я получал огромное удовольствие от разработки собственных приложений.
                        В настоящий момент я продолжил свое обучение самостоятельно и сконцентрировался на Backend разработке.
                        В планах освоить базовые навыки, писать как можно больше кода и найти свою первую работу.
                    </p>
                    <div className="flex flex-row jestify-start mt-8">
                        <TabButton
                            selectTab={() => handleTabChange("skills")}
                            active={tab === "skills"}
                        >
                            {" "}
                            Навыки{" "}
                        </TabButton>
                        <TabButton
                            selectTab={() => handleTabChange("education")}
                            active={tab === "education"}
                        >
                            {" "}
                            Образование{" "}
                        </TabButton>
                    </div>
                    <div className="mt-2 h-36 mx-4 lg:mx-0">
                        {TAB_DATA.find((t) => t.id === tab).content}
                    </div>
                </div>
            </div>
            <div className="h-20" id="empty"></div>
        </section>
    );
};

export default AboutSection;