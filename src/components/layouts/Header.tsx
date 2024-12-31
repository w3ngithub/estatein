import Link from "next/link";
import { Button } from "../ui/button";

const Header = () => {
  return (
    <nav className="bg-grey-shade-10">
      <div className="container text-white">
        <div className="flex flex-row justify-between items-center p-2">
          <div className="flex flex-row gap-2 items-center">
            {/* desktop logo */}
            <div className="block max-desktop-2xl:hidden">
              <svg
                width="48"
                height="49"
                viewBox="0 0 48 49"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M24 48.5C10.7467 48.5 0 37.7533 0 24.5H24V48.5Z"
                  fill="#703BF7"
                />
                <path
                  d="M0 0.5C13.2533 0.5 24 11.2467 24 24.5H0V0.5Z"
                  fill="#703BF7"
                />
                <path
                  d="M24 48.5C37.2533 48.5 48 37.7533 48 24.5H24V48.5Z"
                  fill="#703BF7"
                />
                <path
                  d="M48 24.5C48 11.2467 37.2533 0.5 24 0.5V24.5H48Z"
                  fill="#703BF7"
                />
              </svg>
            </div>
            {/* laptop logo */}
            <div className="hidden max-desktop-2xl:block">
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
            <h1 className="font-medium text-2xl">Estatein</h1>
          </div>
          <div>
            <ul className="flex flex-row gap-8 text-white justify-center items-center font-medium text-lg max-desktop-2xl:text-sm">
              <Link href="/">
                <li className="border-2 border-grey-shade-15 bg-grey-shade-8 py-2 px-3 rounded-md">
                  Home
                </li>
              </Link>
              <Link href="/">
                <li>About Us</li>
              </Link>
              <Link href="/">
                <li>Properties</li>
              </Link>
              <Link href="/">
                <li>Services</li>
              </Link>
            </ul>
          </div>
          <div className="border border-grey-shade-15 bg-grey-shade-8 py-2 px-3 rounded-md font-medium text-lg max-desktop-2xl:text-sm">
            Contact Us
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Header;

// <!-- /images/burger.svg
// <div>
//         <Image
//           src={`${
//             process.env.NEXT_PUBLIC_BASE_PATH + contactInfo.iconSrc
//           }`}
//           width={40}
//           height={40}
//           className="h-[40px] w-[40px]"
//           alt={contactInfo.altText}
//         />
//       </div> -->
