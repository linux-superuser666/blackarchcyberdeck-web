"use client";

import React, { useEffect, useState } from "react";
import BinLogo from "../common/BinLogo";

interface Commit {
  sha: string;
  commit: {
    message: string;
    author: {
      name: string;
      date: string;
    };
  };
}

const SHOW_DURATION = 9000;
const HIDE_DURATION = 7000;
const CONTENT_DELAY = 400;

const TodoPanel = () => {
  const [commit, setCommit] = useState<Commit | null>(null);
  const [isNew, setIsNew] = useState(false);

  const [containerVisible, setContainerVisible] = useState(false);
  const [contentVisible, setContentVisible] = useState(false);

  useEffect(() => {
    let mainTimeout: NodeJS.Timeout;
    let innerTimeout: NodeJS.Timeout;

    const loop = () => {
      setContainerVisible(true);

      innerTimeout = setTimeout(() => {
        setContentVisible(true);
      }, CONTENT_DELAY);

      mainTimeout = setTimeout(() => {
        setContentVisible(false);

        innerTimeout = setTimeout(() => {
          setContainerVisible(false);
        }, CONTENT_DELAY);

        mainTimeout = setTimeout(loop, HIDE_DURATION);
      }, SHOW_DURATION);
    };

    loop();

    return () => {
      clearTimeout(mainTimeout);
      clearTimeout(innerTimeout);
    };
  }, []);

  useEffect(() => {
    const fetchCommit = async () => {
      try {
        const res = await fetch(
          "https://api.github.com/repos/linux-superuser666/BlackArchCyberpunk2077/commits?per_page=1"
        );

        const data = await res.json();
        const latestCommit = data[0];

        const lastSha = localStorage.getItem("lastCommitSha");

        if (lastSha && lastSha !== latestCommit.sha) {
          setIsNew(true);

          setTimeout(() => {
            setIsNew(false);
          }, 4000);
        }

        localStorage.setItem("lastCommitSha", latestCommit.sha);
        setCommit(latestCommit);
      } catch (error) {
        console.error("Failed to fetch commit:", error);
      }
    };

    fetchCommit();
  }, []);

  const formatDate = (isoDate: string) => {
    const date = new Date(isoDate);

    const formattedDate = date.toLocaleDateString("id-ID", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });

    const formattedTime = date.toLocaleTimeString("id-ID", {
      hour: "2-digit",
      minute: "2-digit",
    });

    return { formattedDate, formattedTime };
  };

  return (
    <div
      className={`absolute z-50 right-0 mr-[12px] top-36 w-[160px] h-fit flex flex-row gap-1 justify-end
      transition-all duration-500 ease-in-out transform origin-right
      ${
        containerVisible
          ? "opacity-100 scale-x-100"
          : "opacity-0 scale-x-0 pointer-events-none"
      }`}
    >
      <div className="flex flex-col w-full gap-0 leading-none">
        <p className="text-[5px] flex w-full justify-end text-redx/80 uppercase font-orbitron">
          To - do panel 1.001.1
        </p>

        <div
          className={`text-redx h-[160px] w-full flex items-start
          transition-all duration-500 ease-in-out
          ${
            contentVisible
              ? "opacity-100 translate-x-0"
              : "opacity-0 translate-x-4"
          }`}
        >
          <div className="flex w-full font-medium flex-col gap-1 text-yellowx text-xs">
            <div className="w-full uppercase border-b border-redx/30 tracking-wide">
              Update Logs
            </div>

            {!commit && <div className="text-[9px] opacity-50">loading...</div>}

            {commit && (
              <div className="flex flex-col gap-1 text-[11px]">
                {isNew && (
                  <div className="text-redx text-[9px] animate-pulse tracking-widest">
                    ⚠ NEW UPDATE DETECTED
                  </div>
                )}

                <div className="flex flex-row gap-1">
                  <div
                    id="iconNewCommits"
                    className="bg-yellowx/40 size-3.5 p-px [clip-path:polygon(0_0,_100%_0%,_100%_100%,_47%_100%,_0%_50%)]"
                  >
                    <div className="bg-black size-full [clip-path:polygon(0_0,_100%_0%,_100%_100%,_47%_100%,_0%_50%)] text-center p-px">
                      <div className="bg-yellowx size-full [clip-path:polygon(0_0,_100%_0%,_100%_100%,_47%_100%,_0%_50%)] text-black text-[9px] text-center font-bold">
                        !
                      </div>
                    </div>
                  </div>

                  <div className="flex-1 break-words">
                    {commit.commit.message}
                  </div>
                </div>

                <div className="text-[9px] pl-4 opacity-70">
                  Author: {commit.commit.author.name}
                </div>

                <div className="text-[9px] pl-4 opacity-70">
                  Date: {formatDate(commit.commit.author.date).formattedDate} |{" "}
                  {formatDate(commit.commit.author.date).formattedTime}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <BinLogo iconSrc="/icons/hypr-dbus.png" />
    </div>
  );
};

export default TodoPanel;
