"use client";
import { useState } from "react";
import Link from "next/link";
import { FaCog, FaHome, FaBars, FaTimes } from "react-icons/fa";
import { IoCreateOutline } from "react-icons/io5";
import { CiSettings } from "react-icons/ci";
import { MdLogout } from "react-icons/md";
import { logout } from "@/utlis/actions/AuthService";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        className="md:hidden fixed top-4 left-4 z-50 bg-blue-950 p-2 text-white "
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </button>

      {/* Sidebar */}
      <div
        className={`bg-blue-950 fixed top-0 left-0 h-full p-4  transition-transform duration-300 ease-in-out 
        ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 md:w-48`}
      >
        <ul className="space-y-4">
          <li>
            <Link
              href="/dashboard"
              className="flex items-center space-x-2 p-3 rounded-md hover:bg-gray-500 text-white"
            >
              <FaHome className="h-5 w-5" />
              <span>Dashboard</span>
            </Link>
          </li>
          <li>
            <Link
              href="/dashboard/herosection"
              className="flex items-center space-x-2 p-3 rounded-md hover:bg-gray-500 text-white"
            >
              <IoCreateOutline className="h-5 w-5" />
              <span>Hero Section </span>
            </Link>
          </li>
          <li>
            <Link
              href="/dashboard/createServices"
              className="flex items-center space-x-2 p-3 rounded-md hover:bg-gray-500 text-white"
            >
              <IoCreateOutline className="h-5 w-5" />
              <span>Creat Services</span>
            </Link>
          </li>
          <li>
            <Link
              href="/dashboard/message"
              className="flex items-center space-x-2 p-3 rounded-md hover:bg-gray-500 text-white"
            >
              <FaCog className="h-5 w-5" />
              <span> Message Management</span>
            </Link>
          </li>
          <li>
            <Link
              href="/"
              className="flex items-center space-x-2 mt-32 p-3 rounded-md hover:bg-gray-500 text-white"
            >
              <FaHome className="h-5  w-5" />
              <span>Home</span>
            </Link>
          </li>
          <li>
            <div
            onClick={async () => await logout()}
              className="flex items-center space-x-2  p-3 rounded-md hover:bg-gray-500 text-white"
            >
              <MdLogout className="h-5  w-5" />
              <span> LogOut</span>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
