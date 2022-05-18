import React, { useState } from "react";
import Convert from "./Convert";
import Dropdown from "./Dropdown";

const options = [
  {
    label: "English",
    value: "en",
  },
  {
    label: "German",
    value: "de",
  },
  {
    label: "Italian",
    value: "it",
  },
  {
    label: "Georgian",
    value: "ka",
  },
  {
    label: "Russian",
    value: "ru",
  },

  {
    label: "Chinese",
    value: "zh-TW",
  },
  {
    label: "Turkish",
    value: "tr",
  },
  {
    label: "Portugese (Portugal)",
    value: "pt-PT",
  },
  {
    label: "Japanese",
    value: "ja",
  },
  {
    label: "Arabic",
    value: "ar",
  },
];

const Translate = () => {
  const [active, setActive] = useState(options[0]);
  const [text, setText] = useState("");
  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>Enter Text</label>
          <input value={text} onChange={(e) => setText(e.target.value)} />
        </div>
      </div>
      <Dropdown
        options={options}
        selected={active}
        header={"select language"}
        onSelectedChange={setActive}
      />
      <hr />
      <h3 className="ui header">Output</h3>
      <Convert language={active} text={text} />
    </div>
  );
};

export default Translate;
