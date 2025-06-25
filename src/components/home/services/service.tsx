import Image from "next/image";

const Service = () => {
  return (
    <div className="px-4 md:px-8 lg:px-16 bg-[#f5f2f1cc]">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif text-center text-orange-600 mb-6">
        Our Services
      </h1>

      <p className="max-w-3xl mx-auto text-sm md:text-base text-gray-600 text-center mb-10">
        We provide comprehensive construction takeoff services covering all 16
        divisions of construction, including Site Construction, Concrete,
        Masonry, Plumbing, Pool, Metal, Wood, Doors and Windows, Finishes,
        Equipment, and Furnishings.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md transition hover:shadow-lg">
          <Image
            alt="Construction Work"
            width={800}
            height={400}
            src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1770&q=80"
            className="h-56 w-full object-cover"
          />

          <div className="p-4 sm:p-6">
            <h3 className="text-lg font-semibold text-orange-600 mb-2">
              Complete Construction Takeoff Solutions
            </h3>

            <p className="text-sm text-gray-600 line-clamp-4">
              Our professional takeoff services include detailed estimates,
              quantity takeoffs, and material listings across all major
              construction divisions to streamline your project.
            </p>

            <a
              href="#"
              className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-600 hover:underline"
            >
              Find out more
              <span
                aria-hidden="true"
                className="transition-all group-hover:ms-0.5 rtl:rotate-180"
              >
                &rarr;
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
