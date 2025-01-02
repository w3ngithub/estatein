"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

const ClientsReview = () => {
  return (
    <>
      <Carousel>
        <section className="container flex flex-col gap-10 pt-5 max-mobile-md:gap-5">
          <div className="flex flex-row justify-between items-end">
            <div className="flex flex-col gap-3">
              <div>
                <svg
                  width="69"
                  height="30"
                  viewBox="0 0 69 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_75_930)">
                    <path
                      d="M15 30.0166C23.2843 30.0166 30 23.3009 30 15.0166C30 6.73233 23.2843 0.0166836 15 0.0166836C6.71573 0.0166836 0 6.73233 0 15.0166C0 23.3009 6.71573 30.0166 15 30.0166Z"
                      fill="#666666"
                    />
                    <path
                      d="M0 45C8.28427 45 15 38.2843 15 30C15 21.7157 8.28427 15 0 15C-8.28427 15 -15 21.7157 -15 30C-15 38.2843 -8.28427 45 0 45Z"
                      fill="#141414"
                    />
                    <path
                      d="M30 45C38.2843 45 45 38.2843 45 30C45 21.7157 38.2843 15 30 15C21.7157 15 15 21.7157 15 30C15 38.2843 21.7157 45 30 45Z"
                      fill="#141414"
                    />
                    <path
                      d="M0 15C8.28427 15 15 8.28427 15 0C15 -8.28427 8.28427 -15 0 -15C-8.28427 -15 -15 -8.28427 -15 0C-15 8.28427 -8.28427 15 0 15Z"
                      fill="#141414"
                    />
                    <path
                      d="M30 15C38.2843 15 45 8.28427 45 0C45 -8.28427 38.2843 -15 30 -15C21.7157 -15 15 -8.28427 15 0C15 8.28427 21.7157 15 30 15Z"
                      fill="#141414"
                    />
                  </g>
                  <g clipPath="url(#clip1_75_930)">
                    <path
                      d="M45 24.01C49.9706 24.01 54 19.9805 54 15.01C54 10.0394 49.9706 6.01001 45 6.01001C40.0294 6.01001 36 10.0394 36 15.01C36 19.9805 40.0294 24.01 45 24.01Z"
                      fill="#333333"
                    />
                    <path
                      d="M36 33C40.9706 33 45 28.9706 45 24C45 19.0294 40.9706 15 36 15C31.0294 15 27 19.0294 27 24C27 28.9706 31.0294 33 36 33Z"
                      fill="#141414"
                    />
                    <path
                      d="M54 33C58.9706 33 63 28.9706 63 24C63 19.0294 58.9706 15 54 15C49.0294 15 45 19.0294 45 24C45 28.9706 49.0294 33 54 33Z"
                      fill="#141414"
                    />
                    <path
                      d="M36 15C40.9706 15 45 10.9706 45 6C45 1.02944 40.9706 -3 36 -3C31.0294 -3 27 1.02944 27 6C27 10.9706 31.0294 15 36 15Z"
                      fill="#141414"
                    />
                    <path
                      d="M54 15C58.9706 15 63 10.9706 63 6C63 1.02944 58.9706 -3 54 -3C49.0294 -3 45 1.02944 45 6C45 10.9706 49.0294 15 54 15Z"
                      fill="#141414"
                    />
                  </g>
                  <g clipPath="url(#clip2_75_930)">
                    <path
                      d="M64.2 19.2046C66.5196 19.2046 68.4 17.3242 68.4 15.0046C68.4 12.6851 66.5196 10.8047 64.2 10.8047C61.8804 10.8047 60 12.6851 60 15.0046C60 17.3242 61.8804 19.2046 64.2 19.2046Z"
                      fill="#333333"
                    />
                    <path
                      d="M59.9998 23.4C62.3194 23.4 64.1998 21.5196 64.1998 19.2C64.1998 16.8804 62.3194 15 59.9998 15C57.6802 15 55.7998 16.8804 55.7998 19.2C55.7998 21.5196 57.6802 23.4 59.9998 23.4Z"
                      fill="#141414"
                    />
                    <path
                      d="M68.3997 23.4C70.7193 23.4 72.5997 21.5196 72.5997 19.2C72.5997 16.8804 70.7193 15 68.3997 15C66.0801 15 64.1997 16.8804 64.1997 19.2C64.1997 21.5196 66.0801 23.4 68.3997 23.4Z"
                      fill="#141414"
                    />
                    <path
                      d="M59.9998 15C62.3194 15 64.1998 13.1196 64.1998 10.8C64.1998 8.4804 62.3194 6.6 59.9998 6.6C57.6802 6.6 55.7998 8.4804 55.7998 10.8C55.7998 13.1196 57.6802 15 59.9998 15Z"
                      fill="#141414"
                    />
                    <path
                      d="M68.3997 15C70.7193 15 72.5997 13.1196 72.5997 10.8C72.5997 8.4804 70.7193 6.6 68.3997 6.6C66.0801 6.6 64.1997 8.4804 64.1997 10.8C64.1997 13.1196 66.0801 15 68.3997 15Z"
                      fill="#141414"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_75_930">
                      <rect width="30" height="30" fill="white" />
                    </clipPath>
                    <clipPath id="clip1_75_930">
                      <rect
                        width="18"
                        height="18"
                        fill="white"
                        transform="translate(36 6)"
                      />
                    </clipPath>
                    <clipPath id="clip2_75_930">
                      <rect
                        width="8.4"
                        height="8.4"
                        fill="white"
                        transform="translate(60 10.8)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <h1 className="text-white text-5xl font-semibold max-desktop-lg:text-4xl max-tablet-sm:text-[28px]">
                What Our Clients Say
              </h1>
              <p className="max-w-[900px] text-grey-shade-60 text-lg leading-6 max-desktop-lg:text-base max-tablet-sm:text-sm">
                Read the success stories and heartfelt testimonials from our
                valued clients. Discover why they chose Estatein for their real
                estate needs.
              </p>
            </div>
            <div className="block max-mobile-xl:hidden">
              <Link href="/">
                <Button className="flex items-center justify-center text-lg py-6 px-4 font-medium border-2 border-grey-shade-15 bg-grey-shade-8 rounded-md max-desktop-lg:text-sm">
                  View All Testimonials
                </Button>
              </Link>
            </div>
          </div>
          {/* Carousel section */}
          <div className="flex justify-center items-center my-2">
            <CarouselContent>
              <CarouselItem className="mobile-xl:basis-1/3">
                <div className="">
                  <div className="p-2 flex flex-col gap-3">
                    {/* star logo */}
                    <div className="flex items-center justify-center w-fit border-2 border-grey-shade-15 bg-grey-shade-d61 rounded-full p-[6px]">
                      <svg
                        width="22"
                        height="22"
                        viewBox="0 0 22 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10.1586 1.30996C10.5522 0.697195 11.4478 0.697195 11.8414 1.30996L14.8804 6.04141C15.0158 6.25225 15.2255 6.40456 15.4678 6.4682L20.9068 7.89639C21.6112 8.08135 21.888 8.93313 21.4268 9.49681L17.8661 13.8492C17.7074 14.0431 17.6273 14.2896 17.6417 14.5397L17.9641 20.1539C18.0059 20.8809 17.2813 21.4074 16.6028 21.143L11.363 19.1014C11.1296 19.0105 10.8704 19.0105 10.637 19.1014L5.39725 21.143C4.71867 21.4074 3.99409 20.8809 4.03585 20.1539L4.3583 14.5397C4.37267 14.2896 4.2926 14.0431 4.13393 13.8492L0.573162 9.49681C0.112013 8.93313 0.388775 8.08135 1.09317 7.89639L6.53216 6.4682C6.77452 6.40456 6.98416 6.25225 7.11958 6.04141L10.1586 1.30996Z"
                          fill="#FFE600"
                        />
                      </svg>
                    </div>
                    <h2 className="font-semibold text-2xl text-white max-desktop-lg:text-xl max-tablet-sm:text-lg">
                      Exceptional Service!
                    </h2>
                    <p className="text-white text-lg leading-6 max-desktop-lg:text-base max-tablet-sm:text-sm">
                      Our experience with Estatein was outstanding. Their team's
                      dedication and professionalism made finding our dream home
                      a breeze. Highly recommended!
                    </p>
                    <div className="flex flex-row gap-3">
                      <div>
                        <Image
                          src={`${
                            process.env.NEXT_PUBLIC_BASE_PATH +
                            "/images/profile-pic.png"
                          }`}
                          width={60}
                          height={60}
                          alt="profile icon"
                          priority
                        />
                      </div>
                      <div className="flex-col gap-2">
                        <p className="text-white text-xl max-desktop-lg:text-lg max-tablet-sm:text-base">
                          Wade Warren
                        </p>
                        <p className="text-grey-shade-60 text-lg max-desktop-lg:text-base max-tablet-sm:text-sm">
                          USA, California
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            </CarouselContent>
          </div>
          <div className="flex flex-row justify-between mb-4 max-mobile-md:hidden">
            <div className="text-base font-medium">
              <span className="text-white">01</span>{" "}
              <span className="text-grey-shade-60">of 10</span>
            </div>
            <div className="flex flex-row gap-3">
              <CarouselPrevious />
              <CarouselNext />
            </div>
          </div>
          {/* for mobile screen */}
          <div className="hidden max-mobile-md:block">
            <div className="flex flex-row justify-between mb-3">
              <Button className="text-sm border-2 border-grey-shade-15 bg-grey-shade-8 rounded-md px-4 py-5">
                View All Testimonials
              </Button>
              <div className="flex flex-row items-center justify-center gap-3">
                <CarouselPrevious />
                <div className="text-base font-medium">
                  <span className="text-white">01</span>{" "}
                  <span className="text-grey-shade-60">of 10</span>
                </div>
                <CarouselNext />
              </div>
            </div>
          </div>
        </section>
      </Carousel>
    </>
  );
};
export default ClientsReview;
