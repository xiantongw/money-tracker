import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const Navbar = () => {
  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a className="flex items-center space-x-3 rtl:space-x-reverse">
          <Image src="/logo.png" height={50} width={50} alt="App Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            Money Tracker
          </span>
        </a>
        <div className="space-x-4 md:block md:w-auto flex items-center justify-between w-full">
          <Button type="button" variant="outline" asChild>
            <Link href="/sign-in"> Login </Link>
          </Button>
          <Button type="button" variant="outline" asChild>
            <Link href="/sign-up"> Sign Up </Link>
          </Button>
        </div>
      </div>
    </nav>
  );
};
