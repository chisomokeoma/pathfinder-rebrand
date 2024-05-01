import { Avatar } from "@mantine/core";

const containerList = [
  {
    headText: "Sessions with Tina",
    subText: "Starts in 1hr",
    time: "30 min",
    picture: "/tina.svg",
  },
  {
    headText: "Sessions with Sonia",
    subText: "Starts in 1hr",
    time: "30 min",
    picture: "/tina.svg",
  },
  {
    headText: "This week group session for you",
    subText: "meeting with Que",
    time: "30 min",
    picture:"",
  },
  {
    headText: "Sessions with tina",
    subText: "meeting with Tony",
    time: "30 min",
    picture: "",
  },
];

function notification() {
  return (
    <main>
      <div className="w-[987px] h-[1345px] mx-auto mt-[100px] flex flex-col gap-[40px]">
        <div className="w-[395px] h-[72px] text-[#161439] font-semibold text-[36px]">
          Notification
        </div>
        {containerList?.map((item, idx) => (
          <div key={idx} className=" px-[31px] py-[30px] flex flex-col gap-[40px] shadow-xl bg-[#F6F6F6]   justify-center">
            <div className=" flex gap-[42px] items-center pt-[30px]">
              <Avatar size="xl" src={item.picture} />
              <article className=" flex flex-col">
                <p className="font-regular text-[16px] text-[#2E1110]">
                  {item.headText}
                </p>
                <p className=" font-regular text-[13px] text-[#2E110]">
                  {" "}
                  {item.subText}
                </p>
              </article>
            </div>
            <p className=" justify-end items-end flex text-[16px]">
              {item.time}
            </p>
          </div>
        ))}
      </div>
    </main>
  );
}

export default notification;
