import Link from "next/link";
import FooterMobile from "./FooterMobile";

const Footer = () => {
  return (
    <div className="container py-12">
      <div className="grid desktop-md:grid-cols-12 gap-10 max-desktop-md:space-y-5">
        <div className="desktop-md:col-span-4">
          <div className="flex flex-col gap-5">
            <div className="flex flex-row gap-2">
              <div>
                <svg
                  width="34"
                  height="35"
                  viewBox="0 0 34 35"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17 34.5C7.61222 34.5 0 26.8878 0 17.5H17V34.5Z"
                    fill="#703BF7"
                  />
                  <path
                    d="M0 0.5C9.38778 0.5 17 8.11222 17 17.5H0V0.5Z"
                    fill="#703BF7"
                  />
                  <path
                    d="M17 34.5C26.3878 34.5 34 26.8878 34 17.5H17V34.5Z"
                    fill="#703BF7"
                  />
                  <path
                    d="M34 17.5C34 8.11222 26.3878 0.5 17 0.5V17.5H34Z"
                    fill="#703BF7"
                  />
                </svg>
              </div>
              <h1 className="font-medium text-2xl max-tablet-sm:text-xl">
                Estatein
              </h1>
            </div>
            {/* input field container */}
            <div className="flex items-center gap-3 w-[85%] max-w-sm px-4 py-3 bg-[#E4E4E7] border border-grey-shade-15 dark:bg-grey-shade-8 rounded-lg max-mobile-md:w-full">
              <div>
                <svg
                  width="20"
                  height="18"
                  viewBox="0 0 20 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15 4H16V5C16 5.26522 16.1054 5.51957 16.2929 5.70711C16.4804 5.89464 16.7348 6 17 6C17.2652 6 17.5196 5.89464 17.7071 5.70711C17.8946 5.51957 18 5.26522 18 5V4H19C19.2652 4 19.5196 3.89464 19.7071 3.70711C19.8946 3.51957 20 3.26522 20 3C20 2.73478 19.8946 2.48043 19.7071 2.29289C19.5196 2.10536 19.2652 2 19 2H18V1C18 0.734784 17.8946 0.48043 17.7071 0.292893C17.5196 0.105357 17.2652 0 17 0C16.7348 0 16.4804 0.105357 16.2929 0.292893C16.1054 0.48043 16 0.734784 16 1V2H15C14.7348 2 14.4804 2.10536 14.2929 2.29289C14.1054 2.48043 14 2.73478 14 3C14 3.26522 14.1054 3.51957 14.2929 3.70711C14.4804 3.89464 14.7348 4 15 4ZM19 8C18.7348 8 18.4804 8.10536 18.2929 8.29289C18.1054 8.48043 18 8.73478 18 9V15C18 15.2652 17.8946 15.5196 17.7071 15.7071C17.5196 15.8946 17.2652 16 17 16H3C2.73478 16 2.48043 15.8946 2.29289 15.7071C2.10536 15.5196 2 15.2652 2 15V5.41L7.88 11.3C8.4425 11.8618 9.205 12.1774 10 12.1774C10.795 12.1774 11.5575 11.8618 12.12 11.3L14.59 8.83C14.7783 8.6417 14.8841 8.3863 14.8841 8.12C14.8841 7.8537 14.7783 7.5983 14.59 7.41C14.4017 7.2217 14.1463 7.11591 13.88 7.11591C13.6137 7.11591 13.3583 7.2217 13.17 7.41L10.7 9.88C10.5131 10.0632 10.2618 10.1659 10 10.1659C9.73825 10.1659 9.48693 10.0632 9.3 9.88L3.41 4H11C11.2652 4 11.5196 3.89464 11.7071 3.70711C11.8946 3.51957 12 3.26522 12 3C12 2.73478 11.8946 2.48043 11.7071 2.29289C11.5196 2.10536 11.2652 2 11 2H3C2.20435 2 1.44129 2.31607 0.87868 2.87868C0.316071 3.44129 0 4.20435 0 5V15C0 15.7956 0.316071 16.5587 0.87868 17.1213C1.44129 17.6839 2.20435 18 3 18H17C17.7956 18 18.5587 17.6839 19.1213 17.1213C19.6839 16.5587 20 15.7956 20 15V9C20 8.73478 19.8946 8.48043 19.7071 8.29289C19.5196 8.10536 19.2652 8 19 8Z"
                    fill="#999999"
                  />
                </svg>
              </div>

              <input
                type="email"
                placeholder="Enter Your Email"
                className="flex-1 bg-transparent dark:text-white dark:placeholder:text-gray-400 focus:outline-none text-sm"
              />

              <div className="p-2 rounded-full">
                <svg
                  width="26"
                  height="26"
                  viewBox="0 0 26 26"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M24.7843 1.22287C24.1593 0.584123 23.2343 0.347873 22.3718 0.597873L2.25928 6.40912C1.34928 6.66162 0.704275 7.38287 0.530525 8.29787C0.353025 9.23037 0.973025 10.4154 1.78303 10.9104L8.07178 14.7504C8.71677 15.1454 9.54928 15.0466 10.083 14.5116L17.2843 7.31037C17.6468 6.93412 18.2468 6.93412 18.6093 7.31037C18.9718 7.67162 18.9718 8.26037 18.6093 8.63537L11.3955 15.8366C10.8605 16.3716 10.7605 17.2016 11.1543 17.8479L14.9968 24.1604C15.4468 24.9091 16.2218 25.3354 17.0718 25.3354C17.1718 25.3354 17.2843 25.3354 17.3843 25.3216C18.3593 25.1979 19.1343 24.5341 19.4218 23.5966L25.3843 3.63537C25.6468 2.78537 25.4093 1.86037 24.7843 1.22287Z"
                    fill="white"
                  />
                  <path
                    opacity="0.4"
                    d="M9.81448 21.9277C10.1795 22.294 10.1795 22.8877 9.81448 23.254L8.10698 24.9602C7.92448 25.144 7.68448 25.2352 7.44448 25.2352C7.20448 25.2352 6.96448 25.144 6.78198 24.9602C6.41573 24.594 6.41573 24.0015 6.78198 23.6352L8.48823 21.9277C8.85448 21.5627 9.44823 21.5627 9.81448 21.9277ZM8.83486 17.1927C9.19986 17.559 9.19986 18.1527 8.83486 18.519L7.12736 20.2252C6.94486 20.409 6.70486 20.5002 6.46486 20.5002C6.22486 20.5002 5.98486 20.409 5.80236 20.2252C5.43611 19.859 5.43611 19.2665 5.80236 18.9002L7.50861 17.1927C7.87486 16.8277 8.46861 16.8277 8.83486 17.1927ZM4.13336 15.7022C4.49836 16.0685 4.49836 16.6622 4.13336 17.0285L2.42586 18.7347C2.24336 18.9185 2.00336 19.0097 1.76336 19.0097C1.52336 19.0097 1.28336 18.9185 1.10086 18.7347C0.734609 18.3685 0.734609 17.776 1.10086 17.4097L2.80711 15.7022C3.17336 15.3372 3.76711 15.3372 4.13336 15.7022Z"
                    fill="white"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
        {/* second section: big screen */}
        <div className="block desktop-md:col-span-8 max-tablet-sm:hidden">
          <div className="grid grid-cols-2 tablet-sm:grid-cols-12">
            <div className="tablet-sm:col-span-2">
              <ul className="flex flex-col gap-3 list-none">
                <Link href="/">
                  <li className="text-xl font-medium dark:text-grey-shade-60 mb-1 max-desktop-lg:text-lg max-tablet-sm:text-base">
                    Home
                  </li>
                </Link>
                <Link href="/">
                  <li className="font-medium text-lg dark:text-white max-desktop-lg:text-base max-tablet-sm:text-sm">
                    Hero Section
                  </li>
                </Link>
                <Link href="/">
                  <li className="font-medium text-lg dark:text-white max-desktop-lg:text-base max-tablet-sm:text-sm">
                    Features
                  </li>
                </Link>
                <Link href="/">
                  <li className="font-medium text-lg dark:text-white max-desktop-lg:text-base max-tablet-sm:text-sm">
                    Properties
                  </li>
                </Link>
                <Link href="/">
                  <li className="font-medium text-lg dark:text-white max-desktop-lg:text-base max-tablet-sm:text-sm">
                    Testimonials
                  </li>
                </Link>
                <Link href="/">
                  <li className="font-medium text-lg dark:text-white max-desktop-lg:text-base max-tablet-sm:text-sm">
                    FAQ&apos;s
                  </li>
                </Link>
              </ul>
            </div>
            <div className="tablet-sm:col-span-2">
              <ul className="flex flex-col gap-3 list-none">
                <Link href="/">
                  <li className="text-xl font-medium dark:text-grey-shade-60 mb-1 max-desktop-lg:text-lg max-tablet-sm:text-base">
                    About Us
                  </li>
                </Link>
                <Link href="/">
                  <li className="font-medium text-lg dark:text-white max-desktop-lg:text-base max-tablet-sm:text-sm">
                    Our Story
                  </li>
                </Link>
                <Link href="/">
                  <li className="font-medium text-lg dark:text-white max-desktop-lg:text-base max-tablet-sm:text-sm">
                    Our Works
                  </li>
                </Link>
                <Link href="/">
                  <li className="font-medium text-lg dark:text-white max-desktop-lg:text-base max-tablet-sm:text-sm">
                    How It Works
                  </li>
                </Link>
                <Link href="/">
                  <li className="font-medium text-lg dark:text-white max-desktop-lg:text-base max-tablet-sm:text-sm">
                    Our Team
                  </li>
                </Link>
                <Link href="/">
                  <li className="font-medium text-lg dark:text-white max-desktop-lg:text-base max-tablet-sm:text-sm">
                    Our Clients
                  </li>
                </Link>
              </ul>
            </div>
            <div className="tablet-sm:col-span-2">
              <ul className="flex flex-col gap-3 list-none">
                <Link href="/">
                  <li className="text-xl font-medium dark:text-grey-shade-60 mb-1 max-desktop-lg:text-lg max-tablet-sm:text-base">
                    Properties
                  </li>
                </Link>
                <Link href="/">
                  <li className="font-medium text-lg dark:text-white max-desktop-lg:text-base max-tablet-sm:text-sm">
                    Portfolio
                  </li>
                </Link>
                <Link href="/">
                  <li className="font-medium text-lg dark:text-white max-desktop-lg:text-base max-tablet-sm:text-sm">
                    Categories
                  </li>
                </Link>
              </ul>
            </div>
            <div className="tablet-sm:col-span-4">
              <ul className="flex flex-col gap-3 list-none">
                <Link href="/">
                  <li className="text-xl font-medium dark:text-grey-shade-60 mb-1 max-desktop-lg:text-lg max-tablet-sm:text-base">
                    Services
                  </li>
                </Link>
                <Link href="/">
                  <li className="font-medium text-lg dark:text-white max-desktop-lg:text-base max-tablet-sm:text-sm">
                    Valuation Mastery
                  </li>
                </Link>
                <Link href="/">
                  <li className="font-medium text-lg dark:text-white max-desktop-lg:text-base max-tablet-sm:text-sm">
                    Stategic Marketing
                  </li>
                </Link>
                <Link href="/">
                  <li className="font-medium text-lg dark:text-white max-desktop-lg:text-base max-tablet-sm:text-sm">
                    Negotiation Wizardry
                  </li>
                </Link>
                <Link href="/">
                  <li className="font-medium text-lg dark:text-white max-desktop-lg:text-base max-tablet-sm:text-sm">
                    Closing Success
                  </li>
                </Link>
                <Link href="/">
                  <li className="font-medium text-lg dark:text-white max-desktop-lg:text-base max-tablet-sm:text-sm">
                    Property Management
                  </li>
                </Link>
              </ul>
            </div>
            <div className="tablet-sm:col-span-2">
              <ul className="flex flex-col gap-3 list-none">
                <Link href="/">
                  <li className="text-xl font-medium dark:text-grey-shade-60 mb-1 max-desktop-lg:text-lg max-tablet-sm:text-base">
                    Contact Us
                  </li>
                </Link>
                <Link href="/">
                  <li className="font-medium text-lg dark:text-white max-desktop-lg:text-base max-tablet-sm:text-sm">
                    Contact Form
                  </li>
                </Link>
                <Link href="/">
                  <li className="font-medium text-lg dark:text-white max-desktop-lg:text-base max-tablet-sm:text-sm">
                    Our Offices
                  </li>
                </Link>
              </ul>
            </div>
          </div>
        </div>
        {/* second section: small screen */}
        <FooterMobile />
      </div>
    </div>
  );
};
export default Footer;
