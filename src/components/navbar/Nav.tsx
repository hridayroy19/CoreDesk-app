/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { navLinks } from "../../../constant/constant";
import Link from "next/link";
import { HiBars3BottomLeft } from "react-icons/hi2";
import { useEffect, useState } from "react";
import { currentUser } from "@/utlis/actions/AuthService";

//props type
type Props = {
  openNav: () => void;
  session: {
    user?: {
      name?: string | null;
      email?: string | null;
      image?: string | null;
    };
  } | null;
};

const Nav = ({ openNav }: Props) => {
  // console.log(session);

  const [user, setUser] = useState<any>(null);
  console.log(user);

  useEffect(() => {
    const fetchData = async () => {
      const data = await currentUser();
      setUser(data);
      // console.log(data);
    };
    fetchData();
  }, []);

  const [navBg, setNavBg] = useState(false);

  useEffect(() => {
    const handler = () => {
      if (window.scrollY >= 90) {
        setNavBg(true);
      }
      if (window.scrollY < 90) {
        setNavBg(false);
      }
    };

    window.addEventListener("scroll", handler);
    return () => {
      window.removeEventListener("scroll", handler);
    };
  }, []);

  return (
    <div
      className={`fixed ${
        navBg ? "bg-[#101011]" : "fixed bg-[#101011]"
      } h-[12vh] z-[10] w-full transition-all  duration-200 `}
    >
      <div className=" flex items-center h-full justify-between w-[95%] sm:w-[90%] mx-auto ">
        <div className="w-[110px]">
          <h3 className="text-orange-600 text-4xl"> CoreDesk </h3>
        </div>
        <div className=" flex items-center space-x-10">
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((navlink) => {
              return (
                <Link key={navlink.id} href={navlink.url}>
                  <p className="nav_link">{navlink.label}</p>
                </Link>
              );
            })}
          </div>
          {/* button */}
          <div className=" flex items-center space-x-4">
            {user ? (
              <Link href="dashboard">
                <button className="text-white bg-blue-950 border-2 py-1 px-3 text-sm">
                  Dashboard
                </button>
              </Link>
            ) : (
              <Link href="/login">
                <button className="text-white border-2 py-1 px-3 text-sm">
                  Login
                </button>
              </Link>
            )}
            {/* mobil devic menu icon */}
            <HiBars3BottomLeft
              onClick={openNav}
              className=" w-8 h-8 cursor-pointer lg:hidden  text-white"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
