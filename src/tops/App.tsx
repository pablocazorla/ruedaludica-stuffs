import { useContext, useState } from "react";
import Accesit from "./components/accesit";
import BggLink from "./components/bgg-link";
import Gallery from "./components/gallery";
import Telon from "./components/telon";
import MainContext from "./context";

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
      <BggLink />
    </>
  ) : (
    <Accesit setStartedTop10={setStartedTop10} />
  );
}

export default App;
