import { useState } from "react";
import "./App.css";

import DarkVeil from "./components/DarkVeil";
import PixelBlast from "./components/PixelBlastt";
import Waves from "./components/Waves";

function App() {
  return (
    <>
      <div style={{ width: "100%", height: "100%", position: "absolute" }}>
        {/* <DarkVeil speed={0.5} hueShift={193} /> */}

        {/* 
        <PixelBlast
          variant="square"
          pixelSize={7}
          color="#a60000"

          patternScale={4}
          patternDensity={1}
          pixelSizeJitter={0}
          
          enableRipples
          rippleSpeed={0.4}
          rippleThickness={0.12}
          rippleIntensityScale={1.5}

          speed={0.5}
          edgeFade={0.1}
          transparent
        /> */}

        <Waves
          lineColor="#1a1b00ff"
          backgroundColor="rgba(0, 0, 0, 1)"
          waveSpeedX={0.02}
          waveSpeedY={0.01}
          waveAmpX={40}
          waveAmpY={20}
          friction={0.7}
          tension={0.01}
          maxCursorMove={240}
          xGap={32}
          yGap={48}
        />

        <div className="main-content">
          <section className="hero">
            <div className="hero-content">
              <h1>.karim</h1>

              
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default App;
