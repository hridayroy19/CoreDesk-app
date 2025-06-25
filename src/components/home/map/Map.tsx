"use clinet";

const Map = () => {
  return (
    <div className="w-[90%] mt-7 mx-auto justify-center items-center h-64 md:h-96 rounded-lg overflow-hidden shadow-md">
      <iframe
        title="Company Location"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.9026634025037!2d90.39150951498161!3d23.75088568458914!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b894aa87149f%3A0x6fbd7c7b3700a2bb!2sDhaka%2C%20Bangladesh!5e0!3m2!1sen!2sbd!4v1618300450279!5m2!1sen!2sbd"
        width="100%"
        height="100%"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="border-0"
      ></iframe>
    </div>
  );
};

export default Map;
