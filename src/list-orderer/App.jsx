import { useState, useEffect } from "react";
import { List, arrayMove } from "react-movable";
import cx from "@/utils/cx";
import createStorage from "@/utils/storage";

const storage = createStorage("list-orderer-store");

const Item = ({ children, index, ...rest }) => {
  return (
    <li className="py-2 list-none cursor-grab" {...rest}>
      <div
        className={cx(
          "font-bold p-4 text-xl rounded-lg flex items-center gap-2",
          {
            "bg-green-600": typeof index === "number" && index <= 9,
            "bg-orange-600": typeof index === "number" && index > 9,
            "bg-gray-500": typeof index !== "number",
          }
        )}
      >
        <div className="w-8 text-right">
          {typeof index === "number" ? `${index + 1}.` : "_."}
        </div>
        <div className="">{children}</div>
      </div>
    </li>
  );
};

function ListOrderer() {
  const [items, setItems] = useState([]);

  const [textValue, setTextValue] = useState("");

  const onChangeText = (text) => {
    const lines = text
      .split("\n")
      .map((line) => line.trim())
      .filter((line) => line !== "");
    const items = lines.map((line) => line.trim());
    setItems(items);

    setTextValue(text);
  };

  const onChangeIndex = ({ oldIndex, newIndex }) => {
    const newItems = arrayMove(items, oldIndex, newIndex);
    const text = newItems.join("\n");
    setItems(newItems);
    setTextValue(text);
  };

  const onCopy = () => {
    navigator.clipboard.writeText(textValue);
  };

  useEffect(() => {
    const store = storage.get();
    if (store) {
      onChangeText(store.text);
    }
  }, []);

  useEffect(() => {
    storage.set({ text: textValue });
  }, [textValue]);

  return (
    <div className="max-w-5xl mx-auto border-l border-r border-gray-700">
      <div className="grid grid-cols-2 grid-rows-1 h-dvh overflow-hidden">
        <div className="grid grid-cols-1 grid-rows-[auto_64px]">
          <textarea
            className="bg-gray-900 w-full resize-none p-6 overflow-x-hidden overflow-y-scroll"
            value={textValue}
            onChange={(e) => onChangeText(e.target.value)}
            placeholder="Enter your list items here..."
          ></textarea>
          <div className="h-16 flex items-center justify-center bg-gray-800">
            <button
              className="bg-green-700 px-4 py-2 rounded-lg hover:bg-green-600 transition-colors active:bg-green-800 cursor-pointer"
              onClick={onCopy}
            >
              Copy to clipboard
            </button>
          </div>
        </div>
        <div className="overflow-x-hidden overflow-y-scroll p-6 bg-gray-700">
          <List
            values={items}
            onChange={onChangeIndex}
            renderList={({ children, props }) => <ul {...props}>{children}</ul>}
            renderItem={(p) => {
              const { key, ...rest } = p.props;
              return (
                <Item key={key} index={key} {...rest}>
                  {p.value}
                </Item>
              );
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default ListOrderer;
