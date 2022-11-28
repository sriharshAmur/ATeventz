import { type AppType } from "next/app";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";

import { trpc } from "../utils/trpc";

import "../styles/globals.css";
import Navigation from "../components/Navigation";
import { useState } from "react";
import Footer from "../components/Footer";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <SessionProvider session={session}>
      <div
        className={` dark:bg-gray-900 dark:text-white ${
          darkMode ? "dark" : ""
        }`}
      >
        <div className=" flex min-h-screen flex-col dark:bg-gray-900 dark:text-white">
          <Navigation darkMode={darkMode} setDarkMode={setDarkMode} />
          <div className="flex-1 py-8">
            <Component {...pageProps} />
          </div>
          <Footer />
        </div>
      </div>
    </SessionProvider>
  );
};

export default trpc.withTRPC(MyApp);
