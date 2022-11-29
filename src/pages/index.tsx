import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";

import { trpc } from "../utils/trpc";
import Search from "../components/Search";
import EventSection from "../components/EventSection";
import DeckCards from "../components/DeckCards";

const event = {
  id: "1",
  name: "Event 1",
  description: "This is the first event",
  date: new Date(),
  category: "Sport",
  paid: false,
  price: 0,
  limit: true,
  maxAttendees: 10,
  image: "",
  link: "",
  address: {
    houseNo: "1",
    street: "123 Main St",
    city: "New York",
    state: "NY",
    zip: "12345",
    country: "USA",
  },
};

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>AtEventz</title>
        <meta name="description" content="AtEventz | Host and attend Events" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className=" dark:bg-gray-900 dark:text-white">
        <div className="container mx-auto ">
          <div className="mt-8 mb-16  flex flex-col items-center justify-between md:flex-row">
            <div className="text-center md:text-left">
              <div className=" text-4xl font-bold tracking-wider">
                Attend Eventz. Host Eventz.
              </div>
              <div className="mt-1 text-xl font-semibold">
                For Free. Whenever. Wherever.
              </div>
            </div>
            <div className="hidden md:mt-0 md:block md:w-1/4">
              <DeckCards />
            </div>
          </div>
          <div className="flex flex-col items-center gap-4">
            <div className="text-xl font-bold">Search for your next Event</div>
            <Search />
          </div>

          <EventSection type="Sports" />
          <EventSection type="Party" />
        </div>
      </main>
    </div>
  );
};

export default Home;

// const hello = trpc.example.hello.useQuery({ text: "from tRPC" });

//       <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
//         <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
//           <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
//             Create <span className="text-[hsl(280,100%,70%)]">T3</span> App
//           </h1>
//           <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-8">
//             <Link
//               className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20"
//               href="https://create.t3.gg/en/usage/first-steps"
//             >
//               <h3 className="text-2xl font-bold">First Steps →</h3>
//               <div className="text-lg">
//                 Just the basics - Everything you need to know to set up your
//                 database and authentication.
//               </div>
//             </Link>
//             <Link
//               className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20"
//               href="https://create.t3.gg/en/introduction"
//             >
//               <h3 className="text-2xl font-bold">Documentation →</h3>
//               <div className="text-lg">
//                 Learn more about Create T3 App, the libraries it uses, and how
//                 to deploy it.
//               </div>
//             </Link>
//           </div>
//           <div className="flex flex-col items-center gap-2">
//             <p className="text-2xl text-white">
//               {hello.data ? hello.data.greeting : "Loading tRPC query..."}
//             </p>
//             <p>{everyone.data?.toString()}</p>
//             <AuthShowcase />
//           </div>
//         </div>
//       </main>

// const AuthShowcase: React.FC = () => {
//   const { data: sessionData } = useSession();

//   const { data: secretMessage } = trpc.auth.getSecretMessage.useQuery(
//     undefined, // no input
//     { enabled: sessionData?.user !== undefined }
//   );

//   return (
//     <div className="flex flex-col items-center justify-center gap-4">
//       <p className="text-center text-2xl text-white">
//         {sessionData && <span>Logged in as {sessionData.user?.name}</span>}
//         {secretMessage && <span> - {secretMessage}</span>}
//       </p>
//       <button
//         className="rounded-full bg-white/10 px-10 py-3 font-semibold text-white no-underline transition hover:bg-white/20"
//         onClick={sessionData ? () => signOut() : () => signIn()}
//       >
//         {sessionData ? "Sign out" : "Sign in"}
//       </button>
//     </div>
//   );
// };
