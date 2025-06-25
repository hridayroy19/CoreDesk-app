import { createHero } from "@/utlis/actions/herosectionCreate";
import Form from "next/form";

const HerosectionForm = () => {
  return (
    <div className=" px-4 py-8">
      <div className="max-w-screen-xl mx-auto">
        <div className="bg-gray-300 rounded-lg p-6 shadow-lg md:p-10">
          <Form action={createHero} className="space-y-6">
            {/* Name Input */}
            <div className="flex gap-5 w-full mx-auto">
              <div className="w-full">
                <label htmlFor="name" className="text-gray-700 font-medium">
                  Title
                </label>
                <input
                  className="w-full mt-1 rounded-md border-gray-300 p-3 text-sm focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your name"
                  type="text"
                  id="name"
                />
              </div>
              <div className="w-full">
                <label htmlFor="name" className="text-gray-700 font-medium">
                  Image Url
                </label>
                <input
                  className="w-full mt-1 rounded-md border-gray-300 p-3 text-sm focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your name"
                  type="text"
                  id="name"
                />
              </div>
            </div>

            {/* Message Textarea */}
            <div>
              <label htmlFor="message" className="text-gray-700 font-medium">
                Project Description
              </label>
              <textarea
                className="w-full mt-1 rounded-md border-gray-300 p-3 text-sm focus:ring-2 focus:ring-blue-500"
                placeholder="Write your message..."
                id="message"
                rows={4}
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="mt-4 ">
              <button
                type="submit"
                className="w-full sm:w-auto rounded-lg bg-blue-600 px-6 py-3 font-medium text-white hover:bg-blue-700 transition"
              >
                Create Banner
              </button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default HerosectionForm;
