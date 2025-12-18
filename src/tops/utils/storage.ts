import { STORAGE_KEYNAME } from "@/config/constants";
import type { StorageModel } from "@/models/storage";

const storage = (() => {
  const get = (): StorageModel | null => {
    const value = localStorage.getItem(STORAGE_KEYNAME);
    return value ? JSON.parse(value) : null;
  };

  const update = (data: StorageModel) => {
    const storedData = get() ?? {};

    const value = JSON.stringify({
      ...storedData,
      ...data,
    });
    localStorage.setItem(STORAGE_KEYNAME, value);
  };

  const clear = () => {
    localStorage.removeItem(STORAGE_KEYNAME);
  };

  return {
    get,
    update,
    clear,
  };
})();

export default storage;
