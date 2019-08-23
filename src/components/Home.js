import React from "react";
import desktop from "components/desktop.jpg";
import mobile from "components/mobile.jpg";
import "components/Style.css";
import { Image } from "react-bootstrap"; // Tell Webpack this JS file uses this image

const Home = () => {
//   const imageUrl = useWindowWidth() >= 650 ? desktop : mobile;

//   return (
//     <div className="App" style={{ backgroundImage: `url(${imageUrl})` }}>
//       <div className="App-content">
//         <h1>Pineapples</h1>
//         <p>They are good</p>
//       </div>
//     </div>
//   );
// };

// const useWindowWidth = () => {
//   const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);

//   const handleWindowResize = () => {
//     setWindowWidth(window.innerWidth);
//   };

//   React.useEffect(() => {
//     window.addEventListener("resize", handleWindowResize);
//     return () => window.removeEventListener("resize", handleWindowResize);
//   }, []);

//   return windowWidth;
  //   const imageUrl = window.innerWidth >= 650 ? desktop : mobile;

  //   return (
  //     <div className="App" style={{ backgroundImage: `url(${imageUrl})` }}>
  //       <div className="App-content">
  //         <h1>Pineapples</h1>
  //         <p>They are good</p>
  //       </div>
  //     </div>
  //   );

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
