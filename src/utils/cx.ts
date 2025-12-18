import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

const cx = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};

export default cx;
