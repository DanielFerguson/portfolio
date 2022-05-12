import { useState } from "react";
import axios from "axios";
import { RefreshIcon } from "@heroicons/react/outline";
import { HeartIcon } from "@heroicons/react/solid";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [state, setState] = useState("IDLE");
  const [errorMessage, setErrorMessage] = useState(null);

  const subscribe = async (event) => {
    event.preventDefault();

    setState("LOADING");
    setErrorMessage(null);

    try {
      const response = await axios.post("/api/subscribe", { email });
      setState("SUCCESS");
    } catch (e) {
      setErrorMessage(e);
      setState("ERROR");
    }
  };

  return (
    <>
      {state !== "SUCCESS" && (
        <div className="bg-white">
          <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:py-16 lg:px-8">
            <div className="px-6 py-6 bg-indigo-700 rounded-lg md:py-12 md:px-12 lg:py-16 lg:px-16 xl:flex xl:items-center">
              <div className="xl:w-0 xl:flex-1">
                <h2 className="text-2xl font-extrabold tracking-tight text-white sm:text-3xl">
                  Be notified when I post a new article!
                </h2>
                <p className="mt-3 max-w-3xl text-lg leading-6 text-indigo-200">
                  I really want to get into writing again - and I figured the
                  best way to do that is to write to provide value. I&apos;ll be
                  covering my journey and process of entrepreneurship, struggles
                  and failures.
                </p>
              </div>
              <div className="mt-8 sm:w-full sm:max-w-md xl:mt-0 xl:ml-8">
                <form className="sm:flex">
                  <label htmlFor="email-address" className="sr-only">
                    Email address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="w-full border-white px-5 py-3 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-700 focus:ring-white rounded-md"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <button
                    type="submit"
                    disabled={state === "LOADING"}
                    onClick={subscribe}
                    className="mt-3 w-full flex items-center justify-center px-5 py-3 border border-transparent shadow text-base font-medium rounded-md text-white bg-indigo-500 hover:bg-indigo-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-700 focus:ring-white sm:mt-0 sm:ml-3 sm:w-auto sm:flex-shrink-0"
                  >
                    {state === "LOADING" ? "Loading" : "Subscribe"}
                  </button>
                </form>
                <p className="mt-3 text-sm text-indigo-200">
                  {state === "ERROR" && "Did you forget to add your email?"}
                  {state === "IDLE" &&
                    "I wont spam you, promise. ❤️ Unsub anytime."}
                  {state === "LOADING" && (
                    <RefreshIcon className="h-5 w-auto animate-spin" />
                  )}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
      {state === "SUCCESS" && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-16 mb-32">
          <div className="text-center">
            <h2 className="text-base font-semibold text-indigo-600 flex items-center justify-center tracking-wide uppercase">
              <span>Thank you!</span>{" "}
              <HeartIcon className="h-5 w-auto ml-1 mb-0.5" />
            </h2>
            <p className="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
              Welcome to the team.
            </p>
            <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500">
              I usually post the newsletters on a weekly basis - you should find
              the next one in your inbox on Monday morning! Get ready to grab a
              cuppa and start the week with a bit of a journey.
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default Newsletter;
