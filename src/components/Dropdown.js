import React, { useEffect, useState } from "react";

const Dropdown = ({ options, selected, onSelectedChange, header }) => {
  const [open, setOpen] = useState(false);
  useEffect(() => {}, []);
  document.body.addEventListener("click", (e) => {
    if (e.target.classList.value.includes("ui selection dropdown")) {
    } else {
      setOpen(false);
    }
  });
  const renderedOptions = options.map((x, i) => {
    if (x.value === selected.value) return null;
    return (
      <div className="item" key={x.value} onClick={() => onSelectedChange(x)}>
        {x.label}
      </div>
    );
  });

  return (
    <div className="ui form">
      <div className="field">
        <label className="label">{header}</label>
        <div
          onClick={() => setOpen(!open)}
          className={`ui selection dropdown ${open ? "visible active" : ""}`}
        >
          <i className="dropdown icon"></i>
          <div className="text">{selected.label}</div>
          <div className={`menu ${open ? "visible transition" : ""}`}>
            {renderedOptions}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
