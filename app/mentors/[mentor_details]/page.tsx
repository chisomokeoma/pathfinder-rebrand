"use client";

import { builder } from "@/api/builder";
import { userAtom } from "@/api/queries-store";
import Hero from "@/components/home/hero";
import ProfileUpdate from "@/components/modals/profile-update";
import RequestMentorShipModal from "@/components/modals/request-mentorship-modal";
import { ModalContext } from "@/components/provider/modal-provider";
import ArticleCard from "@/components/resources/article-card";
import CourseCard from "@/components/resources/course-card";
import { RequestStatus, ResourceType, UserRole } from "@/types";
import { usePortal } from "@ibnlanre/portal";
import { LoadingOverlay } from "@mantine/core";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useContext } from "react";
import { CgProfile } from "react-icons/cg";
import { CiCalendar } from "react-icons/ci";
import { FaStar } from "react-icons/fa";

function Mentorsdetails({ params }: { params: { mentor_details: string } }) {
  const breadCrumbs = [{ text: "Home" }, { text: "Mentors" }];
  const { push, replace } = useRouter();
  const [user, setUser] = usePortal.atom(userAtom);

  const { data: mentorDetails, isFetching } = useQuery({
    queryFn: () =>
      builder.use().mentors.mentor_details_auth(params?.mentor_details),
    queryKey: builder.mentors.mentor_details_auth.use(params?.mentor_details),
    select: ({ data }) => data,
  });
  console.log(mentorDetails, "details");
  const { setModalState } = useContext(ModalContext);

  return (
    <section className=" flex flex-col">
      <Hero route={breadCrumbs} />
      <div className=" mt-[100px] mb-[100px] ">
        <main className="w-full h-full flex flex-col gap-[20px]">
          <div className="w-[1050px] h-[368.19px] bg-purple mx-auto rounded-[8px] flex shadow-xl">
            <div className="w-[250px] h-[250px] rounded-[50px] ml-[50px] mt-[50px]">
              <figure className=" w-[243px] ">
                <Image
                  src={mentorDetails?.profilePicture ?? ""}
                  alt="mentors-images"
                  width={20}
                  height={20}
                  className=" w-full"
                />
              </figure>
            </div>
            <div className="ml-[50px] mt-[45px] flex flex-col gap-[15px]">
              <div className=" text-[24px] md:semi-bold text-white">
                {mentorDetails?.name}
              </div>
              <div className=" text-white md:regular text-[16px]">
                {mentorDetails?.industry}{" "}
              </div>
              <div className="flex gap-[25px]">
                {/* <article className=" flex gap-2 items-center">
                  <FaStar color="#F8BC24" />
                  <p className="text-[#ffff]">4.8 Ratings</p>
                </article> */}

                <div className="text-[#ffff] ">{mentorDetails?.email}</div>
              </div>
              <div className="text-[#ffff] ">{mentorDetails?.headline}</div>

              <div>
                {user?.role === UserRole.MENTEE ? (
                  <div className=" flex  gap-[10px]">
                    {mentorDetails?.status === RequestStatus.MENTOR_ACCEPTED ? (
                      <button
                        className="text-purple bg-white rounded-[20px] w-[202px] h-[50px]"
                        onClick={() =>
                          push(
                            `/mentors/${params?.mentor_details}/schedule-session`
                          )
                        }
                      >
                        Schedule Session
                      </button>
                    ) : null}

                    {mentorDetails?.status === RequestStatus.NOT_ACTIVE ? (
                      <button
                        className="text-white bg-lilac rounded-[20px] w-[202px] h-[50px]"
                        onClick={() => {
                          setModalState({
                            opened: true,
                            //    component: (<SuccessSchedule/>)
                            component: (
                              <RequestMentorShipModal
                                id={params?.mentor_details}
                              />
                            ),
                          });
                        }}
                      >
                        Request Mentorship
                      </button>
                    ) : mentorDetails?.status ===
                      RequestStatus.PENDING_REQUEST ? (
                      <button
                        className="text-white bg-lilac rounded-[20px] w-[202px] h-[50px]"
                        disabled
                      >
                        Pending Request
                      </button>
                    ) : null}
                  </div>
                ) : null}
              </div>
            </div>
          </div>
          <div className="w-[1050px] h-[265.9px] border-1px mx-auto rounded-[8px] flex flex-col gap-[10px] shadow-xl">
            <div className="ml-[30px] mt-[30px] w-[126.71px] h-[31.2px] md:semibold text-[24px] text-[#161431]">
              Biography
            </div>
            <div className="w-[930px] h-[77.9px] ml-[30px] text-[16px] md:font-regular text-[#6D6C80]">
              {mentorDetails?.bio}
            </div>
          </div>
          {/* <div className="w-[1050px] h-[302.78px] border-1px mx-auto rounded-[8px] flex flex-col shadow-xl gap-[10px]">
            <div className="ml-[30px] mt-[30px] w-[62.12px] h-[31.2px] md:semibold text-[24px] text-[#161439]">
              Skills
            </div>
            <div className="w-[930.42px] h-[56px] ml-[30px] text-[#6D6C80] md:regular text-[16px]">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo.
            </div>
            <div className="flex">
              <div className="ml-[30px] gap-[345px] flex">
                <span>Marketing</span>
                <span>90%</span>
              </div>
              <div className="ml-[30px] flex gap-[380px]">
                <span className="ml-[5px]">SEO</span>
                <span>90%</span>
              </div>
            </div>
            <div className="flex">
              <div className="w-[456px] h-[10px] border-1px rounded-[50px] flex ml-[30px]">
                <div className="w-[410.4px] h-[10px] bg-purple flex-1 rounded-[15px]"></div>
                <div className="w-[45.6px] h-[10px] bg-[#EBEBEB] rounded-[15px]"></div>
              </div>
              <div className="w-[456px] h-[10px] border-1px rounded-[50px] flex ml-[30px]">
                <div className="w-[410.4px] h-[10px] bg-purple flex-1 rounded-[15px]"></div>
                <div className="w-[45.6px] h-[10px] bg-[#EBEBEB] rounded-[15px]"></div>
              </div>
            </div>
            <div className="flex mt-[30px] gap-[30px] ml-[30px]">
              <div className="flex gap-[390px]">
                <span>CRM</span>
                <span>55%</span>
              </div>
              <div className="flex gap-[350px]">
                <span>Analytics</span>
                <span>65%</span>
              </div>
            </div>
            <div className="flex ">
              <div className="flex w-[456px] h-[10px] border-1px rounded-[50px] ml-[30px]">
                <div className="w-[250.8px] h-[10px] bg-purple flex-1 rounded-[15px]"></div>
                <div className="w-[250.2px] h-[10px] bg-[#EBEBEB] rounded-[15px]"></div>
              </div>
              <div className="flex w-[456px] h-[10px] border-1px rounded-[50px] ml-[30px]">
                <div className="w-[294.4px] h-[10px] bg-purple flex-1 rounded-[15px]"></div>
                <div className="w-[159.6px] h-[10px] bg-[#EBEBEB] rounded-[15px]"></div>
              </div>
            </div>
          </div> */}
          <div className="w-[720px] h-[72px] flex flex-col ml-[150px] gap-[10px]">
            <div className="w-[316px] h-[39px] text-[#161439] md:font-semibold text-[30px]">
              All My Resources
            </div>
            <div>All courses and articles by {mentorDetails?.name}</div>
          </div>
          <div className="flex ml-[150px] gap-[20px] flex-wrap">
            {mentorDetails?.resources?.map((item, idx) =>
              item?.type === ResourceType.course ? (
                <CourseCard key={idx} {...item} />
              ) : (
                <ArticleCard key={idx} {...item} />
              )
            )}
          </div>
        </main>
      </div>
      <LoadingOverlay visible={isFetching} />
    </section>
  );
}
export default Mentorsdetails;
