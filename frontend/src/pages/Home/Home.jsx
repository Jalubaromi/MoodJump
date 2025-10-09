import { useState, useEffect } from "react";

export default function Home() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("/")
      .then(res => res.json())
      .then(data => setMessage(data.msg))
      .catch(err => console.error("Erreur fetch:", err));
  }, []);

  return (
    <div className="home">
      <h1>{message}</h1>
      <p>TEST PAGE d'ACCUEIL</p>
    </div>
  );
}