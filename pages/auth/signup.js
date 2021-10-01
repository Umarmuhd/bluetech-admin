import { useRef, useContext, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

//context
import { AuthContext } from "@/context/AuthContext";
// import { toast } from "react-toastify";

// layout for page
import Auth from "@/layouts/Auth";

export default function Signup() {
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();

  //state
  //   const { user, signup, error } = useContext(AuthContext);

  //   useEffect(() => error && toast.error(error));

  //router
  const router = useRouter();

  //   if (user) router.push("/");

  const handleRegister = async (event) => {
    event.preventDefault();

    // signup({
    //   name: nameRef.current.value,
    //   email: emailRef.current.value,
    //   password: passwordRef.current.value,
    // });
  };

  return (
    <>
      <div className="h-full">
        <div className="h-screen signup grid place-content-center bg-greyBg">
          <div className="flex justify-between mx-auto w-full md:w-md py-10 bg-white shadow px-10">
            <div className="left mr-10 md:flex items-center hidden">
              <img src="/images/image.png" alt="login" className="w-60" />
            </div>
            <form className="right" onSubmit={handleRegister}>
              <h1 className="text-3xl font-bold mb-5 font-head">
                Create your Free Account
              </h1>
              <div className="mb-6">
                <label
                  htmlFor="name"
                  className="text-sm font-medium text-gray-900 block mb-2"
                >
                  Your Name
                </label>

                <input
                  type="name"
                  name="name"
                  id="name"
                  ref={nameRef}
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-400 focus:border-blue-400 block w-full p-2.5 focus:outline-none focus:ring"
                  placeholder="John Snow"
                  required
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="email"
                  className="text-sm font-medium text-gray-900 block mb-2"
                >
                  Your email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  ref={emailRef}
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-400 focus:border-blue-400 block w-full p-2.5 focus:outline-none focus:ring"
                  placeholder="example@email.com"
                  required
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="password"
                  className="text-sm font-medium text-gray-900 block mb-2"
                >
                  Your password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  ref={passwordRef}
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-400 focus:border-blue-400 block w-full p-2.5 focus:outline-none focus:ring"
                  placeholder="At least 6 characters"
                  required
                />
              </div>
              <div className="text-center mb-2">
                <button
                  type="submit"
                  className="w-full bg-primary text-white py-3 rounded"
                >
                  Create account
                </button>
              </div>
              <div className="no_already flex text-sm">
                <p className="mr-1">Already have an account?</p>
                <Link href="/auth/login">
                  <a>Login</a>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

Signup.layout = Auth;
