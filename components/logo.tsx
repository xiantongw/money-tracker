import Image from "next/image";

const Logo = () => {
  return (
    <div>
      <a className="flex items-center space-x-3 rtl:space-x-reverse">
        <Image src="/logo.png" height={50} width={50} alt="App Logo" />
        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
          Money Tracker
        </span>
      </a>
    </div>
  );
};

export default Logo;
