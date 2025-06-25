import { createService } from "@/utlis/actions/serviceCreate";
import Form from "next/form";
const ServiceForm = () => {
  return (
    <div className=" px-4 py-8">
      <div className="max-w-screen-xl mx-auto">
        <div className="bg-gray-300 rounded-lg p-6 shadow-lg md:p-10">
          <Form action={createService}>
            <h2 className="text-2xl font-semibold mb-6 text-blue-900 text-center">
              Create Blog
            </h2>
            <div className="grid grid-cols-2 gap-6">
              {/* Title */}
              <div>
                <label
                  htmlFor="title"
                  className="block text-sm font-medium text-gray-700"
                >
                  Title
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500"
                  placeholder="Enter blog title"
                />
              </div>
            </div>
            {/* service Image (URL Input) */}
            <div className="my-5">
              <label
                htmlFor="blog_image"
                className="block text-sm font-medium text-gray-700"
              >
                Services Image URL
              </label>
              <input
                type="url"
                id="blog_image"
                name="blog_image"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500"
                placeholder="Paste image URL here"
              />
            </div>
            {/* content */}
            <div>
              <label
                htmlFor="content"
                className="block text-sm font-medium text-gray-700"
              >
                Description
              </label>
              <textarea
                id="content"
                name="content"
                rows={4}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500"
                placeholder="Enter blog content"
              ></textarea>
            </div>
            <button
              type="submit"
              className="mt-6 w-full bg-blue-900 text-white py-2 px-4 rounded-md hover:bg-teal-500 focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              Create
            </button>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default ServiceForm;
