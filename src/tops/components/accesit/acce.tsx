import type { AccesitElement } from "@/models/data";

const Acce = ({ item }: { item: AccesitElement }) => {
  const { title, img } = item;

  return (
    <div className="w-1/3 p-5">
      <div className="w-full aspect-square ">
        <img src={img} alt="" className="shadow-[0_4px_15px_#000000]" />
        <h5 className="text-center font-bold pt-1 text-shadow-[0_4px_15px_#000000]">
          {title}
        </h5>
      </div>
    </div>
  );
};

export default Acce;
