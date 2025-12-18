import a_left from "../../assets/telon/A_L.png";
import a_right from "../../assets/telon/A_R.png";
import b_left from "../../assets/telon/B_L.png";
import b_right from "../../assets/telon/B_R.png";
import c from "../../assets/telon/C.png";
import d_left from "../../assets/telon/D_L.png";
import d_right from "../../assets/telon/D_R.png";
import cx from "@/utils/cx";
import { useContext, useMemo } from "react";
import MainContext from "../../context";
import data from "../../data";

const Telon = () => {
  const { currentTopElementIndex, telonOpen, setTelonOpen, changeElement } =
    useContext(MainContext);

  const element = useMemo(() => {
    if (currentTopElementIndex === null) {
      return null;
    }
    return data.list[currentTopElementIndex];
  }, [currentTopElementIndex]);

  return element ? (
    <div
      className={cx("w-dvw h-dvh fixed top-0 left-0 telon xopacity-30", {
        is_open: telonOpen,
      })}
    >
      <div
        className="telon_a telon_left"
        style={{ backgroundImage: `url(${a_left.src})` }}
      />
      <div
        className="telon_a telon_right"
        style={{ backgroundImage: `url(${a_right.src})` }}
      />
      <div className="telon_b telon_left">
        <img src={b_left.src} alt="" />
      </div>
      <div className="telon_b telon_right">
        <img src={b_right.src} alt="" />
      </div>
      <div className="telon_c">
        <img src={c.src} alt="" />
      </div>
      <div className="telon_d telon_left">
        <img src={d_left.src} alt="" />
      </div>
      <div className="telon_d telon_right">
        <img src={d_right.src} alt="" />
      </div>
      <div className="telon_puesto puesto">Puesto nº</div>
      <div className="telon_puesto num b">{element.num}</div>
      <div className="telon_puesto num a">{element.num}</div>
      <div
        className="telon_btn"
        onClick={() => {
          if (telonOpen) {
            changeElement("right");
          } else {
            setTelonOpen(true);
          }
        }}
      ></div>
    </div>
  ) : null;
};

export default Telon;
