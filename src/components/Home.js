import React from "react";
import Background from "components/minimalist--wallpaper.jpg";
import { render } from "react-dom";
import { Image } from "react-bootstrap"; // Tell Webpack this JS file uses this image

const Home = () => {
  //   return <img src={ Background } alt="background" />;

  var background = { backgroundSize: "cover" };
  var textStyle = {
    position: "absolute",
    top: "30%",
    right: "60%",
    color: "PowderBlue"
    
  };

  return (
    <div style={{ width: "auto" }}>
      <Image
        style={background}
        responsive
        src="https://free4kwallpapers.com/uploads/originals/2015/10/27/minimalist--wallpaper.jpg"
        width="100%"
      />
      <h1 style={textStyle}>
        Welcome to Media-Library. Recommendations for new media you may be
        interested in await! Start your search now
      </h1>
    </div>
  );
};

export default Home;
