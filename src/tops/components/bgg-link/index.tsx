import MainContext from "@/tops/context";
import { useContext, useMemo } from "react";
import data from "../../data";

const BggLink = () => {
  const { currentTopElementIndex, telonOpen } = useContext(MainContext);

  const bggLink = useMemo(() => {
    if (currentTopElementIndex === null) {
      return "";
    }
    return data.list[currentTopElementIndex].bgg_id;
  }, [currentTopElementIndex]);

  return (
    <div>
      <a
        href={`https://boardgamegeek.com/boardgame/${bggLink}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-0 left-0 z-5000 font-bold text-orange-500 bg-blue-950 px-5 py-1 rounded-tr-2xl block hover:opacity-100 opacity-30 transition-opacity"
      >
        BGG
      </a>
    </div>
  );
};

export default BggLink;
