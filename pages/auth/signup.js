import Head from "next/head";
import Link from "next/link";

import { useState, useContext, useEffect } from "react";

//context
import { AuthContext } from "@/context/AuthContext";
import toast from "react-hot-toast";

// layout for page
import Auth from "@/layouts/Auth";

export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  //state
  const { error, loginWithGoogle, signup } = useContext(AuthContext);

  useEffect(() => error && toast.error(error));

  const handleSignup = async (event) => {
    event.preventDefault();

    try {
      setLoading(true);
      signup({ email, password });
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  return (
    <>
      <Head>
        <title>Signup - Bookey</title>
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <>
        <div className="text-gray-800 antialiased h-full">
          <section className="pt-11 md:pt-18 w-full h-full bg-secondary">
            <div className="container mx-auto px-4 h-full">
              <div className="flex content-center items-center justify-center h-full md:pb-14">
                <div className="w-full lg:w-4/12 px-4 ">
                  <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-white border">
                    <div className="rounded-t mb-0 px-6 py-6">
                      <div className="btn-wrapper text-center">
                        <button
                          className="bg-white active:bg-gray-100 text-gray-800 px-4 py-2 rounded outline-none focus:outline-none w-full mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-semibold text-xs justify-center"
                          type="button"
                          style={{ transition: "all 0.15s ease 0s" }}
                          onClick={() => loginWithGoogle()}
                        >
                          <img
                            alt="..."
                            className="w-5 mr-1"
                            src="/icons/socials/google.svg"
                          />
                          Signup with Google
                        </button>
                      </div>
                      <hr className="mt-6 border-b-1 border-gray-400" />
                    </div>
                    <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                      <div className="text-gray-500 text-center mb-3 font-bold">
                        <small>Or signup with credentials</small>
                      </div>
                      <form onSubmit={handleSignup}>
                        <div className="relative w-full mb-3">
                          <label
                            className="block uppercase text-gray-700 text-xs font-bold mb-2"
                            htmlFor="name"
                          >
                            Full name
                          </label>
                          <input
                            type="text"
                            className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                            placeholder="Full name"
                            style={{ transition: "all 0.15s ease 0s" }}
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                          />
                        </div>

                        <div className="relative w-full mb-3">
                          <label
                            className="block uppercase text-gray-700 text-xs font-bold mb-2"
                            htmlFor="email"
                          >
                            Email
                          </label>
                          <input
                            type="email"
                            className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                            placeholder="Email"
                            aria-describedby="emailHelp"
                            style={{ transition: "all 0.15s ease 0s" }}
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            autoComplete="current-email"
                          />
                        </div>
                        <div className="relative w-full mb-3">
                          <label
                            className="block uppercase text-gray-700 text-xs font-bold mb-2"
                            htmlFor="password"
                          >
                            Password
                          </label>
                          <input
                            type="password"
                            className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                            placeholder="Password"
                            style={{ transition: "all 0.15s ease 0s" }}
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            autoComplete="current-password"
                          />
                        </div>

                        <div className="text-center">
                          <button
                            className="bg-blue-500 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full"
                            type="submit"
                            // disabled={!(validateForm() && loader)}
                            disabled={loading}
                            style={{
                              transition: "all 0.15s ease 0s",
                              background: loading ? "#ccc" : null,
                            }}
                          >
                            Signup
                          </button>
                        </div>
                      </form>
                      {error && <p>The username or password already exist</p>}
                    </div>
                  </div>
                  <div className="flex flex-wrap mt-6">
                    <div className="w-1/2">
                      <a>
                        <small>Already got an account ?</small>
                      </a>
                    </div>
                    <div className="w-1/2 text-right">
                      <Link href="/auth/login">
                        <a>
                          <small>Login here</small>
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </>
    </>
  );
}

Signup.layout = Auth;
