// External Imports
import { Routes, Route } from "react-router-dom";

// Internal Imports
import routes from "./routes";

// Components
import { Navbar } from "./components";

const App = () => {
  return (
    <div className="w-screen min-h-screen bg-gray-100">
      <Navbar />
      <Routes>
        {routes.map((route, index) => (
          <Route {...route} key={index} />
        ))}
      </Routes>
    </div>
  );
};

export default App;
