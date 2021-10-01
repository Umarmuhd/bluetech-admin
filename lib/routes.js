import { useRouter } from "next/router";
import React, { useContext } from "react";

import { AuthContext } from "@/context/AuthContext";
import Loader from "@/components/shared/Loader";

export function withPublic(Component) {
  return function WithPublic(props) {
    const { user } = useContext(AuthContext);

    //router
    const router = useRouter();

    if (user) {
      router.replace("/");
    }

    return <Component auth={useContext(AuthContext)} {...props} />;
  };
}

export function withProtected(Component) {
  return function WithProtected(props) {
    const { user } = useContext(AuthContext);

    //router
    const router = useRouter();

    if (!user) {
      router.replace("/auth/login");
      return <Loader />;
    }

    return <Component auth={useContext(AuthContext)} {...props} />;
  };
}
