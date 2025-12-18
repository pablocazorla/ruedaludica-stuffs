import Gallery from "./components/gallery";
import Telon from "./components/telon";
import Accesit from "./components/accesit";
import MainContext from "./context";
import { useContext, useState } from "react";

function App() {
  const { loading } = useContext(MainContext);

  const [startedTop10, setStartedTop10] = useState(false);

  return loading ? (
    <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-5xl">
      Cargando...
    </div>
  ) : startedTop10 ? (
    <>
      <Gallery />
      <Telon />
    </>
  ) : (
    <Accesit setStartedTop10={setStartedTop10} />
  );
}

export default App;
