import Image from "next/image";
import React from "react";

const Notification = () => {
  return (
    <div className="flex pl-[15px] py-16 h-full justify-between flex-col">
      <div className="flex flex-row gap-1">
        <div className="flex-col flex gap-1">
          <div className="text-[6px] relative leading-[5px] text-redx font-bold">
            100110 <br />
            010011 <br />
            001011 <br />
            110011
          </div>
          <div className="flex-row flex">
            <Image
              src="/panel/system-icon.png"
              className="animate-blink-medium "
              alt=""
              priority
              width={18}
              height={14}
            />
          </div>
        </div>
        <div className="flex-col flex w-36">
          <div className="font-orbitron uppercase text-redx  text-[7px]">
            <p>conection_dbus 1.001l1</p>
          </div>
          <div className="flex-col gap-1 flex">
            <div className="flex w-[250px] h-auto bg-black border border-redx/50 p-1">
              <Image
                src="/panel/panel.png"
                alt=""
                priority
                width={250}
                height={40}
              />
            </div>
            <div className="flex flex-row justify-between w-[245px] ">
              <div className="flex flex-col leading-2 text-[8px] text-redx font-bold">
                TRN_TCLASS_B000095
              </div>
              <div className="flex flex-row gap-4 ">
                <div className="flex items-center gap-1 flex-row text-xs">
                  <Image
                    priority
                    width={23}
                    height={20}
                    src="/options/close.png"
                    alt=""
                  />
                  <p>CLOSE</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row gap-1">
        <div className="flex-col flex gap-1">
          <div className="text-[6px] relative leading-[5px] text-redx font-bold">
            100110 <br />
            010011 <br />
            001011 <br />
            110011
          </div>
          <div className="flex-row flex">
            <Image
              src="/notif/dbus-icon.png"
              className="animate-blink-medium "
              alt=""
              priority
              width={16}
              height={14}
            />
          </div>
        </div>
        <div className="flex-col flex min-w-52">
          <div className="font-orbitron uppercase text-redx  text-[7px]">
            <p>conection_dbus 1.001l1</p>
          </div>
          <div className="flex-row gap-1 flex">
            <div className="flex w-[50px] h-[50px] bg-black border border-redx/50 p-1">
              <Image
                src="/notif/notif-icon.png"
                alt=""
                priority
                className="animate-pulse w-[58px]"
                width={50}
                height={30}
              />
            </div>
            <div className="flex w-36 gap-2 flex-col">
              <p className="uppercase">blackarch</p>
              <p>Hack The World</p>
            </div>
          </div>
        </div>
      </div>
      {/* battery */}
      <div className="flex flex-row gap-1">
        <div className="flex-col flex gap-1">
          <div className="text-[6px] relative leading-[5px] text-redx font-bold">
            100110 <br />
            010011 <br />
            001011 <br />
            110011
          </div>
          <div className="flex-row flex">
            <Image
              src="/battery/battery-dbus.png"
              alt=""
              className="animate-blink-medium "
              priority
              width={16}
              height={14}
            />
          </div>
        </div>
        <div className="flex-col flex w-36">
          <div className="font-orbitron uppercase text-redx  text-[7px]">
            <p>conection_dbus 1.001l1</p>
          </div>
          <div className="flex-row mt-1 gap-1 flex">
            <div className="flex w-[40px] h-[35px] justify-center items-center bg-black border rounded-bl-[6px] p-1">
              <div className=" text-white text-xs font-orbitron">100</div>
            </div>
            <div className="flex flex-col border-t pt-1 border-redx/50">
              <div className="w-32 h-2 rounded-br-[4px] bg-redx/70"></div>
              <div className="text-redx/70 text-sm font-semibold">
                State_Disconnected
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notification;
