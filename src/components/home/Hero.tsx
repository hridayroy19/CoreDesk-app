"use client";

const Hero = () => {
  return (
    <div className="py-16">
      <section
        className="relative bg-cover bg-center bg-no-repeat text-black lg:grid lg:h-screen lg:place-content-center"
        style={{
          backgroundImage: `url('https://i.ibb.co/39NvH3qH/images.jpg)`,
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="relative mx-auto w-screen max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-32 text-white">
          <div className="max-w-prose">
            <h1 className="text-4xl font-bold sm:text-5xl">
              Welcome To
              <strong className="text-orange-700"> Coredesk </strong>
              Services
            </h1>

            <p className="mt-4 text-base text-pretty sm:text-lg/relaxed">
              20 Years of experience in providing seamless and efficient
              solutions
            </p>
            <p className="mt-4 text-base text-pretty sm:text-lg/relaxed">
              Highly skilled, professional and experienced team
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
