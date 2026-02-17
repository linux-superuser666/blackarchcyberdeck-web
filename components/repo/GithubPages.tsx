import React from "react";
import Image from "next/image";
import Link from "next/link";
import ButtonIcon from "./ButtonIcon";
const GithubPages = () => {
  type RepoStars = {
    profileRepo: number;
    blackarchRepo: number;
  };
  type GithubStats = {
    repos: number;
    followers: number;
    following: number;
    stars: number;
  };
  const [repoStars, setRepoStars] = React.useState<RepoStars | null>(null);
  const [githubData, setGithubData] = React.useState<GithubStats | null>(null);
  const baseUrl =
    "https://cdn.jsdelivr.net/gh/linux-superuser666/linux-superuser666@main/img/";
  const cdnImgReadme = [
    {
      images: [{ src: "hello.svg", width: 120 }],
    },
    {
      images: [{ src: "ws.svg", width: 40 }],
    },
    {
      images: [
        { src: "blackarch-logo.svg", width: 60 },
        { src: "wayland-logo.svg", width: 60 },
        { src: "kittyterm-logo.svg", width: 60 },
        { src: "hyprland-logo.svg", width: 50 },
        { src: "vscode-logo.svg", width: 50 },
        { src: "quickshell-logo.svg", width: 50 },
      ],
    },
    {
      images: [{ src: "uiux.svg", width: 80 }],
    },
    {
      images: [{ src: "cyberpunk2077.svg", width: 60 }],
    },
    {
      images: [{ src: "skill.svg", width: 20 }],
    },
    {
      images: [
        { src: "html5-logo.svg", width: 50 },
        { src: "css3-logo.svg", width: 50 },
        { src: "js-logo.svg", width: 70 },
        { src: "tailwindcss-logo.svg", width: 70 },
        { src: "nextjs-logo.svg", width: 50 },
      ],
    },
    {
      images: [{ src: "social.svg", width: 90 }],
    },
    {
      images: [
        { src: "saweria-logo.svg", width: 50 },
        { src: "kofi-logo.svg", width: 50 },
      ],
    },
  ];

  const profileTabs = [
    { label: "Overview", icon: "", numcount: 0 },
    { label: "Repositories", icon: "", numcount: githubData?.repos ?? 0 },
    { label: "Projects", icon: "", numcount: 0 },
    { label: "Packages", icon: "", numcount: 0 },
    { label: "Stars", icon: "", numcount: githubData?.stars ?? 0 },
  ];

  React.useEffect(() => {
    const fetchGithubData = async () => {
      try {
        const userRes = await fetch(
          "https://api.github.com/users/linux-superuser666"
        );
        const userData = await userRes.json();

        // Fetch repo 1
        const repo1Res = await fetch(
          "https://api.github.com/repos/linux-superuser666/linux-superuser666"
        );
        const repo1 = await repo1Res.json();

        // Fetch repo 2
        const repo2Res = await fetch(
          "https://api.github.com/repos/linux-superuser666/BlackArchCyberpunk2077"
        );
        const repo2 = await repo2Res.json();

        setGithubData({
          repos: userData.public_repos,
          followers: userData.followers,
          following: userData.following,
          stars: 0, // tidak dipakai lagi
        });

        setRepoStars({
          profileRepo: repo1.stargazers_count,
          blackarchRepo: repo2.stargazers_count,
        });
      } catch (err) {
        console.error(err);
      }
    };

    fetchGithubData();
  }, []);

  return (
    <div className="size-full font-Inter border-l text-greyx border-t border-redx/30 bg-[#0d1117] grid grid-cols-1 grid-rows-[45px_1fr] gap-1">
      <div className="grid size-full grid-rows-[25px_20px]">
        <div className="size-full px-2 pt-1 bg-[#010409] flex-row flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="border border-greyx/30 size-4 p-[2px_3px_2px_2px] rounded-sm text-[9px] font-light font-nerdfonts flex items-center">
              󰍜
            </div>
            <div className="flex w-fit flex-row gap-2 items-center text-sm font-nerdfonts">
              
            </div>
            <div className="text-[9px]">linux-superuser666</div>
          </div>
          <div className="flex flex-row gap-2 items-center justify-end pr-1">
            <div className="rounded-sm w-[100px] flex items-center pl-1 pr-0.5 border border-greyx/20 gap-1 py-px">
              <div className="font-nerdfonts text-[8px] pr-px"></div>
              <div className="text-[8px]">type </div>
              <div className="rounded-sm flex items-center size-3.5 gap-px border border-greyx/20 justify-center">
                /
              </div>
              <div className="text-[8px]">to search </div>
            </div>
            <div className="flex">
              <div className="rounded-l-sm w-fit flex items-center pl-1 pr-0.5 border border-greyx/20 gap-1 py-1">
                <div className="font-nerdfonts text-[8px] pr-1.5"></div>
              </div>
              <div className="rounded-r-sm w-fit flex items-center pl-1 pr-0.5 border-y border-r  border-greyx/20 gap-1 py-1">
                <div className="font-nerdfonts text-[8px] pr-1">󰅀</div>
              </div>
            </div>

            <div className="text-greyx/30">|</div>
            <div className="rounded-sm w-fit flex items-center pl-1 pr-0.5 border border-greyx/20 gap-1 py-1">
              <div className="font-nerdfonts text-[8px] pr-1"></div>
              <div className="font-nerdfonts text-[8px] pr-1">󰅀</div>
            </div>
            <ButtonIcon icon="" />
            <ButtonIcon icon="" />
            <ButtonIcon icon="" />
            <ButtonIcon icon="" />
            <div className="size-fit flex items-center justify-center text-xs font-nerdfonts">
              
            </div>
          </div>
        </div>
        <div className="size-full pl-2 bg-[#010409] border-greyx/20 border-b grid grid-cols-1 gap-2">
          <div className="size-full gap-4 flex flex-row justify-start items-center">
            {profileTabs.map((tab, index) => (
              <div
                key={index}
                className="h-full w-fit gap-2 flex flex-row items-center cursor-pointer hover:text-white transition"
              >
                <div className="text-[7px] font-nerdfonts">{tab.icon}</div>
                <div className="text-[8px] tracking-wide">{tab.label}</div>
                {tab.numcount > 0 && (
                  <div className="min-w-[13px] h-[13px] pt-px rounded-full bg-slate-500/20 font-inter flex items-center justify-center text-[8px]">
                    {tab.numcount}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="size-full grid grid-cols-[1fr_250px_250px] grid-rows-[1fr_50px] gap-2 pl-0 pr-12 pb-2 p-1">
        <div className="row-span-2 p-1 gap-4 size-full flex flex-col items-center text-greyx/70">
          <div className="flex items-center p-1 justify-center border border-greyx/30 rounded-full bg-black/80 size-24">
            <Image
              src="/icons/mrnngstr666.png"
              alt=""
              width={80}
              height={94}
              className="object-contain"
            />
          </div>
          <div className="w-full pl-12 pr-12 gap-2 flex flex-col">
            <div className="w-full h-fit font-bold">mrnngstr666</div>
            <div className="w-full h-fit">linux-superuser666</div>
            <div className="w-full h-fit rounded-sm border border-greyx/30 py-1  bg-[#262C36]">
              <Link
                className="size-full justify-center flex items-center"
                target="_blank"
                href="https://github.com/linux-superuser666/"
              >
                follow
              </Link>
            </div>
            <div className=" w-full items-center flex gap-2">
              <div className="text-[7px] font-nerdfonts "></div>
              <div>{githubData?.followers ?? "-"}</div>
              <div>followers.</div>
              <div>{githubData?.following ?? "-"}</div>
              <div>following</div>
            </div>
            <div>Block or Report</div>
          </div>
        </div>
        {/* readme.md */}
        <div className="col-span-2 border border-greyx/20 rounded-sm grid grid-cols-1 grid-rows-[20px_1fr] p-3">
          <div className="size-full">linux-superuser666/README.md</div>
          <div className="size-full flex items-center flex-col gap-3">
            {cdnImgReadme.map((section, index) => (
              <div
                key={index}
                className="flex justify-center items-center gap-2 flex-wrap"
              >
                {section.images.map((img) => (
                  <Image
                    key={img.src}
                    src={`${baseUrl}${img.src}`}
                    alt={img.src}
                    width={img.width}
                    height={0}
                    sizes="100vw"
                    style={{ height: "auto" }}
                    className="object-contain"
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
        {/* repo */}
        <div className="col-start-2 row-start-2 size-full">
          <Link
            target="_blank"
            className=" border px-2 py-1 border-greyx/20 rounded-sm grid group grid-cols-1 grid-rows-3 tracking-wide size-full"
            href="https://github.com/linux-superuser666/BlackArchCyberpunk2077"
          >
            <div className="size-full items-center flex gap-1">
              <div className="text-[10px] font-nerdfonts "></div>
              <div className="text-bluex group-hover:underline font-bold">
                BlackArchCyberpunk2077
              </div>
              <div className="text-[9px] py-px size-fit px-1 rounded-4xl  border border-greyx/20 text-greyx/50">
                Public
              </div>
            </div>
            <div className="text-[8px] text-greyx/50 size-full flex items-center">
              Quickshell, Hyprland, Wayland
            </div>
            <div className="size-full flex gap-1 items-center">
              <div className="size-2 bg-orangex rounded-full"></div>
              <div className="text-[8px]">QML</div>
              <div className="text-[8px] font-nerdfonts "></div>
              <div className="text-[8px] pl-1">
                {repoStars?.blackarchRepo ?? "-"}
              </div>
            </div>
          </Link>
        </div>
        <div className="group col-start-3 row-start-2 size-full">
          <Link
            className="size-full relative z-10"
            target="_blank"
            href="https://github.com/linux-superuser666/linux-superuser666"
          >
            <div className="size-full border border-greyx/20 rounded-sm grid grid-cols-1 py-1 px-2 grid-rows-3">
              <div className="size-full items-center flex gap-1">
                <div className="text-[10px] font-nerdfonts "></div>
                <div className="group-hover:underline text-bluex font-bold">
                  linux-superuser666
                </div>
                <div className="text-[9px] py-px size-fit px-1 rounded-4xl  border border-greyx/20 text-greyx/50">
                  Public
                </div>
              </div>
              <div className="text-[8px] text-greyx/50 size-full flex items-center">
                Github Profile
              </div>

              <div className="size-full flex gap-1 items-center">
                <div className="text-[8px]  font-nerdfonts "></div>
                <div className="text-[8px] pl-1">
                  {repoStars?.profileRepo ?? "-"}
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default GithubPages;
