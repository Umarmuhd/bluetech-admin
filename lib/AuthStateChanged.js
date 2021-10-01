import { useState, useContext, useEffect } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { app } from "../config/firebase.config";

//context
import { AuthContext } from "@/context/AuthContext";
import Loader from "@/components/shared/Loader";
import router from "next/router";

const auth = getAuth(app);

export default function AuthStateChanged({ children }) {
  //state
  const { setUser } = useContext(AuthContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        console.log(user);
        if (user.uid === "s23QRzYBCUXYSpC96IQKWq5dG4V2") {
          router.push("/admin");
        } else {
          router.push("/user");
        }
        setLoading(false);
      } else {
        setUser(null);
        setLoading(false);
      }
    });
    return unsubscribe;
  }, []);

  if (loading) {
    return <Loader />;
  }

  return children;
}
