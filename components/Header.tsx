

import { getServerSession } from "next-auth";
import Logo from "./Logo";
import DarkModeToggle from "./DarkModeToggle";
 import UserButton from "./UserButton";
import Link from "next/link";
import { MessagesSquareIcon } from "lucide-react";
import { authOptions } from "@/auth";

async function Header() {
  const session = await getServerSession(authOptions);
  console.log("show session",session);
  return (
    <header className="sticky bg-violet-500 dark:bg-gray-900">
      <nav className="flex flex-col sm:flex-row items-center pl-2 bg-green dark:bg-gray-900 max-w-7xl mx-auto">
        <Logo />

        <div className="flex-1 flex items-center justify-end space-x-4 ">
          {session ? (
            <>
            {/* // used prefecth to avoid extra reads from firebase */}
              <Link href={"/chat"} prefetch={false}> 
                <MessagesSquareIcon className="text-black dark:text-white" />
              </Link>
            </>
          ) : (
            <Link href={"/pricing"}>Pricing</Link>
          )}

          <DarkModeToggle /> 

          {/* userbutton */}
          <UserButton session={session}/>
        </div>
      </nav>
      {/* add upgrade banner  */}
    </header>
  );
}

export default Header;
