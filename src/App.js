import { ToastContainer } from "react-toastify";
import Routes from "./routes/Routes";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import { useState } from "react";
import RedirectScreen from "./pages/smallComponents/Home/RedirectScreen";

const App = () => {
  const [isRedirect, setIsRedirect] = useState();
  return isRedirect ? (
    <RedirectScreen />
  ) : (
    <div className="bg-white dark:bg-[#0F172A]">
      <Routes setIsRedirect={setIsRedirect} />
      <ToastContainer />
    </div>
  );
};

export default App;
