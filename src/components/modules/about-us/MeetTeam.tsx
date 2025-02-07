"use client";
import { SendSmallIcon, ThreeStars } from "@/svgs/HomePageSvg";
import { TwitterIcon } from "@/svgs/TermsAndConditionSvg";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { toast } from "sonner";

const MeetTeam = () => {
  const [messages, setMessages] = useState<{ [key: string]: string }>({});

  const teamMembers = [
    {
      name: "Max Mitchell",
      role: "Founder",
      imageSrc: `${process.env.NEXT_PUBLIC_BASE_PATH}/images/about-us-team-one.png`,
      twitterUrl: "/twitter",
      email: "gyawali.dipesh@webexpertsnepal.com",
    },
    {
      name: "Sarah Johnson",
      role: "Chief Real Estate Officer",
      imageSrc: `${process.env.NEXT_PUBLIC_BASE_PATH}/images/about-us-team-two.png`,
      twitterUrl: "/twitter",
      email: "jiffymarvel@gmail.com",
    },
    {
      name: "David Brown",
      role: "Head of Property Management",
      imageSrc: `${process.env.NEXT_PUBLIC_BASE_PATH}/images/about-us-team-three.png`,
      twitterUrl: "/twitter",
      email: "hello@gmail.com",
    },
    {
      name: "Michael Turner",
      role: "Legal Counsel",
      imageSrc: `${process.env.NEXT_PUBLIC_BASE_PATH}/images/about-us-team-four.png`,
      twitterUrl: "/twitter",
      email: "dipeshgyawali365@gmail.com",
    },
  ];

  // Handle input change for each team member
  const handleInputChange = (email: string, message: string) => {
    setMessages((prev) => ({
      ...prev,
      [email]: message,
    }));
  };

  // Handle message sending
  const handleSendMessage = async (email: string) => {
    if (!messages[email]?.trim()) {
      toast.error("Please enter a message before sending.");
      return;
    }

    try {
      const response = await fetch("/estatein/api/send-message", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          recipientEmail: email,
          message: messages[email],
        }),
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }

      toast.success(`Message sent to ${email}`);
      setMessages((prev) => ({ ...prev, [email]: "" })); // Clear message after sending
    } catch (error) {
      console.error("Error sending message:", error);
      toast.error("Failed to send message. Please try again.");
    }
  };

  return (
    <section className="container py-10">
      <div className="flex flex-col gap-16">
        <div className="flex flex-col gap-3">
          {/* 3 star logo */}
          <div>
            <ThreeStars />
          </div>
          <h1 className="dark:text-white text-5xl font-semibold max-desktop-lg:text-4xl max-tablet-sm:text-[28px]">
            Meet the Estatein Team
          </h1>
          <p className="max-w-[900px] font-medium dark:text-grey-shade-60 text-lg leading-6 max-desktop-lg:text-base max-tablet-sm:text-sm">
            At Estatein, our success is driven by the dedication and expertise
            of our team. Get to know the people behind our mission to make your
            real estate dreams a reality.
          </p>
        </div>
        {/* card */}
        <div className="grid mobile-lg:grid-cols-2 desktop-md:grid-cols-4 gap-5">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center p-5 border dark:border-grey-shade-15 rounded-lg"
            >
              <div>
                <Image
                  src={member.imageSrc}
                  width={317}
                  height={253}
                  alt={`${member.name} profile`}
                />
              </div>
              <div className="flex flex-col gap-5 justify-center items-center mt-[-25px]">
                <div className="border-none bg-purple-shade-60 py-3 px-5 rounded-full cursor-pointer">
                  <Link href={`${member.twitterUrl}`}>
                    <TwitterIcon />
                  </Link>
                </div>
                <div className="flex flex-col items-center justify-center gap-2">
                  <h2 className="font-semibold text-2xl max-desktop-lg:text-xl max-mobile-md:text-lg">
                    {member.name}
                  </h2>
                  <p className="text-grey-shade-60 font-medium text-lg max-desktop-lg:text-base max-mobile-md:text-sm">
                    {member.role}
                  </p>
                </div>
              </div>
              {/* input container */}
              <div className="relative w-[85%] max-w-sm px-4 py-3 bg-[#E4E4E7] border border-grey-shade-15 dark:bg-grey-shade-8 max-mobile-md:w-full mt-5 rounded-full">
                <input
                  type="text"
                  placeholder="Say Hello 👋"
                  className="w-full pr-10 bg-transparent dark:text-white dark:placeholder:text-gray-400 placeholder:text-lg max-desktop-lg:placeholder:text-base max-mobile-md:placeholder:text-sm focus:outline-none text-sm"
                  value={messages[member.email] || ""}
                  onChange={(e) =>
                    handleInputChange(member.email, e.target.value)
                  }
                />

                <div
                  className="absolute top-1/2 right-2 transform -translate-y-1/2 p-2 rounded-full dark:bg-purple-shade-60 cursor-pointer"
                  onClick={() => handleSendMessage(member.email)}
                >
                  <SendSmallIcon />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MeetTeam;
