// import LandingPage from "./components/LandingPage";
// function App() {
//   return (
//     <div className="App">
//       <LandingPage />
//     </div>
//   );
// }

// export default App;

import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import AuthPage from "./components/AuthPage";
import PersonaSelector from "./components/PersonaSelector";
import AvaDashboard from "./components/AvaDashboard";
import BlazeDashboard from "./components/BlazeDashboard";
import OtisDashboard from "./components/OtisDashboard";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/personas" element={<PersonaSelector />} />
        <Route path ="/ava-dashboard" element = {<AvaDashboard/>} />
        <Route path ="/blaze-dashboard" element = {<BlazeDashboard/>} />
        <Route path ="/otis-dashboard" element = {<OtisDashboard/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
