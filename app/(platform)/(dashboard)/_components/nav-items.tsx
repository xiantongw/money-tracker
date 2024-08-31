"use client";

import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { useRouter } from "next/navigation";

export type Organization = {
  id: string;
  slug: string;
  imageUrl: string;
  name: string;
};

interface NavItemsProps {
  organization: Organization;
}

export const NavItems = ({ organization }: NavItemsProps) => {
  const router = useRouter();
  const routes = [
    {
      label: "Overview",
      href: `/organization/${organization.id}/overview`,
    },
    {
      label: "Transactions",
      href: `/organization/${organization.id}/transactions`,
    },
  ];

  const onClick = (href: string) => {
    router.push(href);
  };

  return (
    <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
      {routes.map((route) => (
        <li>
          <Button
            className="block py-2 px-3 text-md text-neutral-700 "
            variant="ghost"
            onClick={() => onClick(route.href)}
          >
            {route.label}
          </Button>
        </li>
      ))}
    </ul>
  );
};

NavItems.Skeleton = function SkeletonNavItems() {
  return (
    <div className="flex items-center gap-x-2">
      <Skeleton className="h-10 w-full" />
    </div>
  );
};
