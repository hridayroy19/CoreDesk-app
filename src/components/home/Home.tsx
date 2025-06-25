import Hero from "./Hero";
import Service from "./services/service";
import Map from "./map/Map";

const HomePage = () => {
  return (
    <div className="overflow-hidden">
      <Hero />
      <Service />
      <Map />
    </div>
  );
};

export default HomePage;
