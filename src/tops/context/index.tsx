import { createContext, useEffect, useState } from "react";
import type { Context } from "../models/context";
import createStorage from "@/utils/storage";
import data from "../data";

const storage = createStorage("tops-ruedaludica");

const length = data.list.length;

const accesitImages = data.accesit.map((item) => item.img);

const allImages = [
  ...accesitImages,
  ...data.list.map((item) => item.images).flat(),
];
const allImagesLength = allImages.length;

const MainContext = createContext({
  currentTopElementIndex: null,
  setCurrentTopElementIndex: () => {},
  telonOpen: false,
  setTelonOpen: () => {},
  changeElement: () => {},
  loading: false,
  setLoading: () => {},
} as Context);

export const MainContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [loading, setLoading] = useState<boolean>(true);

  const [currentTopElementIndex, setCurrentTopElementIndex] = useState<
    number | null
  >(null);
  const [telonOpen, setTelonOpen] = useState<boolean>(false);

  useEffect(() => {
    const storedData = storage.get();
    if (storedData) {
      setCurrentTopElementIndex(storedData.currentTopElementIndex);
    } else {
      setCurrentTopElementIndex(0);
    }
  }, []);

  const changeElement = (to: "left" | "right") => {
    if (currentTopElementIndex === null) {
      return;
    }
    if (to === "left") {
      if (currentTopElementIndex === 0) {
        setCurrentTopElementIndex(length - 1);
      } else {
        setCurrentTopElementIndex(currentTopElementIndex - 1);
      }
    } else {
      if (currentTopElementIndex === length - 1) {
        setCurrentTopElementIndex(0);
      } else {
        setCurrentTopElementIndex(currentTopElementIndex + 1);
      }
    }
    setTelonOpen(false);
  };

  useEffect(() => {
    let imagesLoaded = 0;
    allImages.forEach((image) => {
      const img = new Image();
      img.src = image;

      const onLoad = () => {
        imagesLoaded++;
        if (imagesLoaded === allImagesLength) {
          setLoading(false);
        }
      };

      img.addEventListener("load", onLoad);
      img.addEventListener("error", onLoad);
    });
  }, []);

  return (
    <MainContext.Provider
      value={{
        currentTopElementIndex,
        setCurrentTopElementIndex,
        telonOpen,
        setTelonOpen,
        changeElement,
        loading,
        setLoading,
      }}
    >
      {children}
    </MainContext.Provider>
  );
};

export default MainContext;
