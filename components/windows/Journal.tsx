"use client";

import React, { useState } from "react";

import DocsBtn from "../common/DocsBtn";
import DocsBtnDrop from "../common/DocsBtnDrop";
import DocsBtnPkg from "../common/DocsBtnPkg";

import AboutDocs from "@/components/docs/AboutDocs";
import ChangelogDocs from "@/components/docs/ChangelogDocs";
import InstallationDocs from "@/components/docs/InstallationDocs";
import SetupDocs from "@/components/docs/SetupDocs";
import FaqDocs from "@/components/docs/FaqDocs";
import TitleDoc from "../common/TitleDoc";

type Page = "about" | "changelog" | "installation" | "setup" | "faq";

const Journal = () => {
  const [guideOpen, setGuideOpen] = useState<boolean>(false);
  const [activePage, setActivePage] = useState<Page>("about");

  const handleChangePage = (page: Page) => {
    setActivePage(page);

    // Auto open dropdown jika dari user guide
    if (page === "installation" || page === "setup") {
      setGuideOpen(true);
    } else {
      setGuideOpen(false);
    }
  };

  const pages: Record<Page, React.ReactNode> = {
    about: <AboutDocs />,
    changelog: <ChangelogDocs />,
    installation: <InstallationDocs />,
    setup: <SetupDocs />,
    faq: <FaqDocs />,
  };

  return (
    <div className="border border-redx/50 h-full w-full grid grid-rows-[18px_1fr_15px] bg-neutral-900/90">
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
      <div className="border-b h-full w-full border-redx/10 p-1">
        <div className="size-full font-rajdhani bg-black p-2 text-[12px] text-greyx flex flex-col gap-4">
          {/* HEADER */}
          <TitleDoc text="BlackArch Cyberdeck" />
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

              <DocsBtnDrop
                text="User Guide"
                open={guideOpen}
                active={activePage === "installation" || activePage === "setup"}
                onClick={() => setGuideOpen((prev) => !prev)}
              />

              {guideOpen && (
                <div className="flex flex-col gap-1 ml-3">
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
                </div>
              )}

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
            {/* RIGHT SIDEBAR */}
            <div className="w-36">side bar right</div>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <div className="border size-full border-redx/10 text-[9px] uppercase text-slate-100 flex justify-end px-2 items-center">
        BlackArch System v1.0
      </div>
    </div>
  );
};

export default Journal;
