"use client";

import { createMessage } from "@/utlis/actions/sendMessage";
import Form from "next/form";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const ContactPage = () => {
  return (
    <div className="w-full">
      {/* Hero section */}
      <div
        className="h-[300px] md:h-[400px] bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://i.ibb.co/dsxHkjMk/case-study-vdci-redesign-magento-2.png')",
        }}
      >
        <h1 className="text-white text-3xl md:text-5xl font-bold">
          Contact Us
        </h1>
      </div>

      {/* Contact section */}
      <div className="bg-[#f3edece7] text-black w-full flex flex-col lg:flex-row justify-between gap-10 p-6 md:p-10 lg:px-20">
        {/* Contact Form */}
        <div className="w-full lg:w-1/2">
          <h2 className="text-xl font-semibold text-[#d04565] mb-4">
            Get In Touch
          </h2>
          <Form action={createMessage} className="space-y-4">
            <div className="flex gap-4">
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="w-1/2 p-2 border border-gray-400 rounded"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="w-1/2 p-2 border border-gray-400 rounded"
              />
            </div>
            <textarea
              name="message"
              placeholder="Project Description"
              className="w-full p-2 border border-gray-400 rounded h-32"
            ></textarea>
            <button
              type="submit"
              className="bg-[#d04565] text-white px-6 py-2 rounded hover:bg-[#b53555] transition"
            >
              Submit
            </button>
          </Form>
        </div>

        {/* Contact Info */}
        <div className="w-full lg:w-1/2">
          <h2 className="text-xl font-semibold text-[#d04565] mb-4">
            Information
          </h2>
          <div className="space-y-6">
            <div className="flex items-start gap-3">
              <FaPhoneAlt className="text-[#d04565] mt-1" />
              <div>
                <h3 className="font-bold">Call Us</h3>
                <p className="text-gray-700">+1 (214) 762-8622</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <FaMapMarkerAlt className="text-[#d04565] mt-1" />
              <div>
                <h3 className="font-bold">US Office Address</h3>
                <p className="text-gray-700">
                  555 Lakehill Way, Johns Creek, GA 30022
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <FaEnvelope className="text-[#d04565] mt-1" />
              <div>
                <h3 className="font-bold">Email Address</h3>
                <p className="text-gray-700">info@coredeskservices.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
