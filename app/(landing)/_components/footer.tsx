export const Footer = () => {
  return (
    <div className="flex items-center justify-center">
      <footer className="fixed bottom-0 bg-white rounded-lg shadow m-4 dark:bg-gray-800">
        <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © {new Date().getFullYear()} Zhuzhu Zhijia. All Rights Reserved.
          </span>
        </div>
      </footer>
    </div>
  );
};
