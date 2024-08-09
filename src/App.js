import "./index.css";
import Year from "./components/Year";
import { ReactLenis, useLenis } from "lenis/react";

//importing images
import imageOne from "./assets/susan-wilkinson-PioWzRYa3rk-unsplash.jpg";
import imageTwo from "./assets/jaromir-kalina-KsQH_iXcw6Q-unsplash.jpg";
import imageThree from "./assets/marek-piwnicki-EvPIOKp3f98-unsplash.jpg";
import imageFour from "./assets/noam-cohen-EJhtDSR-ghc-unsplash.jpg";
import imageFive from "./assets/noam-cohen-STiLtEKYKdY-unsplash.jpg";
// import imageSix from "./assets/shaain-ibrahim-tiuvKE-_0rc-unsplash.jpg";
import imageSeven from "./assets/susan-wilkinson-4C-ynOpVRgw-unsplash.jpg";

function App() {
  const lenis = useLenis(({ scroll }) => {});

  return (
    <ReactLenis root>
      <div className="App">
        <Year color="" text="2018" image={imageOne} top={0} />
        <Year color="" text="2019" image={imageTwo} top={0} />
        <Year color="" text="2020" image={imageThree} top={140} />
        <Year color="" text="2021" image={imageFour} top={85} />
        <Year color="white" text="2022" image={imageFive} top={220} />
        {/* <Year color="yellow" text="2023" image={imageSix} top={360} /> */}
        <Year color="" text="2024" image={imageSeven} top={60} />
      </div>
    </ReactLenis>
  );
}

export default App;
