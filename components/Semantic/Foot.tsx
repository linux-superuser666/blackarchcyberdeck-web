import React from "react";
import Image from "next/image";
import Link from "next/link";
const Foot = () => {
  return (
    <div className="w-full px-12 grid grid-cols-[1fr_2fr] pb-5 justify-between">
      <div className="flex flex-col">
        <div className="flex font-medium text-redx gap-1 flex-row uppercase items-center h-fit">
          <div className="pt-1">
            you can find my dotfiles of this shell here{" "}
          </div>
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/linux-superuser666"
          >
            <div className="flex bg-redx size-fit rounded-full items-center justify-center pl-px pb-px pr-px">
              <Image
                src="https://cdn.jsdelivr.net/gh/linux-superuser666/linux-superuser666@main/img/github-svgrepo-com.svg"
                alt=""
                width={30}
                height={10}
              />
            </div>
          </Link>
        </div>
        <div className="flex flex-row text-redx font-medium text-sm">
          © CyberdeckBlackArch | mrnngstr666
        </div>
      </div>
      <div className="flex flex-row justify-end gap-4 items-center">
        <div className="flex flex-col items-end justify-center gap-3">
          <Image
            src="https://cdn.jsdelivr.net/gh/linux-superuser666/linux-superuser666@main/img/social.svg"
            alt=""
            width={170}
            height={10}
            className="object-contain"
          />

          <div className="flex flex-row gap-3 justify-center items-center ">
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.youtube.com/@linux.superuser"
            >
              <Image
                src="https://cdn.jsdelivr.net/gh/linux-superuser666/linux-superuser666@main/img/youtube-logo.svg"
                alt=""
                width={80}
                height={10}
              />
            </Link>
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.tiktok.com/@linux.superuser"
            >
              <Image
                src="https://cdn.jsdelivr.net/gh/linux-superuser666/linux-superuser666@main/img/tiktok-logo.svg"
                alt=""
                width={80}
                height={10}
              />
            </Link>
          </div>
        </div>
        <div className="flex flex-col gap-3 items-end">
          <Image
            src="https://cdn.jsdelivr.net/gh/linux-superuser666/linux-superuser666@main/img/support.svg"
            alt=""
            width={170}
            height={10}
            className="object-contain"
          />

          <div className="flex flex-row gap-3">
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href="https://saweria.co/lmrnngtsr666"
            >
              <Image
                src="https://cdn.jsdelivr.net/gh/linux-superuser666/linux-superuser666@main/img/saweria-logo.svg"
                alt=""
                width={80}
                height={10}
              />
            </Link>
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href="https://Ko-fi.com/mrnngstr666"
            >
              <Image
                src="https://cdn.jsdelivr.net/gh/linux-superuser666/linux-superuser666@main/img/kofi-logo.svg"
                alt=""
                width={80}
                height={10}
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Foot;
