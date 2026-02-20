"use client";

import React, { useRef } from "react";
import TitleDoc from "../common/TitleDoc";
import SubtitleDoc from "../common/SubtitleDocs";

const faqSections = [
  {
    id: "note",
    title: "Note",
    content: (
      <>
        <div className="uppercase text-bluex">
          <span className="font-nerdfonts"> </span>
          <span className="font-bold">Note</span>
        </div>

        <div>
          This page is being actively expanded upon as more common questions
          come up.
        </div>
      </>
    ),
  },
  {
    id: "requirements",
    title: "System Requirements",
    content: (
      <>
        <SubtitleDoc text="System Requirements" />
        <p>
          BlackArch Cyberdeck is designed for Arch-based distributions with
          Hyprland compositor installed.
        </p>
        <p>Until Now Only support Arch Linux & Black Arch Linux</p>
      </>
    ),
  },
  {
    id: "troubleshoot",
    title: "Troubleshooting",
    content: (
      <>
        <SubtitleDoc text="Troubleshooting" />
        <p>
          If themes or icons are not applied correctly, ensure folders are
          placed in the correct directory and restart your system.
        </p>
      </>
    ),
  },
];

const FaqDocs = () => {
  const sectionRefs = useRef<Record<string, HTMLDivElement | null>>({});
  const scrollToSection = (id: string) => {
    sectionRefs.current[id]?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <div className="flex tracking-wider gap-1 justify-between">
      <div
        className="flex w-full flex-col px-4 gap-4"
        style={{ height: "320px" }}
      >
        <TitleDoc text="Frequently Asked Questions" />
        <div className="flex overflow-x-hidden overflow-y-auto radio-list flex-col gap-6 text-[12px] font-medium leading-relaxed">
          {faqSections.map((section) => (
            <div
              key={section.id}
              ref={(el) => {
                sectionRefs.current[section.id] = el;
              }}
              className="flex flex-col gap-2 scroll-mt-4"
            >
              <div className="text-redx uppercase tracking-widest text-[11px]">
                {section.title}
              </div>
              {section.content}
            </div>
          ))}
        </div>
      </div>
      <div className="w-48 flex flex-col gap-3">
        <TitleDoc text="Table of Contents" />
        <div className="flex flex-col gap-2">
          {faqSections.map((section) => (
            <button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className="text-left text-[10px] uppercase text-greenx hover:text-redx transition-all"
            >
              {section.title}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FaqDocs;
