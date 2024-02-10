import "./App.css";
import ThemeButton from "./pages/smallComponents/Home/ThemeButton";

const App = () => {
  return (
    <div className="bg-white dark:bg-[#0F172A] w-full h-screen">
      <div className="flex justify-between items-center w-full container mx-auto bg-[#18334F] py-3 border-l border-r border-b border-gray-700 rounded-bl-lg rounded-br-lg px-2">
        <h1 className="text-3xl font-bold text-white">Todo</h1>
        <ThemeButton />
      </div>
    </div>
  );
};

export default App;
