"use client";

import React, { useEffect, useState, useRef } from "react";
import TitleDoc from "../common/TitleDoc";
import SubtitleDoc from "../common/SubtitleDocs";

type ChangelogItem = {
  text: string;
};

type ChangelogSection = {
  id: string;
  title: string;
  items: ChangelogItem[];
};

type Changelog = {
  version: string;
  releaseDate: string;
  sections: ChangelogSection[];
};

const ChangelogDocs = () => {
  const [changelogs, setChangelogs] = useState<Changelog[]>([]);
  const sectionRefs = useRef<Record<string, HTMLDivElement | null>>({});

  useEffect(() => {
    fetch("/api/changelogs")
      .then((res) => res.json())
      .then((data) => setChangelogs(data));
  }, []);

  const scrollToSection = (id: string) => {
    sectionRefs.current[id]?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <div className="flex gap-1 tracking-wider justify-between">
      {/* MAIN CONTENT */}
      <div
        className="flex w-full flex-col px-4 gap-4"
        style={{ height: "320px" }}
      >
        <TitleDoc text="Changelog" />

        <div className="flex flex-col overflow-y-auto pr-1 journal-list gap-6 flex-1 min-h-0">
          {changelogs.map((log, logIndex) => (
            <div
              key={`log-${log.version}-${logIndex}`}
              className="flex flex-col gap-4"
            >
              {/* VERSION HEADER */}
              <div>
                <SubtitleDoc text={log.version} />
              </div>

              {log.sections.map((section, sectionIndex) => {
                const sectionId = `section-${logIndex}-${sectionIndex}`;

                return (
                  <div
                    key={`section-${log.version}-${section.id}-${sectionIndex}`}
                    ref={(el) => {
                      sectionRefs.current[sectionId] = el;
                    }}
                    className="flex flex-col gap-1"
                  >
                    <SubtitleDoc text={section.title} />

                    <div className="flex flex-col gap-1">
                      {section.items.map((item, itemIndex) => (
                        <div
                          key={`item-${logIndex}-${sectionIndex}-${itemIndex}`}
                          className="flex w-full flex-row gap-2 items-start"
                        >
                          <div className="size-1 mt-1 rounded-full bg-greyx" />
                          <div className="text-[10px]">{item.text}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>

      {/* SIDEBAR TOC */}
      <div className="w-48 flex flex-col gap-3" style={{ height: "320px" }}>
        <TitleDoc text="Table of Contents" />
        <div className="flex size-full overflow-x-hidden overflow-y-auto journal-list flex-col gap-3">
          {changelogs.map((log, logIndex) =>
            log.sections.map((section, sectionIndex) => {
              const sectionId = `section-${logIndex}-${sectionIndex}`;

              return (
                <button
                  key={`toc-${log.version}-${section.id}-${sectionIndex}`}
                  onClick={() => scrollToSection(sectionId)}
                  className="text-left text-greenx font-medium text-[10px] uppercase hover:text-redx transition"
                >
                  {log.version} — {section.title}
                </button>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
};

export default ChangelogDocs;
