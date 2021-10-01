import React from "react";

import { withProtected } from "@/lib/routes";

//Components
import DashboardNav from "@/components/user/DashboardNav";
import FooterSmall from "@/components/shared/FooterSmall";

function User({ children }) {
  return (
    <>
      <div>
        <DashboardNav />
        <div>
          <div className="px-0 md:px-10 mx-auto w-full content-wrap">
            {children}
            <FooterSmall />
          </div>
        </div>
      </div>
    </>
  );
}

export default withProtected(User);
