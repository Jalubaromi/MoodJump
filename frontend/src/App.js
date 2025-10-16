import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Profil from "./pages/Profil/Profil";
import Flux from "./pages/Flux/Flux";
import Bot from "./pages/Bot/Bot";
import Home from "./pages/Home/Home";
import Layout from "./components/Layout/Layout";

export default function App() {
  return (
    <Router>
      <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
            <Route path="/Profil" element={<Profil />} />
            <Route path="/Flux" element={<Flux />} />
            <Route path="/Bot" element={<Bot />} />
            </Routes>
      </Layout>
    </Router>
  );
}
