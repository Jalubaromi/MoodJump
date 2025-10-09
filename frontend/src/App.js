import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from "./pages/Home/Home";
import Layout from "./components/Layout/Layout";

export default function App() {
  return (
    <Router>
      <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
      </Layout>
    </Router>
  );
}
