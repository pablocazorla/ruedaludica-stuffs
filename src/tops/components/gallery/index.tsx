import MainContext from "../../context";
import type { TopElement } from "../../models/data";
import cx from "../../utils/cx";
import { useContext, useEffect, useState } from "react";
import data from "../../data";
import {
  IconAge,
  IconDuration,
  IconWeight,
  IconYear,
  IconPlayers,
} from "./icons";

const DELAY = 3000;
const DELAY_IMAGES = 6000;

const Gallery = () => {
  const { currentTopElementIndex, telonOpen } = useContext(MainContext);

  const [element, setElement] = useState<TopElement>(data.list[0]);

  const [imagesVisibility, setImagesVisibility] = useState<{
    prev_visible: number;
    visible: number;
  }>({
    prev_visible: 9999,
    visible: 9999,
  });

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout> | null = null;
    if (currentTopElementIndex !== null) {
      timer = setTimeout(() => {
        setElement(data.list[currentTopElementIndex]);
      }, DELAY);
    }
    return () => {
      if (timer) {
        clearTimeout(timer);
      }
    };
  }, [currentTopElementIndex]);

  useEffect(() => {
    let timer: ReturnType<typeof setInterval> | null = null;
    if (element) {
      setImagesVisibility({
        prev_visible: 9999,
        visible: 0,
      });
      timer = setInterval(() => {
        setImagesVisibility((prevImagesVisibility) => {
          const prev_visible = prevImagesVisibility.visible;

          let visible = prevImagesVisibility.visible + 1;

          if (visible >= element.images.length) {
            visible = 0;
          }

          return {
            prev_visible,
            visible,
          };
        });
      }, DELAY_IMAGES);
    }
    return () => {
      if (timer) {
        clearInterval(timer);
      }
    };
  }, [element]);

  return element ? (
    <div
      className={cx(
        "w-dvw h-dvh bg-gray-400 relative overflow-hidden gallery",
        {
          telon_is_open: telonOpen,
        }
      )}
    >
      <div className="title">
        <div className="flex items-center justify-center gap-2 title_text">
          <div className="text-right title_num">{`${element.num}-`}</div>
          <div className="text-center">{element.title}</div>
        </div>
        <div className="flex items-center justify-center gap-2">
          <div className="title_badge">
            <div className="">
              <IconYear />
              <div className="title_badge_text">{element.year}</div>
            </div>
          </div>
          <div className="title_badge">
            <div className="">
              <IconPlayers />
              <div className="title_badge_text">{element.players}</div>
            </div>
          </div>
          <div className="title_badge">
            <div className="">
              <IconAge />
              <div className="title_badge_text">{`${element.age}+`}</div>
            </div>
          </div>
          <div className="title_badge">
            <div className="">
              <IconDuration />
              <div className="title_badge_text">{element.duration}</div>
            </div>
          </div>
          <div className="title_badge">
            <div className="">
              <IconWeight />
              <div className="title_badge_text">{`${element.weight}/5`}</div>
            </div>
          </div>
        </div>
      </div>
      <div className="dimmer_1"></div>
      <div className="dimmer_2"></div>
      {element.images.map((image, k) => {
        return (
          <div
            className={cx("gallery_image", {
              prev_visible: k === imagesVisibility.prev_visible,
              visible: k === imagesVisibility.visible,
            })}
            key={k}
          >
            <img src={image} alt="" />
          </div>
        );
      })}
    </div>
  ) : null;
};

export default Gallery;
