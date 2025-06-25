"use client";
import Link from "next/link";
import { toast } from "sonner";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { loginUser } from "@/utlis/actions/AuthService";

const LoginForm = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handelLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await loginUser(formData);
      console.log(res);
      if (res?.data) {
        router.push("/");
        toast.success(res?.message);
      } else {
        toast.error(res?.message);
      }
    } catch (error) {
      console.error(error);
    }
    console.log(formData);
  };

  return (
    <>
      <div className="bg-[#e6dcdc] py-24 md:py-32 text-white lg:px-14 px-5">
        <div className="flex items-center justify-center">
          <div className="bg-[#353538da] px-6 py-8 rounded-xl shadow-lg max-w-md w-full transition-transform transform">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-semibold">Welcome Back!</h2>
              <p className="text-sm mt-2">
                Please login to your account to continue.
              </p>
            </div>
            <form onSubmit={handelLogin} className="space-y-6">
              <div className="mb-4">
                <label htmlFor="Email" className="block text-sm  font-medium">
                  Email
                </label>
                <input
                  type="email"
                  id="Email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="mt-1 text-black py-2 px-5 w-full rounded-md  text-sm shadow-sm focus:outline-none "
                />
              </div>
              <div className="mb-4">
                <label htmlFor="Password" className="block text-sm font-medium">
                  Password
                </label>
                <input
                  type="password"
                  id="Password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  className="mt-1 px-5 py-2 w-full rounded-md  text-sm shadow-sm focus:outline-none text-black "
                />
              </div>

              <div className="mb-6 mt-3">
                <label
                  htmlFor="MarketingAccept"
                  className="flex gap-4 items-center"
                >
                  <input
                    type="checkbox"
                    id="MarketingAccept"
                    name="marketing_accept"
                    className="rounded-md shadow-sm"
                  />
                  <span className="text-sm ">
                    I want to receive emails about events, product updates, and
                    company announcements.
                  </span>
                </label>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center sm:gap-4">
                <button
                  type="submit"
                  className="w-full px-6 sm:w-auto inline-block rounded-md bg-[#4F46E5] py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-[#4F46E5] border border-[#4F46E5] focus:outline-none"
                >
                  Login
                </button>

                <p className="mt-4 sm:mt-0 text-sm text-gray-400">
                  Don’t have an account?{" "}
                  <Link href="/reg" className="text-[#4F46E5] underline">
                    Sign up
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
