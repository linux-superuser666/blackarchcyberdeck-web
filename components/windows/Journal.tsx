"use client";

import React, { useState, useRef, useEffect } from "react";

import DocsBtn from "../common/DocsBtn";
import DocsBtnDrop from "../common/DocsBtnDrop";
import DocsBtnPkg from "../common/DocsBtnPkg";

import AboutDocs from "@/components/docs/AboutDocs";
import ChangelogDocs from "@/components/docs/ChangelogDocs";
import InstallationDocs from "@/components/docs/InstallationDocs";
import SetupDocs from "@/components/docs/SetupDocs";
import FaqDocs from "@/components/docs/FaqDocs";
import TitleDoc from "../common/TitleDoc";
import KeybindDocs from "../docs/KeybindDocs";

type Page =
  | "about"
  | "changelog"
  | "installation"
  | "setup"
  | "faq"
  | "keybind";

const Journal = () => {
  const [guideOpen, setGuideOpen] = useState<boolean>(false);
  const [activePage, setActivePage] = useState<Page>("about");

  const handleChangePage = (page: Page) => {
    setActivePage(page);
  };

  const pages: Record<Page, React.ReactNode> = {
    about: <AboutDocs />,
    changelog: <ChangelogDocs />,
    installation: <InstallationDocs />,
    setup: <SetupDocs />,
    faq: <FaqDocs />,
    keybind: <KeybindDocs />,
  };

  return (
    <div className="border border-redx/50 h-full w-full grid grid-rows-[18px_1fr_15px] bg-black">
      {/* TOP MENU */}
      <div className="border-b border-redx/10 flex justify-between text-[9px] p-1 text-slate-100 h-full w-full">
        <div className="flex gap-3.5">
          <p>File</p>
          <p>Edit</p>
          <p>View</p>
          <p>Tools</p>
          <p>Help</p>
        </div>
        <div
          className="uppercase font-bold text-redx"
          style={{ textShadow: "0 0 4px #f75049" }}
        >
          Documentation
        </div>
      </div>

      {/* MAIN AREA */}
      <div className="border-b h-full bg-black w-full p-1 overflow-hidden border-redx/10 ">
        <div
          className="size-full font-rajdhani px-2 text-[12px] text-greyx flex flex-col gap-1"
          style={{
            background:
              "linear-gradient(178deg,rgba(247, 80, 73, 0.2) 0%, rgba(3, 3, 24, 0.1) 42%, rgba(14, 14, 23, 0.1) 92%)",
          }}
        >
          {/* HEADER */}
          <div className="pt-2 pb-2">
            <TitleDoc text="BlackArch Cyberdeck" />
          </div>
          {/* CONTENT AREA */}
          <div className="flex gap-2 w-full h-full">
            {/* LEFT SIDEBAR */}
            <div className="flex flex-col gap-1" style={{ width: "200px" }}>
              <DocsBtn
                text="About"
                active={activePage === "about"}
                onClick={() => handleChangePage("about")}
              />

              <DocsBtn
                text="Changelog"
                active={activePage === "changelog"}
                onClick={() => handleChangePage("changelog")}
              />

              <div>
                <DocsBtnDrop
                  text="User Guide"
                  className="mb-1"
                  open={guideOpen}
                  active={
                    activePage === "installation" ||
                    activePage === "setup" ||
                    activePage === "keybind"
                  }
                  onClick={() => setGuideOpen((prev) => !prev)}
                />

                {guideOpen && (
                  <div className="flex flex-col gap-1 ml-4">
                    <DocsBtnPkg
                      text="Installation"
                      active={activePage === "installation"}
                      onClick={() => handleChangePage("installation")}
                    />
                    <DocsBtnPkg
                      text="Setup"
                      active={activePage === "setup"}
                      onClick={() => handleChangePage("setup")}
                    />
                    <DocsBtnPkg
                      text="Keybind"
                      active={activePage === "keybind"}
                      onClick={() => handleChangePage("keybind")}
                    />
                  </div>
                )}
              </div>

              <DocsBtn
                text="FAQ"
                active={activePage === "faq"}
                onClick={() => handleChangePage("faq")}
              />
            </div>
            {/* MAIN CONTENT */}
            <div className="flex-1 overflow-y-auto pr-2">
              {pages[activePage]}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Journal;
