import React from "react";
import Image from "next/image";
import loogleLogo from "../public/images/googlelogo_light_color_272x92dp.png";

const Home = () => {
  return (
    <div className="bg-blue-500 ">
      <Image src={loogleLogo} alt="loogle" />
    </div>
  );
};

export default Home;
