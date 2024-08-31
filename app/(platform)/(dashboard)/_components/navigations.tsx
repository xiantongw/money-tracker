import { Button } from "@/components/ui/button";
import { useOrganization } from "@clerk/nextjs";
import Link from "next/link";

const Navigations = () => {
  const { organization: activeOrganization, isLoaded: isLoadedOrg } =
    useOrganization();

  return (
    <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
      <li>
        <Button
          className="block py-2 px-3 text-md text-neutral-700 "
          variant="ghost"
        >
          <Link href="/organization/${organization.id}/overview">Overview</Link>
        </Button>
      </li>
      <li>
        <Button
          className="block py-2 px-3 text-md text-neutral-700 "
          variant="ghost"
        >
          <Link href="/organization/${organization.id}/transactions">
            Transactions
          </Link>
        </Button>
      </li>
    </ul>
  );
};

export default Navigations;
