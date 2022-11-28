import { type AppType } from "next/app";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";

import { trpc } from "../utils/trpc";

import "../styles/globals.css";
import Navigation from "../components/Navigation";
import { useState } from "react";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <SessionProvider session={session}>
      <div className={` min-h-screen ${darkMode ? "dark" : ""}`}>
        <Navigation darkMode={darkMode} setDarkMode={setDarkMode} />
        <Component {...pageProps} />
      </div>
    </SessionProvider>
  );
};

export default trpc.withTRPC(MyApp);
