"use client";
const Footer = () => {
  return (
    <footer className="bg-gray-50 mt-10">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <div className="flex justify-center text-orange-700 sm:justify-start">
            <h2 className="text-2xl">CoreDesk</h2>
          </div>

          <p className="text-center text-sm text-gray-500 lg:mt-0 lg:text-right">
            Copyright &copy; 2025. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
