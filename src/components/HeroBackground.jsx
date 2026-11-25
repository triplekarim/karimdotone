import { useEffect } from "react";
import GradientASCII from "./bits/GradientASCII.jsx";

/**
 * The landing page ASCII background: React Bits' "Atmosphere" preset
 * (which is the component's defaults) with the palette swapped to purple.
 * Tells the hero once it has mounted, so the headline can wait for it.
 */
export default function HeroBackground() {
  useEffect(() => {
    document.dispatchEvent(new CustomEvent("hero:bg-ready"));
  }, []);

  // same structure as the preset's blue ramp (deep, bright, light, mid), kept darker
  return (
    <GradientASCII
      colors={["#3b1286", "#ddd6fe", "#a78bfa", "#7c3aed"]}
      gradientOpacity={0.875}
      dpr={1.5}
      style={{}}

      characters=" =+kK08#@"
      glow={0.4}
      depthOfField={0.3}
      flow={1.8}
    />
  );
}
