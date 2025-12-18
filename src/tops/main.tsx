import "./index.css";
import App from "./App.tsx";
import { MainContextProvider } from "./context";

const Tops = () => {
  return (
    <MainContextProvider>
      <App />
    </MainContextProvider>
  );
};

export default Tops;
