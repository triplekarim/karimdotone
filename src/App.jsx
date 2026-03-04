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

        <div style={{ position: "fixed", inset: 0, width: "100%", height: "100%", zIndex: 0, pointerEvents: "none" }}>
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
        </div>

        <div className="main-content" style={{ position: "relative", zIndex: 1 }}>
          <h1>Hi, I'm Karim</h1>
          <h2>(The one and only)</h2>

          <section className="dynamic-layout">
            <div className="dynamic-layout-item">Computer Science Student</div>

            <div className="dynamic-layout-item">
              I like:
              <div className="item-frame">
                <ul>
                  <li>Coding</li>
                  <li>Music</li>
                  <li>Gaming</li>
                </ul>
              </div>
            </div>

            <div className="dynamic-layout-item">
              <img src="" alt="" />
              My Ducks
            </div>

            <div className="dynamic-layout-item">
              I support:
              <div className="item-frame">
                <ul>
                  <li>Item 1</li>
                  <li>Item 2</li>
                  <li>Item 3</li>
                  <li>Item 4</li>
                </ul>
              </div>
            </div>

            <div className="dynamic-layout-item">
              <img
                src="src/assets/germanyflag.jpg"
                alt=""
                className="item-img-small"
              />
            </div>

            <div className="dynamic-layout-item">
              Super Professional Roblox Developer
            </div>

            <div className="dynamic-layout-item">
              Get in contact:
              <div>me@karim.one</div>
            </div>

            <div className="dynamic-layout-item">
              <div className="img-frame-medium">
                <img src="" alt="" />
              </div>
              Random Meme
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default App;
