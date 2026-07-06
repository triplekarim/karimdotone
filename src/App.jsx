import { useState } from "react";
import "./App.css";

function App() {
  return (
    <>
      <div style={{ width: "100%", height: "100%", position: "absolute" }}>
        <div className="main-content" style={{ position: "relative", zIndex: 1 }}>
          <h2>Hi, I'm</h2>
          <h1>Karim.</h1>
          <h2>(The .one and only)</h2>

          <section className="dynamic-layout">
            <div className="dynamic-layout-item">Computer Science Student</div>
            <div>Tübingen, Germany</div>
            <div className="horizontal-list">
              <a href="https://github.com/triplekarim">My Github</a>
              <a href="mailto:karim@triplemanta.com">My E-Mail</a>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default App;
