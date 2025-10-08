import { useState, useEffect } from "react";

import Layout from "./components/Layout/Layout.jsx";
import Home from "./pages/Home/Home.jsx";

export default function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("/api/hello")
      .then(res => res.json())
      .then(data => setMessage(data.msg))
      .catch(err => console.error("Erreur fetch:", err));

  }, []);

  return (
    <div className="App">
      < Layout>
        <h1>{message}</h1>;
      </Layout>
  </div>
  )
}
