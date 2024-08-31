import Logo from "@/components/logo";
import { OrganizationSwitcher, UserButton } from "@clerk/nextjs";
import Navigations from "./navigations";

const Navbar = () => {
  return (
    <nav className="fixed bg-white border-gray-200 dark:bg-gray-900 px-4 py-1 border-b shadow-sm w-full flex items-center">
      <div>
        <Logo />
      </div>
      <div className="ml-auto flex items-center gap-x-2 ">
        <Navigations />
      </div>
      <div className="ml-auto flex items-center gap-x-2">
        <OrganizationSwitcher
          hidePersonal
          afterCreateOrganizationUrl="/organization/:id"
          afterLeaveOrganizationUrl="/select-org"
          afterSelectOrganizationUrl="/organization/:id"
          appearance={{
            elements: {
              rootBox: {
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              },
            },
          }}
        />
        <UserButton
          appearance={{
            elements: {
              avatarBox: {
                height: 30,
                width: 30,
              },
            },
          }}
        />
      </div>
    </nav>
  );
};

export default Navbar;
