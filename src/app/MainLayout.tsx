"use client";

import { usePathname } from "next/navigation";
import Header from "@/components/layouts/Header";
import HeaderBanner from "@/components/layouts/HeaderBanner";
import Footer from "@/components/layouts/Footer";
import TermsAndCondition from "@/components/modules/home-page/TermsAndCondition";
import ExploreProperty from "@/components/modules/home-page/ExploreProperty";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isAdminDashboard = pathname === "/admin/dashboard";

  if (isAdminDashboard) {
    return <>{children}</>;
  }

  return (
    <>
      <HeaderBanner />
      <Header />
      {children}
      <div className="bg-white-95 dark:bg-grey-shade-8">
        <ExploreProperty />
        <Footer />
      </div>
      <div className="bg-white-95 dark:bg-grey-shade-10 py-5">
        <TermsAndCondition />
      </div>
    </>
  );
}
