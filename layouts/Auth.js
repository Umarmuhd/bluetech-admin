import React from "react";

//components
import AuthNavbar from "@/components/shared/AuthNavbar";
import FooterSmall from "@/components/shared/FooterSmall";

export default function Auth({ children }) {
  return (
    <>
      <div className="relative min-h-screen h-screen">
        <AuthNavbar />
        <main className="h-full">
          <div className="relative w-full h-full">{children}</div>
        </main>
        <FooterSmall />
      </div>
    </>
  );
}
