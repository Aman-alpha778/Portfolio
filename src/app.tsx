import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  About,
  Contact,
  Experience,
  Hero,
  Navbar,
  ProjectsPage,
  Tech,
  Works,
  StarsCanvas,
} from "./components";
import Footer from "./components/footer";

const HomePage = () => (
  <div className="relative z-0 bg-primary">
    <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
      <Navbar hide={false} />
      <Hero />
    </div>
    <About />
    <Experience />
    <Tech />
    <Works />

    <div className="relative z-0">
      <Contact />
      <StarsCanvas />
    </div>
    <Footer />
  </div>
);

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/projects/:slug" element={<ProjectsPage />} />
    </Routes>
  </BrowserRouter>
);

export default App;
