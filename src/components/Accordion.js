import React, { Fragment, useState } from "react";

const Accordion = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null);
  const onTitleClick = (index) => {
    setActiveIndex(index);
  };
  const renderedItems = items.map((x, i) => {
    const active = activeIndex === i ? "active" : "";
    return (
      <Fragment key={x.title}>
        <div className={`title ${active}`} onClick={() => onTitleClick(i)}>
          <i className="dropdown icon"></i>
          {x.title}
        </div>
        <div className={`content ${active}`}>
          <p>{x.content}</p>
        </div>
      </Fragment>
    );
  });
  return <div className="ui styled accordion">{renderedItems}</div>;
};

export default Accordion;
