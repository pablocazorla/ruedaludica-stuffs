const DEFAULT_STORAGE_KEYNAME = "ruedaludica-stuffs";

const createStorage = (STORAGE_KEYNAME: string = DEFAULT_STORAGE_KEYNAME) => {
  const get = () => {
    const value = localStorage.getItem(STORAGE_KEYNAME);
    return value ? JSON.parse(value) : null;
  };

  const set = (data: any) => {
    const value = JSON.stringify(data);
    localStorage.setItem(STORAGE_KEYNAME, value);
  };

  const update = (data: any) => {
    const storedData = get() ?? {};

    set({
      ...storedData,
      ...data,
    });
  };

  const clear = () => {
    localStorage.removeItem(STORAGE_KEYNAME);
  };

  return {
    get,
    set,
    update,
    clear,
  };
};

export default createStorage;
