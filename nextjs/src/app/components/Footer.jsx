import React from "react";
import Image from "next/image";
import Link from "next/link";
import GithubIcon from "../../../public/github-icon.svg"
import RoadmapIcon from "../../../public/roadmap-icon.svg"

const Footer = () => {
  return (
    <footer className=" flex flex-row footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white md:grid md:grid-cols-2 gap-2 xl:gap-16 items-center sm:py-8">
      <div className="flex flex-col text-white">
        <p>Email:Eredinhawk@gmail.com</p>
        <p>Telegram:@FazlievY</p>
      </div>
      <div className="container flex justify-end">
        <Link href="https://github.com/EredinHawk" className="mr-2" target="_blank">
          <Image src={GithubIcon} alt="Github Icon" />
        </Link>
        <Link href="https://roadmap.sh/u/eredinhawk" target="_blank">
          <Image src={RoadmapIcon} alt="Roadmap Icon" />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;