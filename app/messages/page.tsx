import Hero from "@/components/home/hero";
import ReceiverComment from "@/components/messages/receiver-comment";
import SenderComment from "@/components/messages/sender-comment";
import { Avatar, TextInput } from "@mantine/core";
import React from "react";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaVideo } from "react-icons/fa";

const messagesList = [
  {
    name: "    Amina Yusuf",
    message: "  It's Okay to proceed using a vioce ...",
    time: "12:01pm",
    img: ""
  },

  {
    name: "Raphael Emeka",
    message: "  i decided to message you because ... ...",
    time: "11:50am",
    img: ""
  },
  {
    name: "    Amina Yusuf",
    message: "I decided to message you because ... ...",
    time: "10:30am",
    img: ""
  },
  {
    name: "    Raphael Emeka",
    message: "I decided to message you because ... ...",
    time: "10:30am",
    img: ""
  },
  {
    name: "    Amina Yusuf",
    message: "I decided to message you because ... ...",
    time: "10:30am",
    img: ""
  },
];

const styles = {
  root: {
    width: "100%",
  },
  input: {
    height: "50px",
    borderRadius: "8px",
    border: "0.93px solid #2C2B2B",
    width: "100%",
    paddingLeft: "14px",
  },
};
export default function Messages() {
  return (
    <section className=" flex flex-col gap-[clamp(40px,5.6px,81px)] overflow-auto  h-screen ">
      <Hero text="Messages" />
      <section className=" flex  flex-col gap-[clamp(10px,2vw,25px)] px-[clamp(45px,6.2vw,90px)]  pb-[50px] clamp(50px,7vw,100px)]] overflow-auto ">
        <p className=" text-[#161439] text-[30px] font-semibold">Chats</p>
        <section className=" grid grid-cols-[25%,1fr] gap-[50px] overflow-auto">
          <div className=" flex flex-col gap-[27px]  overflow-auto  min-w-[350px] ">
           
           {messagesList?.map((item, idx) => (

            <section  key={idx} className=" flex gap-[24px] p-[20px] bg-[#F6F6F6]  items-center shadow-lg">
              <Avatar src={item.img} />
              <section className=" flex flex-col gap-[10px] w-full">
                <p className=" text-[18px] text-[#161439] font-semibold">
                {item?.name}
                </p>

                <article className="flex justify-between  gap-[30px] items-center flex-1 w-full">
                  <p className=" text-[16px] font-normal text-[#161439]">
                  {item?.message}
                  </p>
                  <p className=" text-[12px] font-normal text-[#161439]">
                   {item?.time}
                  </p>
                </article>
              </section>
            </section>
           ))}
          </div>
          <div className=" border-[#b7b7b7] border flex flex-col justify-between overflow-auto rounded-lg">
            <section className=" py-[14px] px-[16px] flex justify-between border-[#b7b7b7] border rounded-[10px]">
                <article className=" flex gap-[24px] items-center">
                    <Avatar size='lg'/> 
                 <p className=" text-[18px] text-[#161439] font-bold">Amina Yusuf</p>
                </article>
                <article className=" flex gap-[24px] items-center">
                <BsFillTelephoneFill size={20} />
                <FaVideo size={20}  />

                </article>
            </section>
            

            <section className=" flex flex-col gap-[40px]">
                <p className=" text-center text-[#1E1E1E] text-[16px] font-semibold"> Today</p>

            <div className=" flex flex-col p-[20px] ">
                <SenderComment/>
                <ReceiverComment/>
                

            </div>
            <TextInput
                
                  placeholder="Type a message"
                  styles={styles}
                />
            </section>
          </div>
        </section>
      </section>
    </section>
  );
}
