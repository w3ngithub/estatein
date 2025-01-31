import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col gap-6 justify-center items-center h-[85vh] bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800 text-center px-4">
      <h1 className="text-7xl font-extrabold text-purple-700 dark:text-purple-400 max-desktop-2xl:text-6xl max-mobile-lg:text-5xl">
        Whooops!
      </h1>
      <h2 className="text-3xl font-medium text-gray-800 dark:text-gray-300 max-desktop-2xl:text-2xl max-mobile-lg:text-xl">
        We couldn&apos;t find the page you were looking for
      </h2>
      <div>
        <Link href="/">
          <Button className="py-6 px-6 text-lg font-semibold border-2 bg-purple-600 text-white hover:bg-purple-700 dark:border-gray-700 dark:bg-gray-700 dark:hover:bg-gray-600 rounded-lg shadow-lg max-desktop-2xl:text-base max-mobile-md:w-full">
            Go to Home Page
          </Button>
        </Link>
      </div>
    </div>
  );
}
