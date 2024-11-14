"use client";
import React, { useState } from "react";
import GithubIcon from "../../../public/github-icon.svg"
import Link from "next/link";
import Image from "next/image";

const EmailSection = () => {
  return (
    <section
      id="contact"
      className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative"
    >
      <div className="z-10">
        <h5 className="text-xl font-bold text-white my-2">
          Давайте знакомиться!
        </h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          {" "}
          Мой почтовый ящик всегда открыт. 
          Если у вас возникнут вопросы или вы просто захотите поздороваться,
          я постараюсь сделать все возможное, чтобы перезвонить вам!
        </p>
        <div className="socials flex flex-row gap-2">
          <Link href="https://github.com/EredinHawk" target="_blank">
            <Image src={GithubIcon} alt="Github Icon" />
          </Link>
        </div>
      </div>
      <div className="flex flex-col">
          
      </div>
    </section>
  );
};

export default EmailSection;