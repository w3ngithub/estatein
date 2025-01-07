import Link from "next/link";
import React from "react";

const FooterMobile = () => {
  return (
    <div className="container">
      <div className="py-10">
        <div className="grid grid-cols-2 divide-x-2 border-b border-grey-shade-d62">
          <div className="divide-y-2">
            <div>Home</div>
            <div>Properties</div>
            <div>Contact us</div>
          </div>
          <div className="divide-y-2">
            <div>About Us</div>
            <div>Services</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterMobile;
