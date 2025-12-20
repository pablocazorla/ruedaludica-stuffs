import a_left from "../../assets/telon/A_L.png";
import a_right from "../../assets/telon/A_R.png";
import b_left from "../../assets/telon/B_L.png";
import b_right from "../../assets/telon/B_R.png";
import c from "../../assets/telon/C.png";
import d_left from "../../assets/telon/D_L.png";
import d_right from "../../assets/telon/D_R.png";
import Acce from "./acce";
import data from "../../data";
import { useEffect, useState } from "react";
import cx from "@/utils/cx";
import { previousTop } from "../../data";

const { accesit: accesitList } = data;

const Accesit = ({
  setStartedTop10,
}: {
  setStartedTop10: (value: boolean) => void;
}) => {
  const [step, setStep] = useState(0);

  const [isFadding, setIsFadding] = useState(false);

  useEffect(() => {
    let timer = null;
    if (isFadding) {
      timer = setTimeout(() => {
        setStartedTop10(true);
      }, 1000);
    }
    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [isFadding]);

  return (
    <div className="w-dvw h-dvh fixed top-0 left-0 telon xopacity-30">
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
      {step === 0 ? (
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[90dvh] flex flex-col items-center justify-center  text-shadow-[0_3px_6px_#000]">
          <h2 className="text-4xl font-semibold mb-5 text-center text-shadow-[0_3px_10px_#000]">
            El Top 15 de 2024...
          </h2>
          <ul className="w-fit text-3xl">
            {previousTop.map((item) => (
              <li key={item.num} className="mb-2 flex items-center">
                <div className="w-16 text-right">{item.num}</div>
                <div className="pr-2 pl-1">-</div>
                <div>{item.title}</div>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <div
          className={cx(
            "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[90dvh] accesit",
            {
              "opacity-0": isFadding,
            }
          )}
        >
          <h2 className="text-4xl font-semibold mb-5 text-center text-shadow-[0_3px_10px_#000]">
            Se quedaron afuera por poco...
          </h2>
          <div className="flex flex-wrap items-center justify-center">
            {accesitList.map((item, index) => (
              <Acce key={index} item={item} />
            ))}
          </div>
        </div>
      )}

      <div
        className="telon_btn opacity-50 bg-amber-900"
        onClick={() => {
          if (step === 0) {
            setStep(1);
            return;
          }

          setIsFadding(true);
        }}
      ></div>
    </div>
  );
};

export default Accesit;
