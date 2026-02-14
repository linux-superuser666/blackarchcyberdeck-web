import React from "react";
import Image from "next/image";
const GithubPages = () => {
  type GithubStats = {
    repos: number;
    followers: number;
    following: number;
    stars: number;
  };

  const [githubData, setGithubData] = React.useState<GithubStats | null>(null);

  const menuItems = ["Platform", "Solution", "Pricing", "Docs", "Support"];
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
    { label: "Repositories", icon: "", numcount: githubData?.repos ?? 0 },
    { label: "Projects", icon: "", numcount: 0 },
    { label: "Packages", icon: "", numcount: 0 },
    { label: "Stars", icon: "", numcount: githubData?.stars ?? 0 },
  ];

  React.useEffect(() => {
    const fetchGithubData = async () => {
      try {
        const userRes = await fetch(
          "https://api.github.com/users/linux-superuser666"
        );
        const userData = await userRes.json();

        const repoRes = await fetch(
          "https://api.github.com/users/linux-superuser666/repos?per_page=100"
        );
        const repos = await repoRes.json();

        const totalStars = repos.reduce(
          (acc: number, repo: any) => acc + repo.stargazers_count,
          0
        );

        setGithubData({
          repos: userData.public_repos,
          followers: userData.followers,
          following: userData.following,
          stars: totalStars,
        });
      } catch (err) {
        console.error(err);
      }
    };

    fetchGithubData();
  }, []);

  return (
    <div className="size-full border-l text-greyx border-t border-redx/30 bg-black/90 grid grid-cols-1 grid-rows-[25px_20px_1fr] gap-2">
      <div className="size-full border-greyx/20 border-b">
        <div className="grid size-full grid-cols-[2fr_1fr] grid-rows 1">
          <div className="flex size-full pl-1 flex-row gap-2 items-center">
            <div className="text-sm font-nerdfonts"></div>
            {menuItems.map((item, index) => (
              <div key={index} className="text-[8px] flex gap-1 text-greyx">
                <div>{item}</div>
                <div className="font-nerdfonts">󰅀</div>
              </div>
            ))}
          </div>
          <div className="flex flex-row gap-2 items-center justify-end pr-4">
            <div className="rounded-sm w-[200px] flex items-center pl-1 pr-0.5 gap-px border border-greyx/20">
              <div className="font-nerdfonts text-[8px] pr-px"></div>
              <input
                id="github-search"
                type="text"
                placeholder="Search or jump to..."
                className="bg-black text-[8px] w-full px-2 py-1 outline-none"
              />
              <div className="rounded-sm flex items-center size-3.5 gap-px border border-greyx/20 justify-center">
                /
              </div>
            </div>

            <div className="w-10 h-fit py-1 px-1 rounded-sm flex items-center justify-center text-[8px] ">
              Sign in
            </div>
            <div className="w-10 h-fit py-1 px-1 rounded-sm border border-greyx/20 flex items-center justify-center text-[8px]">
              Sign up
            </div>
            <div className="size-fit py-1 pl-1 pr-1.5 rounded-sm border border-greyx/20 flex items-center justify-center text-[8px]">
              <div className="font-nerdfonts"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="size-full border-greyx/20 border-b grid grid-cols-[1fr_500px] gap-2 px-12">
        <div></div>
        <div className="size-full pl-4 gap-4 flex flex-row justify-start items-center">
          {profileTabs.map((tab, index) => (
            <div
              key={index}
              className="h-full w-fit gap-2 flex flex-row items-center cursor-pointer hover:text-white transition"
            >
              <div className="text-[7px] font-nerdfonts">{tab.icon}</div>
              <div className="text-[8px] tracking-wide">{tab.label}</div>
              {tab.numcount > 0 && (
                <div className="min-w-[13px] h-[13px] pt-px rounded-full bg-slate-500/20 flex items-center justify-center text-[8px]">
                  {tab.numcount}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="size-full grid grid-cols-[1fr_250px_250px] grid-rows-[1fr_50px] gap-2 px-12 pb-2 p-1">
        <div className="row-span-2 p-1 gap-4 size-full flex flex-col items-center text-greyx/70">
          <div className="flex items-center p-1 justify-center border border-greyx/30 rounded-full bg-black size-24">
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
            <div className="w-full h-fit rounded-sm border border-greyx/30 justify-center flex py-1 bg-slate-600/70">
              follow
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

        <div className="col-start-2 px-2 py-1 row-start-2 border border-greyx/20 rounded-sm grid grid-cols-1 grid-rows-2 tracking-wide size-full">
          <div className="size-full items-center flex gap-1">
            <div className="text-[10px] font-nerdfonts "></div>
            <div>BlackArchCyberpunk2077</div>
            <div className="text-[9px] py-px size-fit px-1 rounded-4xl  border border-greyx/20">
              Public
            </div>
          </div>
          <div className="size-full flex gap-1 items-center">
            <div className="size-2 bg-orangex rounded-full"></div>
            <div className="">QML</div>
            <div className="text-[10px] font-nerdfonts "></div>
            <div className="text-[10px] pl-1">2</div>
          </div>
        </div>
        <div className="col-start-3 row-start-2 border border-greyx/20 rounded-sm grid grid-cols-1 py-1 px-2 grid-rows-2 size-full">
          <div className="size-full items-center flex gap-1">
            <div className="text-[10px] font-nerdfonts "></div>
            <div>Archcraft-X-Cyberpunk-2077-UI</div>
            <div className="text-[9px] py-px size-fit px-1 rounded-4xl  border border-greyx/20">
              Public
            </div>
          </div>
          <div className="size-full flex gap-1 items-center">
            <div className="size-2 bg-bluex rounded-full"></div>
            <div className="">Shell</div>
            <div className="text-[10px] font-nerdfonts "></div>
            <div className="text-[10px] pl-1">8</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GithubPages;
